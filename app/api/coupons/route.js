import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, couponCode, expiryDate, isActive, vendorId } = await request.json()
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
        vendorId
      }
    })
    return NextResponse.json(newCoupon)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm khuyến mãi thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(coupons)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách khuyến mãi thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
