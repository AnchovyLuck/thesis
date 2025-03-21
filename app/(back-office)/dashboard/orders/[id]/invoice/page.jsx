import SalesInvoice from '@/components/order/SalesInvoice'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ params }) {
  const { id } = await params
  const order = await getData(`orders/${id}`)
  return <SalesInvoice order={order} />
}
