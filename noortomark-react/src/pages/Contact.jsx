import { useState } from 'react'
import './Pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Merci ${formData.name}! Nous avons reçu votre message et vous répondrons rapidement à ${formData.email}.`)
    setFormData({ name: '', email: '', company: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section">
      <h2 className="section-title">Nous Contacter</h2>
      <p className="section-subtitle">Prêt à démarrer votre transformation digitale?</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-block">
            <h3>📍 Adresse</h3>
            <p>123 Avenue des Champs<br/>75008 Paris, France</p>
          </div>
          <div className="info-block">
            <h3>📞 Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="info-block">
            <h3>✉️ Email</h3>
            <p>contact@noortomark.fr</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Message envoyé avec succès! ✓</div>}
          <input 
            type="text" 
            name="name"
            placeholder="Votre nom" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Votre email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="company"
            placeholder="Votre entreprise" 
            value={formData.company}
            onChange={handleChange}
          />
          <textarea 
            name="message"
            placeholder="Votre message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  )
}
