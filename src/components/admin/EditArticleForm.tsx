"use client";
import { DOMAIN } from "@/utils/constants";
import { Article } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface EditArticleFormProps {
    article: Article
}

const EditArticleForm = ({ article }: EditArticleFormProps) => {
  const router = useRouter()
  const [title, setTitle] = useState(article.title);
  const [description, setDescription] = useState(article.description);

  const formSubmitHandler =async(e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is required");
    if (description === "") return toast.error("Description is required");
    
    try {
      await axios.put(`${DOMAIN}/articles/${article.id}`, { title, description })
      toast.success("Article Updated.")
      router.refresh()
    } catch (error: any) {
      toast.error(error?.response?.data.message)
      console.log(error)
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col space-y-5 w-full max-w-md mx-auto">
      <input
        className="border border-gray-300 rounded-lg p-3 text-base md:text-lg w-full"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border border-gray-300 rounded-lg p-3 text-base md:text-lg resize-none focus:ring-2 w-full"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="text-base md:text-lg text-white bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold transition duration-300 w-full"
      >
        Edit Article
      </button>
    </form>
  );
};

export default EditArticleForm;
