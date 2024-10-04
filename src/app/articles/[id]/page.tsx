import { getSingleArticle } from "@/apiCall/articlesApiCall";
import AddCommentForm from "@/components/comments/AddCommentForm";
import Comment from "@/components/comments/Comment";
import { SingleArticleId } from "@/utils/types";
import { verifyTokenClient } from "@/utils/verifyToken";
import moment from "moment";
import { cookies } from "next/headers";
import Link from "next/link";

interface SingleArticleProps {
  params: { id: string };
}

const SingleArticle = async ({ params }: SingleArticleProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenClient(token);

  const article: SingleArticleId = await getSingleArticle(params.id);
  return (
    <section className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-lg text-gray-500 mb-2">Article ID: {article.id}</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {article.title}
        </h1>
        <span className="text-sm text-gray-400 block mb-6">
          {moment(article.createdAt).format("DD-MM-YYYY")}
        </span>
        <p className="text-gray-700 leading-relaxed">{article.description}</p>
      </div>
      {payload ? (
        <AddCommentForm articleId={article.id} />
      ) : (
        <div className="bg-yellow-100 text-yellow-800 p-4 mb-6 rounded-lg shadow-md w-full text-center">
          To write a comment you should{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            login
          </Link>{" "}
          first.
        </div>
      )}
      {article.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} userId={payload?.id}/>
      ))}
    </section>
  );
};

export default SingleArticle;
