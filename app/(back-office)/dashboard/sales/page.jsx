import DataTable from '@/components/data-table-components/DataTable'
import { getData } from '@/lib/getData'
import { cookies } from 'next/headers'
import React from 'react'
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export const dynamic = 'force-dynamic';
export default async function page () {
  const session = await getServerSession(authOptions)
    if (!session) {
      return null
    }
  const allSales = await getData('sales')
  const id = session?.user?.id
  const role = session?.user?.role
  const farmerSaleFilter = (sale) => {
    return sale.vendorId === id
  }
  const farmerSales = allSales.filter(farmerSaleFilter)
  return (
    <div>
      <div className='py-8'>
        {role === 'ADMIN' ? (
          <DataTable data={allSales} columns={columns} />
        ) : (
          <DataTable data={farmerSales} columns={columns} />
        )}
      </div>
    </div>
  )
}
