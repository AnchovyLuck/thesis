'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BaggageClaim } from 'lucide-react'

export default function CategoryCarousel ({ products }) {
  return (
    <Swiper
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      }}
      loop={true}
      navigation={true}
      freeMode={true}
      mousewheel={true}
      centeredSlides={true}
      modules={[Navigation, Mousewheel]}
      className='rounded-lg'
    >
      {products.map((product, i) => {
        return (
          <SwiperSlide className='flex flex-col rounded-lg border-0 bg-slate-50 dark:bg-slate-700' key={i}>
            <div className='bg-slate-50 dark:bg-slate-700  rounded-lg shadow-md'>
              <Link href='#' className='flex flex-col items-center'>
                <div className='w-64 max-w-full h-32'>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={256}
                    height={128}
                    className='bg-slate-50 dark:bg-slate-700 rounded-t-lg'
                  />
                </div>
                <h2 className='h-16 text-center text-slate-600 dark:text-slate-200 w-64 px-2 bg-slate-200 dark:bg-slate-800 border-0 font-semibold'>
                  {product.title}
                </h2>
              </Link>
              <div className='flex items-center space-x-4 justify-center text-slate-600 dark:text-slate-200 w-full bg-slate-200 dark:bg-slate-800 rounded-b-lg py-2 px-4'>
                <p className='w-full'>
                  {new Intl.NumberFormat('it-IT').format(product.salePrice)} VNĐ
                </p>
                <button className='flex items-center justify-center gap-2 text-slate-200 bg-lime-800 hover:bg-lime-700 px-4 py-2 rounded-lg w-full'>
                  <BaggageClaim />
                  <span>Thêm</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
