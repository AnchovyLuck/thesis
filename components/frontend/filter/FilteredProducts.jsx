import React from 'react'
import ProductItem from '../ProductItem'
import Paginate from './Paginate'

export default async function FilteredProducts ({
  products = [],
  displayProducts = []
}) {
  const pageSize = 3
  const totalProductCount = products.length
  const totalPages = Math.ceil(totalProductCount / pageSize)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {displayProducts.length > 0 &&
          displayProducts.map((product, i) => {
            return <ProductItem key={i} product={product} />
          })}
      </div>
      <div className='pt-12 flex items-center justify-center'>
        <Paginate totalPages={totalPages} />
      </div>
    </>
  )
}
