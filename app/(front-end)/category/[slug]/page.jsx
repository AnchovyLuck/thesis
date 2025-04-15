import Filter from '@/components/frontend/filter/Filter'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params, searchParams }) {
  const { sortBy = '', min = '', max = '', page = 1 } = await searchParams
  const { slug } = await params
  const category = await getData(`categories/filter/${slug}`)
  const allProducts = await getData(
    `products?catId=${category.id}&page=${page}&sortBy=${sortBy}&min=${min}&max=${max}`
  )
  const displayProducts = await getData(
    `products?catId=${category.id}&page=${page}&sortBy=${sortBy}&min=${min}&max=${max}`
  )
  return (
    <div>
      <Filter
        category={{ ...category, products: allProducts }}
        displayProducts={displayProducts}
      />
    </div>
  )
}
