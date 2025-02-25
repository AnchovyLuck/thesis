import Navbar from '@/components/frontend/Navbar'
import React from 'react'

export default function Layout ({ children }) {
  return (
    <div className='bg-slate-50 dark:bg-slate-900 fixed w-full'>
      <Navbar/>
      <div className='mx-auto px-12 py-6 h-[calc(100vh-7rem)] overflow-y-auto mt-28'>{children}</div>
    </div>
  )
}
