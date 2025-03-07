import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const article = await db.article.findUnique({
      where: {
        id
      },
      include: {
        category: true
      }
    })
    return NextResponse.json(article)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị bài viết thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingArticle = await db.article.findUnique({
      where: {
        id
      },
      include: {
        category: true
      }
    })
    if (!existingArticle) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy bài viết!'
        },
        {
          status: 404
        }
      )
    }
    const deletedArticle = await db.article.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedArticle)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá bài viết thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function PUT (request, { params }) {
  const { id } = await params
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
        id
      }
    })
    if (!existingArticle) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy bài viết!'
        },
        {
          status: 404
        }
      )
    }
    const updatedArticle = await db.article.update({
      where: { id },
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
    return NextResponse.json(updatedArticle)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Cập nhật bài viết thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
