import { motion } from 'framer-motion'
import './Clients.css'

const clients = [
  { name: 'Larsen & Toubro', abbr: 'L&T', color: '#003087' },
  { name: 'DLF', abbr: 'DLF', color: '#c8102e' },
  { name: 'Delhi Metro', abbr: 'DMRC', color: '#0066cc' },
  { name: 'Kolkata Metro', abbr: 'KMRC', color: '#006400' },
  { name: 'Kochi Metro', abbr: 'KMRL', color: '#ff6600' },
  { name: 'Kanpur Metro', abbr: 'UPMRC', color: '#8b0000' },
  { name: 'Ahmedabad Metro', abbr: 'MEGA', color: '#1a237e' },
  { name: 'Agra Metro', abbr: 'UPMRC', color: '#4a148c' },
  { name: 'NTPC', abbr: 'NTPC', color: '#006633' },
  { name: 'CCS Parliament', abbr: 'CCS', color: '#b8860b' },
  { name: 'Daman Seafront', abbr: 'DSF', color: '#00838f' },
  { name: 'Aadarshini Real Estate', abbr: 'ARE', color: '#e65100' }
]

const Clients = () => {
  return (
    <section id="clients" className="section-wrapper bg-light">
      <div className="clients-section container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge">Our Clients</span>
        <h2 className="section-title">Trusted By <span className="text-gradient">Industry Giants</span></h2>
        <p className="section-subtitle">
          We are proud to partner with India's leading infrastructure developers 
           and government bodies.
        </p>
      </motion.div>

      <div className="clients-grid">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            className="client-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="client-logo-box" style={{ '--client-color': client.color }}>
              <span>{client.abbr}</span>
            </div>
            <p className="client-name">{client.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="clients-marquee">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="marquee-item">
              <span className="dot" style={{ background: client.color }}></span>
              {client.name}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default Clients
