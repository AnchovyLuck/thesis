'use client'
import { LayoutDashboard, LogOut, Settings } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { generateInitials } from '@/lib/generateInitials'

export default function UserAvatar ({ user = {} }) {
  const router = useRouter()
  const { userName, image } = user
  const initials = generateInitials(userName)
  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          {image ? (
            <Image
              src='/profile.jpg'
              alt='Thông tin người dùng'
              width={200}
              height={200}
              className='min-w-[32px] w-10 h-10 rounded-full'
            />
          ) : (
            <div className='min-w-[32px] w-10 h-10 p-2 flex items-center justify-center rounded-full bg-slate-900 shadow-md border border-slate-600'>
              {initials}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='px-4 py-2'>
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/dashboard' className='flex items-center space-x-2'>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <span>Tổng quan</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href='/dashboard/profile'
            className='flex items-center space-x-2'
          >
            <Settings className='mr-2 h-4 w-4' />
            <span>Cập nhật tài khoản</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            onClick={handleLogout}
            className='flex items-center space-x-2'
          >
            <LogOut className='mr-2 h-4 w-4' />
            <span>Đăng xuất</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
