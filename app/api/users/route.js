import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import db from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'
import { base64url } from 'jose'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/ui/email-template'
import nodemailer from 'nodemailer'
import { render } from '@react-email/components'

export async function POST (request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
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
    const rawToken = uuidv4()
    console.log(rawToken)
    const token = base64url.encode(rawToken)
    const newUser = await db.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
        role,
        verificationToken: token
      }
    })

    if (role === 'FARMER') {
      const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: '2525',
        auth: {
          user: '3e4ee1b7e95a9c',
          pass: 'ef0cb8d8487ab0'
        }
      })
      const linkText = 'Xác thực tài khoản'
      const userId = newUser.id
      const redirectUrl = `onboarding/${userId}?token=${token}`
      const emailTemplateHtml = await render(
        <EmailTemplate
          userName={userName}
          redirectUrl={redirectUrl}
          linkText={linkText}
        />
      )
      const info = await transporter.sendMail({
        from: process.env.MAILTRAP_FROM,
        to: email,
        subject: 'Xác thực tài khoản',
        html: emailTemplateHtml
      })
      console.log(info)
    }

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
