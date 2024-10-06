import { getSingleArticle } from "@/apiCall/articlesApiCall";
import EditArticleForm from "@/components/admin/EditArticleForm";
import { verifyTokenClient } from "@/utils/verifyToken";
import { Article } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface EditArticleProps {
  params: { id: string };
}

const EditArticle = async ({ params: { id } }: EditArticleProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenClient(token);

  if (!token) redirect("/");
  if (payload?.isAdmin === false) redirect("/");

  const article: Article = await getSingleArticle(id);
  return (
        <section className="flex flex-col items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-2 md:p-8 w-full md:max-w-2xl">
            <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 md:mb-8 text-center">
            Edit Article
            </h2>
            <EditArticleForm article={article} />
        </div>
        </section>

  );
};

export default EditArticle;
