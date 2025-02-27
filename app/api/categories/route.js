import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json()
    const existingCategory = await db.category.findUnique({
      where: {
        slug
      }
    })
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: 'Loại sản phẩm đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const newCategory = await db.category.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive
      }
    })

    return NextResponse.json(newCategory)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm loại sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        products: true
      }
    })
    return NextResponse.json(categories)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách loại sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
