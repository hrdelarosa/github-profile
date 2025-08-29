import { ThemeProviderContext } from '@/contexts/theme-provider'
import { useContext } from 'react'

export default function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
