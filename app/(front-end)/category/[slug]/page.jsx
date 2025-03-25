import Filter from '@/components/frontend/filter/Filter'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ params, searchParams }) {
  const { sort, min, max } = await searchParams
  const { slug } = await params
  const category = await getData(`categories/filter/${slug}`)
  let products
  let query = ''
  if (sort) {
    query += `&sort=${sort}`
  }
  if (min) {
    query += `&min=${min}`
  }
  if (max) {
    query += `&max=${max}`
  }
  products = await getData(`products?catId=${category.id}${query}`)
  return (
    <div>
      <Filter category={category} products={products} />
    </div>
  )
}
