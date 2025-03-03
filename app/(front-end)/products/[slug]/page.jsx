import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import { getData } from '@/lib/getData'
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page ({ params }) {
  const { slug } = await params
  const category = await getData('/categories/67bf306f376c79ea7913fc36')
  return (
    <div>
      <Breadcrumb />
      <div className='grid grid-cols-12 space-x-4'>
        <div className='col-span-3'>
          <Image
            src='/vegetables.webp'
            alt='vegetables'
            width={256}
            height={256}
            className='w-full'
          />
        </div>
        <div className='col-span-9 lg:col-span-6'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl lg:text-3xl font-semibold'>
              Rau củ quả tổng hợp
            </h2>
            <button>
              <Share2 />
            </button>
          </div>
          <div className='border-b border-gray-600 dark:border-gray-300'>
            <p className='py-2'>
              Để giữ húng quế tươi, cắt bỏ cành và đặt chúng trong ly hoặc bình
              nước. Để giữ húng quế tươi, cắt bỏ cành và đặt chúng trong ly hoặc
              bình nước.
            </p>
            <div className='flex items-center gap-8 mb-4'>
              <p>SKU: 32453453</p>
              <p className='bg-lime-200 py-1.5 px-4 rounded-full text-slate-900'>
                Còn <b>4324</b> sản phẩm
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4 py-4 border-b border-gray-600 dark:border-gray-300 mb-8'>
            <div className='flex items-center gap-4 w-full'>
              <h4 className='text-2xl'>49.000 VNĐ</h4>
              <del className='text-slate-400'>67.000 VNĐ</del>
            </div>
            <p className='flex items-center justify-end w-full'>
              <Tag className='w-5 h-5 me-2' />
              <span>Giảm 39%</span>
            </p>
          </div>
          <div className='flex justify-between gap-3 items-center py-6'>
            <div className='rounded-xl border border-gray-400 flex gap-3 items-center'>
              <button className='border-r border-gray-400 p-2'>
                <Minus />
              </button>
              <p className='flex-grow px-2'>1</p>
              <button className='border-l border-gray-400 p-2'>
                <Plus />
              </button>
            </div>
            <button className='flex items-center justify-center gap-2 text-slate-200 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-lg'>
              <BaggageClaim />
              <span>Thêm vào giỏ hàng</span>
            </button>
          </div>
        </div>
        <div className='col-span-3 hidden md:block bg-slate-100 border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden'>
          <h2 className=' py-3 px-6 font-bold text-slate-800 dark:text-slate-100'>
            ĐƠN VỊ VẬN CHUYỂN
          </h2>
          <div className='p-4'>
            <div className='flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3'>
              <span>Online Express</span>
              <Send />
            </div>
            <div className='py-3 text-slate-800 dark:text-slate-100 border-b border-gray-500'>
              Giao hàng đúng giờ. <Link href='#'>Xem chi tiết.</Link>
            </div>
            <h2 className='dark:text-slate-200 py-2'>Chọn địa điểm giao hàng</h2>
            <div className='pb-3'>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </div>
            <div className='pb-3'>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </div>
            <div className='pb-3'>
              <select
                id='countries'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option selected>Choose a country</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 my-8 bg-slate-100 dark:bg-slate-700 rounded-lg'>
        <h2 className='mb-4 text-xl font-semibold'>Sản phẩm cùng loại</h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  )
}
