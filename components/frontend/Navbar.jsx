import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-nocap.png'
import { User } from 'lucide-react'
import ThemeSwitcherButton from '../ui/theme-switcher-button'
import HelpModal from './HelpModal'
import CartCount from './CartCount'

export default function Navbar () {
  return (
    <div className='bg-gray-200 dark:bg-slate-800 h-28 fixed w-full'>
      <div className='flex items-center justify-between py-3 w-full mx-auto px-8 gap-8'>
        <Link className='' href='/'>
          <Image
            src={logo}
            alt='online shop logo'
            className='w-24 text-gray-200 dark:text-slate-800'
          />
        </Link>
        <div className='flex-grow'>
          <SearchForm />
        </div>
        <div className='flex gap-8'>
          <Link
            href='/login'
            className='flex items-center text-green-950 dark:text-slate-100 space-x-2'
          >
            <User />
            <span className='absolute invisible lg:visible lg:relative font-bold'>
              Đăng nhập
            </span>
          </Link>

          <HelpModal />
          <CartCount />
        </div>
        <ThemeSwitcherButton />
      </div>
    </div>
  )
}
