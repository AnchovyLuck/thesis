import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, slug, logoUrl, description } = await request.json()
    const newMarket = { title, slug, logoUrl, description }
    return NextResponse.json(newMarket)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm chợ thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
