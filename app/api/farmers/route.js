import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const farmerData = await request.json()
    console.log(farmerData)
    const existingUser = await db.user.findUnique({
      where: {
        id: farmerData.userId,
      }
    })
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy tài khoản!'
        },
        {
          status: 409
        }
      )
    }
    const updatedUser = await db.user.update({
      where: {
        id: farmerData.userId,
      },
      data: {
        emailVerified: true
      }
    })
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        profileImageUrl: farmerData.profileImageUrl,
        firstName: farmerData.firstName,
        lastName: farmerData.lastName,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        userId: farmerData.userId
      }
    })
    return NextResponse.json(newFarmerProfile)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm nông trại thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const profiles = await db.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        role: 'FARMER'
      },
      include: {
        farmerProfile: true
      }
    })
    return NextResponse.json(profiles)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách cộng tác viên thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
