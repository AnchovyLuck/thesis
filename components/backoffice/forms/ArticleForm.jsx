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
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const CustomEditor = dynamic(
  () => import('@/components/formInputs/CustomEditor'),
  { ssr: false }
)

export default function ArticleForm ({ categories, updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? ''
  const id = updateData?.id ?? ''
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('<h1></h1>')
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

  const handleEditorChange = newContent => {
    setContent(newContent)
  }

  const isActive = watch('isActive')
  const router = useRouter()
  const redirect = () => {
    router.push('/dashboard/articles')
  }
  async function onSubmit (data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    data.content = content
    console.log(data)

    if (id) {
      data.id = id
      makePutRequest(
        setLoading,
        `api/articles/${id}`,
        data,
        'bài viết',
        reset,
        redirect
      )
    } else {
      makePostRequest(
        setLoading,
        'api/articles',
        data,
        'Bài viết',
        reset,
        redirect
      )
    }
  }
  return (
    <div>
      <FormHeader title='Thêm Bài viết' />
      <form
        className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput
            label='Tiêu đề bài viết *'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
            label='Chọn loại sản phẩm *'
            name='categoryId'
            register={register}
            errors={errors}
            className='w-full'
            options={categories}
            multiple={false}
          />
          <TextareaInput
            label='Mô tả bài viết *'
            name='description'
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='trainingImageUploader'
            label='Thumbnail bài viết'
          />
          <CustomEditor
            label='Nội dung bài viết'
            value={content}
            onChange={handleEditorChange}
          />
          <ToggleInput
            label='Đăng công khai ?'
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
    </div>
  )
}
