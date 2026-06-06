import { motion, useScroll, useTransform } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FaProjectDiagram, FaCity, FaUsers, FaRoad, FaCheckCircle } from 'react-icons/fa'
import './WhyChooseUs.css'

const whyImage = '/Images/Grabbing start panel.jpeg'

const CountUpComponent = CountUp?.default || CountUp

const stats = [
  { icon: <FaProjectDiagram />, number: 300, suffix: '+', label: 'Projects Completed' },
  { icon: <FaRoad />, number: 15, suffix: '+', label: 'KM Diaphragm Walls' },
  { icon: <FaUsers />, number: 150, suffix: '+', label: 'Team Members' },
  { icon: <FaCity />, number: 10, suffix: '+', label: 'Cities Served' }
]

const highlights = [
  'ISO 9001:2015 Certified Company',
  'Largest diaphragm wall fleet in India',
  'Modern Machinery imported from Italy',
  'Active in 15 Indian states',
  'Decade-old award-winning company',
  'Serving prestigious metro & infra clients'
]

const WhyChooseUs = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section id="why-us" className="section-wrapper bg-white why-section-root">
      <div className="why-background">
        <motion.img 
          src={whyImage} 
          alt="Background" 
          className="why-bg-img" 
          style={{ y }}
        />
        <div className="why-bg-overlay"></div>
      </div>
      <div className="why-section container">
        <div className="why-grid">
          <motion.div
          className="why-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Our Strength</span>
          <h2 className="section-title">Why <span className="text-gradient">Shiv Shakti?</span></h2>
          <p className="why-desc">
            We are pioneers in ground engineering, providing crucial geotechnical 
            solutions for India's most ambitious infrastructure projects.
          </p>

          <div className="highlights-list">
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                className="highlight-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCheckCircle className="check-icon" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ stat, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="stat-card glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="stat-icon-box">{stat.icon}</div>
      <div className="stat-value">
        {inView ? (
          <CountUpComponent
            start={0}
            end={stat.number}
            duration={2.5}
            suffix={stat.suffix}
          />
        ) : '0'}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

export default WhyChooseUs
