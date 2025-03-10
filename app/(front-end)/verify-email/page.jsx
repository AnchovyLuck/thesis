import { Info } from 'lucide-react'
import React from 'react'

export default function page () {
  return (
    <div className='max-w-5xl mx-auto flex items-center justify-center'>
      <div
        id='alert-additional-content-1'
        className='p-4 mb-4 text-lime-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-lime-400 dark:border-lime-800'
        role='alert'
      >
        <div className='flex items-center'>
          <Info className='flex-shrink-0 w-4 h-4 me-2' />
          <span className='sr-only'>Info</span>
          <h3 className='text-lg font-medium'>Email xác nhận đã được gửi</h3>
        </div>
        <div className='mt-2 mb-4 text-sm'>
          Vui lòng tiến hành xác thực tài khoản qua email!
        </div>
      </div>
    </div>
  )
}
