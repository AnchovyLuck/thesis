import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'

export default function Layout ({ children }) {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar />
      <div className='w-full'>
        {/* Header */}
        <Navbar />
        <main className='p-8 bg-slate-950 text-slate-50 min-h-screen mt-16 ml-60'>
          {children}
        </main>
        {/* Main */}
      </div>
      {/*Main Body*/}
    </div>
  )
}
