import PageHeader from '@/components/backoffice/PageHeader'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'
import DataTable from '@/components/data-table-components/DataTable'

export default async function page () {
  const products = await getData('products')
  return (
    <div>
      {
        <PageHeader
          heading='Sản Phẩm'
          href='/dashboard/products/new'
          linkTitle='Thêm Sản Phẩm'
        />
      }
      <div className='py-8'>
        <DataTable data={products} columns={columns}/>
      </div>
    </div>
  )
}
