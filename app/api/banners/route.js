import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, link, imageUrl, isActive } = await request.json()
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive
      }
    })
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
