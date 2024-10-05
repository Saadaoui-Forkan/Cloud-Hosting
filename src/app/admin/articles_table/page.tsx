import { verifyTokenClient } from '@/utils/verifyToken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminArticlesTable = () => {
  const token = cookies().get("jwtToken")?.value || ""
  const payload = verifyTokenClient(token) 

  if (!token) redirect('/')
  if (payload?.isAdmin === false) redirect('/')
  return (
    <div>AdminArticlesTable</div>
  )
}
export default AdminArticlesTable