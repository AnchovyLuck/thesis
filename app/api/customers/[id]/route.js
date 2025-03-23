import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PUT (request, { params }) {
  const { id } = await params
  try {
    const {
      userName,
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone,
      profileImage,
      streetAddress,
      ward,
      district,
      province,
      zipCode
    } = await request.json()
    const existingUser = await db.user.findUnique({
      where: {
        id
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
    const updateUser = await db.userProfile.update({
      where: { userId: id },
      data: {
        firstName,
        lastName,
        email,
        phone,
        streetAddress,
        ward,
        district,
        province,
        zipCode,
        dateOfBirth,
        profileImage
      }
    })
    return NextResponse.json(updateUser)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Cập nhật mã khuyến mãi thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
