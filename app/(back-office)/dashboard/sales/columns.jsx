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
    accessorKey: 'productImage',
    header: () => <div className='shrink-0 text-center'>Ảnh</div>,
    cell: ({ row }) => <ImageColumn row={row} accessorKey='productImage' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: 'productTitle',
    header: ({ column }) => <SortableColumn column={column} title='Tên' />,
    enableHiding: false,
    meta: {
      alwaysVisible: true
    }
  },
  {
    accessorKey: "productPrice",
    header: "Đơn giá"
  },
  {
    accessorKey: "productQty",
    header: "Số lượng"
  },
  {
    accessorKey: "total",
    header: "Tổng cộng"
  },
  {
    accessorKey: 'createdAt',
    header: 'Ngày tạo',
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />
  },
]
