import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const coupon = await db.coupon.findUnique({
      where: {
        id
      }
    })
    return NextResponse.json(coupon)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị mã khuyến mãi thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingCoupon = await db.coupon.findUnique({
      where: {
        id
      }
    })
    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy mã khuyến mãi!'
        },
        {
          status: 404
        }
      )
    }
    const deletedCoupon = await db.coupon.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedCoupon)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá mã khuyến mãi thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
