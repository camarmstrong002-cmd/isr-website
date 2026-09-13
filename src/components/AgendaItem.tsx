import { ReactNode } from 'react'

export default function AgendaItem({ time, description }: { time: string; description: ReactNode }) {
  return (
    <tr>
      <td className="td-time">{time}</td>
      <td>{description}</td>
    </tr>
  )
}
