import z from "zod";
import { AttributeId } from "../brandedIds.js";

export const attributeKind = {
  certified: "Certified",
  verified: "Verified",
  declared: "Declared",
} as const;
export const AttributeKind = z.enum([
  Object.values(attributeKind)[0],
  ...Object.values(attributeKind).slice(1),
]);
export type AttributeKind = z.infer<typeof AttributeKind>;

export const Attribute = z.object({
  id: AttributeId,
  code: z.string().nullable().optional(),
  kind: AttributeKind,
  description: z.string(),
  origin: z.string().nullable().optional(),
  name: z.string(),
  creation_time: z.coerce.date(),
});

export type Attribute = z.infer<typeof Attribute>;
