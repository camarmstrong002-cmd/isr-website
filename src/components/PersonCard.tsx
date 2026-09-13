export default function PersonCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="person">
      <div>
        <p className="person-name">{name}</p>
        <p className="person-role">{role}</p>
      </div>
      <p className="person-bio">{bio || <span className="muted">Registry representative</span>}</p>
    </div>
  )
}
