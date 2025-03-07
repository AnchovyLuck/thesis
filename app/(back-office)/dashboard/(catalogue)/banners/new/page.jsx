'use client'
import BannerForm from '@/components/backoffice/forms/BannerForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'

export default function NewBanner () {
  return (
    <div>
      <FormHeader title='Thêm Banner' />
      <BannerForm />
    </div>
  )
}
