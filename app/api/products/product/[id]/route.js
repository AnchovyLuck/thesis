import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const product = await db.product.findUnique({
      where: {
        id
      },
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