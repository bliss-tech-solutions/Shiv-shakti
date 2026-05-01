import { motion } from 'framer-motion'
import {
  FaBuilding, FaAnchor, FaLayerGroup, FaTruck,
  FaWater, FaHardHat, FaShieldAlt, FaTools, FaWrench, FaIndustry
} from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import './Services.css'

const services = [
  {
    icon: <FaBuilding />,
    title: 'Diaphragm Wall Construction',
    description: 'Reinforced concrete structures built as retaining walls & underground foundations for deep basements and metro projects.',
    color: '#ff6b35'
  },
  {
    icon: <FaAnchor />,
    title: 'Rock & Soil Anchoring',
    description: 'Securing objects on materials such as concrete, rock and soil with precision anchoring techniques.',
    color: '#ffa500'
  },
  {
    icon: <FaLayerGroup />,
    title: 'Top Down Construction',
    description: 'Casting retainer walls in top-down sequence, using a permanent structure as propping for efficient construction.',
    color: '#ff6b35'
  },
  {
    icon: <FaTruck />,
    title: 'RMC Supply',
    description: 'Manufacturing of Ready To Mix Concrete at our own plant for construction purposes with consistent quality.',
    color: '#ffa500'
  },
  {
    icon: <FaTools />,
    title: 'Shoring & Piling Works',
    description: 'Comprehensive shoring and piling solutions to support excavations and provide deep foundation support.',
    color: '#ff6b35'
  },
  {
    icon: <FaIndustry />,
    title: 'Micro Piles & Stone Columns',
    description: 'Advanced micro pile and stone column techniques for ground improvement and load transfer.',
    color: '#ffa500'
  },
  {
    icon: <FaWater />,
    title: 'Dewatering',
    description: 'Efficient dewatering solutions to manage groundwater during excavation and construction activities.',
    color: '#ff6b35'
  },
  {
    icon: <MdWaterDrop />,
    title: 'Waterproofing & Seepage Control',
    description: 'Comprehensive waterproofing and seepage control solutions for long-lasting structural integrity.',
    color: '#ffa500'
  },
  {
    icon: <FaWrench />,
    title: 'Drilling & Grouting',
    description: 'Precision drilling and grouting services for ground stabilization and void filling.',
    color: '#ff6b35'
  },
  {
    icon: <FaLayerGroup />,
    title: 'Sheet Piling',
    description: 'Steel sheet piling for temporary and permanent earth retention and water exclusion.',
    color: '#ffa500'
  },
  {
    icon: <FaHardHat />,
    title: 'Excavation',
    description: 'Large-scale excavation works with precision and safety for all types of construction projects.',
    color: '#ff6b35'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Civil Constructions',
    description: 'End-to-end civil construction services ensuring quality, safety, and timely delivery.',
    color: '#ffa500'
  }
]

const Services = () => {
  return (
    <section id="services" className="section-wrapper bg-light">
      <div className="services-section container">
        <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge">Our Expertise</span>
        <h2 className="section-title">Specialized Services</h2>
        <p className="section-subtitle">
          We provide comprehensive ground engineering and foundation solutions 
          backed by decades of technical excellence and innovation.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="service-icon-wrapper" style={{ '--icon-color': service.color }}>
              <div className="service-icon">{service.icon}</div>
              <div className="icon-glow"></div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-footer">
              <span className="learn-more">Learn More</span>
              <div className="service-line"></div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Services
