import React from 'react'
import CartProduct from '@/components/frontend/CartProduct'
import EmptyCart from './EmptyCart'

export default function CartItems ({ cartItems }) {
  return (
    <div className='col-span-12 md:col-span-8'>
      <h2 className='py-2 mb-6 font-semibold text-2xl'>Giỏ hàng</h2>
      <div className='flex flex-col justify-center'>
        {cartItems.map((item, i) => {
          return <CartProduct cartItem={item} key={i} />
        })}
      </div>
      <div className='flex items-center gap-2 py-8'>
        <input
          type='email'
          id='email'
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-1/2'
          placeholder='Nhập mã khuyến mãi'
        />
        <button className='text-slate-900 py-2 px-4 rounded-lg bg-lime-500 hover:bg-lime-600'>
          OK
        </button>
      </div>
    </div>
  )
}
