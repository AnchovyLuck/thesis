import NewArticleForm from '@/components/backoffice/NewArticleForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page () {
  const categoriesData = await getData('categories')
  const categories = categoriesData.map(category => {
    return {
      id: category.id,
      title: category.title
    }
  })
  return <NewArticleForm categories={categories}/>
}
