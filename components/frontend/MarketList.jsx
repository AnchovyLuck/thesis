import React from 'react'
import MarketCarousel from './MarketCarousel'

export default function MarketList() {
  return (
    <div className='text-white py-4 px-8 bg-slate-50 shadow-md dark:bg-lime-900 rounded-lg'>
        <h2 className='py-2 text-center text-2xl text-slate-900 dark:text-slate-50 font-bold pb-4'>Danh sách chợ</h2>
        <MarketCarousel />
    </div>
  )
}
