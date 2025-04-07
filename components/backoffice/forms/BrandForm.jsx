'use client'
import ImageInput from '@/components/formInputs/ImageInput'
import SelectInput from '@/components/formInputs/SelectInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import ToggleInput from '@/components/formInputs/ToggleInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function BrandForm ({ products, updateData = {} }) {
  const initialImageUrl = updateData?.logoUrl ?? ''
  const id = updateData?.id ?? ''
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      isActive: true,
      productIds: updateData?.products?.map(product => product.id) || [],
      ...updateData
    }
  })
  const isActive = watch('isActive')
  const router = useRouter()
  const redirect = () => {
    router.push('/dashboard/brands')
  }
  async function onSubmit (data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.logoUrl = imageUrl
    if (id) {
      data.id = id
      makePutRequest(
        setLoading,
        `api/brands/${id}`,
        data,
        'thương hiệu',
        reset,
        redirect
      )
    } else {
      makePostRequest(
        setLoading,
        'api/brands',
        data,
        'Thương hiệu',
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
          label='Tên thương hiệu *'
          name='title'
          register={register}
          errors={errors}
          className='w-full'
        />
        <SelectInput
          label='Chọn sản phẩm *'
          name='productIds'
          register={register}
          control={control}
          errors={errors}
          className='w-full'
          options={products}
          multiple={true}
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint='marketLogoUploader'
          label='Logo thương hiệu'
        />
        <TextareaInput
          label='Mô tả thương hiệu *'
          name='description'
          register={register}
          errors={errors}
        />
        <ToggleInput
          label='Trạng thái ?'
          name='isActive'
          toggle={isActive}
          trueTitle='Đang hoạt động'
          falseTitle='Không hoạt động'
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
