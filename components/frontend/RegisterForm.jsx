'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import SubmitButton from '../formInputs/SubmitButton'
import TextInput from '../formInputs/TextInput'

export default function RegisterForm ({ role = 'USER' }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  async function onSubmit (data) {
    try {
      console.log(data)
      setLoading(true)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const responseData = await response.json()

      if (response.ok) {
        setLoading(false)
        toast.success('Tạo tài khoản thành công!')
        reset()
        const userRole = responseData.data.role
        if (userRole === 'USER') {
          router.push('/')
        } else {
          router.push('/verify-email')
        }
      } else {
        setLoading(false)
        if (response.status === 409) {
          toast.error('Người dùng có email này đã tồn tại!')
        } else {
          // Handle other errors
          console.error('Server Error:', responseData.message)
          toast.error('Đã có lỗi xảy ra!')
        }
      }
    } catch (error) {
      setLoading(false)
      console.error('Network Error:', error)
      toast.error('Đã có lỗi xảy ra!')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <TextInput
        label=''
        name='role'
        className='mb-4'
        register={register}
        errors={errors}
        type='hidden'
        defaultValue={role}
      />
      <TextInput
        label='Tên tài khoản'
        name='userName'
        className='mb-4'
        register={register}
        errors={errors}
        type='text'
      />
      <TextInput
        label='Email'
        name='email'
        className='mb-4'
        register={register}
        errors={errors}
        type='email'
      />
      <TextInput
        label='Mật khẩu'
        name='password'
        className='mb-4'
        register={register}
        errors={errors}
        type='password'
      />
      <div className='flex flex-col gap-2'>
        {role === 'USER' ? (
          <p className='flex flex-col mb-4 text-[0.8rem] font-light text-gray-500 dark:text-gray-400'>
            Bạn muốn bán sản phẩm của mình cùng Online Shop?{' '}
            <Link
              href='/register-farmer'
              className='font-medium text-primary-600 hover:underline dark:text-primary-500'
            >
              Đăng ký nhà phân phối
            </Link>
          </p>
        ) : (
          <p className='mb-4 text-[0.8rem] font-light text-gray-500 dark:text-gray-400'>
            Trở thành khách hàng thành viên?{' '}
            <Link
              href='/register'
              className='font-medium text-primary-600 hover:underline dark:text-primary-500'
            >
              Đăng ký
            </Link>
          </p>
        )}
        <p className='mb-4 text-[0.8rem] font-light text-gray-500 dark:text-gray-400'>
          Bạn đã có tài khoản?{' '}
          <Link
            href='/register-farmer'
            className='font-medium text-primary-600 hover:underline dark:text-primary-500'
          >
            Đăng nhập
          </Link>
        </p>
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle='Đăng ký'
        loadingButtonTitle='Đang xử lý...'
        className='text-center pb-4'
      />
    </form>
  )
}
