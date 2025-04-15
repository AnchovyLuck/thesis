import Filter from '@/components/frontend/filter/Filter'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ searchParams }) {
  const { sortBy = '', min = '', max = '', page = 1 , search} = await searchParams
  let query = ''
  if (search) {
    query += `${search}`
  }
  const displayProducts = await getData(
      `products?search=${query}&page=${page}&sortBy=${sortBy}&min=${min}&max=${max}`
    )
  const category = {
    title: search,
    slug: '',
    products: displayProducts,
    isSearch: true
  }
  return (
    <div>
      <Filter category={category} displayProducts={category.products} />
    </div>
  )
}
