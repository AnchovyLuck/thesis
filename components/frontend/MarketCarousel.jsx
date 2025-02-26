'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MarketCarousel () {
  const slides = [{}, {}, {}, {}, {}, {}, {}]
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }}
      freeMode={true}
      mousewheel={true}
      loop={true}
      navigation={true}
      modules={[Navigation, Mousewheel]}
      className='rounded-lg'
    >
      {slides.map((slide, i) => {
        return (
          <Link key={i} href='#'>
            <SwiperSlide className='flex flex-col rounded-lg border-0 bg-slate-50 dark:bg-lime-900'>
              <Image
                src='/tomato.webp'
                alt='vegetables'
                width={556}
                height={556}
                className='w-full bg-slate-50 dark:bg-lime-900'
              />
              <h2 className='text-slate-600 dark:text-slate-200 w-full bg-slate-50 dark:bg-lime-900 border-0 font-semibold'>
                Rau củ
              </h2>
            </SwiperSlide>
          </Link>
        )
      })}
    </Swiper>
  )
}
