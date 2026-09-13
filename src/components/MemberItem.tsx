export default function MemberItem({ name, country, type }: { name: string; country: string; type: string }) {
  return (
    <tr>
      <td className="td-strong">{name}</td>
      <td>{country}</td>
      <td className="td-muted">{type}</td>
    </tr>
  )
}
