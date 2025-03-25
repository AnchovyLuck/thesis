import Filter from '@/components/frontend/filter/Filter'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ searchParams }) {
  const { sort, min, max, search } = await searchParams
  const { page } = (await searchParams) || 1
  let displayProducts
  let query = ''
  if (search) {
    query += `${search}`
  }
  console.log(query)
  displayProducts = await getData(`products?search=${query}`)
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
