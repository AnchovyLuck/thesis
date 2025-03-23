import CustomerForm from '@/components/backoffice/forms/CustomerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page ({ params }) {
  const { id } = await params
  const user = await getData(`users/${id}`)
  return (
    <div>
      <FormHeader title='Cập Nhật Khách Hàng' />
      <CustomerForm user={user} />
    </div>
  )
}
