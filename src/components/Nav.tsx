'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/agenda-setting-group', label: 'Agenda Setting Group' },
  { href: '/member-organisations', label: 'Members' },
  { href: '/meetings', label: 'Meetings' },
  { href: '/library', label: 'Library' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="International Spine Registries, home">
          <Image src="/isr-logo.png" alt="" width={28} height={28} priority />
          <span className="brand-name">International Spine Registries</span>
          <span className="brand-short">ISR</span>
        </Link>
        <nav aria-label="Primary" className={`nav-links${open ? ' open' : ''}`}>
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)} aria-current={pathname.startsWith(href) ? 'page' : undefined}>{label}</Link>
              </li>
            ))}
            <li className="nav-contact"><Link href="/about#contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <button
          className="nav-toggle"
          aria-expanded={open}
                    onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
