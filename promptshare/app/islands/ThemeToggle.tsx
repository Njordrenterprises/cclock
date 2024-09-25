import { useState, useEffect } from 'hono/jsx'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('synthwave')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'synthwave'
    if (storedTheme !== theme) {
      setTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue || 'synthwave'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'synthwave' ? 'light' : 'synthwave'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <button 
      onClick={toggleTheme} 
      className="btn btn-ghost"
      aria-label={`Switch to ${theme === 'synthwave' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'synthwave' ? 'light' : 'dark'} mode`}
    >
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        {theme === 'synthwave' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        )}
      </svg>
      <span className="sr-only">{`Switch to ${theme === 'synthwave' ? 'light' : 'dark'} mode`}</span>
    </button>
  )
}
