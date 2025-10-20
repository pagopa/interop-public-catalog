import { match } from 'ts-pattern'
import type {
  StrapiHeadingNode,
  StrapiLinkNode,
  StrapiListItemNode,
  StrapiListNode,
  StrapiNode,
  StrapiParagraphNode,
  StrapiTextNode,
} from '../types/strapi.types'

export type { StrapiNode } from '../types/strapi.types'

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const escapeHtmlAttribute = (value: string): string => escapeHtml(value).replace(/"/g, '&quot;')

const wrapIf = (condition: boolean | undefined, tag: string, content: string): string =>
  condition ? `<${tag}>${content}</${tag}>` : content

const renderNodes = (nodes?: StrapiNode[]): string => nodes?.map(renderNode).join('') ?? ''

const renderTextNode = (node: StrapiTextNode): string => {
  const escaped = escapeHtml(node.text)
  const withBold = wrapIf(node.bold, 'strong', escaped)
  const withItalic = wrapIf(node.italic, 'em', withBold)
  return wrapIf(node.underline, 'u', withItalic)
}

const renderLinkNode = (node: StrapiLinkNode): string => {
  const href = escapeHtmlAttribute(node.url)
  const content = renderNodes(node.children)
  return `<a href="${href}" rel="noopener noreferrer">${content}</a>`
}

const renderHeadingNode = (node: StrapiHeadingNode): string => {
  const level = Math.min(Math.max(node.level ?? 2, 1), 6)
  const tag = `h${level}`
  return `<${tag}>${renderNodes(node.children)}</${tag}>`
}

const renderListNode = (node: StrapiListNode): string => {
  const tag = node.format === 'ordered' ? 'ol' : 'ul'
  const items = (node.children ?? []).map(renderNode).join('')
  return `<${tag}>${items}</${tag}>`
}

const renderNode = (node: StrapiNode): string =>
  match(node)
    .with({ type: 'text' }, renderTextNode)
    .with({ type: 'link' }, renderLinkNode)
    .with({ type: 'paragraph' }, (paragraph) => `<p>${renderNodes(paragraph.children)}</p>`)
    .with({ type: 'heading' }, renderHeadingNode)
    .with({ type: 'list' }, renderListNode)
    .with({ type: 'listItem' }, (item) => `<li>${renderNodes(item.children)}</li>`)
    .otherwise(() => {
      console.warn('Strapi rich text renderer: unexpected Node', node)
      return ''
    })

/**
 * Renders a Strapi Rich Text document into escaped HTML markup while preserving core semantics
 * such as headings, lists, emphasis and hyperlinks.
 *
 * @param content - The AST of Rich Text nodes returned by Strapi.
 * @returns The HTML representation ready to inject on the page.
 */
export function renderRichTextStrapiNodes(content: StrapiNode[] | undefined): string {
  return renderNodes(content)
}
