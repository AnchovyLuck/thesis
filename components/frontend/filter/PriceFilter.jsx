'use client'
import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import Link from 'next/link'

export default function PriceFilter ({ slug }) {
  const priceRanges = [
    {
      display: 'Dưới 10,000đ',
      max: 9999
    },
    {
      display: 'Từ 10,000đ đến 20,000đ',
      min: 10000,
      max: 20000
    },
    {
      display: 'Từ 20,000đ đến 30,000đ',
      min: 20000,
      max: 30000
    },
    {
      display: 'Từ 30,000đ trở lên',
      min: 30000
    }
  ]
  return (
    <div>
      <div className='px-5'>
        <div className='flex justify-between'>
          <h2>Giá</h2>
          <Link href={`/category/${slug}?sort=asc`}>Đặt lại</Link>
        </div>
        <div className='flex flex-col gap-3'>
          {priceRanges.map((range, i) => {
            return (
              <Link
                key={i}
                href={
                  range.max && range.min
                    ? `/category/${slug}?sort=asc&min=${range.min}&max=${range.max}`
                    : range.max
                    ? `/category/${slug}?sort=asc&max=${range.max}`
                    : range.min
                    ? `/category/${slug}?sort=asc&min=${range.min}`
                    : `/category/${slug}?sort=asc`
                }
              >
                {range.display}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
