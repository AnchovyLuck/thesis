import React from 'react'
import Link from 'next/link'
import { numberWithCommas } from '@/lib/numberWithCommas'

export default function CartSubtotalCard ({ subTotal }) {
  const shipping = subTotal >= 100000 ? 0 : 30000
  const totalPrice = subTotal + shipping
  return (
    <div className='md:col-span-4 col-span-full bg-slate-100 border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden p-5 dark:text-slate-100 font-bold'>
      <h2 className='text-2xl pb-3'>Tóm tắt chi phí</h2>
      <div className='flex items-center justify-between border-b border-slate-500 pb-4'>
        <span>Tổng đơn giá tạm tính</span>
        <span>{numberWithCommas(subTotal)} VNĐ</span>
      </div>
      <div className='flex items-center justify-between pb-4 mt-2'>
        <span>Phí vận chuyển</span>
        <span>
          {subTotal >= 100000
            ? 'Miễn phí'
            : numberWithCommas(shipping) + ' VNĐ'}
        </span>
      </div>
      <p className='border-b border-slate-500 pb-6 text-slate-500 dark:text-slate-300 font-normal'>
        Chúng tôi sẽ miễn phí vận chuyển đối với đơn hàng từ 100.000 VNĐ.
      </p>
      <div className='flex items-center justify-between pb-4 mt-2 font-bold'>
        <span>Tổng thanh toán</span>
        <span>{numberWithCommas(totalPrice)} VNĐ</span>
      </div>
      <div className='mt-2'>
        <Link
          href='/checkout'
          className='bg-lime-500 hover:bg-lime-600 text-slate-900 rounded-lg py-2 px-4 font-normal'
        >
          Mua Hàng
        </Link>
      </div>
    </div>
  )
}
