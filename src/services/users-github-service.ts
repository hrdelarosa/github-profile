import { API_URL } from '@/utils/api'

export default async function GetUsersGithubService({
  userName,
}: {
  userName: string
}) {
  try {
    const res = await fetch(`${API_URL}${userName}`)
    const data = await res.json()

    if (!res.ok) throw new Error('Error al obtener los datos del usuario')

    return data
  } catch {
    return null
  }
}
