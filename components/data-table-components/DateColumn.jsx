import React from 'react'

export default function DateColumn ({row, accessorKey}) {
  const createdAt = row.getValue(`${accessorKey}`)
  const originalDate = new Date(createdAt)
  const day = originalDate.getDate()
  const month = originalDate.toLocaleString('default', { month: '2-digit' })
  const year = originalDate.getFullYear()
  const formatted = `${day}/${month}/${year}`

  return <div>{formatted}</div>
}
