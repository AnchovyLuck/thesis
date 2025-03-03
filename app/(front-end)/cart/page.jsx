import Breadcrumb from '@/components/frontend/Breadcrumb'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart () {
  return (
    <div>
      <Breadcrumb />
      <div className='grid grid-cols-12 gap-14'>
        <div className='col-span-12 md:col-span-8'>
          <h2 className='py-2 mb-6 font-semibold text-2xl'>Giỏ hàng</h2>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center justify-between border-b border-slate-400 text-slate-600 dark:text-slate-100 font-bold text-sm py-3'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/tomato.webp'
                  width={128}
                  height={128}
                  alt='Alt text'
                  className='rounded-xl w-32 h-32'
                />
                <div className='flex flex-col'>
                  <h2>Apple Watch Series 7 - 44 mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className='rounded-xl border border-gray-400 flex gap-3 items-center'>
                <button className='border-r border-gray-400 p-2'>
                  <Minus />
                </button>
                <p className='flex-grow px-2'>1</p>
                <button className='border-l border-gray-400 p-2'>
                  <Plus />
                </button>
              </div>
              <div className='flex items-center gap-2'>
                <h4>234.000 VNĐ</h4>
                <button>
                  <Trash2 className='text-red-600 w-5 h-5' />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between border-b border-slate-400 text-slate-600 dark:text-slate-100 font-bold text-sm py-3'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/tomato.webp'
                  width={128}
                  height={128}
                  alt='Alt text'
                  className='rounded-xl w-32 h-32'
                />
                <div className='flex flex-col'>
                  <h2>Apple Watch Series 7 - 44 mm</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className='rounded-xl border border-gray-400 flex gap-3 items-center'>
                <button className='border-r border-gray-400 p-2'>
                  <Minus />
                </button>
                <p className='flex-grow px-2'>1</p>
                <button className='border-l border-gray-400 p-2'>
                  <Plus />
                </button>
              </div>
              <div className='flex items-center gap-2'>
                <h4>234.000 VNĐ</h4>
                <button>
                  <Trash2 className='text-red-600 w-5 h-5' />
                </button>
              </div>
            </div>
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
        <div className='col-span-4 hidden md:block bg-slate-100 border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden p-5 dark:text-slate-100 font-bold'>
          <h2 className='text-2xl pb-3'>Tóm tắt chi phí</h2>
          <div className='flex items-center justify-between border-b border-slate-500 pb-4'>
            <span>Tổng đơn giá tạm tính</span>
            <span>343.000 VNĐ</span>
          </div>
          <div className='flex items-center justify-between pb-4 mt-2'>
            <span>Phí vận chuyển</span>
            <span>Miễn phí</span>
          </div>
          <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>
            Chúng tôi sẽ miễn phí vận chuyển đối với đơn hàng trên 100.000 VNĐ.
          </p>
          <div className='flex items-center justify-between pb-4 mt-2 font-bold'>
            <span>Tổng thanh toán</span>
            <span>343.000 VNĐ</span>
          </div>
          <Link
            href='#'
            className='bg-lime-500 hover:bg-lime-600 text-slate-900 rounded-lg py-2 px-4 font-normal'
          >
            Mua Hàng
          </Link>
        </div>
      </div>
    </div>
  )
}
