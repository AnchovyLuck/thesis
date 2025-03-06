import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const brand = await db.brand.findUnique({
      where: {
        id
      },
      include: {
        products: true
      }
    })
    return NextResponse.json(brand)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị thương hiệu thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingBrand = await db.brand.findUnique({
      where: {
        id
      },
      include: {
        categories: true
      }
    })
    if (!existingBrand) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy thương hiệu!'
        },
        {
          status: 404
        }
      )
    }
    const deletedBrand = await db.brand.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedBrand)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá thương hiệu thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
