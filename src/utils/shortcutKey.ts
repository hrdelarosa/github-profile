export function getShortcutKey() {
  const isMac = /Mac/i.test(navigator.userAgent)

  return isMac ? '⌘' : 'Ctrl'
}
