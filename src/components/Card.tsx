import Link from 'next/link'

// A ruled index row, not a floating card.
export default function Card({ title, description, href, meta }: { title: string; description: string; href: string; meta?: string }) {
  return (
    <Link href={href} className="index-row">
      <span className="index-meta">{meta}</span>
      <span className="index-title">{title}</span>
      <span className="index-desc">{description}</span>
      <span className="index-arrow" aria-hidden="true">→</span>
    </Link>
  )
}
