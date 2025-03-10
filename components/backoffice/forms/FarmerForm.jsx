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

export default function FarmerForm ({ user, updateData = {} }) {
  const initialImageUrl = updateData?.farmerProfile?.profileImageUrl ?? ''
  const productList = updateData?.farmerProfile?.products ?? []
  const userId = updateData?.id ?? ''
  const farmerId = updateData?.farmerProfile?.id ?? ''
  const [profileImageUrl, setProfileImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(productList)
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
  const isActive = watch('isActive')
  const router = useRouter()
  const redirect = () => {
    router.push('/login')
  }
  async function onSubmit (data) {
    data.profileImageUrl = profileImageUrl
    data.products = products
    console.log(data)
    if (userId) {
      data.code = updateData?.farmerProfile?.code
      data.userId = updateData?.userId
      makePutRequest(
        setLoading,
        `api/farmers/${farmerId}`,
        data,
        'nông dân',
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
        'Nông dân',
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
          label='Tên nông dân *'
          name='userName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Số điện thoại nông dân *'
          name='phone'
          type='tel'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.phone ?? ''}
        />
        <TextInput
          label='Email nông dân *'
          name='email'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Địa chỉ *'
          name='physicalAddress'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.physicalAddress ?? ''}
        />
        <TextInput
          label='Họ tên người đại diện'
          name='contactPerson'
          register={register}
          errors={errors}
          isRequired={false}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.contactPerson ?? ''}
        />
        <TextInput
          label='Số điện thoại người đại diện'
          name='contactPersonPhone'
          register={register}
          errors={errors}
          isRequired={false}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.contactPersonPhone ?? ''}
        />
        <TextInput
          label='Diện tích đất nông nghiệp (m²)'
          name='landSize'
          type='number'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.landSize ?? ''}
        />
        <TextInput
          label='Sản phẩm nông nghiệp chính'
          name='mainCrop'
          type='text'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={updateData?.farmerProfile?.mainCrop ?? ''}
        />
        <ArrayItemsInput
          setItems={setProducts}
          items={products}
          itemTitle='sản phẩm'
        />
        <ImageInput
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint='farmerProfileUploader'
          label='Ảnh nông trại'
        />
        <TextareaInput
          label='Hợp đồng thanh toán'
          name='terms'
          register={register}
          errors={errors}
          isRequired={false}
          defaultValue={updateData?.farmerProfile?.terms ?? ''}
        />
        <TextareaInput
          label='Ghi chú'
          name='notes'
          register={register}
          errors={errors}
          isRequired={false}
          defaultValue={updateData?.farmerProfile?.notes ?? ''}
        />
        <ToggleInput
          label='Tình trạng ?'
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
