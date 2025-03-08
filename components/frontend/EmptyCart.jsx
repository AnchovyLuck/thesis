import Link from 'next/link'
import React from 'react'

export default function EmptyCart () {
  return (
    <div className='text-center p-12'>
      <p className='text-2xl'>
        Giỏ hàng của bạn đang trống. <Link className='text-slate-800 dark:text-lime-500' href='/'>Bắt đầu mua sắm!</Link>
      </p>
    </div>
  )
}
