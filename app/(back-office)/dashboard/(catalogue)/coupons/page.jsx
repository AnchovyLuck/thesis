import PageHeader from '@/components/backoffice/PageHeader'
import TableActions from '@/components/backoffice/TableActions'
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
  const allCoupons = await getData('coupons')
  const id = session?.user?.id
  const role = session?.user?.role
  const farmerCouponFilter = (coupon) => {
    return coupon.userId === id
  }
  const farmerCoupons = allCoupons.filter(farmerCouponFilter)
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
        {role === 'ADMIN' ? (
          <DataTable data={allCoupons} columns={columns} />
        ) : (
          <DataTable data={farmerCoupons} columns={columns} />
        )}
      </div>
    </div>
  )
}
