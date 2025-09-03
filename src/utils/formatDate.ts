export function formatDate(dateString: Date): string {
  const date = new Date(dateString)
  const now = new Date()
  const diff = (now.getTime() - date.getTime()) / 1000

  if (diff < 60) return `${Math.floor(diff)} second${diff < 2 ? '' : 's'}`

  const minutes = diff / 60
  if (minutes < 60)
    return `${Math.floor(minutes)} minute${minutes < 2 ? '' : 's'}`

  const hours = minutes / 60
  if (hours < 24) return `${Math.floor(hours)} hour${hours < 2 ? '' : 's'}`

  const days = hours / 24
  if (days < 7) return `${Math.floor(days)} day${days < 2 ? '' : 's'}`

  const weeks = days / 7
  if (weeks < 4) return `${Math.floor(weeks)} week${weeks < 2 ? '' : 's'}`

  const months = days / 30
  if (months < 12) return `${Math.floor(months)} month${months < 2 ? '' : 's'}`

  const years = days / 365
  return `${Math.floor(years)} year${years < 2 ? '' : 's'}`
}
