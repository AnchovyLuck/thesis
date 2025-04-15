import BrandForm from '@/components/backoffice/forms/BrandForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const brand = await getData(`brands/${id}`)
  const productsData = await getData('products')
  const products = productsData.map(product => {
    return {
      id: product.id,
      title: product.title
    }
  })
  return (
    <div>
      <FormHeader title='Cập nhật Thương Hiệu' />
      <BrandForm products={products} updateData={brand} />
    </div>
  )
}
