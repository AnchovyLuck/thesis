'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MarketCarousel ({ markets }) {
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
      {markets.map((market, i) => {
        return (
          <SwiperSlide
            key={i}
            className='flex flex-col border-0 bg-slate-300 rounded-lg dark:bg-lime-900'
          >
            <Link href='#'>
              <Image
                src={market.logoUrl}
                alt={market.title}
                width={556}
                height={556}
                className='w-full bg-slate-50 dark:bg-lime-900 rounded-t-lg'
              />
              <div className='flex items-center justify-center w-full px-2 py-2 bg-slate-50 rounded-b-lg'>
                <h2 className='text-slate-600 w-full  border-0 font-semibold'>
                  {market.title}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
