import z from "zod";
import { SeoSchema } from "../seo";
import { MacroCategorySchema } from "../collectionTypes";

export const EsempiPraticiCatalogSchema = z.object({
  Title: z.string(),
  Subtitle: z.string(),
  Seo: SeoSchema,
  Macrocategories: z.array(MacroCategorySchema),
});

export type EsempiPraticiCatalog = z.infer<typeof EsempiPraticiCatalogSchema>;
