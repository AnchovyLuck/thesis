'use client'
import React, { useState } from 'react'
import TextInput from '../formInputs/TextInput'
import SubmitButton from '../formInputs/SubmitButton'
import { useForm } from 'react-hook-form'
import NavButtons from './NavButtons'
import { Circle, Truck } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentStep,
  updateCheckoutFormData
} from '@/redux/slices/checkoutSlice'

export default function ShippingAddressForm ({ session }) {
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
  const cartItems = useSelector(store => store.cart)
  const subTotal = cartItems.reduce((result, currentItem) => {
    return result + currentItem.salePrice * currentItem.qty
  }, 0)
  const initialShippingCost = existingFormData.shippingCost || ''
  const [shippingCost, setShippingCost] = useState(initialShippingCost)
  const processData = async data => {
    data.shippingCost = shippingCost
    console.log(data)
    dispatch(updateCheckoutFormData(data))
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className='text-xl font-semibold mb-5 text-center dark:text-lime-400'>
        Địa chỉ nhận hàng
      </h2>

      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6 items-center'>
        <TextInput
          label='Tên đường'
          name='streetAddress'
          register={register}
          errors={errors}
          className='w-full col-span-full'
          defaultValue={session?.user?.userProfile?.streetAddress}
        />
        <TextInput
          label='Phường/xã'
          name='ward'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={session?.user?.userProfile?.ward}
        />
        <TextInput
          label='Quận/huyện'
          name='district'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={session?.user?.userProfile?.district}
        />
        <TextInput
          label='Tỉnh'
          name='province'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={session?.user?.userProfile?.province}
        />
        <TextInput
          label='Zip code'
          name='zipCode'
          register={register}
          errors={errors}
          className='w-full'
          defaultValue={session?.user?.userProfile?.zipCode}
        />

        <div className='col-span-full'>
          <h3 className='mb-5 text-lg font-medium text-gray-900 dark:text-white'>
            Chọn phương thức vận chuyển
          </h3>
          <ul className='grid w-full gap-6 md:grid-cols-2'>
            <li>
              <input
                type='radio'
                id='hosting-small'
                name='hosting'
                value={subTotal >= 100000 ? '0' : '30000'}
                className='hidden peer'
                required
                onChange={e => setShippingCost(e.target.value)}
              />
              <label
                htmlFor='hosting-small'
                className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
              >
                <div className='flex gap-2 items-center gap-x-6'>
                  <Truck className='w-6 h-6 ms-3 flex-shrink-0' />
                  <div className=''>
                    <p>Giao hàng nhanh</p>
                    <p>{subTotal >= 100000 ? 'Miễn phí' : 'Phí: 30.000đ'}</p>
                  </div>
                </div>
                <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='hosting-big'
                name='hosting'
                value={subTotal >= 100000 ? '0' : '20000'}
                className='hidden peer'
                onChange={e => setShippingCost(e.target.value)}
              />
              <label
                htmlFor='hosting-big'
                className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
              >
                <div className='flex gap-2 items-center gap-x-6'>
                  <Truck className='w-6 h-6 ms-3 flex-shrink-0' />
                  <div className=''>
                    <p>Giao hàng tiết kiệm</p>
                    <p>{subTotal >= 100000 ? 'Miễn phí' : 'Phí: 20.000đ'}</p>
                  </div>
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
