import OrderCard from '@/components/order/OrderCard'
import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page () {
  const session = await getServerSession(authOptions)
  if (!session) return
  const userId = session?.user?.id
  const userOrders = await getData(`orders/user/${userId}`)
  if (userOrders.length === 0 || !userOrders) {
    return (
      <div className='text-center py-12'>
        <h1 className='text-xl font-bold text-gray-900'>Chưa có đơn hàng nào.</h1>
      </div>
    )
  }
  return (
    <section className='py-12 bg-white dark:bg-slate-900 dark:text-slate-200 sm:py-16 lg:py-20'>
      <div className='px-4 m-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-6xl mx-auto'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-slate-200 sm:text-3xl'>
              Danh sách các đơn hàng của bạn
            </h1>
            <p className='mt-2 text-sm font-normal text-gray-600 dark:text-slate-400'>
              Kiểm tra trạng thái các đơn hàng.
            </p>
          </div>

          <ul className='mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10'>
            {
              userOrders.map((order, i) => {
                return (
                  <OrderCard order={order} key={i}/>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
