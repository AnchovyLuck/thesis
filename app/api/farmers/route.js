import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const { code, contactPerson, contactPersonPhone, email, name, notes, phone, physicalAddress, terms} = await request.json()
    const newFarmer =  { code, contactPerson, contactPersonPhone, email, name, notes, phone, physicalAddress, terms }
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
