import './Pages.css'

export default function Team() {
  const team = [
    {
      avatar: '👨‍💼',
      name: 'Antoine Martin',
      role: 'Directeur Stratégie',
      bio: '10 ans d\'expérience en stratégie digitale et growth marketing.'
    },
    {
      avatar: '👩‍🎨',
      name: 'Sophie Dubois',
      role: 'Directrice Créative',
      bio: 'Créatrice passionnée par le branding et le design innovant.'
    },
    {
      avatar: '👨‍💻',
      name: 'Tom Lefevre',
      role: 'Lead Developer',
      bio: 'Expert en web design responsive et optimisation performance.'
    },
    {
      avatar: '👩‍💼',
      name: 'Marie Curé',
      role: 'Social Media Manager',
      bio: 'Spécialiste en gestion réseaux sociaux et community management.'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Notre Équipe</h2>
      <p className="section-subtitle">Rencontrez les experts derrière votre succès</p>
      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-member">
            <div className="member-avatar">{member.avatar}</div>
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
