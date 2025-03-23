import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const user = await db.user.findUnique({
      where: {
        id
      },
      select: {
        email: true,
        userName: true,
        id: true,
        role: true,
        createdAt: true,
        userProfile: true
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

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingUser = await db.user.findUnique({
      where: {
        id
      },
      include: {
        products: true
      }
    })
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy người dùng!'
        },
        {
          status: 404
        }
      )
    }
    const deletedUser = await db.user.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedUser)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá người dùng thất bại!',
        error
      },
      { status: 500 }
    )
  }
}