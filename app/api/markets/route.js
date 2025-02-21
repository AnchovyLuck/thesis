import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, slug, logoUrl, description, isActive, categoryIds } = await request.json()
    const existingMarket = await db.market.findUnique({
      where: {
        slug
      }
    })
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: 'Chợ đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const newMarket = await db.market.create({
      data: { title, slug, logoUrl, description, isActive, categoryIds }
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

export async function GET (request) {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(markets)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách chợ thất bại!',
        error
      },
      { status: 500 }
    )
  }
}