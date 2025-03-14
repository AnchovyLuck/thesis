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

export default function UserAvatar ({ user }) {
  const router = useRouter()
  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Image
            src='/profile.jpg'
            alt='Thông tin người dùng'
            width={200}
            height={200}
            className='min-w-[32px] w-8 h-8 rounded-full'
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='px-4 py-2'>
        <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className='flex items-center space-x-2'>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <span>Tổng quan</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className='flex items-center space-x-2'>
            <Settings className='mr-2 h-4 w-4' />
            <span>Cập nhật tài khoản</span>
          </button>
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
