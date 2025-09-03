import { UserProviderContext } from '@/contexts/user-provider'
import { useContext } from 'react'

export default function useUser() {
  const context = useContext(UserProviderContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
