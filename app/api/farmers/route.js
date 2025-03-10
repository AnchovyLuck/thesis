import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const farmerData = await request.json()
    console.log(farmerData)
    const existingUser = await db.user.findUnique({
      where: {
        id: farmerData.id,
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
        id: farmerData.id,
      },
      data: {
        emailVerified: true
      }
    })
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        profileImageUrl: farmerData.profileImageUrl,
        email: farmerData.email,
        userName: farmerData.userName,
        notes: farmerData.notes,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize),
        mainCrop: farmerData.mainCrop,
        userId: farmerData.id
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
        message: 'Hiển thị danh sách nông dân thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
