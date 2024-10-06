import { DOMAIN } from "@/utils/constants";
import { SingleArticleId } from "@/utils/types";
import { Article, Comment } from "@prisma/client"
import { headers } from "next/headers";

// Fetch Articles Based On Page Number
export async function getArticles (pageNumber: string | undefined) : Promise<Article[]> {
    const response = await fetch(`${DOMAIN}/articles?pageNumber=${pageNumber}`, {
      cache: "no-store"
    });

  if(!response.ok){
    throw new Error('Failed to fetch articles')
  }

  const articles = response.json()
  return articles
}

// Get Articles Count
export async function getArticlesCount () : Promise<number> {
  const response = await fetch(`${DOMAIN}/articles/count`, {
    cache: "no-store"
  });

  if(!response.ok){
    throw new Error('Failed to get articles count')
  }

  const count = await response.json() as number 
  return count  
}

// Fetch Articles Based On Search Text
export async function getArticlesBySearchText (searchText: string) : Promise<Article[]> {
  const response = await fetch(`${DOMAIN}/articles/search?searchText=${searchText}`, {
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

// Get All Comments
export async function getAllComments (token: string) : Promise<Comment[]> {
  const response = await fetch(`${DOMAIN}/comments`, {
    headers: {
      Cookie: `jwtToken=${token}`
    }
  });

  if(!response.ok){
    throw new Error('Failed to fetch articles')
  }

  return response.json()
}