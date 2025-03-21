'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import logo from '../../public/logo-nocap.png'
import { generateIsoFormattedDate } from '@/lib/generateIsoFormattedDate'
import { numberWithCommas } from '@/lib/numberWithCommas'
import { useReactToPrint } from 'react-to-print'
export default function SalesInvoice ({ order }) {
  const invoiceDate = generateIsoFormattedDate(order.createdAt)
  const invoiceDay = new Date(invoiceDate).getDate()
  const invoiceMonth = new Date(invoiceDate).getMonth()
  const invoiceYear = new Date(invoiceDate).getFullYear()
  const subTotal = order.orderItems.reduce((result, currentItem) => {
    return result + currentItem.price * currentItem.quantity
  }, 0)
  const total = subTotal + order.shippingCost
  const contentRef = useRef()
  const handlePrint = useReactToPrint({
    contentRef
  })
  return (
    <div className='flex flex-col'>
      <div className='flex items-end justify-end mb-8'>
        <button
          onClick={() => handlePrint()}
          type='button'
          className='inline-flex items-center justify-center px-4 py-3 text-xs font-bold dark:text-gray-900 transition-all duration-200 bg-slate-800 hover:bg-slate-900 dark:bg-slate-300 text-slate-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:hover:bg-gray-200'
        >
          Tải/In hoá đơn
        </button>
      </div>
      <div ref={contentRef}>
        <div className='max-w-6xl mx-auto border border-gray-500 p-8 rounded-sm text-slate-800 dark:text-slate-200 bg-slate dark:bg-slate-800'>
          {/* Header */}
          <div className='flex justify-between border-b border-gray-500 pb-8'>
            <div className='flex flex-col justify-center'>
              <h2>Bên bán:</h2>
              <p>Online Shop</p>
            </div>
            <Image src={logo} alt='logo' className='w-36 h-36' />
          </div>
          {/* Header End */}
          <div className='flex justify-between border-b border-gray-500 py-8'>
            <div className='flex flex-col'>
              <h2>Bên mua:</h2>
              <p>
                {order.firstName} {order.lastName}
              </p>
              <p>
                Đường {order.streetAddress}, {order.ward}, {order.district},{' '}
                {order.province}
              </p>
              <p>{order.email}</p>
            </div>
            <div className='flex flex-col items-stretch'>
              <div className='flex justify-between gap-x-8'>
                <p>Hoá đơn</p>
                <p>#{order.orderNumber}</p>
              </div>
              <div className='flex justify-between gap-x-8'>
                <p>Ngày tạo</p>
                <p>
                  {invoiceDay}/{invoiceMonth}/{invoiceYear}
                </p>
              </div>
              <div className='flex justify-between gap-x-8'>
                <p>Tạm tính</p>
                <p>{numberWithCommas(subTotal)} VNĐ</p>
              </div>
            </div>
          </div>

          <div className='relative overflow-x-auto '>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Sản phẩm
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Số lượng
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Đơn giá
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Thành tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                    >
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        {item.title}
                      </th>
                      <td className='px-6 py-4 text-center'>{item.quantity}</td>
                      <td className='px-6 py-4'>
                        {numberWithCommas(item.price)} VNĐ
                      </td>
                      <td className='px-6 py-4'>
                        {numberWithCommas(item.price * item.quantity)} VNĐ
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className='flex justify-between border-b border-gray-500 py-8'>
            <div className='flex flex-col'>
              <h2>Lưu ý</h2>
              <p className='max-w-64'>
                Miễn phí vận chuyển khi trả hàng trong vòng 30 ngày.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between gap-x-8'>
                <p>Tạm tính</p>
                <p>{numberWithCommas(subTotal)} VNĐ</p>
              </div>
              <div className='flex justify-between gap-x-8'>
                <p>Phí vận chuyển</p>
                <p>
                  {subTotal >= 100000
                    ? 'Miễn phí'
                    : numberWithCommas(order.shippingCost) + ' VNĐ'}{' '}
                </p>
              </div>
              <div className='flex justify-between gap-x-8'>
                <p>Tổng cộng</p>
                <p>{numberWithCommas(total)} VNĐ</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center pt-8'>
            <Image src={logo} alt='logo' className='w-36 h-36' />
          </div>
        </div>
      </div>
    </div>
  )
}
