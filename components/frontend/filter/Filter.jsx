import React, { Suspense } from 'react'
import Breadcrumb from './Breadcrumb'
import Sorting from './Sorting'
import Filters from './Filters'
import FilteredProducts from './FilteredProducts'
import Loading from '@/app/Loading'

export default function Filter ({ category, displayProducts }) {
  const { title, slug } = category
  const productCount = category?.products?.length
  return (
    <div>
      <div className='bg-white space-y-6 text-slate-900 py-8 px-4 '>
        <Suspense fallback={<Loading />}>
          <Breadcrumb title={title} resultCount={productCount} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Sorting title={title} slug={slug} isSearch={category?.isSearch} />
        </Suspense>
      </div>
      <div className='grid grid-cols-12 py-8 gap-4'>
        <div className='col-span-3'>
          <Filters slug={slug} isSearch={category?.isSearch} />
        </div>
        <div className='col-span-9'>
          <Suspense fallback={<Loading />}>
            <FilteredProducts displayProducts={displayProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
