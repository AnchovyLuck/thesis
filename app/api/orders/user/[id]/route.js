import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const order = await db.order.findMany({
      where: {
        userId: id
      },
      include: {
        orderItems: true
      }
    })
    return NextResponse.json(order)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị đơn hàng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}