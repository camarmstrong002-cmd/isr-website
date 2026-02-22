import Link from 'next/link'

export default function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-arrow">
        Learn more
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 7h12M8 2l5 5-5 5"/>
        </svg>
      </span>
    </Link>
  )
}
