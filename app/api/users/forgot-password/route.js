import { NextResponse } from 'next/server'
import db from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'
import { base64url } from 'jose'
import { render } from '@react-email/components'
import EmailTemplate from '@/components/ui/email-template'
import nodemailer from 'nodemailer'
export async function PUT (request) {
  try {
    const { email } = await request.json()
    const existingUser = await db.user.findUnique({
      where: {
        email
      }
    })
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `User Not Found`
        },
        { status: 404 }
      )
    }
    const rawToken = uuidv4()
    console.log(rawToken)
    const token = base64url.encode(rawToken)
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    })
    const linkText = 'Đặt lại mật khẩu'
    const userId = existingUser.id
    const userName = existingUser.userName
    const redirectUrl = `reset-password?token=${token}&&id=${userId}`
    const description =
      'Click vào đường dẫn bên dưới để đặt lại mật khẩu của bạn.'
    const subject = 'Đặt lại mật khẩu'
    const emailTemplateHtml = await render(
      <EmailTemplate
        userName={userName}
        redirectUrl={redirectUrl}
        linkText={linkText}
        description={description}
        subject={subject}
      />
    )
    const info = await transporter.sendMail({
      from: process.env.MAILTRAP_FROM,
      to: email,
      subject: subject,
      html: emailTemplateHtml
    })

    console.log(token)
    return NextResponse.json(
      {
        data: null,
        message: 'Gửi mail thành công!'
      },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: 'Đã có lỗi xảy ra!'
      },
      { status: 500 }
    )
  }
}
