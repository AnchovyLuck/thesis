import Breadcrumb from '@/components/frontend/Breadcrumb'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import { getData } from '@/lib/getData'
import { numberWithCommas } from '@/lib/numberWithCommas'
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page ({ params }) {
  const { slug } = await params
  const product = await getData(`/products/product/${slug}`)
  const category = await getData(`/categories/${product.categoryId}`)
  return (
    <div>
      <Breadcrumb />
      <div className='grid grid-cols-12 space-x-4'>
        <div className='col-span-3'>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={256}
            height={256}
            className='w-full'
          />
        </div>
        <div className='col-span-9 lg:col-span-6'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl lg:text-3xl font-semibold'>
              {product.title}
            </h2>
            <button>
              <Share2 />
            </button>
          </div>
          <div className='border-b border-gray-600 dark:border-gray-300'>
            <p className='py-2'>{product.description}</p>
            <div className='flex items-center gap-8 mb-4'>
              <p>SKU: {product.sku}</p>
              <p className='bg-lime-200 py-1.5 px-4 rounded-full text-slate-900'>
                Còn <b>{product.productStock}</b> sản phẩm
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4 py-4 border-b border-gray-600 dark:border-gray-300 mb-8'>
            <div className='flex items-center gap-4 w-full'>
              {product.salePrice < product.productPrice ? (
                <>
                  <h4 className='text-2xl'>
                    {numberWithCommas(product.salePrice)} VNĐ
                  </h4>
                  <del className='text-slate-400'>
                    {numberWithCommas(product.productPrice)} VNĐ
                  </del>
                </>
              ) : (
                <h4 className='text-2xl'>
                  {numberWithCommas(product.productPrice)} VNĐ
                </h4>
              )}
            </div>
            {product.salePrice < product.productPrice ? (
              <>
                <p className='flex items-center justify-end w-full'>
                  <Tag className='w-5 h-5 me-2' />
                  <span>
                    Giảm {' '}
                    {(100 - (product.salePrice / product.productPrice) * 100).toFixed(0)}
                    %
                  </span>
                </p>
              </>
            ) : (
              ''
            )}
          </div>
          <div className='flex justify-between gap-3 items-center py-6'>
            <button className='flex items-center justify-center gap-2 text-slate-200 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-lg'>
              <BaggageClaim />
              <span>Thêm vào giỏ hàng</span>
            </button>
          </div>
        </div>
        <div className='col-span-3 hidden md:block bg-slate-100 border rounded-lg dark:bg-gray-600 text-slate-800 overflow-y-hidden'>
          <h2 className=' py-3 px-6 font-bold text-slate-800 dark:text-slate-100'>
            ĐƠN VỊ VẬN CHUYỂN
          </h2>
          <div className='p-4'>
            <div className='flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3'>
              <span>Online Express</span>
              <Send />
            </div>
            <div className='py-3 text-slate-800 dark:text-slate-100 border-b border-gray-500'>
              Giao hàng đúng giờ.
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 my-8 bg-slate-100 dark:bg-slate-700 rounded-lg'>
        <h2 className='mb-4 text-xl font-semibold'>Sản phẩm cùng loại</h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  )
}
