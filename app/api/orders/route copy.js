import db from '@/lib/db'
import { generateOrderNumber } from '@/lib/generateOrderNumber'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { checkoutFormData, orderItems } = await request.json()
    const {
      userId,
      firstName,
      lastName,
      email,
      phone,
      streetAddress,
      ward,
      district,
      province,
      zipCode,
      shippingCost,
      paymentMethod
    } = checkoutFormData
    const newOrder = await db.order.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        ward,
        district,
        province,
        zipCode,
        shippingCost: parseFloat(shippingCost),
        paymentMethod,
        orderNumber: generateOrderNumber(8)
      }
    })

    const newOrderItems = await prisma.orderItem.createMany({
      data: orderItems.map(item => ({
        productId: item.id,
        vendorId,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        orderId: newOrder.id,
        imageUrl: item.imageUrl,
        title: item.title,
      }))
    })
    return NextResponse.json(newOrder)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm đơn hàng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        orderItems: true
      }
    })
    return NextResponse.json(orders)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách đơn hàng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
