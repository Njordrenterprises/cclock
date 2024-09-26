import { useState } from 'hono/jsx'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown dropdown-end md:hidden">
      <button 
        onClick={toggleMenu} 
        className="btn btn-square btn-ghost"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      {isOpen && (
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
          <li><a href="/#features" className="px-4 py-2">Features</a></li>
          <li><a href="/pricing" className="px-4 py-2">Pricing</a></li>
          <li><a href="/contact" className="px-4 py-2">Contact</a></li>
        </ul>
      )}
    </div>
  )
}
