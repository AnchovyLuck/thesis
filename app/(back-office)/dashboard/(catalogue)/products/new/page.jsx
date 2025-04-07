import FormHeader from '@/components/backoffice/forms/FormHeader'
import ProductForm from '@/components/backoffice/forms/ProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page () {
  const categoriesData = await getData('categories')
  const brandsData = await getData('brands')
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
  const brands = brandsData.map(brand => {
    return {
      id: brand.id,
      title: brand.title
    }
  })
  brands.unshift({ id: '111', title: 'Không có thương hiệu' })
  return (
    <div>
      <FormHeader title='Thêm Sản Phẩm' />
      <ProductForm categories={categories} brands={brands} farmers={farmers} />
    </div>
  )
}
