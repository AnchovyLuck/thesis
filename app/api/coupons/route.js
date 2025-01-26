import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { title, couponCode, expiryDate } = await request.json()
    const newCoupon =  { title, couponCode, expiryDate }
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
