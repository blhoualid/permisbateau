'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#formations', label: 'Formations' },
    { href: '/#tarifs', label: 'Tarifs' },
    { href: '/#avantages', label: 'Pourquoi nous' },
    { href: '/blog', label: 'Blog' },
    { href: '/#faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-colors ${
              isScrolled
                ? 'bg-navy-900 text-white'
                : 'bg-white text-navy-900'
            }`}
          >
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
              <path
                d="M20 5 L35 30 Q27 35 20 32 Q13 35 5 30 Z"
                className={`transition-colors ${isScrolled ? 'fill-white' : 'fill-navy-900'}`}
              />
              <path
                d="M8 28 Q14 24 20 28 Q26 24 32 28"
                className={`transition-colors ${isScrolled ? 'stroke-white' : 'stroke-navy-900'}`}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div>
            <span
              className={`font-heading font-bold text-lg leading-tight block transition-colors ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              Permis Bateau
            </span>
            <span
              className={`text-xs font-medium tracking-wider uppercase transition-colors ${
                isScrolled ? 'text-ocean-600' : 'text-ocean-300'
              }`}
            >
              Metz
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors hover:text-ocean-400 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-primary !py-3 !px-6 !text-base"
          >
            Être rappelé
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu de navigation"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 rounded transition-all ${
                isScrolled ? 'bg-navy-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all ${
                isScrolled ? 'bg-navy-900' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all ${
                isScrolled ? 'bg-navy-900' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-ocean-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-center mt-2"
          >
            Être rappelé gratuitement
          </Link>
        </nav>
      </div>
    </header>
  )
}
