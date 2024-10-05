import { verifyTokenClient } from '@/utils/verifyToken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AdminCommentsPage = () => {
  const token = cookies().get("jwtToken")?.value || ""
  const payload = verifyTokenClient(token) 

  if (!token)redirect('/')
  if (payload?.isAdmin === false) redirect('/')
  return (
    <div>AdminCommentsPage</div>
  )
}
export default AdminCommentsPage