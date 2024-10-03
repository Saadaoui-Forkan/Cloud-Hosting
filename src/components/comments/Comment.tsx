import { CommentWithUser } from '@/utils/types';
import moment from 'moment';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface CommentProps {
  comment: CommentWithUser;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 w-full mb-4">
      {/* Header avec les infos de l'auteur */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{comment.user.username}</h4>
          <p className="text-sm text-gray-600">{comment.user.email}</p>
        </div>
        <p className="text-xs text-gray-500">{moment(comment.createdAt).format('DD-MM-YYYY')}</p>
      </div>

      {/* Corps du commentaire */}
      <div className="mt-4">
        <p className="text-gray-700">{comment.text}</p>
      </div>

      {/* Actions: Editer et Supprimer */}
      <div className="flex items-center justify-end space-x-4 mt-4">
        <button
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FaEdit size={20} />
        </button>
        <button
          className="text-red-600 hover:text-red-800 transition"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default Comment;
