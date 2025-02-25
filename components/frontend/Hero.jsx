'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'

export default function Hero () {
  const categories = [{}, {}, {}, {}, {}]
  return (
    <div className='flex flex-wrap lg:flex-nowrap gap-8 mb-6'>
      <div className='w-full lg:w-1/3 bg-white border border-slate-400 rounded-lg dark:bg-gray-600 dark:border-gray-700 text-slate-800 overflow-hidden h-[250px] lg:h-[350px]'>
        <h2
          className='bg-slate-100 dark:bg-slate-700 py-3 px-6 font-bold
        border-b border-slate-300 dark:border-slate-500 text-slate-800 dark:text-slate-100 h-12'
        >
          Các loại sản phẩm
        </h2>
        <div className='h-[200px] lg:h-[300px] overflow-y-auto flex flex-col gap-2'>
          {categories.map((category, i) => {
            return (
              <div
                key={i}
                className='py-3 px-6 font-semibold hover:bg-slate-200 duration-75 transition-all dark:text-slate-300 dark:hover:bg-slate-600
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
      <div className='w-full lg:w-2/3 bg-blue-600 rounded-md h-[350px]'>
        <HeroCarousel />
      </div>
    </div>
  )
}
