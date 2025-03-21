import PageHeader from '@/components/backoffice/PageHeader'
import { getData } from '@/lib/getData'
import React from 'react'
import { columns } from './columns'
import DataTable from '@/components/data-table-components/DataTable'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export default async function page () {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null
  }
  const products = await getData('products')
  const id = session?.user?.id
  const role = session?.user?.role
  const farmerProductsFilter = (product) => {
    return product.userId === id
  }
  const farmerProducts = products.filter(farmerProductsFilter)
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
        {role === 'ADMIN' ? (
          <DataTable data={farmerProducts} columns={columns} />
        ) : (
          <DataTable data={farmerProducts} columns={columns} />
        )}
      </div>
    </div>
  )
}
