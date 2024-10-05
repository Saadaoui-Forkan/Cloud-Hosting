"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddArticleForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmitHandler =async(e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is required");
    if (description === "") return toast.error("Description is required");
    
    try {
      await axios.post(`${DOMAIN}/articles`, { title, description })
      setTitle("")
      setDescription("")
      toast.success("New Article is Added.")
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
        placeholder="Enter Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border border-gray-300 rounded-lg p-3 text-base md:text-lg resize-none focus:ring-2 w-full"
        rows={4}  
        placeholder="Enter Article Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="text-base md:text-lg text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold transition duration-300 w-full"
      >
        Add Article
      </button>
    </form>
  );
};

export default AddArticleForm;
