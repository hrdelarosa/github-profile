import ModeToggle from './mode-toggle'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

export default function SearchingContainer() {
  return (
    <div className="w-full h-56 grid place-items-center relative bg-cover bg-center bg-[url('/hero-image-github-profile.jpg')]">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-5 right-5 z-10">
        <ModeToggle />
      </div>

      <div className="relative w-1/3 z-10">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar usuario..."
          className="pl-10 h-11"
        />
      </div>
    </div>
  )
}
