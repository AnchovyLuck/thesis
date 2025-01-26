import { metadata } from '@/app/layout'
import { createUploadthing } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
  categoryImageUploader: f({ image: { maxFileSize: '5MB' } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log('file url', file.url, metadata)
      return { uploadedBy: "Anchovy" }
    }
  )
}
