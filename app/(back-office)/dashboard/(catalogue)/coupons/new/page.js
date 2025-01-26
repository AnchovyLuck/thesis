'use client'
import FormHeader from '@/components/backoffice/FormHeader'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextInput from '@/components/formInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateCouponCode } from '@/lib/generateCouponCode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCoupon () {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()
  async function onSubmit (data) {
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    data.couponCode = couponCode
    console.log(data)
    makePostRequest(setLoading, "api/coupons", data, "Khuyến mãi", reset);
  }
  return (
    <div>
      <FormHeader title='Khuyến Mãi Mới' />
      <form
        className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
          <TextInput
            label='Tên khuyến mãi'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label='Ngày hết hạn'
            name='expiryDate'
            type='date'
            register={register}
            control={control}
            errors={errors}
            className='w-full'
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
