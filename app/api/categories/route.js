import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, slug, imageUrl, description } = await request.json()
    const newCategory = { title, slug, imageUrl, description }
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
