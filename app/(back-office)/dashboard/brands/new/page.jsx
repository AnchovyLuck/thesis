import NewBrandForm from '@/components/backoffice/NewBrandForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function NewMarket() {
  const categoriesData = await getData("categories")
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    }
  })
  return (
    <NewBrandForm categories={categories}/>
  )
}
