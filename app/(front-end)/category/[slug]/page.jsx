import Filter from '@/components/frontend/filter/Filter'
import React from 'react'

export default async function page ({ params }) {
  const { slug } = await params
  return (
    <div>
      <Filter />
    </div>
  )
}
