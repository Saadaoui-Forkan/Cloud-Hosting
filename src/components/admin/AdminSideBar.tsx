import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
const AdminSidebar = () => {
  return (
    <nav className="text-white h-full py-10 px-5">
      <Link
        href="/admin"
        className="flex items-center text-lg lg:text-2xl font-semibold mb-10 hover:text-yellow-400 transition-colors"
      >
        <CgMenuGridR className="text-3xl mr-2" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className="space-y-6">
        <li>
          <Link
            href="/admin/articles_table?pageNumber=1"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
          >
            <MdOutlineArticle className="mr-2 text-2xl" />
            <span className="hidden lg:block">Articles</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/comments_table"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
          >
            <FaRegComments className="mr-2 text-2xl" />
            <span className="hidden lg:block">Comments</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default AdminSidebar;
