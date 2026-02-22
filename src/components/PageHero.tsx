export default function PageHero({ title, subtitle, overline }: { title: string; subtitle?: string; overline?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        {overline && <p className="overline overline-dark">{overline}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
