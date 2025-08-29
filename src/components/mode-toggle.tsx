import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useTheme from '@/hooks/useTheme'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark">
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all text-white
          ${theme === 'light' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}
          `}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all
          ${theme === 'light' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}
          `}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
