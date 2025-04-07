'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import React from 'react'
import ProductItem from './ProductItem'

export default function CategoryCarousel ({ products, isMarketPage = false }) {
  return (
    <Swiper
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        1024: {
          slidesPerView: isMarketPage ? 3 : 5,
          spaceBetween: 5
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
      {products.length > 0 &&
        products.map((product, i) => {
          return (
            <SwiperSlide className='flex flex-col rounded-lg border-0 bg-slate-100 dark:bg-slate-700'>
              <ProductItem key={i} product={product} />
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}
