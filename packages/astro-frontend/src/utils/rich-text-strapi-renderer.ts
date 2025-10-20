type StrapiNode = {
  type: 'paragraph' | 'heading' | 'list' | 'listItem' | 'link' | 'text'
  text?: string
  underline?: boolean
  bold?: boolean
  italic?: boolean
  url?: string
  children?: StrapiNode[]
}

export function renderRichTextStrapiNodes(content: StrapiNode[]): string {
  return '<p>TODO</P>'
}
