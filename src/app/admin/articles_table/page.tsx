import { getArticles, getArticlesCount } from "@/apiCall/articlesApiCall";
import DeleteArticleBtn from "@/components/admin/DeleteArticleBtn";
import Pagination from "@/components/articles/Pagination";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import prisma from "@/utils/db";
import { verifyTokenClient } from "@/utils/verifyToken";
import { Article } from "@prisma/client";
import moment from "moment";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

interface AdminArticlesProps {
  searchParams: { pageNumber: string };
}

const AdminArticlesTable = async ({
  searchParams: { pageNumber },
}: AdminArticlesProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenClient(token);

  if (!token) redirect("/");
  if (payload?.isAdmin === false) redirect("/");

  const articles: Article[] = await getArticles(pageNumber);
  // const count: number = await getArticlesCount();
  const count: number = await prisma.article.count()
  const pages = Math.ceil(count / ARTICLES_PER_PAGE);

  return (
    <div className="container mx-auto p-[2px] md:p-6 max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Articles</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Created At
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="custom-scrollbar">
            {articles.map((article) => (
              <tr
                key={article.id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-4 text-gray-800">{article.title}</td>
                <td className="py-3 px-4 text-gray-600">
                  {moment(article.createdAt).format("DD-MM-YYYY")}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Link href={`/admin/articles_table/edit/${article.id}`}>
                      <span className="text-blue-600 hover:text-blue-800 transition duration-300">
                        <FaEdit size={18} />
                      </span>
                    </Link>
                    <DeleteArticleBtn articleId={article.id}/>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <Link href={`/articles/${article.id}`}>
                    <span className="text-green-600 hover:text-green-800 transition duration-300">
                      <FaEye size={18} />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        pageNumber={parseInt(pageNumber)}
        pages={pages}
        route="/admin/articles_table"
      />
    </div>
  );
};

export default AdminArticlesTable;
