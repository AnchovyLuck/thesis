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

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingCategory = await db.category.findUnique({
      where: {
        id
      },
      include: {
        products: true
      }
    })
    if (!existingCategory) {
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
    const deletedCategory = await db.category.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedCategory)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá loại sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
