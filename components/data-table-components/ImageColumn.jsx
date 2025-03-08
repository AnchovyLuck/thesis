import Image from 'next/image'
import React from 'react'

export default function ImageColumn ({ row, accessorKey }) {
  const imageUrl = row.getValue(`${accessorKey}`)

  return (
    <div className='shrink-0 flex justify-center items-center'>
      <Image
        src={imageUrl}
        width={96}
        height={96}
        alt='image'
        className='table-image rounded-full'
      />
    </div>
  )
}
