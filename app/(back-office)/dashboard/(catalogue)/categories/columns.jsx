'use client'

import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tên
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'imageUrl',
    header: () => <div className='shrink-0 text-center'>Ảnh</div>,
    cell: ({ row }) => {
      const imageUrl = row.getValue('imageUrl')

      return (
        <div className='shrink-0 flex justify-center items-center'>
          <Image
            src={imageUrl}
            width={96}
            height={96}
            alt='image'
            className='w-24 h-24 rounded-full'
          />
        </div>
      )
    },
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'isActive',
    header: () => <div className=' shrink-0 text-center'>Trạng thái</div>,
    cell: ({ row }) => {
      const status = row.getValue('isActive')
      return (
        <div className='shrink-0 flex items-center justify-center'>
          <span>{status.toString()}</span>
        </div>
      )
    }
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày tạo',
    cell: ({ row }) => {
      const createdAt = row.getValue('createdAt')
      const originalDate = new Date(createdAt)
      const day = originalDate.getDate()
      const month = originalDate.toLocaleString('default', { month: '2-digit' })
      const year = originalDate.getFullYear()
      const formatted = `${day}/${month}/${year}`

      return <div>{formatted}</div>
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const isActive = row.isActive

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Tuỳ Chọn</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Sao chép
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Xoá</DropdownMenuItem>
            <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  }
]
