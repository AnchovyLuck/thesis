import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, slug, logoUrl, description, isActive } = await request.json()
    const newMarket = db.market.create({
      data: {
        title,
        slug,
        logoUrl,
        description,
        isActive
      }
    })
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
