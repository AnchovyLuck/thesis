'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Sorting ({ title, slug, isSearch }) {
  const searchParams = useSearchParams()
  const sortingLinks = [
    {
      title: 'Liên quan',
      params: ''
    },
    {
      title: 'Giá cao đến thấp',
      params: 'desc'
    },
    {
      title: 'Giá thấp đến cao',
      params: 'asc'
    }
  ]
  const createSortingUrl = sortParams => {
    const params = new URLSearchParams(searchParams.toString())
    if (sortParams) {
      params.set('sortBy', sortParams)
    } else {
      params.delete('sortBy')
    }
    params.set('page', '1')

    return isSearch
      ? `/search?${params.toString()}`
      : `/category/${slug}?${params.toString()}`
  }
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl font-medium'>
        {isSearch && 'Kết quả tìm kiếm - '}
        {title}
      </h2>
      <div className='flex text-sm items-center gap-3'>
        <p>Sắp xếp theo:</p>
        <div className='flex items-center'>
          {sortingLinks.map((link, i) => {
            const currentSortBy = searchParams.get('sortBy') || ''
            return (
              <Link
                key={i}
                href={createSortingUrl(link.params)}
                className={`${
                  currentSortBy === link.params
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
