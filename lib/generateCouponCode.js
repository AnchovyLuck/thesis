export const generateCouponCode = (title = '', expiryDate = '') => {
  const formattedTitle = title.toUpperCase().replace(/\s+/g, '')
  const extractedYear = expiryDate ? new Date(expiryDate).getFullYear() : ''
  const couponCode = `${formattedTitle}${extractedYear}`
  return couponCode
}
