import GetRepositoryUserSerice from '@/services/repository-service'
import GetUsersGithubService from '@/services/users-github-service'
import type {
  Repository,
  UserProviderProps,
  UserProviderState,
  UsersGithub,
} from '@/types/users-type'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

const initialState: UserProviderState = {
  user: null,
  userSelected: null,
  repositories: [],
  loading: false,
  getUser: async () => {},
  getRepositories: async () => {},
  changeUser: () => {},
  getAllRepositories: async () => {},
}

const UserProviderContext = createContext<UserProviderState>(initialState)

function UserProvider({ children, ...props }: UserProviderProps) {
  const [userSelected, setUserSelected] = useState<UsersGithub | null>(null)
  const [user, setUser] = useState<UsersGithub | null>(null)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getUser = useCallback(async (userName: string) => {
    const name = userName.trim()
    if (!name) return

    setLoading(true)
    const res = await GetUsersGithubService({ userName: name })

    if (!res) return

    setUserSelected(res)
    setLoading(false)
  }, [])

  const getRepositories = useCallback(async (userName: string) => {
    const name = userName.trim()
    if (!name) return

    setLoading(true)
    const res = await GetRepositoryUserSerice({ userName: name, all: false })

    if (!res) return

    setRepositories(res)
    setLoading(false)
  }, [])

  const changeUser = useCallback(() => {
    if (userSelected?.login !== user?.login) {
      setUser(userSelected)
      if (userSelected) getRepositories(userSelected.login)
    }
  }, [userSelected, user, getRepositories])

  const getAllRepositories = useCallback(async () => {
    if (!user) return

    setLoading(true)
    const res = await GetRepositoryUserSerice({
      userName: user.login,
      all: true,
    })

    if (!res) return

    setRepositories(res)
    setLoading(false)
  }, [user])

  useEffect(() => {
    const fetchInitialUser = async () => {
      const res = await GetUsersGithubService({ userName: 'GitHub' })

      if (!res) return

      setUserSelected(res)
      setUser(res)
    }

    const fetchRepository = async () => {
      const res = await GetRepositoryUserSerice({
        userName: 'GitHub',
        all: false,
      })

      if (!res) return

      setRepositories(res)
    }

    fetchInitialUser()
    fetchRepository()
  }, [])

  const value: UserProviderState = useMemo(
    () => ({
      user,
      userSelected,
      repositories,
      loading,
      getUser,
      getRepositories,
      changeUser,
      getAllRepositories,
    }),
    [
      user,
      userSelected,
      repositories,
      loading,
      getUser,
      getRepositories,
      changeUser,
      getAllRepositories,
    ]
  )

  return (
    <UserProviderContext.Provider {...props} value={value}>
      {children}
    </UserProviderContext.Provider>
  )
}

export { UserProviderContext, UserProvider }
