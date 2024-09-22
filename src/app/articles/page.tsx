'use client'
import { Article } from '@/utils/types';
import React, { useEffect, useState } from 'react'
import ArticleItem from './ArticleItem';
import SearchInput from '@/components/articles/SearchInput';
import Pagination from '@/components/articles/Pagination';

const Articles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!response.ok){
    throw new Error('Failed to fetch articles')
  }

  const articles: Article[] = await response.json()
  return (
    <section className="container m-auto px-5">
      <SearchInput/>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination/>
    </section>
  )
}

export default Articles