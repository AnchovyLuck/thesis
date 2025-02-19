import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      farmerName,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl
    } = await request.json()
    const newFarmer = db.farmer.create({
      data: {
        code,
        contactPerson,
        contactPersonPhone,
        email,
        farmerName,
        notes,
        phone,
        physicalAddress,
        terms,
        isActive,
        profileImageUrl
      }
    })
    return NextResponse.json(newFarmer)
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
