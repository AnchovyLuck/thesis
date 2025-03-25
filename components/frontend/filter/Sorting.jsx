'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Sorting ({ title, slug }) {
  const pathname = usePathname()
  const [params, setParams] = useState('')
  const sortingLinks = [
    {
      title: 'Liên quan',
      params: ''
    },
    {
      title: 'Giá cao đến thấp',
      params: '?sort=desc'
    },
    {
      title: 'Giá thấp đến cao',
      params: '?sort=asc'
    }
  ]
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl font-medium'>{title}</h2>
      <div className='flex text-sm items-center gap-3'>
        <p>Sắp xếp theo:</p>
        <div className='flex items-center'>
          {sortingLinks.map((link, i) => {
            const actualPathName = `${pathname}${link.params}`
            return (
              <Link
                key={i}
                href={actualPathName}
                onClick={() => setParams(link.params)}
                className={`${
                  params === link.params
                    ? 'border-2 bg-slate-800 border-lime-400 px-2 py-1 text-lime-400 -mx-0.5 z-0'
                    : 'border-2 border-slate-500 px-2 py-1 -mr-0.5'
                }`}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
