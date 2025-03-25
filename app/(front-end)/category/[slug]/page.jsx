import Filter from '@/components/frontend/filter/Filter'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ params, searchParams }) {
  const { sort, min, max } = await searchParams
  const { page } = (await searchParams) || 1
  const { slug } = await params
  const category = await getData(`categories/filter/${slug}`)
  let displayProducts
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
  if (page) {
    query += `&page=${page}`
  }
  displayProducts = await getData(`products?catId=${category.id}${query}`)
  return (
    <div>
      <Filter
        category={category}
        displayProducts={displayProducts}
      />
    </div>
  )
}
