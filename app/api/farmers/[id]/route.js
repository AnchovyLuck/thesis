import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const farmer = await db.farmerProfile.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })
    return NextResponse.json(farmer)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị thông tin nông dân thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingFarmer = await db.farmerProfile.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })
    if (!existingFarmer) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy nông dân!'
        },
        {
          status: 404
        }
      )
    }
    const deletedFarmer = await db.farmerProfile.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedFarmer)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá nông dân thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
