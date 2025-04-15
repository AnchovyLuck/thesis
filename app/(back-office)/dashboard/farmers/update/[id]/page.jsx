import FarmerForm from '@/components/backoffice/forms/FarmerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const farmer = await getData(`farmers/${id}`)
  return (
    <div>
      <FormHeader title='Cập Nhật Nông Dân' />
      <FarmerForm updateData={farmer} />
    </div>
  )
}
