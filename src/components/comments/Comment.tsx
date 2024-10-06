"use client";
import { AxiosError, CommentWithUser } from "@/utils/types";
import moment from "moment";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateCommentModal from "./UpdateCommentModal";
import { toast } from "react-toastify";
import Swal, { SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useRouter } from "next/navigation";

interface CommentProps {
  comment: CommentWithUser;
  userId: number | undefined;
}

const Comment = ({ comment, userId }: CommentProps) => {
  const MySwal = withReactContent(Swal);
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false);
  // Handle Delete A Comment
  const handleDeleteComment = async() => {
    try {
      MySwal.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this comment!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          await axios.delete(`${DOMAIN}/comments/${comment.id}`)
          router.refresh()
        }
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage = axiosError.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      console.log(axiosError);
    }
  }
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 w-full mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            {comment.user.username}
          </h4>
          <p className="text-sm text-gray-600">{comment.user.email}</p>
        </div>
        <p className="text-xs text-gray-500">
          {moment(comment.createdAt).format("DD-MM-YYYY")}
        </p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">{comment.text}</p>
      </div>

      {userId && userId === comment.userId && (
        <div className="flex items-center justify-end space-x-4 mt-4">
          <button
            className="text-blue-600 hover:text-blue-800 transition"
            onClick={() => setOpen(true)}
          >
            <FaEdit size={20} />
          </button>
          <button
            className="text-red-600 hover:text-red-800 transition"
            onClick={handleDeleteComment}
          >
            <FaTrash size={20} />
          </button>
        </div>
      )}
      {open && (
        <UpdateCommentModal
          setOpen={setOpen}
          text={comment.text}
          commentId={comment.id}
        />
      )}
    </div>
  );
};

export default Comment;
