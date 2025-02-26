'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import { HandCoins, HelpCircle, RotateCw } from 'lucide-react'
import advert from '../../public/adv.gif'

export default function Hero () {
  const categories = [{}, {}, {}, {}, {}]
  return (
    <div className='grid grid-cols-12 gap-4 mb-6'>
      <div className='hidden lg:block col-span-3 bg-white border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden h-[350px]'>
        <h2
          className='bg-slate-100 dark:bg-slate-700 py-3 px-6 font-bold
        border-b border-slate-300 dark:border-slate-500 text-slate-800 dark:text-slate-100 h-12'
        >
          Các loại sản phẩm
        </h2>
        <div className='h-[300px] overflow-y-auto flex flex-col gap-2'>
          {categories.map((category, i) => {
            return (
              <div
                key={i}
                className='py-3 px-6 font-semibold hover:bg-slate-200 duration-75 transition-all dark:text-slate-300 dark:hover:bg-slate-500
                rounded-md'
              >
                <Link href='#' className='flex items-center gap-3 '>
                  <Image
                    src='/vegetables.webp'
                    width={556}
                    height={556}
                    className='w-12 h-12 rounded-full object-cover border border-lime-300'
                    alt='vegetables'
                  />
                  <span className='text-sm'>Rau củ</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className='col-span-full lg:col-span-7 bg-blue-600 rounded-md h-[350px] shadow-md'>
        <HeroCarousel />
      </div>
      <div className='col-span-2 hidden lg:block bg-white dark:bg-slate-800 rounded-lg shadow-md h-[350px] overflow-y-hidden'>
        <div className='overflow-y-auto h-[174px]'>
          <Link
            href='#'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <HelpCircle className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Trung tâm hỗ trợ</h2>
              <p className='text-[0.6rem]'>Dịch vụ chăm sóc khách hàng</p>
            </div>
          </Link>
          <Link
            href='#'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <RotateCw className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Trả hàng</h2>
              <p className='text-[0.6rem]'>Trả hàng nhanh chóng</p>
            </div>
          </Link>
          <Link
            href='/register-farmer'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <HandCoins className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Bán hàng</h2>
              <p className='text-[0.6rem]'>Đồng hành cùng chúng tôi</p>
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Image
            src={advert}
            alt='advert'
            className='w-full h-40 rounded-lg'
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
