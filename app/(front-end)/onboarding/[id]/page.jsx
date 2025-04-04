import StepForm from '@/components/onboarding/StepForm'
import Steps from '@/components/onboarding/Steps'
import React from 'react'

export default async function page ({ params }) {
  const { id } = await params
  const steps = [
    {
      number: 1,
      title: 'Thông tin cá nhân'
    },
    {
      number: 2,
      title: 'Thông tin khác'
    },
    {
      number: 3,
      title: 'Tóm tắt'
    }
  ]
  return (
    <div className='bg-slate-200 dark:bg-slate-900 min-h-screen rounded-lg'>
      <div className='max-w-5xl my-6 mx-auto border border-slate-300 p-4 rounded-lg'>
        <Steps steps={steps} />
        <div className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <StepForm farmerId={id} />
        </div>
      </div>
    </div>
  )
}
