"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface AddCommentProps {
  articleId: number;
}

const AddCommentForm = ({ articleId }: AddCommentProps) => {
  const router = useRouter();
  const [text, setText] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "") return toast.error("Comment is required");
    try {
      await axios.post(`${DOMAIN}/comments`, { text, articleId });
      router.refresh();
      setText("");
    } catch (error: any) {
      toast.error(error?.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="m-8 bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Add a Comment</h3>
      <form onSubmit={formSubmitHandler}>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Write your comment here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
