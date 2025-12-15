
import { describe, it, expect, beforeEach, beforeAll } from "vitest";

import { GenericContainer } from "testcontainers";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import { buildAttributeTables, buildCatalogTables, buildTenantTables } from "pagopa-interop-public-models";

import { publicModelServiceBuilder } from "../../src/server/services/publicModelServiceBuilder";
import { clearDb, generateCategoryAttributes, generateDescriptor, generateEservice, generateEserviceDescriptorAttribute, generateTenant } from "./helpers";

const TEST_POSTGRES_DB_PORT = 5432;
const TEST_POSTGRES_DB_IMAGE = "postgres:14";

let publicModelService: ReturnType<typeof publicModelServiceBuilder>;
const catalogTables = buildCatalogTables("publicmodel_catalog");
const tenantTables = buildTenantTables("publicmodel_tenant");
const attributeTables = buildAttributeTables("publicmodel_attribute");

let db: NodePgDatabase;
beforeAll(async () => {
  const container = await new GenericContainer(TEST_POSTGRES_DB_IMAGE)
    .withEnvironment({ "POSTGRES_PASSWORD": "pass" })
    .withExposedPorts(TEST_POSTGRES_DB_PORT)
    .withCopyDirectoriesToContainer([
      {
        source: "../../docker/publicmodel-db",
        target: "/docker-entrypoint-initdb.d",
      },
    ])
    .start();

  const client = new Client({
    host: container.getHost(),
    port: container.getMappedPort(TEST_POSTGRES_DB_PORT),
    user: "postgres",
    password: "pass",
    database: "postgres",
  });

  await client.connect();

  db = drizzle(client);

  publicModelService = publicModelServiceBuilder(db as unknown as ReturnType<typeof drizzle>,
    {
      catalogSchema: "publicmodel_catalog",
      attributeSchema: "publicmodel_attribute",
      tenantSchema: "publicmodel_tenant"
    });
});

beforeEach(async () => {
  await clearDb(db);
});

describe("Get EService by id", () => {
  it("returns EService with activeDescriptor's attributes", async () => {
    const attributes = await generateCategoryAttributes({ db, tables: attributeTables.tables });
    const attributeToMatch = attributes.find((a) => a.code == "L6"); //Comuni

    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const eservice = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "com",
      description: "com"
    });

    const descriptor = await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: eservice.id, state: "Published" }
    );

    await generateEserviceDescriptorAttribute(
      { db, tables: { ...catalogTables.tables, ...attributeTables.tables } },
      {
        eservice_id: eservice.id,
        descriptor_id: descriptor.id,
        group_id: 1,
        kind: "Certified",
        attribute_id: attributeToMatch!.id
      }
    )

    const result = await publicModelService.getEService(eservice.id);


    expect(result).toHaveProperty("active_descriptor");
    expect(result.active_descriptor).toHaveProperty("attributes");
    expect(result.active_descriptor.attributes).toHaveProperty("certified");
    expect(result.active_descriptor.attributes.certified[0][0].id).toBe(attributeToMatch!.id);
  })
})

describe("Catalog search", () => {
  it("returns only eservices w/ 'Published' or 'Suspended' active descriptors", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const eservicesToInsert = [
      {
        producerId: tenantMilanId,
        name: "accesso dati sensibili",
        description: "accesso dati sensibili per consultazione e sincronizzazione record utente"
      },
      {
        producerId: tenantMilanId,
        name: "consultazione profili",
        description: "consultazione profili utente per suggerimenti e personalizzazione"
      },
      {
        producerId: tenantMilanId,
        name: "accesso eventi",
        description: "accesso eventi di sistema e notifiche per audit e monitoraggio"
      }
    ];

    const eservices = await Promise.all(eservicesToInsert.map((e) =>
      generateEservice({ db, tables: catalogTables.tables }, e)
    ))

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eservices[0].id, state: "Published" })
    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eservices[1].id, state: "Suspended" })

    // this eservice must not show up in results
    const draftedEserviceId = eservices[2].id
    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: draftedEserviceId, state: "Draft" })


    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0
    });
    expect(result.results).toHaveLength(2);
    expect(result.totalCount).toBe(2);
    expect(result.results.map((e) => e.id)).not.toContain(draftedEserviceId);
  })

  it("returns only matches on text query", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const eservicesToInsert = [
      {
        producerId: tenantMilanId,
        name: "accesso dati sensibili",
        description: "accesso dati sensibili per consultazione e sincronizzazione record utente"
      },
      {
        producerId: tenantMilanId,
        name: "consultazione profili",
        description: "consultazione profili utente per suggerimenti e personalizzazione"
      },
      {
        producerId: tenantMilanId,
        name: "accesso eventi",
        description: "accesso eventi di sistema e notifiche per audit e monitoraggio"
      }
    ];

    const eservices = await Promise.all(eservicesToInsert.map((e) =>
      generateEservice({ db, tables: catalogTables.tables }, e)
    ))

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eservices[0].id, state: "Published" })

    const elementToMatchId = eservices[1].id;
    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: elementToMatchId, state: "Suspended" })

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eservices[2].id, state: "Published" })

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      q: "profili"
    });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(elementToMatchId);
  })

  it("matches on trigrams with text query", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const eserviceToMatch = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "consultazione profili",
      description: "consultazione profili utente per suggerimenti e personalizzazione"
    })

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eserviceToMatch.id, state: "Published" })

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      q: "profil"
    });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(eserviceToMatch.id);
  })

  it("ignores dots on text query", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune"
      }
    );

    const eserviceToMatch = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "a.n.a.c.",
      description: "a.n.a.c."
    })

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eserviceToMatch.id, state: "Published" })

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      q: "ana.c"
    });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(eserviceToMatch.id);
  })

  it("considers special characters as spaces", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune"
      }
    );

    const eserviceToMatch = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "parola+composta",
      description: "parola+composta"
    })

    await generateDescriptor({ db, tables: catalogTables.tables }, { eserviceId: eserviceToMatch.id, state: "Published" })

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      q: "parola*composta"
    });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(eserviceToMatch.id);
  })

  it("matches based on macrocategory", async () => {
    const attributes = await generateCategoryAttributes({ db, tables: attributeTables.tables });
    const attributeToMatch = attributes.find((a) => a.code == "L6"); //Comuni

    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune"
      }
    );

    const eservice = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "com",
      description: "com"
    });

    const throwaway = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "throwaway",
      description: "throwaway"
    });

    const descriptor = await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: eservice.id, state: "Published" }
    );
    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: throwaway.id, state: "Published" }
    );

    await generateEserviceDescriptorAttribute(
      { db, tables: { ...catalogTables.tables, ...attributeTables.tables } },
      {
        eservice_id: eservice.id,
        descriptor_id: descriptor.id,
        group_id: 1,
        kind: "Certified",
        attribute_id: attributeToMatch!.id
      }
    )

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      categories: ["Comuni"]
    });

    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(eservice.id); //throwaway should not be present
  })

  it("matches on producerId", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune"
      }
    );

    const { id: throawayTenantId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "throwaway"
      }
    );

    const eservice = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "comune",
      description: "comune"
    });

    const throwaway = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: throawayTenantId,
      name: "throwaway",
      description: "throwaway"
    });

    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: eservice.id, state: "Published" }
    );
    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: throwaway.id, state: "Published" }
    );

    const result = await publicModelService.searchCatalog({
      limit: 10,
      offset: 0,
      producerIds: [tenantMilanId]
    });

    expect(result.results).toHaveLength(1);
    expect(result.results[0].id).toBe(eservice.id); //throwaway should not be present
  })
});

describe("Search Tenants", () => {
  it("returns only tenants with at least one published EService", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const { id: tenantWNoPublished } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Tenant non pubblicato"
      }
    );

    await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune senza EService"
      }
    );

    const e1 = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "com",
      description: "com"
    });

    const draftedEservice = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantWNoPublished,
      name: "com",
      description: "com"
    });

    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: e1.id, state: "Published" }
    );
    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: draftedEservice.id, state: "Draft" }
    );

    const result = await publicModelService.searchTenants({
      limit: 10,
      offset: 0
    });

    expect(result.results).toHaveLength(1);
    expect(result.totalCount).toBe(1);
    expect(result.results[0].producer_id).toBe(tenantMilanId)
    expect(result.results.map((e) => e.producer_id)).not.toContain(tenantWNoPublished);
  })

  it("returns only relevant matches on text search", async () => {
    const { id: tenantMilanId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune di Milano"
      }
    );

    const { id: throwawayTenantId } = await generateTenant(
      { db, tables: tenantTables.tables },
      {
        name: "Comune senza EService"
      }
    );

    const e1 = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: tenantMilanId,
      name: "com",
      description: "com"
    });

    const e2 = await generateEservice({ db, tables: catalogTables.tables }, {
      producerId: throwawayTenantId,
      name: "com",
      description: "com"
    });

    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: e1.id, state: "Published" }
    );
    await generateDescriptor(
      { db, tables: catalogTables.tables },
      { eserviceId: e2.id, state: "Draft" }
    );

    const result = await publicModelService.searchTenants({
      limit: 10,
      offset: 0,
      q: "mil"
    });

    expect(result.results).toHaveLength(1);
    expect(result.totalCount).toBe(1);
    expect(result.results[0].producer_id).toBe(tenantMilanId)
  })
});