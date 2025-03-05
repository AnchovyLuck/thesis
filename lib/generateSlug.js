import { removeVietnameseTones } from "./removeTones"

export function generateSlug (title) {
  const slug = removeVietnameseTones(title)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^\-+/, '')
    .replace(/\-+$/, '')

  return slug
}
