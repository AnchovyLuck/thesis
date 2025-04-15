import CouponForm from '@/components/backoffice/forms/CouponForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const coupon = await getData(`coupons/${id}`)
  return (
    <div>
      <FormHeader title='Thêm Khuyến Mãi' />
      <CouponForm updateData={coupon} />
    </div>
  )
}
