import { z } from "zod";
import { AttributeId } from "../brandedIds.js";

export const Attribute = z.object({
  id: AttributeId,
  metadata_version: z.number().int(),
  code: z.string(),
  kind: z.string(),
  description: z.string(),
  origin: z.string(),
  name: z.string(),
  creation_time: z.coerce.date(),
});
export type Attribute = z.infer<typeof Attribute>;
