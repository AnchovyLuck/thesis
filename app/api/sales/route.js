import db from '@/lib/db'
import { NextResponse } from 'next/server'


export async function GET (request) {
  try {
    const sales = await db.sale.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(sales)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách sản phẩm bán ra thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
