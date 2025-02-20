import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      }
    })
    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị thông tin người dùng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
