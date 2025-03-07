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
    accessorKey: 'title',
    header: ({ column }) => <SortableColumn column={column} title='Tên' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'logoUrl',
    header: () => <div className='shrink-0 text-center'>Logo</div>,
    cell: ({ row }) => <ImageColumn row={row} accessorKey='logoUrl' />,
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
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />
  },
 {
     id: 'actions',
     cell: ({ row }) => {
       const brand = row.original
       return (
         <ActionColumn
           row={row}
           endpoint={`brands/${brand.id}`}
           editEndpoint={`brands/update/${brand.id}`}
           title='thương hiệu'
         />
       )
     },
     enableHiding: false,
     meta: {
       alwaysVisible: true
     }
   }
]
