import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaCog, FaMapMarkedAlt } from 'react-icons/fa'
import './About.css'

const features = [
  {
    icon: <FaAward />,
    title: 'ISO Certified',
    description: 'ISO 9001:2015 certified company with proven quality standards'
  },
  {
    icon: <FaUsers />,
    title: '500+ Team',
    description: 'Dedicated professionals ensuring project excellence'
  },
  {
    icon: <FaCog />,
    title: 'Modern Fleet',
    description: 'Largest diaphragm wall construction fleet in India'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: '15 States',
    description: 'Active operations across India in 35+ cities'
  }
]

const About = () => {
  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="about-section container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Story</span>
            <h2 className="section-title">Decades of Engineering <span className="text-gradient">Mastery</span></h2>
            <div className="about-description">
              <p>
                Shiv Shakti Construction is a renowned ground engineering firm 
                specializing in complex foundation solutions. From deep basements 
                to metro corridors, we've been the silent strength behind India's 
                most iconic structures.
              </p>
              <p>
                With over 15 years of experience and ISO 9001:2015 certification, 
                we combine traditional expertise with cutting-edge technology 
                imported from Italy and Germany.
              </p>
            </div>
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">Learn More About Us</a>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon-box">
                  {feature.icon}
                </div>
                <div className="feature-info">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
