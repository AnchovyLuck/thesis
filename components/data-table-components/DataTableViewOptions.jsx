'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Table } from '@tanstack/react-table'
import { Settings2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

export function DataTableViewOptions ({ table }) {
  const getColumnDisplayText = column => {
    const header = column.columnDef.header
    if (typeof header === 'function') {
      try {
        const headerElement = header({ column })

        if (headerElement && headerElement.props) {
          const children = headerElement.props.children

          if (Array.isArray(children)) {
            const textChild = children.find(child => typeof child === 'string')
            return textChild || column.id
          }
          if (typeof children === 'string') {
            return children
          }
        }
      } catch (error) {
        console.log('Error extracting header text:', error)
      }
    }

    if (typeof header === 'string') {
      return header
    }

    return ''
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='ml-auto hidden h-8 lg:flex'
        >
          <Settings2 />
          Hiển thị cột
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[150px]'>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map(column => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className='capitalize'
                checked={column.getIsVisible()}
                onCheckedChange={value => column.toggleVisibility(!!value)}
              >
              {getColumnDisplayText(column)}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
