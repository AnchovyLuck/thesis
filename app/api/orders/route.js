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

    const result = await db.$transaction(async prisma => {
      const newOrder = await prisma.order.create({
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
          vendorId: item.vendorId,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          orderId: newOrder.id,
          imageUrl: item.imageUrl,
          title: item.title
        }))
      })

      const sales = await Promise.all(
        orderItems.map(async item => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty)
          const newSale = await prisma.sale.create({
            data: {
              orderId: newOrder.id,
              productTitle: item.title,
              productImage: item.imageUrl,
              productPrice: parseFloat(item.salePrice),
              productQty: parseInt(item.qty),
              productId: item.id,
              vendorId: item.vendorId,
              total: totalAmount
            }
          })

          return newSale
        })
      )

      const existingUserProfile = await prisma.userProfile.findUnique({
        where: { userId }
      })

      if (existingUserProfile) {
        const updatedUserProfile = await prisma.userProfile.update({
          where: { userId },
          data: {
            firstName,
            lastName,
            email,
            phone,
            streetAddress,
            ward,
            district,
            province,
            zipCode
          }
        })
      } else {
        const createdUserProfile = await prisma.userProfile.create({
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
            zipCode
          }
        })
      }

      return { newOrder, newOrderItems, sales }
    })

    return NextResponse.json(result.newOrder)
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
