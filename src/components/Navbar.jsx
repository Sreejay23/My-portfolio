import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-logo">SA.</div>

      {/* Desktop Links */}
      <ul className="nav-links desktop-nav">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger Button - mobile only */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'mobile-link active' : 'mobile-link'}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
