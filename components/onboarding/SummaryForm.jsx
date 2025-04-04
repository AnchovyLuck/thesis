'use client'
import { makePostRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { setCurrentStep } from '@/redux/slices/onboardingSlice'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export default function SummaryForm ({ farmerId }) {
  const {
    reset,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)
  const onboardingFormData = useSelector(
    store => store.onboarding.onboardingFormData
  )
  const currentStep = useSelector(store => store.onboarding.currentStep)
  const dispatch = useDispatch()
  const router = useRouter()
    const redirect = () => {
      router.push('/login')
    }
  const handlePrevious = () => {
    dispatch(setCurrentStep(currentStep - 1))
  }
  const submitData = async () => {
    const data = {
      ...onboardingFormData
    }
    console.log(data)
    const fullName = `${data.firstName} ${data.lastName}`
    const code = generateUserCode('FARM', fullName)
    data.code = code
    data.userId = farmerId
    makePostRequest(
      setLoading,
      'api/farmers',
      data,
      'Cộng tác viên',
      reset,
      redirect
    )
  }

  return (
    <div className='my-6'>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Tóm tắt
      </h2>
      <div className='mt-4 flex justify-between items-center'>
        <button
          onClick={handlePrevious}
          type='button'
          className='inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700'
        >
          <ChevronLeft className='w-5 h-5 mr-2' />
          <span>Quay lại</span>
        </button>
        {loading ? (
          <button
            disabled
            className='inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700'
          >
            Đang xử lý...
          </button>
        ) : (
          <button
            onClick={submitData}
            className='inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700'
          >
            <span>Lưu</span>
            <ChevronRight className='w-5 h-5 ml-2' />
          </button>
        )}
      </div>
    </div>
  )
}
