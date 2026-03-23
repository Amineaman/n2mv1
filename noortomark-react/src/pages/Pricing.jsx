import { Link } from 'react-router-dom'
import './Pages.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '€990',
      featured: false,
      features: [
        'Stratégie marketing basique',
        '2 posts réseaux/semaine',
        'Maintenance site web',
        'Analytics avancée',
        'Campagnes Facebook/Google'
      ]
    },
    {
      name: 'Growth',
      price: '€2,490',
      featured: true,
      features: [
        'Stratégie marketing complète',
        '5 posts réseaux/semaine',
        'Gestion réseaux sociaux',
        'Analytics avancée',
        'Campagnes Facebook/Google'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      featured: false,
      features: [
        'Solution 100% personnalisée',
        'Équipe dédiée',
        'Support prioritaire 24/7',
        'Création site web custom',
        'Tous les services inclus'
      ]
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Nos Formules</h2>
      <p className="section-subtitle">Choisissez le forfait adapté à votre entreprise</p>
      <div className="pricing-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            {plan.featured && <div className="badge">Populaire</div>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}<span>/mois</span></p>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
              {plan.featured ? 'Découvrir' : 'Nous contacter'}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
