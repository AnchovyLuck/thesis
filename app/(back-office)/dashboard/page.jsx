import DashboardCharts from '@/components/backoffice/DashboardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page () {
  return <div>
    <Heading title="Báo Cáo Doanh Số"/>
    <LargeCards />
    <SmallCards />
    <DashboardCharts />
    {/* Recent Orders Table */}
  </div>
}
