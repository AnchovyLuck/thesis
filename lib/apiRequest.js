// import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'

export async function makePostRequest (
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setLoading(false)
      toast.success(`${resourceName} mới đã được tạo!`)
      reset()
    } else {
      setLoading(false)
      if (response.status === 409) {
        toast.error('Không đủ hàng tồn kho!')
      } else {
        toast.error('Đã có lỗi xảy ra!')
      }
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}
