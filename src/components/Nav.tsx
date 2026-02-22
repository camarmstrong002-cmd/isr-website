'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/agenda-setting-group', label: 'Agenda Setting Group' },
    { href: '/member-organisations', label: 'Member Organisations' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/about', label: 'About' },
    { href: '/library', label: 'Library' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">
            <Image src="/isr-logo.png" alt="ISR" width={36} height={36} style={{ borderRadius: '50%' }} />
          </div>
          <span className="nav-logo-text">ISR</span>
        </Link>
        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/about" className="nav-cta" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          className="mobile-toggle"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
