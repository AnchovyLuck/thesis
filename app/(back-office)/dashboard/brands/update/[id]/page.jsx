import BrandForm from '@/components/backoffice/forms/BrandForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ params }) {
  const { id } = await params
  const brand = await getData(`brands/${id}`)
  const categoriesData = await getData('categories')
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='Cập nhật Thương Hiệu' />
      <BrandForm categories={categories} updateData={brand} />
    </div>
  )
}
