import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import useUser from './useUser'

export function useSearchUser() {
  const [search, setSearch] = useState<string>('GitHub')
  const [value] = useDebounce(search, 500)
  const { getUser, userSelected, user } = useUser()

  useEffect(() => {
    if (!value.trim()) return
    if (!user) return
    if (
      userSelected &&
      userSelected.login.toLowerCase() === value.trim().toLowerCase()
    )
      return

    getUser(value.trim())
  }, [value, getUser, userSelected, user])

  return { value, setSearch }
}
