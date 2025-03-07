'use client'

import { Checkbox } from '@/components/ui/checkbox'
import DateColumn from '@/components/data-table-components/DateColumn'
import ImageColumn from '@/components/data-table-components/ImageColumn'
import SortableColumn from '@/components/data-table-components/SortableColumn'
import ActionColumn from '@/components/data-table-components/ActionColumn'

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
    accessorKey: 'userName',
    header: ({ column }) => <SortableColumn column={column} title='Tên' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Vai trò'
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày tạo',
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const farmer = row.original
      return (
        <ActionColumn
          row={row}
          endpoint={`farmers/${farmer.id}`}
          editEndpoint={`farmers/update/${farmer.id}`}
          title='nông dân'
        />
      )
    },
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  }
]
