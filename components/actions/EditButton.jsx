import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EditButton ({ endpoint, title }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  return (
    <Link
      href={`${baseUrl}/dashboard/${endpoint}`}
      className='flex items-center text-lime-600'
    >
      <Pencil className='mr-2 w-4 h-4' />
      <span>Chỉnh sửa</span>
    </Link>
  )
}
