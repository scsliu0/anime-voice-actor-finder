import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">
          Anime Voice Actor Finder
        </Link>
        <div className="flex gap-4">
          {/* Add navigation links as you build features */}
        </div>
      </nav>
    </header>
  )
}