import { StrapiImageSchema } from "pagopa-interop-public-models";
import z from "zod";

export const Error500Schema = z.object({
  Title: z.string(),
  Description: z.string(),
  Illustration: StrapiImageSchema,
  LinkLabel: z.string(),
  LinkURL: z.url(),
});

export type Error500 = z.infer<typeof Error500Schema>;
