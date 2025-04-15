import ArticleForm from '@/components/backoffice/forms/ArticleForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page ({ params }) {
  const { id } = await params
  const article = await getData(`articles/${id}`)
  const categoriesData = await getData('categories')
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='Cập nhật bài viết' />
      <ArticleForm categories={categories} updateData={article} />
    </div>
  )
}
