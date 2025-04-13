import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: 'Token không hợp lệ!'
        },
        { status: 400 }
      )
    }

    const user = await db.user.findFirst({
      where: {
        verificationToken: token
      }
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Token không hợp lệ hoặc đã hết hạn!'
        },
        { status: 400 }
      )
    }
    await db.user.update({
      where: {
        id: user.id
      },
      data: {
        emailVerified: true,
        verificationToken: null
      }
    })
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login?verified=true`
    )
  } catch (error) {
    console.error('Email verification error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Xác thực tài khoản thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
