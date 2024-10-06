import { getAllComments } from "@/apiCall/articlesApiCall";
import DeleteCommentBtn from "@/components/admin/DeleteCommentBtn";
import { verifyTokenClient } from "@/utils/verifyToken";
import { Comment } from "@prisma/client";
import moment from "moment";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminCommentsPage = async () => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) redirect("/");

  const payload = verifyTokenClient(token);
  if (payload?.isAdmin === false) redirect("/");
  
  const comments: Comment[] = await getAllComments(token);
  return (
    <div className="container mx-auto p-[2px] md:p-6 max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Articles</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Comment
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Created At
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="custom-scrollbar">
            {comments.map((comment) => (
              <tr
                key={comment.id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-4 text-gray-800">{comment.text}</td>
                <td className="py-3 px-4 text-gray-600">
                  {moment(comment.createdAt).format("DD-MM-YYYY")}
                </td>
                <td className="py-3 px-4 text-center">
                  <DeleteCommentBtn commentId={comment.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Pagination
        pageNumber={parseInt(pageNumber)}
        pages={pages}
        route="/admin/articles_table"
      /> */}
    </div>
  );
};
export default AdminCommentsPage;
