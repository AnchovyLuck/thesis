import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { cookies } from 'next/headers'
import React from 'react'
import { columns } from './columns'

export default async function page () {
  const coupons = await getData('coupons')
  return (
    <div>
      {
        <PageHeader
          heading='Khuyến Mãi'
          href='/dashboard/coupons/new'
          linkTitle='Thêm Khuyến Mãi'
        />
      }

      <div className='py-8'>
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  )
}
