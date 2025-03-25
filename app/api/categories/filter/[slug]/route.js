import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { slug } = await params
  try {
    const category = await db.category.findUnique({
      where: {
        slug
      },
      include: {
        products: true
      }
    })
    if (!category) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy loại sản phẩm!'
        },
        {
          status: 404
        }
      )
    }
    return NextResponse.json(category)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị loại sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}