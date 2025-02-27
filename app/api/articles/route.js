import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content
    } = await request.json()
    const existingArticle = await db.article.findUnique({
      where: {
        slug
      }
    })
    if (existingArticle) {
      return NextResponse.json(
        {
          data: null,
          message: 'Bài viết cùng tên đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const newArticle = await db.article.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        content
      }
    })
    return NextResponse.json(newArticle)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm bài viết thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(articles)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách bài viết thất bại!',
        error
      },
      { status: 500 }
    )
  }
}