import Image from 'next/image'

function getInitials(name: string) {
  const parts = name
    .replace(/\b(Mr|Mrs|Ms|Dr|Prof|Professor|Sir|Dame)\.?\b/gi, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export default function PersonCard({
  name,
  role,
  bio,
  photo,
}: {
  name: string
  role: string
  bio: string
  photo?: string
}) {
  return (
    <div className="person-card">
      <div className="person-photo">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="80px" style={{ objectFit: 'cover' }} />
        ) : (
          <span className="person-photo-initials" aria-hidden="true">
            {getInitials(name)}
          </span>
        )}
      </div>
      <h3>{name}</h3>
      <p className="role">{role}</p>
      {bio && <p>{bio}</p>}
    </div>
  )
}
