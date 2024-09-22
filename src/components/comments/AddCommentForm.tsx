'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddCommentForm = () => {
    const [comment, setComment] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment === "") return toast.error("Comment is required");
    
    console.log({ comment });
  };
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Add a Comment</h3>
    <form onSubmit={formSubmitHandler}>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={4}
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default AddCommentForm