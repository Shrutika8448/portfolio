import { useState } from 'react'
import useTheme from '../hooks/useTheme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = ['About', 'Education', 'Projects', 'Skills', 'Certifications', 'Contact']

  return (
    <nav className="bg-offwhite DEFAULT dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-olive-dark">Portfolio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-olive-dark/80 dark:text-offwhite-light hover:text-olive dark:hover:text-olive-accent transition-colors"
              >
                {item}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-offwhite-deep dark:bg-gray-700 hover:bg-offwhite dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-offwhite-deep dark:bg-gray-700"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-olive-dark dark:text-offwhite-light">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-offwhite DEFAULT dark:bg-gray-900 border-t border-offwhite-deep dark:border-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-olive-dark dark:text-offwhite-light hover:bg-offwhite-light dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
