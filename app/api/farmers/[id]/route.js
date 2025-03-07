import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const farmer = await db.user.findUnique({
      where: {
        id
      },
      include: {
        farmerProfile: true
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
    const existingUser = await db.user.findUnique({
      where: {
        id
      }
    })
    if (!existingUser) {
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
        message: 'Xoá nông dân thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function PUT (request, { params }) {
  const { id } = await params
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      profileImageUrl,
      email,
      userName,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      products,
      landSize,
      mainCrop,
      userId
    } = await request.json()
    const existingFarmer = await db.farmerProfile.findUnique({
      where: {
        id
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
    const updatedFarmer = await db.farmerProfile.update({
      where: { id },
      data: {
        code,
        contactPerson,
        contactPersonPhone,
        profileImageUrl,
        email,
        userName,
        notes,
        phone,
        physicalAddress,
        terms,
        isActive,
        products,
        landSize: parseFloat(landSize),
        mainCrop,
        userId
      }
    })
    return NextResponse.json(updatedFarmer)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Cập nhật nông dân thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
