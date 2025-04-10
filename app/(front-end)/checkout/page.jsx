import CartBanner from '@/components/checkout/CartBanner'
import StepForm from '@/components/checkout/StepForm'
import Steps from '@/components/checkout/Steps'
import React from 'react'

export default function page () {
  const steps = [
    {
      number: 1,
      title: 'Thông tin khách hàng'
    },
    {
      number: 2,
      title: 'Địa chỉ nhận hàng'
    },
    {
      number: 3,
      title: 'Phương thức thanh toán'
    },
    {
      number: 4,
      title: 'Xác nhận đơn hàng'
    }
  ]
  return (
    <div className='bg-slate-200 dark:bg-slate-900 min-h-screen rounded-lg'>
      <div className='max-w-5xl my-6 mx-auto border border-slate-300 p-4 rounded-lg'>
        <Steps steps={steps} isCheckout={true}/>
        <div className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <CartBanner />
          <StepForm />
        </div>
      </div>
    </div>
  )
}
