import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'

export async function POST (request) {
  try {
    const { userName, email, password, role } = await request.json()
    const existingUser = await db.user.findUnique({
      where: {
        email
      }
    })
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: 'Tài khoản đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const salt = bcrypt.genSaltSync()
    const hashedPassword = await bcrypt.hashSync(password, salt)
    const newUser = await db.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
        role
      }
    })
    console.log(newUser)
    return NextResponse.json({
      data: newUser,
      message: 'Tạo tài khoản thành công!'
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'Tạo tài khoản thất bại!',
        error
      },
      {
        status: 500
      }
    )
  }
}

export async function GET (request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(users)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách tài khoản thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
