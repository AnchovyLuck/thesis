import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import { HandCoins, HelpCircle, RotateCw } from 'lucide-react'
import advert from '../../public/adv.gif'
import SidebarCategories from './SidebarCategories'
import { getData } from '@/lib/getData'

export default async function Hero () {
  const banners = await getData("banners")
  return (
    <div className='grid grid-cols-12 gap-4 mb-6'>
      <SidebarCategories />
      <div className='col-span-full lg:col-span-7 bg-blue-600 rounded-md h-[350px] shadow-md'>
        <HeroCarousel banners={banners}/>
      </div>
      <div className='col-span-2 hidden lg:block bg-white dark:bg-slate-800 rounded-lg shadow-md h-[350px] overflow-y-hidden'>
        <div className='overflow-y-auto h-[174px]'>
          <Link
            href='#'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <HelpCircle className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Trung tâm hỗ trợ</h2>
              <p className='text-[0.6rem]'>Dịch vụ chăm sóc khách hàng</p>
            </div>
          </Link>
          <Link
            href='#'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <RotateCw className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Trả hàng</h2>
              <p className='text-[0.6rem]'>Trả hàng nhanh chóng</p>
            </div>
          </Link>
          <Link
            href='/register-farmer'
            className='flex items-center justify-start space-x-3 p-3'
          >
            <HandCoins className='w-5 h-5 dark:text-lime-500' />
            <div className='flex flex-col gap-2 w-48'>
              <h2 className='uppercase text-sm'>Bán hàng</h2>
              <p className='text-[0.6rem]'>Đồng hành cùng chúng tôi</p>
            </div>
          </Link>
        </div>
        <div className='p-2'>
          <Image
            src={advert}
            alt='advert'
            className='w-full h-40 rounded-lg'
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
