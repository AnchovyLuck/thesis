'use client'
import { numberWithCommas } from '@/lib/numberWithCommas'
import { setCurrentStep } from '@/redux/slices/checkoutSlice'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export default function OrderSummaryForm () {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const checkoutFormData = useSelector(store => store.checkout.checkoutFormData)
  const currentStep = useSelector(store => store.checkout.currentStep)
  const cartItems = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const handlePrevious = () => {
    dispatch(setCurrentStep(currentStep - 1))
  }
  const subTotal = cartItems.reduce((result, currentItem) => {
    return result + currentItem.salePrice * currentItem.qty
  }, 0)
  const submitData = async () => {
    const data = {
      orderItems: cartItems,
      checkoutFormData
    }
    try {
      setLoading(true)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setLoading(false)
        toast.success('Đơn hàng đã được tạo!')
        router.push('/order-confirmation')
      } else {
        setLoading(false)
        toast.error('Đã có lỗi xảy ra!')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className='my-6'>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Tóm tắt đơn hàng
      </h2>
      {cartItems.map((cartItem, i) => {
        return (
          <div
            key={i}
            className='flex items-center justify-between border-b border-slate-400 text-slate-600 dark:text-slate-100 font-bold text-sm py-3'
          >
            <div className='w-80 flex items-center gap-3'>
              <Image
                src={cartItem.imageUrl}
                width={128}
                height={128}
                alt={cartItem.title}
                className='rounded-xl w-20 h-20'
              />
              <h2>{cartItem.title}</h2>
            </div>
            <div className='col-span-3 flex gap-3 items-center'>
              <p className='flex-grow px-2'>x {cartItem.qty}</p>
            </div>
            <div className='col-span-3 flex items-center gap-2'>
              <h4>{numberWithCommas(cartItem.salePrice)} VNĐ</h4>
            </div>
          </div>
        )
      })}
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
            <span>Xác nhận mua hàng</span>
            <ChevronRight className='w-5 h-5 ml-2' />
          </button>
        )}
      </div>
    </div>
  )
}
