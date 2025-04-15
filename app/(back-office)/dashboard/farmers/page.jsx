import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

export const dynamic = 'force-dynamic';
export default async function page () {
  const farmers = await getData('farmers')
  return (
    <div>
      {
        <PageHeader
          heading='Nông Dân'
          href='/dashboard/farmers/new'
          linkTitle='Thêm Nông Dân'
        />
      }
      <div className='py-8'>
        <DataTable data={farmers} columns={columns} filterKeys={["userName"]} />
      </div>
    </div>
  )
}
