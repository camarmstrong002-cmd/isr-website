import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/isr-logo.png" alt="" width={40} height={40} />
            <p className="footer-name">International Spine Registries</p>
            <p className="footer-tag">A voluntary alliance of the world’s spine registries, conceived by ODEP and supported by NEC Software Solutions.</p>
          </div>
          <div className="footer-col">
            <p className="label">Organisation</p>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/agenda-setting-group">Agenda Setting Group</Link></li>
              <li><Link href="/member-organisations">Member organisations</Link></li>
              <li><Link href="/about#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="label">Meetings</p>
            <ul>
              <li><Link href="/meetings">All meetings</Link></li>
              <li><Link href="/meetings/vienna-2024">Vienna 2024</Link></li>
              <li><Link href="/meetings/frankfurt-2023">Frankfurt 2023</Link></li>
              <li><Link href="/meetings/london-2022">London 2023</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="label">Resources</p>
            <ul>
              <li><Link href="/library">Library</Link></li>
              <li><Link href="/#statements">Position statements</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} International Spine Registries</p>
          <p>Conceived by ODEP · Secretariat by NEC Software Solutions</p>
        </div>
      </div>
    </footer>
  )
}
