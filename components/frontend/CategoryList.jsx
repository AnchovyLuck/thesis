import Link from 'next/link'
import React from 'react'
import CategoryCarousel from './CategoryCarousel'

export default function CategoryList () {
  return (
    <div className='border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 overflow-y-hidden mt-3 shadow-md'>
      <div className='bg-slate-100 dark:bg-slate-800 py-8 px-6  text-slate-800 dark:text-slate-100 h-12 flex justify-between items-center'>
        <h2 className='font-bold'>Rau củ</h2>
        <Link
          className='bg-slate-300 hover:bg-slate-400 dark:bg-lime-900 dark:hover:bg-lime-800 text-slate-800 dark:text-slate-50 rounded-md px-4 py-2'
          href='#'
        >
          Xem thêm
        </Link>
      </div>
      <div className='px-8 py-4'>
        <CategoryCarousel />
      </div>
    </div>
  )
}
