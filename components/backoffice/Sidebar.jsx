'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import {
  BadgeDollarSign,
  Book,
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  Compass,
  ExternalLink,
  HeartHandshake,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  User,
  UserRoundPen,
  Users,
  UserSquare2,
  Wallet,
  Warehouse
} from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'

import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Loading from '@/app/Loading'

export default function Sidebar ({ showSidebar }) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  if (status === 'loading') {
    return <Loading />
  }
  const role = session?.user?.role

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }
  let sidebarLinks = [
    {
      title: 'Khách Hàng',
      icon: Users,
      href: '/dashboard/customers'
    },
    {
      title: 'Thương hiệu',
      icon: Warehouse,
      href: '/dashboard/brands'
    },
    {
      title: 'Nông Dân',
      icon: UserSquare2,
      href: '/dashboard/farmers'
    },
    {
      title: 'Đơn Hàng',
      icon: Compass,
      href: '/dashboard/orders'
    },
    {
      title: 'Sales',
      icon: BadgeDollarSign,
      href: '/dashboard/sales'
    },
    {
      title: 'Nhân Viên',
      icon: User,
      href: '/dashboard/staff'
    },
    {
      title: 'Bài viết',
      icon: Building2,
      href: '/dashboard/articles'
    },
    {
      title: 'Ví',
      icon: Wallet,
      href: '/dashboard/wallet'
    },
    {
      title: 'Hỗ trợ cộng tác viên',
      icon: HeartHandshake,
      href: '/dashboard/farmer-support'
    },
    {
      title: 'Cài Đặt',
      icon: Settings,
      href: '/dashboard/settings'
    },
    {
      title: 'Cửa Hàng',
      icon: ExternalLink,
      href: '/'
    }
  ]
  let catalogueLinks = [
    {
      title: 'Sản Phẩm',
      icon: Boxes,
      href: '/dashboard/products'
    },
    {
      title: 'Loại Sản Phẩm',
      icon: LayoutList,
      href: '/dashboard/categories'
    },
    {
      title: 'Khuyến Mãi',
      icon: ScanSearch,
      href: '/dashboard/coupons'
    },
    {
      title: 'Banner',
      icon: MonitorPlay,
      href: '/dashboard/banners'
    }
  ]

  if (role === 'FARMER') {
    sidebarLinks = [
      {
        title: 'Khách Hàng',
        icon: Users,
        href: '/dashboard/customers'
      },
      {
        title: 'Thương hiệu',
        icon: Warehouse,
        href: '/dashboard/brands'
      },
      {
        title: 'Sales',
        icon: BadgeDollarSign,
        href: '/dashboard/sales'
      },
      {
        title: 'Bài viết',
        icon: Building2,
        href: '/dashboard/articles'
      },
      {
        title: 'Ví',
        icon: Wallet,
        href: '/dashboard/wallet'
      },
      {
        title: 'Hỗ trợ cộng tác viên',
        icon: HeartHandshake,
        href: '/dashboard/farmer-support'
      },
      {
        title: 'Cài Đặt',
        icon: Settings,
        href: '/dashboard/settings'
      },
      {
        title: 'Cửa Hàng',
        icon: ExternalLink,
        href: '/'
      }
    ]
    catalogueLinks = [
      {
        title: 'Sản Phẩm',
        icon: Boxes,
        href: '/dashboard/products'
      },
      {
        title: 'Khuyến Mãi',
        icon: ScanSearch,
        href: '/dashboard/coupons'
      },
    ]
  }
  if (role === 'USER') {
    sidebarLinks = [
      {
        title: 'Đơn hàng của tôi',
        icon: Compass,
        href: '/dashboard/orders'
      },
      {
        title: 'Cập nhật tài khoản',
        icon: UserRoundPen,
        href: '/dashboard/profile'
      },
      {
        title: 'Cửa Hàng',
        icon: ExternalLink,
        href: '/'
      }
    ]
    catalogueLinks = []
  }
  return (
    <div
      className={
        showSidebar
          ? 'sm:block mt-20 md:mt-0 bg-slate-50 dark:bg-slate-700 w-64 text-slate-800 dark:text-slate-50 fixed left-0 top-0 right-0 shadow-md z-50 h-[calc(100vh-5rem)] md:h-full overflow-y-auto'
          : 'hidden'
      }
    >
      <Link href='/dashboard'>
        <Image
          src={logo}
          alt='Online Shop Logo'
          className='h-56 w-full mx-auto -mt-7'
        />
      </Link>
      <div className='space-y-3 flex flex-col -mt-5 pb-20 overflow-y-auto h-[calc(100%-11rem)]'>
        <Link
          href='/dashboard'
          className={
            pathname === '/dashboard'
              ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500 font-bold'
              : 'flex items-center space-x-3 px-6 py-2 border-l-8 border-transparent'
          }
        >
          <LayoutGrid />
          <span>Tổng Quan</span>
        </Link>
        {catalogueLinks.length > 0 && (
          <Collapsible>
            <CollapsibleTrigger
              asChild
              className=''
              onClick={() => setOpenMenu(!openMenu)}
            >
              <button className='flex items-center space-x-1 px-6 py-2 border-l-8 border-transparent'>
                <div className='flex space-x-3'>
                  <Book />
                  <span>Danh Mục</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className='rounded-lg mx-8 py-3 bg-slate-200 dark:bg-slate-800 shadow-inner'>
              {catalogueLinks.map((item, i) => {
                const Icon = item.icon
                return (
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href
                        ? 'flex items-center space-x-3 py-2 px-4 text-lime-500 font-bold'
                        : 'flex items-center space-x-3 py-2 px-4'
                    }
                    key={i}
                  >
                    <Icon className='w-4 h-4' />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </CollapsibleContent>
          </Collapsible>
        )}
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon
          return (
            <Link
              href={item.href}
              className={
                pathname === item.href
                  ? 'flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500 font-bold'
                  : 'flex items-center space-x-3 px-6 py-2 border-l-8 border-transparent'
              }
              key={i}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          )
        })}
        <button
          onClick={handleLogout}
          className='flex items-center space-x-3 px-6 py-3 bg-lime-500 hover:bg-lime-400 dark:bg-lime-700 rounded-lg mx-10 :read-only dark:hover:bg-lime-600'
        >
          <LogOut />
          <span>Đăng Xuất</span>
        </button>
      </div>
    </div>
  )
}
