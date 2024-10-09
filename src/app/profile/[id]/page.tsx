import Link from "next/link";
import { toast } from "react-toastify";
import { cookies } from "next/headers";
import { verifyTokenClient } from "@/utils/verifyToken";
import { getProfile } from "@/apiCall/profileApiCall";
import { redirect } from "next/navigation";
import moment from "moment";
import DeleteProfileBtn from "@/components/profile/DeleteProfileBtn";
import EditProfileBtn from "@/components/profile/EditProfileBtn";

interface ProfileProps {
  params: { id: string };
}

const ProfilePage = async ({ params: { id } }: ProfileProps) => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenClient(token);

  if (payload?.id !== parseInt(id)) {
    redirect("/");
  }

  const { username, email, createdAt, updatedAt, comments } = await getProfile(
    token,
    parseInt(id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, {username}
            </h2>
            <p className="text-gray-500">{email}</p>
            <p className="text-gray-500">
              created at:{" "}
              <span className="font-bold text-sm">
                {moment(createdAt).format("DD-MM-YYYY")}
              </span>
            </p>
            {updatedAt !== createdAt && (
              <p className="text-gray-500">
                last update:{" "}
                <span className="font-bold text-sm">
                  {moment(updatedAt).format("DD-MM-YYYY HH:mm")}
                </span>
              </p>
            )}

            <div className="mt-8 flex">
              <EditProfileBtn email={email} username={username} id={parseInt(id)}/>
              <DeleteProfileBtn id={id} />
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white mt-8 py-6 px-8 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">My Comments</h3>
          <ul className="mt-4 space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-sm transition-all hover:shadow-md duration-300"
              >
                <span className="text-sm text-gray-500 block mt-1 font-bold">
                  {moment(comment.createdAt).format("DD/MM/YYYY [at] HH:mm")}
                </span>
                <p className="text-gray-700">{comment.text}</p>
                <Link href={`/articles/${comment.article.id}`}>
                  <span className="text-blue-500 hover:underline mt-2 inline-block">
                    Discover the article here.
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
