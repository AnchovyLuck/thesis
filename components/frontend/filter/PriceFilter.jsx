'use client'
import * as React from 'react'
import { ChevronsUpDown, Circle, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function PriceFilter ({ slug, isSearch }) {
  const searchParams = useSearchParams()
  console.log('search params: ' + searchParams)
  const minParam = searchParams.get('min')
  const maxParam = searchParams.get('max')
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
  const router = useRouter()
  const { handleSubmit, reset, register } = useForm()
  const onSubmit = data => {
    router.push(createPriceFilterUrl(data))
    reset()
  }
  const createPriceFilterUrl = range => {
    const params = new URLSearchParams(searchParams.toString())
    if (range.min) {
      params.set('min', range.min)
    } else {
      params.delete('min')
    }
    if (range.max) {
      params.set('max', range.max)
    } else {
      params.delete('max')
    }
    return isSearch
      ? `/search?${params.toString()}`
      : `/category/${slug}?${params.toString()}`
  }
  return (
    <div>
      <div className='px-5'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-medium'>Giá</h2>
          <Link
            href={`/category/${slug}`}
            className='text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800'
          >
            Đặt lại
          </Link>
        </div>
        <div className='flex flex-col gap-3'>
          {priceRanges.map((range, i) => {
            return (
              <Link
                className={
                  (range.max && range.max == maxParam) ||
                  (range.min && range.min == minParam) ||
                  (range.min &&
                    range.max &&
                    range.min === minParam &&
                    range.max === maxParam)
                    ? 'flex gap-2 items-center text-lime-500'
                    : 'flex gap-2 items-center'
                }
                key={i}
                href={createPriceFilterUrl(range)}
              >
                <Circle className='w-4 h-4 flex-shrink-0' />
                {range.display}
              </Link>
            )
          })}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-3 gap-4 my-4'
        >
          <div className='col-span-1'>
            <input
              {...register('min')}
              type='number'
              min='0'
              id='cvv-input'
              aria-describedby='helper-text-explanation'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
              placeholder='0'
            />
          </div>
          <div className='col-span-1'>
            <input
              {...register('max')}
              type='number'
              min='0'
              id='cvv-input'
              aria-describedby='helper-text-explanation'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
              placeholder='0'
            />
          </div>
          <div className='col-span-1'>
            <button
              type='submit'
              className='text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800'
            >
              Lọc
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
