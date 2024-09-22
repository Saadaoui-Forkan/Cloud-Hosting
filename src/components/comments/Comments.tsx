import React from 'react'

const Comments = () => {
    const comments = [
        {
          id: 1,
          author: "John Doe",
          date: "2024-01-02",
          content: "Great article! Very informative.",
        },
        {
          id: 2,
          author: "Jane Smith",
          date: "2024-01-03",
          content: "Thanks for sharing this!",
        }
      ];
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-4 mb-4">
              <p className="text-gray-800 font-semibold">{comment.author}</p>
              <span className="text-sm text-gray-400">{comment.date}</span>
              <p className="text-gray-700 mt-2">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
  )
}

export default Comments