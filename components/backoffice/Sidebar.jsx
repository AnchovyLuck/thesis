import Link from 'next/link'
import React from 'react'

export default function Sidebar () {
  return (
    <div className='bg-slate-700 space-y-6 w-60 h-screen text-slate-50 p-3 fixed left-0 top-0'>
      <Link className='mb-6' href='#'>
        Logo
      </Link>
      <div className='space-y-3 flex flex-col'>
        <Link href='#'>Tổng quan</Link>
        <Link href='#'>Danh mục</Link>
        <Link href='#'>Khách hàng</Link>
        <Link href='#'>Thị trường</Link>
        <Link href='#'>Nông dân</Link>
        <Link href='#'>Đơn hàng</Link>
        <Link href='#'>Nhân viên</Link>
        <Link href='#'>Cài đặt</Link>
        <Link href='#'>Cửa hàng trực tuyến</Link>
      </div>
    </div>
  )
}
