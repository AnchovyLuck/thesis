import FormHeader from '@/components/backoffice/forms/FormHeader'
import ProductForm from '@/components/backoffice/forms/ProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page () {
  const categoriesData = await getData('categories')
  const usersData = await getData('users')
  const farmersData = usersData.filter(user => user.role === 'FARMER')
  const farmers = farmersData.map(farmer => {
    return {
      id: farmer.id,
      title: farmer.userName
    }
  })
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='Thêm Sản Phẩm' />
      <ProductForm categories={categories} farmers={farmers} />
    </div>
  )
}
