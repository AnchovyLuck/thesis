import db from '@/lib/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
export async function PUT (request) {
  try {
    const { password, id } = await request.json()
    const user = await db.user.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      return NextResponse.json(
        {
          data: null,
          message: 'No User Found'
        },
        { status: 404 }
      )
    }
    // Encrypt the Password =>bcrypt
    const salt = bcrypt.genSaltSync()
    const hashedPassword = await bcrypt.hashSync(password, salt)
    const updatedUser = await db.user.update({
      where: {
        id
      },
      data: {
        password: hashedPassword
      }
    })
    return NextResponse.json(updatedUser)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'Failed to Update User',
        error
      },
      { status: 500 }
    )
  }
}
