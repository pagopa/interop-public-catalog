import { z } from "zod";

export const StrapiArticleSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
});

export const StrapiHeadingLevelSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);

export const StrapiListFormatSchema = z.enum(["ordered", "unordered"]);

export const StrapiTextNodeSchema = z.object({
  type: z.literal("text"),
  text: z.string(),
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  underline: z.boolean().optional(),
});

export type StrapiHeadingLevel = z.infer<typeof StrapiHeadingLevelSchema>;
export type StrapiListFormat = z.infer<typeof StrapiListFormatSchema>;
export type StrapiTextNode = z.infer<typeof StrapiTextNodeSchema>;

export type StrapiNode =
  | StrapiParagraphNode
  | StrapiHeadingNode
  | StrapiListNode
  | StrapiListItemNode
  | StrapiLinkNode
  | StrapiTextNode;

export type StrapiLinkNode = {
  type: "link";
  url: string;
  children?: StrapiNode[];
};

export type StrapiParagraphNode = {
  type: "paragraph";
  children?: StrapiNode[];
};

export type StrapiHeadingNode = {
  type: "heading";
  level?: StrapiHeadingLevel;
  children?: StrapiNode[];
};

export type StrapiListItemNode = {
  type: "list-item";
  children?: StrapiNode[];
};

export type StrapiListNode = {
  type: "list";
  format?: StrapiListFormat;
  children?: StrapiListItemNode[];
};

export const StrapiLinkNodeSchema: z.ZodType<StrapiLinkNode> = z.lazy(() =>
  z.object({
    type: z.literal("link"),
    url: z.string().url(),
    children: z.array(StrapiNodeSchema).optional(),
  })
);

export const StrapiParagraphNodeSchema: z.ZodType<StrapiParagraphNode> = z.lazy(
  () =>
    z.object({
      type: z.literal("paragraph"),
      children: z.array(StrapiNodeSchema).optional(),
    })
);

export const StrapiHeadingNodeSchema: z.ZodType<StrapiHeadingNode> = z.lazy(
  () =>
    z.object({
      type: z.literal("heading"),
      level: StrapiHeadingLevelSchema.optional(),
      children: z.array(StrapiNodeSchema).optional(),
    })
);

export const StrapiListItemNodeSchema: z.ZodType<StrapiListItemNode> = z.lazy(
  () =>
    z.object({
      type: z.literal("list-item"),
      children: z.array(StrapiNodeSchema).optional(),
    })
);

export const StrapiListNodeSchema: z.ZodType<StrapiListNode> = z.lazy(() =>
  z.object({
    type: z.literal("list"),
    format: StrapiListFormatSchema.optional(),
    children: z.array(StrapiListItemNodeSchema).optional(),
  })
);

export const StrapiNodeSchema: z.ZodType<StrapiNode> = z.lazy(() =>
  z.union([
    StrapiParagraphNodeSchema,
    StrapiHeadingNodeSchema,
    StrapiListNodeSchema,
    StrapiListItemNodeSchema,
    StrapiLinkNodeSchema,
    StrapiTextNodeSchema,
  ])
);

export const StrapiImageFormatSchema = z.object({
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  path: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  sizeInBytes: z.number(),
  url: z.string().url(),
});

export const StrapiImageSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  width: z.number(),
  height: z.number(),
  formats: z
    .object({
      thumbnail: StrapiImageFormatSchema.optional(),
      small: StrapiImageFormatSchema.optional(),
      medium: StrapiImageFormatSchema.optional(),
    })
    .optional(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string().url(),
  previewUrl: z.string().nullable(),
  provider: z.string(),
  provider_metadata: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
});

export const StrapiEntitySchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
  });

export const StrapiListMetaSchema = z.object({
  pagination: z.object({
    page: z.number(),
    pageSize: z.number(),
    pageCount: z.number(),
    total: z.number(),
  }),
});

export const StrapiEntityListSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: z.array(schema),
    meta: StrapiListMetaSchema,
  });

export type StrapiEntity<T> = {
  data: T;
};

export type StrapiEntityList<T> = {
  data: T[];
  meta: z.infer<typeof StrapiListMetaSchema>;
};

export type StrapiArticle = z.infer<typeof StrapiArticleSchema>;
export type StrapiImageFormat = z.infer<typeof StrapiImageFormatSchema>;
export type StrapiImage = z.infer<typeof StrapiImageSchema>;
export type StrapiListMeta = z.infer<typeof StrapiListMetaSchema>;
