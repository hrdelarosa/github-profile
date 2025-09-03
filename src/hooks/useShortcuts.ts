import { useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { getShortcutKey } from '../utils/shortcutKey'

export function useShortcuts() {
  const searchRef = useRef<HTMLInputElement>(null)
  const shortcutKey = getShortcutKey()

  useHotkeys(
    `${shortcutKey}+k`,
    () => {
      searchRef.current?.focus()
    },
    { preventDefault: true }
  )

  return { searchRef, shortcutKey }
}
