import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
]

export function NavBar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold tracking-tight">
          Meghana Nanda Kumar
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-muted-foreground transition-colors hover:text-foreground',
                location.pathname === link.to && 'text-foreground font-medium',
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:meghana28698@gmail.com"
            className="rounded-full bg-primary px-4 py-1.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
