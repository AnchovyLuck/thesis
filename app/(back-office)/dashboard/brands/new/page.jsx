import BrandForm from '@/components/backoffice/forms/BrandForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page () {
  const categoriesData = await getData('categories')
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='Thêm Thương Hiệu' />
      <BrandForm categories={categories} />
    </div>
  )
}
