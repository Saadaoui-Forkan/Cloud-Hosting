import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Comments = () => {
  const comments = [
    {
      id: 1,
      author: 'John Doe',
      date: '2024-01-02',
      content: 'Great article! Very informative.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      date: '2024-01-03',
      content: 'Thanks for sharing this!',
    },
  ];

  return (
    <div className="mt-8 rounded-lg p-4 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-200 pb-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">{comment.author}</p>
              <span className="text-sm text-gray-400">{comment.date}</span>
              <p className="text-gray-700 mt-2">{comment.content}</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <button
                className="text-blue-500 hover:text-blue-700 transition"
                aria-label="Edit"
              >
                <FaEdit size={20} />
              </button>
              <button
                className="text-red-500 hover:text-red-700 transition"
                aria-label="Delete"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default Comments;
