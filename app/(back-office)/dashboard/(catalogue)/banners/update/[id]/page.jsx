import BannerForm from '@/components/backoffice/forms/BannerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const banner = await getData(`banners/${id}`)
  return (
    <div>
      <FormHeader title='Thêm Banner' />
      <BannerForm updateData={banner} />
    </div>
  )
}
