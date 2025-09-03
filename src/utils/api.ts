export const API_URL = 'https://api.github.com/users/'

export const API_URL_REPOS = ({
  userName,
  all = true,
}: {
  userName: string
  all?: boolean
}) => {
  return `${API_URL}${userName}/repos${!all ? '?per_page=4' : ''}`
}
