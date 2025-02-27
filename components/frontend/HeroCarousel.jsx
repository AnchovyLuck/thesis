'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import React from 'react'
import Link from 'next/link'

export default function HeroCarousel ({ banners }) {
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      loop={true}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      className='rounded-lg'
    >
      {banners.map(banner => {
        return (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link}>
              <img src={banner.imageUrl} alt={banner.title} className='w-full h-full' />
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
