"use client"
import { DOMAIN } from '@/utils/constants'
import { AxiosError } from '@/utils/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { Dispatch, FormEvent, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'

interface UpdateCommentProps {
    setOpen: Dispatch<React.SetStateAction<boolean>>,
    text: string,
    commentId: number
}

const UpdateCommentModal = ({ setOpen, text, commentId }: UpdateCommentProps) => {
    const router = useRouter()
    const [updatedText, setUpdatedText] = useState(text)

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        if (updatedText === "") {
            toast.error("Please write a comment")
        }
        try {
            await axios.put(`${DOMAIN}/comments/${commentId}`, { text: updatedText })
            router.refresh()
            setUpdatedText("")
            setOpen(false)
        } catch (error) {
          const axiosError = error as AxiosError;
          const errorMessage = axiosError.response?.data?.message || "An error occurred";
          toast.error(errorMessage);
          console.log(axiosError);
        }
    }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-white rounded-lg shadow-lg md:w-1/2 w-10/12 p-6 relative">
      <div className="flex justify-end">
        <button 
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setOpen(false)} 
        >
          <FaTimes size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Edit Comment
          </label>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your updated comment"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
      </form>
    </div>
  </div>
  )
}

export default UpdateCommentModal