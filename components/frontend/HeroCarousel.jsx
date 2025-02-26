import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import React from 'react'
import Link from 'next/link'

export default function HeroCarousel () {
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
      <Link href='#'>
        <SwiperSlide>
          <img src='/banners/1.png' alt='banner' />
        </SwiperSlide>
      </Link>
      <Link href='#'>
        <SwiperSlide>
          <img src='/banners/2.png' alt='banner' />
        </SwiperSlide>
      </Link>
    </Swiper>
  )
}
