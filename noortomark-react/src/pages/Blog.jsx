import './Pages.css'

export default function Blog() {
  const articles = [
    {
      date: '23 Mar 2026',
      title: '5 Stratégies de Growth Hacking pour 2026',
      description: 'Découvrez les meilleures techniques pour accélérer la croissance de votre startup.'
    },
    {
      date: '20 Mar 2026',
      title: 'Comment Optimiser votre Budget Publicitaire',
      description: 'Guide complet pour maximiser votre ROI sur les campagnes Facebook et Google Ads.'
    },
    {
      date: '18 Mar 2026',
      title: 'Branding: Les Erreurs à Éviter',
      description: 'Les 7 erreurs courantes que commettent les entreprises lors de la création de leur brand.'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Notre Blog</h2>
      <p className="section-subtitle">Conseils et actualités du marketing digital</p>
      <div className="blog-grid">
        {articles.map((article, idx) => (
          <article key={idx} className="blog-post">
            <div className="blog-date">{article.date}</div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href="#" className="read-more">Lire l'article →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
