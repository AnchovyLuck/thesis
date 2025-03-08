import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BaggageClaim } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'
import toast from 'react-hot-toast'

export default function ProductItem ({ product }) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(product))
    toast.success("Thêm vào giỏ hàng thành công!")
  }
  return (
    <div className='bg-slate-100 dark:bg-slate-700  rounded-lg shadow-md'>
      <Link
        href={`/products/${product.slug}`}
        className='flex flex-col items-center'
      >
        <div className='w-64 max-w-full h-32'>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={256}
            height={128}
            className='bg-slate-100 dark:bg-slate-700 rounded-t-lg'
          />
        </div>
        <h2 className='h-16 text-center text-slate-600 dark:text-slate-200 w-64 px-2 bg-slate-300 dark:bg-slate-800 border-0 font-semibold'>
          {product.title}
        </h2>
      </Link>
      <div className='flex items-center space-x-4 justify-center text-slate-600 dark:text-slate-200 w-full bg-slate-300 dark:bg-slate-800 rounded-b-lg py-2 px-4'>
        <p className='w-full'>
          {new Intl.NumberFormat('it-IT').format(product.salePrice)} VNĐ
        </p>
        <button
          onClick={() => handleAddToCart()}
          className='flex items-center justify-center gap-2 text-slate-200 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-lg w-full'
        >
          <BaggageClaim />
          <span>Thêm</span>
        </button>
      </div>
    </div>
  )
}
