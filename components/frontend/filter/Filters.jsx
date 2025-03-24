import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'

export default function Filters () {
  return (
    <div className='bg-slate-100 dark:bg-slate-800'>
      <h2 className="text-center text-xl">Bộ lọc</h2>
      <PriceFilter />
      <BrandFilter />
    </div>
  )
}
