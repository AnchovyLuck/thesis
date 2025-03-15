'use client'
import { Circle, CreditCard, HeartHandshake } from 'lucide-react'
import NavButtons from './NavButtons'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice'

export default function PaymentMethodForm () {
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
  const initialPaymentMethod = existingFormData.paymentMethod || ''
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod)
  const processData = async data => {
    data.paymentMethod = paymentMethod
    console.log(data)
    dispatch(updateCheckoutFormData(data))
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Phương thức thanh toán
      </h2>

      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <div className='col-span-full'>
          <h3 className='mb-5 text-lg font-medium text-gray-900 dark:text-white'>
            Chọn phương thức thanh toán
          </h3>
          <ul className='grid w-full gap-6 md:grid-cols-2'>
            <li>
              <input
                type='radio'
                id='hosting-small'
                name='hosting'
                value='Cash On Delivery'
                className='hidden peer'
                required
                onChange={e => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor='hosting-small'
                className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
              >
                <div className='flex gap-2 items-center gap-x-6'>
                  <HeartHandshake className='w-6 h-6 ms-3 flex-shrink-0' />
                  <p>Thanh toán khi nhận hàng</p>
                </div>
                <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='hosting-big'
                name='hosting'
                value='Credit Card'
                className='hidden peer'
                onChange={e => setPaymentMethod(e.target.value)}
              />
              <label
                htmlFor='hosting-big'
                className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
              >
                <div className='flex gap-2 items-center gap-x-6'>
                  <CreditCard className='w-6 h-6 ms-3 flex-shrink-0' />
                  <p>Thẻ tín dụng/thẻ ghi nợ</p>
                </div>
                <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <NavButtons />
    </form>
  )
}
