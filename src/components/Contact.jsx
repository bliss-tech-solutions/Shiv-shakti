import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 99252 45018',
    color: '#ff6b35'
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 70411 10599',
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
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ─── VALIDATION RULES ───
  const validateField = (name, value) => {
    const trimmed = value.trim()

    switch (name) {
      case 'name':
        if (!trimmed) return 'Full name is required'
        if (trimmed.length < 2) return 'Name must be at least 2 characters'
        if (trimmed.length > 50) return 'Name must be less than 50 characters'
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Name can only contain letters, spaces, dots, hyphens'
        return ''

      case 'email':
        if (!trimmed) return 'Email is required'
        // RFC 5322 compliant regex (simplified)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(trimmed)) return 'Please enter a valid email address'
        if (trimmed.length > 100) return 'Email is too long'
        return ''

      case 'phone':
        if (!trimmed) return 'Phone number is required'
        // Remove common separators for validation
        const cleaned = trimmed.replace(/[\s\-()+]/g, '')
        if (!/^\d+$/.test(cleaned)) return 'Phone can only contain digits and +, -, (), spaces'
        if (cleaned.length < 10) return 'Phone number must be at least 10 digits'
        if (cleaned.length > 15) return 'Phone number is too long (max 15 digits)'
        return ''

      case 'message':
        if (!trimmed) return 'Message is required'
        if (trimmed.length < 10) return 'Message must be at least 10 characters'
        if (trimmed.length > 1000) return 'Message must be less than 1000 characters'
        return ''

      default:
        return ''
    }
  }

  // ─── VALIDATE ENTIRE FORM ───
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
    return newErrors
  }

  // ─── HANDLE CHANGE ───
  const handleChange = (e) => {
    const { name, value } = e.target

    // ✅ PHONE: only allow digits and phone separators (+, -, (, ), space)
    let newValue = value
    if (name === 'phone') {
      newValue = value.replace(/[^\d\s+\-()]/g, '')
    }

    setFormData({ ...formData, [name]: newValue })

    // Live validation if field was already touched
    if (touched[name]) {
      const error = validateField(name, newValue)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  // ─── HANDLE BLUR (validate on leave) ───
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  // ─── HANDLE SUBMIT ───
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields touched so errors show
    setTouched({ name: true, email: true, phone: true, message: true })

    const validationErrors = validateForm()
    setErrors(validationErrors)

    // Stop if any errors
    if (Object.keys(validationErrors).length > 0) {
      // Focus first error field for accessibility
      const firstErrorField = Object.keys(validationErrors)[0]
      const el = document.querySelector(`[name="${firstErrorField}"]`)
      if (el) el.focus()
      return
    }

    // Simulate API call
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
      setTouched({})
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setIsSubmitting(false)
    }
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
            {submitted && (
              <motion.div
                className="submit-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '1.25rem' }}
              >
                ✓ Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* ─── FULL NAME ─── */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={errors.name && touched.name ? 'input-error' : ''}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  maxLength={50}
                />
                {errors.name && touched.name && (
                  <span id="name-error" className="error-message">{errors.name}</span>
                )}
              </div>

              {/* ─── EMAIL + PHONE ROW ─── */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={errors.email && touched.email ? 'input-error' : ''}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    maxLength={100}
                  />
                  {errors.email && touched.email && (
                    <span id="email-error" className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    onKeyDown={(e) => {
                      // Block 'e', 'E', '.', and other non-phone keys
                      if (['e', 'E', '.', ','].includes(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    placeholder="+91 00000 00000"
                    className={errors.phone && touched.phone ? 'input-error' : ''}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    maxLength={10}
                    inputMode="tel"
                  />
                  {errors.phone && touched.phone && (
                    <span id="phone-error" className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* ─── MESSAGE ─── */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                  <span className="char-count">
                    {formData.message.length}/1000
                  </span>
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  placeholder="Tell us about your project..."
                  rows="5" 
                  className={errors.message && touched.message ? 'input-error' : ''}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  maxLength={1000}
                ></textarea>
                {errors.message && touched.message && (
                  <span id="message-error" className="error-message">{errors.message}</span>
                )}
              </div>

              {/* ─── SUBMIT BUTTON ─── */}
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
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