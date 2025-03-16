'use client'
import React from 'react'
import TextInput from '../formInputs/TextInput'
import SubmitButton from '../formInputs/SubmitButton'
import { useForm } from 'react-hook-form'
import NavButtons from './NavButtons'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentStep,
  updateCheckoutFormData
} from '@/redux/slices/checkoutSlice'
import { useSession } from 'next-auth/react'

export default function PersonalDetailsForm () {
  const { data: session, status } = useSession()
  const userId = session?.user?.id
  const dispatch = useDispatch()
  const currentStep = useSelector(store => store.checkout.currentStep)
  const existingFormData = useSelector(store => store.checkout.checkoutFormData)
  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      ...existingFormData
    }
  })
  const processData = async data => {
    if (userId) {
      data.userId = userId
      dispatch(updateCheckoutFormData(data))
      dispatch(setCurrentStep(currentStep + 1))
    }
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Thông tin khách hàng
      </h2>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <TextInput
          label='Tên'
          name='firstName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Họ'
          name='lastName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Email'
          name='email'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Số điện thoại'
          name='phone'
          register={register}
          errors={errors}
          className='w-full'
        />
      </div>
      <NavButtons />
    </form>
  )
}
