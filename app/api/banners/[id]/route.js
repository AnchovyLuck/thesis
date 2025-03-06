import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const banner = await db.banner.findUnique({
      where: {
        id
      }
    })
    return NextResponse.json(banner)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị banner thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingBanner = await db.banner.findUnique({
      where: {
        id
      }
    })
    if (!existingBanner) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy banner!'
        },
        {
          status: 404
        }
      )
    }
    const deletedBanner = await db.banner.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedBanner)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá banner thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
