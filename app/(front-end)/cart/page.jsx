'use client'
import Breadcrumb from '@/components/frontend/Breadcrumb'
import CartItems from '@/components/frontend/CartItems'
import CartSubtotalCard from '@/components/frontend/CartSubtotalCard'
import EmptyCart from '@/components/frontend/EmptyCart'
import React from 'react'
import { useSelector } from 'react-redux'

export default function page () {
  const cartItems = useSelector(store => store.cart)
  const subTotal = cartItems.reduce((result, currentItem) => {
    return result + currentItem.salePrice * currentItem.qty
  }, 0)
  return (
    <div>
      <Breadcrumb />
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
