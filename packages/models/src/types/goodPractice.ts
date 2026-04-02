import { z } from "zod";
import { StrapiImageSchema, StrapiNodeSchema } from "./strapi.js";

export const BuonaPraticaDescriptionComponent = z.object({
  __component: z.literal("buona-pratica.description"),
  id: z.number(),
  Text: z.array(StrapiNodeSchema),
});

export const BuonaPraticaImageComponent = z.object({
  __component: z.literal("buona-pratica.image"),
  id: z.number(),
  caption: z.string(),
  image: StrapiImageSchema,
});

export const BuonaPraticaTitleComponent = z.object({
  __component: z.literal("buona-pratica.title"),
  id: z.number(),
  Text: z.string(),
});

export const BuonaPraticaEsempioConcretoComponent = z.object({
  __component: z.literal("buona-pratica.esempio-concreto"),
  id: z.number(),
  example: z.array(StrapiNodeSchema),
});

export const BuonaPraticaNotaTecnicaComponent = z.object({
  __component: z.literal("buona-pratica.nota-tecnica"),
  id: z.number(),
  example: z.array(StrapiNodeSchema),
});

export const StrapiBodyComponent = z.union([
  BuonaPraticaDescriptionComponent,
  BuonaPraticaImageComponent,
  BuonaPraticaTitleComponent,
  BuonaPraticaEsempioConcretoComponent,
  BuonaPraticaNotaTecnicaComponent,
]);
