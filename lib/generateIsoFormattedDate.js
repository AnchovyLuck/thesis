export function generateIsoFormattedDate (date) {
  const isoFormattedDate = new Date(date).toISOString()
  return isoFormattedDate
}
