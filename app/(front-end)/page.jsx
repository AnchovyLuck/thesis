import ArticleList from '@/components/frontend/ArticleList'
import CategoryList from '@/components/frontend/CategoryList'
import Hero from '@/components/frontend/Hero'
import MarketList from '@/components/frontend/MarketList'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/frontend/Footer'

export default function page () {
  return (
    <>
      <Hero />
      <div className='py-4'>
        <MarketList />
      </div>
      <div className='py-4'>
        <CategoryList />
      </div>
      <div className='py-4'>
        <CategoryList />
      </div>
      <div className='py-4'>
        <CategoryList />
      </div>
      <div className='py-4'>
        <ArticleList />
      </div>
      <h2 className='text-3xl font-extrabold'>Chào mừng đến với website!</h2>
      <Link className='my-4 underline' href='/register-farmer'>
        Trở thành đối tác của chúng tôi!
      </Link>
    </>
  )
}
