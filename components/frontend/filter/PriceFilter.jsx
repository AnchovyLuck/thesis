'use client'
import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'

export default function PriceFilter () {
    const priceRanges = [
        {
            display: "Dưới 10,000đ",
            max: 9999
        },
        {
            display: "Từ 10,000đ đến 20,000đ",
            min: 10000,
            max: 20000
        },
        {
            display: "Từ 20,000đ đến 30,000đ",
            min: 20000,
            max: 30000
        },
        {
            display: "Từ 30,000đ trở lên",
            min: 30000,
        }
    ]
  return (
   <div>
    <div className="flex">
        <h2>Giá</h2>
        <button></button>
        
    </div>
   </div>
  )
}
