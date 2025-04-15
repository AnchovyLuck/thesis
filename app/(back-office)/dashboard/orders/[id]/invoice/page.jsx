import SalesInvoice from '@/components/order/SalesInvoice'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const order = await getData(`orders/${id}`)
  return <SalesInvoice order={order} />
}
