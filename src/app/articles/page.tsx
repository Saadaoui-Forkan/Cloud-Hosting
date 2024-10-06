import { Article } from '@prisma/client';
import React from 'react'
import ArticleItem from './ArticleItem';
import SearchInput from '@/components/articles/SearchInput';
import Pagination from '@/components/articles/Pagination';
import { getArticles } from '@/apiCall/articlesApiCall';
import { ARTICLES_PER_PAGE } from '@/utils/constants';
import prisma from '@/utils/db';

interface ArticlesPageProps {
  searchParams: { pageNumber: string }
}

const Articles = async ({ searchParams }: ArticlesPageProps) => {
  const { pageNumber } = searchParams
  const articles: Article[] = await getArticles(pageNumber)

  // const count: number = await getArticlesCount() ===> does not much in production mode
  const count: number = await prisma.article.count()
  const pages = Math.ceil(count / ARTICLES_PER_PAGE)
  return (
    <section className="container m-auto px-5">
      <SearchInput/>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination pages={pages} route='/articles' pageNumber={parseInt(pageNumber)}/>
    </section>
  )
}

export default Articles