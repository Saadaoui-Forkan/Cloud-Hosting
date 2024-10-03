import { getArticlesBySearchText } from "@/apiCall/articlesApiCall";
import { Article } from "@prisma/client";
import ArticleItem from "../ArticleItem";
import Link from "next/link";

interface SearchArticlesProps {
  searchParams: {
    searchText: string;
  };
}

const Search = async ({
  searchParams: { searchText },
}: SearchArticlesProps) => {
  const articles: Article[] = await getArticlesBySearchText(searchText);
  console.log(articles);
  
  return (
    <section className="min-h-screen p-8 bg-gray-50">
      {articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            No search results found for the word: 
            <span className="text-blue-600"> {searchText}</span>
          </h1>
          <p className="text-gray-500 text-lg">Try searching with a different keyword.</p>
          <Link href="/articles?pageNumber=1" className="cursor-pointer bg-white text-blue-600 mt-4 py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300">
            Back to articles
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            The search results for the word: 
            <span className="text-blue-600"> {searchText}</span>
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-7">
            {articles.map((article) => (
              <ArticleItem article={article} key={article.id} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Search;
