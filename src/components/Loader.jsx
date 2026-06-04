import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated rings behind logo */}
        <div className="loader-rings">
          <motion.div
            className="ring ring-1"
            animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="ring ring-2"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.08, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
        </div>

        {/* Logo — original white SVG, no card */}
        <motion.div
          className="loader-logo-wrap"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut', delay: 0.1 }}
        >
          <img src="/Logo-dark-cropped.svg" alt="Shiv Shakti" className="loader-logo-img" />
        </motion.div>

        {/* Brand name */}
        <motion.div
          className="loader-brand"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <span className="brand-shiv">SHIV</span>
          <span className="brand-dot"> · </span>
          <span className="brand-shakti">SHAKTI</span>
        </motion.div>

        <motion.p
          className="loader-tagline"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          Construction Excellence
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="loader-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <motion.div
            className="loader-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.85, duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div
            className="loader-bar-glow"
            initial={{ left: '0%', opacity: 0 }}
            animate={{ left: '100%', opacity: [0, 1, 0] }}
            transition={{ delay: 0.85, duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>

        {/* Animated dots */}
        <motion.div
          className="loader-dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="loader-dot"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader