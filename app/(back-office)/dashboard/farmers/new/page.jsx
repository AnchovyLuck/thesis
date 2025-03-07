'use client'
import FarmerForm from '@/components/backoffice/forms/FarmerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import React from 'react'

export default function page () {
  return (
    <div>
      <FormHeader title='Thêm Nông Dân' />
      <FarmerForm />
    </div>
  )
}
