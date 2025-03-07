import toast from 'react-hot-toast'

export async function makePostRequest (
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect
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
      redirect()
    } else {
      setLoading(false)
      if (response.status === 409) {
        toast.error(`${resourceName} này đã tồn tại!`)
      } else {
        toast.error('Đã có lỗi xảy ra!')
      }
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}

export async function makePutRequest (
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect
) {
  try {
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setLoading(false)
      toast.success(`Đã cập nhật ${resourceName} thành công!`)
      reset()
      redirect()
    } else {
      setLoading(false)
      toast.error('Đã có lỗi xảy ra!')
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}

