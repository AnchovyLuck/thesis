'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ArticleCarousel () {
  const slides = [{}, {}, {}, {}, {}, {}, {}]
  return (
    <Swiper
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      loop={true}
      navigation={true}
      freeMode={true}
      mousewheel={true}
      modules={[Navigation, Mousewheel]}
      className='rounded-lg'
    >
      {slides.map((slide, i) => {
        return (
          <div key={i}>
            <SwiperSlide className='flex flex-col rounded-lg border-0 bg-slate-50 dark:bg-slate-600 text-slate-800 dark:text-slate-50'>
              <Link href='#'>
                <Image
                  src='/banners/1.png'
                  alt='vegetables'
                  width={556}
                  height={556}
                  className='w-full bg-slate-50 dark:bg-slate-600 rounded-lg'
                />
              </Link>
              <h2 className='text-slate-600 dark:text-slate-200 w-full bg-slate-50 dark:bg-slate-600 border-0 font-semibold my-2 text-xl'>
                Rau củ
              </h2>
              <p className='px-4 line-clamp-3 text-start'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                ipsum commodi eveniet similique sequi cupiditate officiis totam
                suscipit pariatur. Fugit accusantium delectus itaque illum
                atque, omnis modi quia nobis mollitia!
              </p>
              <div className='flex items-center space-x-6 my-2 w-full px-4'>
                <Link
                  className='bg-slate-300 hover:bg-slate-400 dark:bg-lime-900 dark:hover:bg-lime-800 text-slate-800 dark:text-slate-50 rounded-md px-4 py-2'
                  href='#'
                >
                  Xem thêm   
                </Link>
                <Link href="#" className="text-base">Chat với nhân viên hỗ trợ</Link>
              </div>
              
            </SwiperSlide>
          </div>
        )
      })}
    </Swiper>
  )
}
