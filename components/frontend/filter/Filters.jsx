import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import { Suspense } from 'react'
import Loading from '@/app/Loading'

export default function Filters ({ slug, isSearch }) {
  return (
    <div className='bg-slate-100 dark:bg-slate-800'>
      <h2 className='text-center text-xl'>Bộ lọc</h2>
      <Suspense fallback={<Loading />}>
        <PriceFilter slug={slug} isSearch={isSearch} />
      </Suspense>
      <BrandFilter />
    </div>
  )
}
