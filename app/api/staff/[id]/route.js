import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const staff = await db.staff.findUnique({
      where: {
        id
      }
    })
    return NextResponse.json(staff)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị thông tin nhân viên thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingStaff = await db.staff.findUnique({
      where: {
        id
      }
    })
    if (!existingStaff) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy nhân viên!'
        },
        {
          status: 404
        }
      )
    }
    const deletedStaff = await db.staff.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedStaff)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá nhân viên thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
