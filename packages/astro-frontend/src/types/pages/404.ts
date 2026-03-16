import { StrapiImageSchema } from "pagopa-interop-public-models";
import z from "zod";
import { RouteKeySchema } from "../../config/routes";

export const Error404Schema = z.object({
  Title: z.string(),
  Description: z.string(),
  Illustration: StrapiImageSchema,
  LinkLabel: z.string(),
  LinkURL: RouteKeySchema,
});

export type Error404 = z.infer<typeof Error404Schema>;
