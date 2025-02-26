import Link from 'next/link'
import React from 'react'
import ArticleCarousel from './ArticleCarousel'

export default function ArticleList () {
  return (
    <div className='border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 overflow-y-hidden mt-3 shadow-md'>
      <div className='bg-slate-100 dark:bg-slate-800 py-8 px-6  text-slate-800 dark:text-slate-100 h-12 flex justify-between items-center'>
        <h2 className='font-bold'>Bài viết</h2>
        
      </div>
      <div className='px-8 py-4'>
        <ArticleCarousel />
      </div>
    </div>
  )
}
