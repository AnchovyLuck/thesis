import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'

export const dynamic = 'force-dynamic';
export default async function page () {
  const customers = await getData('customers')
  return (
    <div>
      <div className='py-8'>
        <DataTable data={customers} columns={columns} />
      </div>
    </div>
  )
}
 