import z from "zod";
import { Seo } from "../seo.js";

export const SingleLinkSchema = z.object({
  LinkLabel: z.string(),
  LinkURL: z.string(),
});

export const LinksSchema = z.object({
  Title: z.string(),
  SingleLink: z.array(SingleLinkSchema),
});

export const CatalogSchema = z.object({
  Title: z.string(),
  SubTitle: z.string(),
  Seo: Seo,
  Links: LinksSchema,
});

export type SingleLink = z.infer<typeof SingleLinkSchema>;
export type Links = z.infer<typeof LinksSchema>;
export type Catalog = z.infer<typeof CatalogSchema>;
