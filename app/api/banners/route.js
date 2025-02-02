import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, link, imageUrl } = await request.json()
    const newBanner = { title, link, imageUrl }
    return NextResponse.json(newBanner)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm banner thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
