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
import SortableColumn from '@/components/data-table-components/SortableColumn'
import ImageColumn from '@/components/data-table-components/ImageColumn'

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
    header: ({ column }) => <SortableColumn column={column} title='Tên' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'imageUrl',
    header: () => <div className='shrink-0 text-center'>Ảnh</div>,
    cell: ({ row }) => <ImageColumn row={row} accessorKey='imageUrl' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'link',
    header: 'Đường dẫn'
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
        const banner = row.original
        return (
          <ActionColumn
            row={row}
            endpoint={`banners/${banner.id}`}
            editEndpoint={`banners/update/${banner.id}`}
            title='banner'
          />
        )
      },
      enableHiding: false,
      meta: {
        alwaysVisible: true
      }
    }
]
