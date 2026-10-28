'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { APP_URL, NAV, SITE } from '@/content/copy'

export default function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled ? 'border-gray-200' : 'border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-primary-700 tracking-tight">
            {SITE.name}
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {NAV.links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={APP_URL}
              className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
            >
              {NAV.login}
            </a>
            <a
              href={APP_URL}
              className="bg-primary-700 text-white text-[15px] font-bold px-5 py-2.5 rounded-full hover:bg-primary-800 transition-colors"
            >
              {NAV.cta}
            </a>
          </div>

          <button
            className="md:hidden px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '닫기' : '메뉴'}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {NAV.links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-medium text-gray-700 px-2 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <a href={APP_URL} className="text-base font-medium text-gray-700 px-2 py-3">
              {NAV.login}
            </a>
            <a
              href={APP_URL}
              className="bg-primary-700 text-white text-base font-bold px-5 py-3 rounded-full text-center mt-1 hover:bg-primary-800 transition-colors"
            >
              {NAV.cta}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
