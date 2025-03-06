import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const product = await db.product.findUnique({
      where: {
        id
      },
      include: {
        category: true,
        user: true
      }
    })
    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        id
      },
      include: {
        category: true,
        user: true
      }
    })
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy sản phẩm!'
        },
        {
          status: 404
        }
      )
    }
    const deletedProduct = await db.product.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedProduct)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
