import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import DeleteButton from '../actions/DeleteButton'
import EditButton from '../actions/EditButton'

export default function ActionColumn ({ row, endpoint, editEndpoint, title }) {
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
        <DropdownMenuItem>
          <DeleteButton endpoint={endpoint} title={title} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EditButton endpoint={editEndpoint} title={title} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
