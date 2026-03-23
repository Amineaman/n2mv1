import './Pages.css'

export default function Services() {
  const services = [
    {
      icon: '📊',
      title: 'Stratégie Marketing',
      description: 'Planification et mise en œuvre de stratégies marketing digitales personnalisées pour atteindre vos objectifs.'
    },
    {
      icon: '🎨',
      title: 'Branding',
      description: 'Création d\'identité visuelle unique et cohérente qui représente l\'essence de votre marque.'
    },
    {
      icon: '💻',
      title: 'Web Design',
      description: 'Design moderne et responsive, optimisé pour la conversion et l\'expérience utilisateur.'
    },
    {
      icon: '📱',
      title: 'Social Media',
      description: 'Gestion complète de vos réseaux sociaux avec création de contenu attractif et engagement.'
    },
    {
      icon: '🚀',
      title: 'Growth Hacking',
      description: 'Techniques innovantes pour accélérer la croissance de votre entreprise rapidement.'
    },
    {
      icon: '📈',
      title: 'Analytics & Data',
      description: 'Analyse approfondie des données pour optimiser chaque aspect de votre stratégie.'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Nos Services</h2>
      <p className="section-subtitle">Solutions complètes de marketing digital adaptées à votre entreprise</p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
