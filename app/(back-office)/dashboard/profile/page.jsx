import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page () {
  const session = await getServerSession(authOptions)
  const { user } = session
  return (
    <div>
      <h2>Xin chào {user?.userName}</h2>
    </div>
  )
}
