import React from 'react'
import { getData } from '@/lib/getData'
import BrandCarousel from './BrandCarousel'

export const dynamic = 'force-dynamic';
export default async function BrandList() {
  const brands = await getData("brands")
  return (
    <div className='text-white py-4 px-8 bg-slate-300 shadow-md dark:bg-lime-900 rounded-lg'>
        <h2 className='py-2 text-center text-2xl text-slate-900 dark:text-slate-50 font-bold pb-4'>Danh sách thương hiệu</h2>
        <BrandCarousel brands={brands}/>
    </div>
  )
}
