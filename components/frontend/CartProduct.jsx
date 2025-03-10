"use client"
import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { numberWithCommas } from '@/lib/numberWithCommas'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartSlice'
import toast from 'react-hot-toast'

export default function CartProduct ({ cartItem }) {
  const dispatch = useDispatch()
  const handleCartItemDelete = cartId => {
    dispatch(removeFromCart(cartId))
    toast.success("Xoá sản phẩm thành công!")
  }
  const handleQtyIncrement = cartId => {
    dispatch(incrementQty(cartId))
  }
  const handleQtyDecrement = cartId => {
    dispatch(decrementQty(cartId))
  }
  return (
    <div className='flex items-center justify-between border-b border-slate-400 text-slate-600 dark:text-slate-100 font-bold text-sm py-3'>
      <div className='w-80 flex items-center gap-3'>
        <Image
          src={cartItem.imageUrl}
          width={128}
          height={128}
          alt={cartItem.title}
          className='rounded-xl w-32 h-32'
        />
        <h2>{cartItem.title}</h2>
      </div>
      <div className='col-span-3 rounded-xl border border-gray-400 flex gap-3 items-center'>
        <button onClick={() => handleQtyDecrement(cartItem.id)} className='border-r border-gray-400 p-2'>
          <Minus />
        </button>
        <p className='flex-grow px-2'>{cartItem.qty}</p>
        <button onClick={() => handleQtyIncrement(cartItem.id)} className='border-l border-gray-400 p-2'>
          <Plus />
        </button>
      </div>
      <div className='col-span-3 flex items-center gap-2'>
        <h4>{numberWithCommas(cartItem.salePrice)} VNĐ</h4>
        <button onClick={() => handleCartItemDelete(cartItem.id)}>
          <Trash2 className='text-red-600 w-5 h-5' />
        </button>
      </div>
    </div>
  )
}
