import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Image src="/isr-logo.png" alt="ISR" width={32} height={32} />
              </div>
              <span className="footer-logo-text">International Spine Registries</span>
            </div>
            <p>
              Bringing together the global spine community to improve patient outcomes
              through collaborative data standardisation.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/agenda-setting-group">Agenda Setting Group</Link></li>
              <li><Link href="/member-organisations">Member Organisations</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Meetings</h4>
            <ul>
              <li><Link href="/meetings">All Meetings</Link></li>
              <li><Link href="/meetings/vienna-2024">Vienna 2024</Link></li>
              <li><Link href="/meetings/frankfurt-2023">Frankfurt 2023</Link></li>
              <li><Link href="/meetings/london-2022">London 2022</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/library">Library</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 International Spine Registries</p>
          <p>Conceived by ODEP</p>
        </div>
      </div>
    </footer>
  )
}
