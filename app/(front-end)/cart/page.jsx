'use client'
import Loading from '@/app/Loading'
import Breadcrumb from '@/components/frontend/Breadcrumb'
import CartItems from '@/components/frontend/CartItems'
import CartSubtotalCard from '@/components/frontend/CartSubtotalCard'
import EmptyCart from '@/components/frontend/EmptyCart'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'

export default function page () {
  const cartItems = useSelector(store => store.cart)
  console.log(cartItems)
  const subTotal = cartItems.reduce((result, currentItem) => {
    return result + currentItem.salePrice * currentItem.qty
  }, 0)
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Breadcrumb title='Giỏ hàng' />
      </Suspense>
      {cartItems.length > 0 ? (
        <div className='grid grid-cols-12 gap-14'>
          <CartItems cartItems={cartItems} />
          <CartSubtotalCard subTotal={subTotal} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
