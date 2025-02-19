import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const {
      fullName,
      staffId,
      birthday,
      password,
      email,
      phone,
      physicalAddress,
      notes,
      code,
      isActive
    } = await request.json()
    const newStaff = db.staff.create({
      data: {
        fullName,
        staffId,
        birthday,
        password,
        email,
        phone,
        physicalAddress,
        notes,
        code,
        isActive
      }
    })
    return NextResponse.json(newStaff)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm nhân viên thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
