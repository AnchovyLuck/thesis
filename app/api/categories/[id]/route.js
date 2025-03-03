import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const category = await db.category.findUnique({
      where: {
        id
      },
      include: {
        products: true
      }
    })
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
