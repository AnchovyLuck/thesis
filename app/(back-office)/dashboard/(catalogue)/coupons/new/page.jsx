'use client'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import CouponForm from '@/components/backoffice/forms/CouponForm'

export default function page () {
  return (
    <div>
      <FormHeader title='Thêm Khuyến Mãi' />
      <CouponForm />
    </div>
  )
}
