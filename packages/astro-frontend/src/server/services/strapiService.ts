import type { StrapiArticle, StrapiEntityList } from '../types/stripe.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export function strapiServiceBuilder(url: string, port: number, token: string) {
  return {
    async getArticles(): Promise<StrapiEntityList<StrapiArticle>> {
      const response = await fetch(`${url}:${port}/api/articles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.json()
    },
  }
}
