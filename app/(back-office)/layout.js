'use client'
import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React, { useState } from 'react'

export default function Layout ({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='flex'>
      <Sidebar showSidebar={showSidebar} />
      <div className='flex-grow bg-slate-100'>
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <main
          className={
            showSidebar
              ? 'p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-20 min-h-screen ml-64 h-[calc(100vh-6.5rem)] lg:h[calc(100vh-5rem)]'
              : 'p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-20 min-h-screen h-[calc(100vh-6.5rem)] lg:h[calc(100vh-5rem)]'
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
