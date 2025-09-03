import { ThemeProvider } from './contexts/theme-provider'
import { UserProvider } from './contexts/user-provider'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  )
}
