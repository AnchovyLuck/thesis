import React from 'react'
import MarketCarousel from './MarketCarousel'
import { getData } from '@/lib/getData'

export default async function MarketList() {
  const markets = await getData("markets")
  return (
    <div className='text-white py-4 px-8 bg-slate-300 shadow-md dark:bg-lime-900 rounded-lg'>
        <h2 className='py-2 text-center text-2xl text-slate-900 dark:text-slate-50 font-bold pb-4'>Danh sách chợ</h2>
        <MarketCarousel markets={markets}/>
    </div>
  )
}
