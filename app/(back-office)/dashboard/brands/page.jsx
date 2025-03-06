import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

export default async function page () {
  const brands = await getData('brands')
  return (
    <div>
      {
        <PageHeader
          heading='Thương Hiệu'
          href='/dashboard/brands/new'
          linkTitle='Thêm Thương Hiệu'
        />
      }
      <div className='py-8'>
        <DataTable data={brands} columns={columns} />
      </div>
    </div>
  )
}
