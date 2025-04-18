import { metadata } from '@/app/layout'
import { createUploadthing } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
  categoryImageUploader: f({ image: { maxFileSize: '5MB' } }).onUploadComplete(
    async ({ metadata, file }) => {
      return { uploadedBy: 'Anchovy' }
    }
  ),
  bannerImageUploader: f({ image: { maxFileSize: '5MB' } }).onUploadComplete(
    async ({ metadata, file }) => {
      return { uploadedBy: 'Anchovy' }
    }
  ),
  marketLogoUploader: f({ image: { maxFileSize: '5MB' } }).onUploadComplete(
    async ({ metadata, file }) => {
      return { uploadedBy: 'Anchovy' }
    }
  ),
  productImageUploader: f({
    image: { maxFileSize: '5MB', maxFileCount: 1 }
  }).onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: 'Anchovy' }
  }),
  trainingImageUploader: f({
    image: { maxFileSize: '5MB', maxFileCount: 1 }
  }).onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: 'Anchovy' }
  }),
  farmerProfileUploader: f({
    image: { maxFileSize: '5MB', maxFileCount: 1 }
  }).onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: 'Anchovy' }
  }),
  customerProfileUploader: f({
    image: { maxFileSize: '5MB', maxFileCount: 1 }
  }).onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: 'Anchovy' }
  }),
  multipleProductsUploader: f({
    image: { maxFileSize: '10MB', maxFileCount: 4 }
  }).onUploadComplete(async ({ metadata, file }) => {
    return { uploadedBy: 'Anchovy' }
  })
}
