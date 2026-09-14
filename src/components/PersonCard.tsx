import Image from 'next/image'

function initials(name: string) {
  const parts = name.replace(/\b(Mr|Mrs|Ms|Dr|Prof|Professor|Sir|Dame)\.?\b/gi, '').trim().split(/\s+/).filter(Boolean)
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

export default function PersonCard({ name, role, bio, photo }: { name: string; role: string; bio: string; photo?: string }) {
  return (
    <div className="person">
      <div className="person-id">
        <div className="person-photo">
          {photo ? (
            <Image src={photo} alt={name} fill sizes="56px" style={{ objectFit: 'cover' }} />
          ) : (
            <span aria-hidden="true">{initials(name)}</span>
          )}
        </div>
        <div>
          <p className="person-name">{name}</p>
          <p className="person-role">{role}</p>
        </div>
      </div>
      <p className="person-bio">{bio || <span className="muted">Registry representative</span>}</p>
    </div>
  )
}
