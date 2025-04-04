'use client'
import ImageInput from '@/components/formInputs/ImageInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function FarmerForm ({ user, updateData = {} }) {
  const initialImageUrl = updateData?.farmerProfile?.profileImageUrl ?? ''
  const userId = updateData?.id ?? ''
  const farmerId = updateData?.farmerProfile?.id ?? ''
  const [profileImageUrl, setProfileImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
      ...updateData
    }
  })
  const router = useRouter()
  const redirect = () => {
    router.push('/login')
  }
  async function onSubmit (data) {
    data.profileImageUrl = profileImageUrl
    console.log(data)
    if (userId) {
      data.code = updateData?.farmerProfile?.code
      data.userId = updateData?.userId
      makePutRequest(
        setLoading,
        `api/farmers/${farmerId}`,
        data,
        'cộng tác viên',
        reset,
        redirect
      )
    } else {
      const code = generateUserCode('FARM', data.userName)
      data.code = code
      makePostRequest(
        setLoading,
        'api/farmers',
        data,
        'Cộng tác viên',
        reset,
        redirect
      )
    }
  }
  return (
    <form
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <TextInput
          label='Tên cộng tác viên *'
          name='firstName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Họ cộng tác viên *'
          name='lastName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Số điện thoại cộng tác viên *'
          name='phone'
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.phone ?? ''}
        />
        <TextInput
          label='Địa chỉ *'
          name='physicalAddress'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.physicalAddress ?? ''}
        />
        <ImageInput
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint='farmerProfileUploader'
          label='Ảnh cộng tác viên'
        />
        <TextareaInput
          label='Ghi chú'
          name='notes'
          register={register}
          errors={errors}
          isRequired={false}
          defaultValue={updateData?.farmerProfile?.notes ?? ''}
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
