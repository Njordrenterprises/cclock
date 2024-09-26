import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-base-200 bg-opacity-70 backdrop-blur-md shadow-lg z-50">
      <nav className="navbar container mx-auto px-4">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">Contractor Clock</a>
        </div>
        <div className="flex-none hidden md:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/#features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <ThemeToggle />
        <MobileMenu />
      </nav>
    </header>
  )
}
