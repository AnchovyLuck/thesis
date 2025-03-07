import FormHeader from '@/components/backoffice/forms/FormHeader'
import CategoryForm from '@/components/backoffice/forms/CategoryForm'

export default function page () {
  return (
    <div>
      <FormHeader title='Thêm Loại Sản Phẩm' />
      <CategoryForm />
    </div>
  )
}
