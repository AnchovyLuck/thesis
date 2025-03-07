import FormHeader from '@/components/backoffice/forms/FormHeader'
import CategoryForm from '@/components/backoffice/forms/CategoryForm'
import { getData } from '@/lib/getData'

export default async function page ({ params }) {
  const { id } = await params
  const category = await getData(`categories/${id}`)
  return (
    <div>
      <FormHeader title='Cập nhật Loại Sản Phẩm' />
      <CategoryForm updateData={category} />
    </div>
  )
}
