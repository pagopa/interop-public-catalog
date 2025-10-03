import { StrapiArticle, StrapiEntityList } from "../types/stripe.js";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export function strapiServiceBuilder(endpoint: string, token: string) {
  return {
    async getArticles(): Promise<StrapiEntityList<StrapiArticle>> {
      const response = await fetch(
        `${endpoint.endsWith('/') ? endpoint : endpoint + '/'}api/articles`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.json();
    },
  };
}
