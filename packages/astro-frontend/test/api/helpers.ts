import { sql } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type { PgTable } from "drizzle-orm/pg-core";
import { categoriesMap } from "../../src/server/config/categories";

export const clearDb =
    async (
        db: NodePgDatabase
    ) => {
        await db.execute(
            sql`TRUNCATE TABLE 
            publicmodel_catalog.eservice, 
            publicmodel_catalog.eservice_descriptor,
            publicmodel_tenant.tenant
            RESTART IDENTITY CASCADE`
        );
    }

export const generateTenant =
    async (
        ctx: { db: NodePgDatabase, tables: { tenant: PgTable } },
        data: { name: string }
    ) => {
        const newTenant = {
            id: crypto.randomUUID(),
            metadataVersion: 1,
            externalIdValue: crypto.randomUUID(),
            externalIdOrigin: crypto.randomUUID(),
            createdAt: new Date(),
            name: data.name
        }
        await ctx.db.insert(ctx.tables.tenant as PgTable).values(newTenant);
        return newTenant;
    }

export const generateEservice =
    async (
        ctx: { db: NodePgDatabase, tables: { eservice: PgTable } },
        data: { name: string, description: string, producerId: string }
    ) => {
        const newEservice = {
            id: crypto.randomUUID(),
            metadataVersion: 1,
            producerId: data.producerId,
            name: data.name,
            description: data.description,
            technology: "Rest",
            createdAt: new Date(),
            mode: "Receive",
            isSignalHubEnabled: false,
            isConsumerDelegable: true,
            isClientAccessDelegable: false,
            templateId: crypto.randomUUID()
        }
        await ctx.db.insert(ctx.tables.eservice as PgTable).values(newEservice);

        return newEservice;
    }

export const generateDescriptor =
    async (
        ctx: { db: NodePgDatabase, tables: { eservice_descriptor: PgTable } },
        data: { eserviceId: string, state: string, version?: string }
    ) => {
        const newDescriptor = {
            id: crypto.randomUUID(),
            eserviceId: data.eserviceId,
            metadataVersion: 1,
            version: data.version ?? "1",
            state: data.state,
            audience: ["audience"],
            voucherLifespan: 86400,
            dailyCallsPerConsumer: 1000,
            dailyCallsTotal: 100000,
            createdAt: new Date()
        }
        await ctx.db.insert(ctx.tables.eservice_descriptor as PgTable).values(newDescriptor);

        return newDescriptor;
    }

export const generateAttribute =
    async (
        ctx: { db: NodePgDatabase, tables: { attribute: PgTable } },
        data: { code: string, kind: string, description: string }
    ) => {
        const newAttribute = {
            id: crypto.randomUUID(),
            metadataVersion: 1,
            code: data.code,
            kind: data.kind,
            description: "description",
            name: "name",
            creation_time: new Date()
        }
        await ctx.db.insert(ctx.tables.attribute as PgTable).values(newAttribute);

        return newAttribute;
    }

export const generateCategoryAttributes =
    async (
        ctx: { db: NodePgDatabase, tables: { attribute: PgTable } },
        kind: string = "Certified"
    ) => {
        const categories = [...new Set(Object.values(categoriesMap).flat())];

        const attributes = [];
        for (const cat of categories) {
            attributes.push(await generateAttribute(ctx, { code: cat, kind: kind, description: cat }));
        }

        return attributes;
    }

export const generateEserviceDescriptorAttribute =
    async (
        ctx: { db: NodePgDatabase, tables: { eservice_descriptor_attribute: PgTable } },
        data: { attribute_id: string, descriptor_id: string, eservice_id: string, group_id: number, kind: string }
    ) => {
        const newEDA = {
            attributeId: data.attribute_id,
            eserviceId: data.eservice_id,
            metadataVersion: 1,
            descriptorId: data.descriptor_id,
            explicitAttributeVerification: false,
            kind: data.kind,
            groupId: data.group_id,
        }

        await ctx.db.insert(ctx.tables.eservice_descriptor_attribute as PgTable).values(newEDA);

        return newEDA;
    }