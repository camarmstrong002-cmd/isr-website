export default function PageHero({ title, subtitle, overline }: { title: string; subtitle?: string; overline?: string }) {
  return (
    <section className="page-head">
      <div className="wrap">
        {overline && <p className="label">{overline}</p>}
        <h1 className="display">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  )
}
