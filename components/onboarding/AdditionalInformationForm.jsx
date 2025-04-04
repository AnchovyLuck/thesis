'use client'
import NavButtons from './NavButtons'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageInput from '../formInputs/ImageInput'
import {
  setCurrentStep,
  updateOnboardingFormData
} from '@/redux/slices/onboardingSlice'
import TextareaInput from '../formInputs/TextAreaInput'

export default function AdditionalInformationForm () {
  const dispatch = useDispatch()
  const currentStep = useSelector(store => store.onboarding.currentStep)
  const existingFormData = useSelector(
    store => store.onboarding.onboardingFormData
  )
  const [imageUrl, setImageUrl] = useState(existingFormData.imageUrl || '')
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      ...existingFormData
    }
  })
  const processData = async data => {
    data.profileImageUrl = imageUrl
    dispatch(updateOnboardingFormData(data))
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Thông tin bổ sung
      </h2>

      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <div className='col-span-full'>
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='farmerProfileUploader'
            label='Ảnh cộng tác viên'
          />
          <TextareaInput
            label='Ghi chú'
            name='notes'
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>
      </div>
      <NavButtons />
    </form>
  )
}
