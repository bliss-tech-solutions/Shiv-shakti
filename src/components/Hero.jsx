import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaArrowDown } from 'react-icons/fa'
import heroImage from '../assets/hero.png'
import './Hero.css'

const CountUpComponent = CountUp?.default || CountUp

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Premium Construction Services</span>
          </div>
          <h1 className="hero-title">
            Building Your <span className="text-gradient">Vision</span><br />
            With Excellence
          </h1>
          <p className="hero-description">
            We transform ideas into architectural masterpieces. Experience the perfect blend of 
            modern design and structural integrity with Shiv-Shakti.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Our Projects</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-right">
          <div className="visual-wrapper">
            <img src={heroImage} alt="Modern Architecture" className="hero-image" />
            <div className="visual-overlay"></div>
            
            <div className="floating-card card-1">
              <div className="card-icon">🏗️</div>
              <div className="card-info">
                <h4>Expert Builders</h4>
                <p>Quality Guarantee</p>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <div className="card-icon">⭐</div>
              <div className="card-info">
                <h4>4.9/5 Rating</h4>
                <p>From 500+ Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero
