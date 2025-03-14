export function generateInitials (userName) {
  const words = userName.split(' ')
  let firstInitial = ''
  let secondInitial = ''

  for (const word of words) {
    if (word.length > 0) {
      firstInitial = word[0].toUpperCase()
      break
    }
  }

  if (words.length > 1) {
    secondInitial = words[words.length - 1][0].toUpperCase()
  }

  return firstInitial + secondInitial
}
