export default function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="person-card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{bio}</p>
    </div>
  )
}
