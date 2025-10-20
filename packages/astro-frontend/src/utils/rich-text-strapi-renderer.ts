type StrapiHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type StrapiListFormat = 'ordered' | 'unordered'

type StrapiTextNode = {
  type: 'text'
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

type StrapiLinkNode = {
  type: 'link'
  url: string
  children?: StrapiNode[]
}

type StrapiParagraphNode = {
  type: 'paragraph'
  children?: StrapiNode[]
}

type StrapiHeadingNode = {
  type: 'heading'
  level?: StrapiHeadingLevel
  children?: StrapiNode[]
}

type StrapiListItemNode = {
  type: 'listItem'
  children?: StrapiNode[]
}

type StrapiListNode = {
  type: 'list'
  format?: StrapiListFormat
  children?: StrapiListItemNode[]
}

export type StrapiNode =
  | StrapiParagraphNode
  | StrapiHeadingNode
  | StrapiListNode
  | StrapiListItemNode
  | StrapiLinkNode
  | StrapiTextNode

function wrapTextWithSemantics(node: StrapiTextNode): string {
  let wrappedText = node.text

  if (node.bold) {
    wrappedText = `<strong>${wrappedText}</strong>`
  }
  if (node.italic) {
    wrappedText = `<em>${wrappedText}</em>`
  }
  if (node.underline) {
    wrappedText = `<u>${wrappedText}</u>`
  }

  return wrappedText
}

export function renderRichTextStrapiNodes(nodes: StrapiNode[]): string {
  if (!nodes || nodes.length === 0) return ''

  return nodes.reduce((acc, node) => {
    switch (node.type) {
      case 'paragraph': {
        const innerHtml = renderRichTextStrapiNodes(node.children || [])

        return `${acc}<p>${innerHtml}</p>`
      }

      case 'link': {
        const innerHtml = renderRichTextStrapiNodes(node.children || [])

        return `${acc}<a href="${node.url}">${innerHtml}</a>`
      }

      case 'text': {
        const formattedText = wrapTextWithSemantics(node)
        return `${acc}${formattedText}`
      }
      default:
        return acc
    }
  }, '')
}
