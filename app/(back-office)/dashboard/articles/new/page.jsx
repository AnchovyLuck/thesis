import ArticleForm from '@/components/backoffice/forms/ArticleForm'
import FormHeader from '@/components/backoffice/forms/FormHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export const dynamic = 'force-dynamic';
export default async function page () {
  const categoriesData = await getData('categories')
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return (
    <div>
      <FormHeader title='Thêm bài viết' />
      <ArticleForm categories={categories} />
    </div>
  ) 
}
