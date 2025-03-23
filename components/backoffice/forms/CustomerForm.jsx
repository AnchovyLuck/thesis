'use client'
import ArrayItemsInput from '@/components/formInputs/ArrayItemsInput'
import ImageInput from '@/components/formInputs/ImageInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import ToggleInput from '@/components/formInputs/ToggleInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CustomerForm ({ user }) {
  const profileImage = user?.userProfile?.profileImage || ''
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(profileImage)
  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      ...user
    }
  })
  const router = useRouter()
  const redirect = () => {
    router.push('/dashboard/customers')
  }
  async function onSubmit (data) {
    data.profileImage = imageUrl
    console.log(data)
    if (userId) {
      data.userId = updateData?.userId
      makePutRequest(
        setLoading,
        `api/customers/${user.id}`,
        data,
        'khách hàng',
        reset,
        redirect
      )
    }
  }
  return (
    <form
      className='w-full p-4 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Thông tin khách hàng
      </h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center border-b border-gray-700 pb-10 mb-10'>
        <TextInput
          label='Tên đăng nhập'
          name='userName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Tên'
          name='firstName'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.firstName}
        />
        <TextInput
          label='Họ'
          name='lastName'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.lastName}
        />
        <TextInput
          label='Ngày sinh'
          type='date'
          name='dateOfBirth'
          register={register}
          errors={errors}
          control={control}
          className='w-full'
          defaultValue={user?.userProfile?.dateOfBirth}
        />
        <TextInput
          label='Email'
          name='email'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.email}
        />
        <TextInput
          label='Số điện thoại'
          name='phone'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.phone}
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='customerProfileUploader'
          label='Avatar khách hàng'
        />
      </div>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Địa chỉ nhận hàng
      </h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <TextInput
          label='Tên đường'
          name='streetAddress'
          register={register}
          errors={errors}
          className='w-full col-span-full'
          defaultValue={user?.userProfile?.streetAddress}
        />
        <TextInput
          label='Phường/xã'
          name='ward'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.ward}
        />
        <TextInput
          label='Quận/huyện'
          name='district'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.district}
        />
        <TextInput
          label='Tỉnh'
          name='province'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.province}
        />
        <TextInput
          label='Zip code'
          name='zipCode'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={user?.userProfile?.zipCode}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle='Lưu'
        loadingButtonTitle='Đang lưu...'
      />
    </form>
  )
}
