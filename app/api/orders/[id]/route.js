import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const order = await db.order.findUnique({
      where: {
        id
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

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingOrder = await db.order.findUnique({
      where: {
        id
      }
    })
    if (!existingOrder) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy đơn hàng!'
        },
        {
          status: 404
        }
      )
    }
    const deletedOrder = await db.order.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedOrder)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá đơn hàng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
