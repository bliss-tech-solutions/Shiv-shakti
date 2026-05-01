import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaBuilding, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

const categories = ['All', 'Metro', 'Commercial', 'Residential', 'Infrastructure']

const projects = [
  {
    title: 'Delhi Metro Phase IV',
    client: 'DMRC',
    location: 'New Delhi',
    category: 'Metro',
    description: 'Diaphragm wall construction for underground metro stations with complex geotechnical conditions.',
    color: '#0066cc',
    icon: '🚇'
  },
  {
    title: 'Kochi Metro Extension',
    client: 'KMRL',
    location: 'Kochi, Kerala',
    category: 'Metro',
    description: 'Deep foundation and diaphragm wall works for metro corridor expansion in coastal terrain.',
    color: '#ff6600',
    icon: '🚊'
  },
  {
    title: 'DLF Commercial Complex',
    client: 'DLF',
    location: 'Gurugram, Haryana',
    category: 'Commercial',
    description: 'Top-down construction and deep basement works for premium commercial development.',
    color: '#c8102e',
    icon: '🏢'
  },
  {
    title: 'Shivalik Platinum',
    client: 'Shivalik Group',
    location: 'Ahmedabad, Gujarat',
    category: 'Residential',
    description: 'Comprehensive ground engineering solutions for luxury residential tower development.',
    color: '#8b0000',
    icon: '🏗️'
  },
  {
    title: 'Daman Seafront Project',
    client: 'Government of Daman',
    location: 'Daman',
    category: 'Infrastructure',
    description: 'Marine and seafront construction with specialized waterproofing and seepage control.',
    color: '#00838f',
    icon: '🌊'
  },
  {
    title: 'CCS Parliament Building',
    client: 'Central Government',
    location: 'New Delhi',
    category: 'Infrastructure',
    description: 'Precision foundation engineering for the prestigious Central Secretariat complex.',
    color: '#b8860b',
    icon: '🏛️'
  },
  {
    title: 'Kolkata Metro Corridor',
    client: 'KMRC',
    location: 'Kolkata, WB',
    category: 'Metro',
    description: 'Diaphragm wall and anchoring works for underground metro corridor in challenging soil.',
    color: '#006400',
    icon: '🚇'
  },
  {
    title: 'NTPC Power Plant',
    client: 'NTPC',
    location: 'Multiple Locations',
    category: 'Infrastructure',
    description: 'Ground improvement and deep foundation solutions for power generation infrastructure.',
    color: '#006633',
    icon: '⚡'
  },
  {
    title: 'Kanpur Metro Rail',
    client: 'UPMRC',
    location: 'Kanpur, UP',
    category: 'Metro',
    description: 'Comprehensive diaphragm wall construction for Kanpur metro underground section.',
    color: '#4a148c',
    icon: '🚊'
  }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-wrapper bg-white">
      <div className="projects-section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge">Our Portfolio</span>
        <h2 className="section-title">Landmark Projects</h2>
        <p className="section-subtitle">
          Delivering excellence across India's most challenging and prestigious infrastructure developments.
        </p>
      </motion.div>

      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="project-card glass-card"
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-category">{project.category}</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-details">
                <div className="detail-item">
                  <FaBuilding className="detail-icon" />
                  <span>{project.client}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>{project.location}</span>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <a href="#contact" className="view-project">
                  View Case Study <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </section>
  )
}

export default Projects
