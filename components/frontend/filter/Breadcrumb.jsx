import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb () {
  return (
    <div className='flex items-center justify-between text-xs'>
      <div className='flex items-center'>
        <Link href='/'>Trang chủ</Link>
        <ChevronRight className='w-5 h-5' />
        <Link href='#'>Tìm kiếm</Link>
      </div>
      <p>1-40 trên 1000 kết quả</p>
    </div>
  )
}
