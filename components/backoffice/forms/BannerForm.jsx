'use client'
import ImageInput from '@/components/formInputs/ImageInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import ToggleInput from '@/components/formInputs/ToggleInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function BannerForm ({ updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? ''
  const id = updateData?.id ?? ''
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValue: {
      isActive: true,
      ...updataData
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  const redirect = () => {
    router.push('/dashboard/banners')
  }
  async function onSubmit (data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    if (id) {
      data.id = id
      makePutRequest(
        setLoading,
        `api/banners/${id}`,
        data,
        'banner',
        reset,
        redirect
      )
    } else {
      makePostRequest(
        setLoading,
        'api/banners',
        data,
        'Banner',
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
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          label='Tên banner *'
          name='title'
          register={register}
          errors={errors}
        />
        <TextInput
          label='Link banner *'
          name='link'
          type='url'
          register={register}
          errors={errors}
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='bannerImageUploader'
          label='Ảnh banner'
        />
        <ToggleInput
          label='Đăng banner ?'
          name='isActive'
          toggle={isActive}
          trueTitle='Có'
          falseTitle='Không'
          register={register}
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
