"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface DeleteArticleBtnProps {
  commentId: number;
}

const DeleteCommentBtn = ({ commentId }: DeleteArticleBtnProps) => {
  const router = useRouter();

  const deleteCommentHandler = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this comment!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      }).then(async (result: { isConfirmed: any }) => {
        if (result.isConfirmed) {
          await axios.delete(`${DOMAIN}/comments/${commentId}`);
          router.refresh();
          toast.success("Comment Deleted");
        }
      });
    } catch (error: any) {
      toast.error(error?.response?.data.message);
      console.log(error);
    }
  };
  return (
    <button
      className="text-red-600 hover:text-red-800 transition duration-300"
      onClick={deleteCommentHandler}
    >
      <FaTrashAlt size={18} />
    </button>
  );
};

export default DeleteCommentBtn;
