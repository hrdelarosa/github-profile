import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { useSearchUser } from '@/hooks/useSearchUser'
import { useShortcuts } from '@/hooks/useShortcuts'

export default function SearchingContainer() {
  const { value, setSearch } = useSearchUser()
  const { searchRef, shortcutKey } = useShortcuts()

  return (
    <div className="relative w-full z-10 mb-16">
      <Search className="absolute size-5 left-2.5 top-1/2 transform -translate-y-1/2 text-muted-foreground" />

      <Input
        id="search"
        type="text"
        placeholder="Buscar usuario..."
        defaultValue={value}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10 h-11 text-base text-white"
        ref={searchRef}
      />

      <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
        <p className="text-xs text-white">
          <kbd className="py-1 px-1.5 bg-background rounded">{shortcutKey}</kbd>{' '}
          + <kbd className="py-1 px-1.5 bg-background rounded">K</kbd>
        </p>
      </div>
    </div>
  )
}
