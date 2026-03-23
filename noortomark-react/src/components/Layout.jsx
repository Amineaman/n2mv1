import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    setMobileMenuOpen(false)
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            Noortomark
          </Link>
          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="nav-link" onClick={() => handleNavClick('/')}>Accueil</Link></li>
            <li><Link to="/services" className="nav-link" onClick={() => handleNavClick('/services')}>Services</Link></li>
            <li><Link to="/portfolio" className="nav-link" onClick={() => handleNavClick('/portfolio')}>Portfolio</Link></li>
            <li><Link to="/pricing" className="nav-link" onClick={() => handleNavClick('/pricing')}>Tarifs</Link></li>
            <li><Link to="/team" className="nav-link" onClick={() => handleNavClick('/team')}>Équipe</Link></li>
            <li><Link to="/blog" className="nav-link" onClick={() => handleNavClick('/blog')}>Blog</Link></li>
            <li><Link to="/spline-demo" className="nav-link" onClick={() => handleNavClick('/spline-demo')}>3D Demo</Link></li>
            <li><Link to="/contact" className="nav-link btn-nav" onClick={() => handleNavClick('/contact')}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Noortomark</h3>
            <p>Agence de marketing digitale au service de votre croissance.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Stratégie Marketing</Link></li>
              <li><Link to="/services">Branding</Link></li>
              <li><Link to="/services">Web Design</Link></li>
              <li><Link to="/services">Social Media</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Entreprise</h4>
            <ul>
              <li><Link to="/team">Notre Équipe</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Noortomark. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
