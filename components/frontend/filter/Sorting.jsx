import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from './Breadcrumb'

export default function Sorting () {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl'>Kết quả tìm kiếm - Rau củ làm sẵn</h2>
      <div className='flex text-sm items-center gap-3'>
        <p>Sắp xếp theo:</p>
        <div className='flex items-center'>
          <Link href='#' className='border border-slate-500 px-2 py-1'>
            Liên quan
          </Link>
          <Link href='#' className='border-y border-slate-500 px-2 py-1'>
            Giá cao đến thấp
          </Link>
          <Link href='#' className='border border-slate-500 px-2 py-1'>
            Giá thấp đến cao
          </Link>
        </div>
      </div>
    </div>
  )
}
