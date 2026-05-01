import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-content"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
      >
        <div className="loader-logo">
          <div className="building-icon">
            {[40, 60, 30].map((h, i) => (
              <motion.div
                key={i}
                className="building-part"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: 'backOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1.5
                }}
                style={{ height: h, transformOrigin: 'bottom' }}
              />
            ))}
          </div>
        </div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Shiv <span>Shakti</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Construction Excellence
        </motion.p>

        <motion.div
          className="loader-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="loader-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader
