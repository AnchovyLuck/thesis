import { getData } from '@/lib/getData'
import React from 'react'
import ProductItem from '../ProductItem'
import Paginate from './Paginate'

export default async function FilteredProducts () {
  const products = await getData('products')
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((product, i) => {
          return <ProductItem key={i} product={product} />
        })}
      </div>
      <div className='pt-12 flex items-center justify-center'>
        <Paginate />
      </div>
    </>
  )
}
