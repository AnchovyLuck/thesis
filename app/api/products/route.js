import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const productData = await request.json()
    return NextResponse.json(productData)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
