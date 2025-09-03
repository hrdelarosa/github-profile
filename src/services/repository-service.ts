import { API_URL_REPOS } from '@/utils/api'

export default async function GetRepositoryUserSerice({
  userName,
  all,
}: {
  userName: string
  all?: boolean
}) {
  try {
    const res = await fetch(API_URL_REPOS({ userName, all }))
    const data = await res.json()

    if (!data) throw new Error('Error al obtener los repositorios del usuario')

    return data
  } catch {
    return null
  }
}
