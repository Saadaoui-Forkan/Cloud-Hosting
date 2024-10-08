'use client'
import { DOMAIN } from '@/utils/constants'
import { AxiosError } from '@/utils/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FaTrashAlt } from "react-icons/fa"
import { toast } from 'react-toastify'
import Swal, { SweetAlertResult } from 'sweetalert2'

interface DeleteArticleBtnProps {
    articleId: number
}

const DeleteArticleBtn = ({ articleId }: DeleteArticleBtnProps) => {
    const router = useRouter()

    const deleteArticleHandler = () => {
        try {
            Swal.fire({
              title: 'Are you sure?',
              text: "Once deleted, you will not be able to recover this article!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete!',
            }).then(async (result: SweetAlertResult ) => {
              if (result.isConfirmed) {
                await axios.delete(`${DOMAIN}/articles/${articleId}`)
                router.refresh()
                toast.success('Article Deleted')
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
    <button 
        className="text-red-600 hover:text-red-800 transition duration-300"
        onClick={deleteArticleHandler}
    >
        <FaTrashAlt size={18} />
    </button>
  )
}

export default DeleteArticleBtn