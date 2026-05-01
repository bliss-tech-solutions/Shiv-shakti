import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 98765 43210',
    color: '#ff6b35'
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'info@shivshakti.in',
    color: '#ffa500'
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Headquarters',
    value: 'Pan India Operations — 15 States, 35+ Cities',
    color: '#ff6b35'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section-wrapper bg-light">
      <div className="contact-section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
        <p className="section-subtitle">
          Ready to start your next infrastructure project? Reach out to our 
          team of specialized engineers today.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="info-content">
            <h3>Start a Conversation</h3>
            <p>
              Whether it's a deep basement in Mumbai or a metro tunnel in Delhi, 
              we have the expertise and machinery to deliver.
            </p>
          </div>

          <div className="contact-cards">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="contact-card glass-card"
                whileHover={{ x: 10 }}
              >
                <div className="contact-icon-box" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <p className="contact-value">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe"
                required 
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  required 
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+91 00000 00000"
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Tell us about your project..."
                rows="5" 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {submitted ? 'Message Sent!' : 'Send Message'}
              <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Contact
