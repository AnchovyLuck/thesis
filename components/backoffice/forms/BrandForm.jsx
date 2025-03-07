'use client'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import ImageInput from '@/components/formInputs/ImageInput'
import SelectInput from '@/components/formInputs/SelectInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import ToggleInput from '@/components/formInputs/ToggleInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function BrandForm ({ categories, updateData = {} }) {
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
    defaultValues: {
      isActive: true,
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
    console.log(data)
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
    <div>
      <FormHeader title='Thêm Thương Hiệu' />
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
            label='Chọn loại sản phẩm *'
            name='categoryIds'
            register={register}
            errors={errors}
            className='w-full'
            options={categories}
            multiple={true}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='marketLogoUploader'
            label='Logo chợ'
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
    </div>
  )
}
