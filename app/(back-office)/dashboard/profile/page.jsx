import CustomerForm from '@/components/backoffice/forms/CustomerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page () {
  const session = await getServerSession(authOptions)
  const { user } = session
  return (
    <div>
      <FormHeader title='Cập Nhật Tài Khoản' />
      <CustomerForm user={user} />
    </div>
  )
}
