import { DOMAIN } from "@/utils/constants";
import { SingleArticleId } from "@/utils/types";
import { Article } from "@prisma/client"

// Fetch Articles Based On Page Number
export async function getArticles (pageNumber: string | undefined) : Promise<Article[]> {
    const response = await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);

  if(!response.ok){
    throw new Error('Failed to fetch articles')
  }

  const articles = response.json()
  return articles
}

// Get Articles Count
export async function getArticlesCount () : Promise<number> {
  const response = await fetch(`http://localhost:3000/api/articles/count`);

  if(!response.ok){
    throw new Error('Failed to get articles count')
  }

  const count = await response.json() as number 
  return count  
}

// Fetch Articles Based On Search Text
export async function getArticlesBySearchText (searchText: string) : Promise<Article[]> {
  const response = await fetch(`http://localhost:3000/api/articles/search?searchText=${searchText}`, {
    cache: "no-store"
  });

  if(!response.ok){
    throw new Error('Failed to fetch articles')
  }

  const articles = response.json()
  return articles
}

// Get Single Article
export async function getSingleArticle(article: string): Promise<SingleArticleId> {
  const response = await fetch(`${DOMAIN}/articles/${article}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch l'article: ${article}`);
    }

    return response.json();
}