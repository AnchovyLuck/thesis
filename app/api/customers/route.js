import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request) {
  try {
    const customers = await db.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        role: 'USER'
      },
      include: {
        userProfile: true
      }
    })
    return NextResponse.json(customers)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách khách hàng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
