import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-base-200 shadow-lg relative z-40">
      <nav className="navbar container mx-auto px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Contractor Clock</a>
        </div>
        <div className="flex-none hidden md:flex items-center">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <ThemeToggle />
        <MobileMenu />
      </nav>
    </header>
  )
}
