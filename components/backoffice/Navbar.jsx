'use client'
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  X
} from 'lucide-react'
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
import ThemeSwitcherButton from '../ui/theme-switcher-button'
import Link from 'next/link'
import UserAvatar from './UserAvatar'
import { useSession } from 'next-auth/react'
import Loading from '@/app/Loading'

export default function Navbar ({ setShowSidebar, showSidebar }) {
  const { data: session } = useSession()
  return (
    <div
      className={
        showSidebar
          ? 'flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 md:ml-64 px-8 py-8 w-full pr-[20rem] z-50'
          : 'flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 w-full pr-[4rem] z-50'
      }
    >
      <Link href={'/dashboard'} className='sm:hidden'>
        Logo
      </Link>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='text-lime-700 dark:text-lime-500 pe-6'
      >
        <AlignJustify />
      </button>
      <div className='flex space-x-3'>
        <ThemeSwitcherButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type='button'
              className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg'
            >
              <Bell className='text-lime-700 dark:text-lime-500' />
              <span className='sr-only'>Thông báo</span>
              <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full top-0 end-6 dark:border-gray-900'>
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='px-2 py-2'>
            <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/profile.jpg'
                  alt='Thông tin người dùng'
                  width={200}
                  height={200}
                  className='w-8 h-8 rounded-full'
                />
                <div className='flex flex-col space-y-1'>
                  <p>Bắp Mỹ đã hết hàng tồn kho.</p>
                  <div className='flex items-center space-x-2'>
                    <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>
                      Hết Hàng
                    </p>
                    <p>12/1/2025 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/profile.jpg'
                  alt='Thông tin người dùng'
                  width={200}
                  height={200}
                  className='w-8 h-8 rounded-full'
                />
                <div className='flex flex-col space-y-1'>
                  <p>Bắp Mỹ đã hết hàng tồn kho.</p>
                  <div className='flex items-center space-x-2'>
                    <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>
                      Hết Hàng
                    </p>
                    <p>12/1/2025 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/profile.jpg'
                  alt='Thông tin người dùng'
                  width={200}
                  height={200}
                  className='w-8 h-8 rounded-full'
                />
                <div className='flex flex-col space-y-1'>
                  <p>Bắp Mỹ đã hết hàng tồn kho.</p>
                  <div className='flex items-center space-x-2'>
                    <p className='px-3 py-0.5 bg-red-700 text-white rounded-full text-sm'>
                      Hết Hàng
                    </p>
                    <p>12/1/2025 - 12:40 PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        {status === 'authenticated' && <UserAvatar user={session?.user} />}
      </div>
    </div>
  )
}
