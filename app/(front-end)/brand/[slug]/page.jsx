import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import React from 'react'

export default async function page ({ params }) {
  const { slug } = await params
  const brand = await getData(`brands/details/${slug}`)
  return (
    <>
      <Breadcrumb title={`Thương hiệu ${brand.title}`} />
      <div className='bg-white border rounded-lg dark:bg-gray-800 dark:text-slate-200 p-4'>
        <div className='flex items-center justify-between gap-12'>
          <div className=''>
            <Image
              src={brand.logoUrl}
              width={50}
              height={50}
              alt={brand.title}
              className='w-28 h-28 rounded-md'
            />
          </div>
          <div className='w-full'>
            <h2 className='py-4 text-xl lg:text-4xl'>{brand.title}</h2>
            <p className='text-sm line-clamp-2 mb-4'>{brand.description}</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4 py-8 w-full'>
        <div className='col-span-full lg:col-span-12 rounded-md  shadow-md'>
          <CategoryCarousel isMarketPage={true} products={brand.products} />
        </div>
      </div>
    </>
  )
}
