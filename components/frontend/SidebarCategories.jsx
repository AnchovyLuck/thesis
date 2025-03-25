import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function SidebarCategories () {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter(
    category => category.products.length > 0
  )
  return (
    <div className='hidden lg:block col-span-3 bg-white border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden h-[350px]'>
      <h2
        className='bg-slate-100 dark:bg-slate-700 py-3 px-6 font-bold
    border-b border-slate-300 dark:border-slate-500 text-slate-800 dark:text-slate-100 h-12'
      >
        Các loại sản phẩm ({categories.length})
      </h2>
      <div className='h-[300px] overflow-y-auto flex flex-col gap-2'>
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              className='py-3 px-6 font-semibold hover:bg-slate-200 duration-75 transition-all dark:text-slate-300 dark:hover:bg-slate-500 rounded-md'
            >
              <Link
                href={`/category/${category.slug}`}
                className='flex items-center gap-3 '
              >
                <Image
                  src={category.imageUrl}
                  width={556}
                  height={556}
                  className='w-12 h-12 rounded-full object-cover border border-lime-300'
                  alt={category.title}
                />
                <span className='text-sm'>{category.title}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
