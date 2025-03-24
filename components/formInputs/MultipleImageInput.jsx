import { UploadDropZone } from '@/lib/uploadthing'
import { Check, Pencil, Upload, XCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

export default function MultipleImageInput ({
  label,
  imageUrls = [],
  setImageUrls,
  className = 'col-span-full',
  endpoint = ''
}) {
  const handleImageRemove = imageIndex => {
    const updatedImages = imageUrls.filter(
      (image, index) => index !== imageIndex
    )
    setImageUrls(updatedImages)
  }
  return (
    <div className={className}>
      <div className='flex justify-between items-center mb-4'>
        <label
          htmlFor='course-image'
          className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50'
        >
          {label}
        </label>
      </div>
      {imageUrls.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {imageUrls.map((imageUrl, i) => {
            return (
              <div key={i} className='relative'>
                <button
                  onClick={() => handleImageRemove(i)}
                  className='absolute top-0 right-0 bg-white text-slate-900 rounded-full'
                >
                  <XCircle className='text-red-500' />
                </button>
                <Image
                  src={imageUrl}
                  alt='Item image'
                  width={1000}
                  height={667}
                  className='w-64 h-64 rounded-lg'
                />
              </div>
            )
          })}
        </div>
      ) : (
        <UploadDropZone
          endpoint={endpoint}
          onClientUploadComplete={res => {
            const urls = res.map(item => item.ufsUrl)
            setImageUrls(urls)
          }}
          onUploadError={error => {
            toast.error('Tải ảnh thất bại!')
            console.log(`ERROR! ${error.message}`, error)
          }}
          content={{
            button ({ files }) {
              if (files.length > 0)
                return (
                  <div className='flex justify-center space-x-3 text-sm font-medium'>
                    <Upload />
                    <span>Tải Ảnh Lên</span>
                  </div>
                )
              return (
                <div className='flex justify-center text-sm font-medium'>
                  <span>Chọn Ảnh</span>
                </div>
              )
            },
            allowedContent ({ files, isUploading }) {
              if (files.length > 0) {
                return (
                  <div className='flex justify-center space-x-1 items-center'>
                    <span className='dark:text-slate-50'>
                      Chọn ảnh hoàn tất
                    </span>
                    <Check className='text-lime-500' />
                  </div>
                )
              }
              return (
                <div className='text-center dark:text-slate-50'>Tối đa 5MB</div>
              )
            },
            label ({}) {
              return <></>
            }
          }}
        />
      )}
    </div>
  )
}
