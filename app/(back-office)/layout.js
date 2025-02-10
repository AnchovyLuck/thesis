'use client'
import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React, { useState } from 'react'

export default function Layout ({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='flex'>
      <Sidebar showSidebar={showSidebar} />
      <div className='flex-grow bg-slate-100 fixed w-full'>
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <main
          className={
            showSidebar
              ? 'p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 h-[calc(100vh-5rem)] w-[calc(100vw-16rem)] ml-64 overflow-y-auto'
              : 'p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 h-[calc(100vh-5rem)] overflow-y-auto'
          }
        >
          {children}
        </main>
        {/* Main */}
      </div>
      {/*Main Body*/}
    </div>
  )
}
