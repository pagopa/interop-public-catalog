import crypto from "crypto";
import { z } from "zod";

export const EServiceId = z.string().uuid().brand("EServiceId");
export type EServiceId = z.infer<typeof EServiceId>;

export const EServiceDescriptorId = z
  .string()
  .uuid()
  .brand("EServiceDescriptorId");
export type EServiceDescriptorId = z.infer<typeof EServiceDescriptorId>;

export const DescriptorId = z.string().uuid().brand("DescriptorId");
export type DescriptorId = z.infer<typeof DescriptorId>;

export const AttributeId = z.string().uuid().brand("AttributeId");
export type AttributeId = z.infer<typeof AttributeId>;

export const TenantId = z.string().uuid().brand("TenantId");
export type TenantId = z.infer<typeof TenantId>;

export const EServiceTemplateId = z.string().uuid().brand("EServiceTemplateId");
export type EServiceTemplateId = z.infer<typeof EServiceTemplateId>;

export const EServiceTemplateVersionId = z
  .string()
  .uuid()
  .brand("EServiceTemplateVersionId");
export type EServiceTemplateVersionId = z.infer<
  typeof EServiceTemplateVersionId
>;

type IDS =
  | EServiceId
  | EServiceDescriptorId
  | DescriptorId
  | AttributeId
  | TenantId
  | EServiceTemplateId
  | EServiceTemplateVersionId;

// Generate a new ID
export function generateId<T extends IDS>(): T {
  return crypto.randomUUID() as T;
}

// Unsafe cast from string to branded ID
export function unsafeBrandId<T extends IDS>(id: string): T {
  return id as T;
}
