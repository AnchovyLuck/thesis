"use client"
import { Geist, Geist_Mono } from 'next/font/google'
import '../styles/main.scss'
import Providers from '@/context/Providers'
import 'react-datepicker/dist/react-datepicker.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
console.log(
  '%c☯️  Web chậm không phải do framework lỏ, mà là do nội công không đủ thâm hậu.',
  'color: orange; font-weight: bold;'
)
export default function RootLayout ({ children }) {
  return (
    <html lang='en' className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
