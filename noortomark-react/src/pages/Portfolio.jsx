import './Pages.css'

export default function Portfolio() {
  const projects = [
    {
      title: 'Tech Startup',
      description: 'Branding complet et growth marketing | +300% d\'acquisition',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'E-Commerce Luxe',
      description: 'Refonte web et stratégie social | +450% de ventes',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Agence Immobilière',
      description: 'Stratégie digitale complète | +200% de leads',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Restaurant Premium',
      description: 'Branding et réseaux sociaux | +350 clients mois',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'SaaS B2B',
      description: 'Content marketing et inbound | +500 MQL/mois',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Coaching Digital',
      description: 'Stratégie et funnels marketing | +80% conversion',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Nos Réalisations</h2>
      <p className="section-subtitle">Découvrez les projets que nous avons réalisés pour nos clients</p>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-item">
            <div className="portfolio-img" style={{ background: project.gradient }}></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="portfolio-link">Voir le projet →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
