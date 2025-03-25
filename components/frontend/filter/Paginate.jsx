'use client'
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { useSearchParams } from 'next/navigation'

export default function Paginate ({ totalPages }) {
  const searchParams = useSearchParams()
  const currentPage = parseInt(searchParams.get('page')) || 1
  const generatePageUrl = page => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page)
    return `?${params.toString()}`
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={generatePageUrl(
              currentPage === 1 ? 1 : parseInt(currentPage) - 1
            )}
          />
        </PaginationItem>
        {totalPages <= 3 ? (
          Array.from({ length: totalPages }, (_, index) => {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={index + 1 === currentPage}
                  href={generatePageUrl(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            )
          })
        ) : (
          <>
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={index + 1 === currentPage}
                    href={generatePageUrl(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href={generatePageUrl(
              currentPage === totalPages
                ? totalPages
                : parseInt(currentPage) + 1
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
