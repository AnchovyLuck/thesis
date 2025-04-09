'use client'
import React from 'react'
import ProductItem from '../ProductItem'
import Paginate from './Paginate'
import { useSearchParams } from 'next/navigation'

export default function FilteredProducts ({ displayProducts = [] }) {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page') || '1')
  const pageSize = 3

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  let paginatedProducts = []
  if (displayProducts.length > 0) {
    paginatedProducts = displayProducts.slice(startIndex, endIndex)
  }
  const totalProductCount = displayProducts.length
  const totalPages = Math.ceil(totalProductCount / pageSize)
  console.log('paginated products', paginatedProducts)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {paginatedProducts.length > 0 &&
          paginatedProducts.map((product, i) => {
            return <ProductItem key={i} product={product} />
          })}
      </div>
      {totalPages > 1 && (
        <div className='pt-12 flex items-center justify-center'>
          <Paginate totalPages={totalPages} />
        </div>
      )}
    </>
  )
}
