import { ReactNode } from 'react'

export default function AgendaItem({ time, description }: { time: string; description: ReactNode }) {
  return (
    <div className="agenda-item">
      <div className="agenda-time">{time}</div>
      <div className="agenda-desc">{description}</div>
    </div>
  )
}
