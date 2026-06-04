import { motion } from 'framer-motion'
import './Clients.css'

const clients = [
  { name: 'DRA', logo: '/clients/DRA.png' },
  { name: 'Khyati Group', logo: '/clients/Khyati_Group_Logo_black.png' },
  { name: 'Shanti Procon', logo: '/clients/Shanti_procon.png' },
  { name: 'Sobha Developer', logo: '/clients/Sobha_developer.svg' },
  { name: 'Chawda Group', logo: '/clients/chawda_group.png' },
  { name: 'Gamara Group', logo: '/clients/gamara_group.webp' },
  { name: 'Indraprasth', logo: '/clients/indraprasth.png' },
  { name: 'Nitya Buildcon', logo: '/clients/nitya_buildcon.svg' },
  { name: 'PSP Projects', logo: '/clients/psp.png' },
  { name: 'Shivalik Group', logo: '/clients/shivalik_group.svg' },
  { name: 'Shreenath Travels', logo: '/clients/shreenath_travels.jpg' },
  { name: 'Shyam Group', logo: '/clients/shyam_group.svg' },
  { name: 'Swara Group', logo: '/clients/swara_group.svg' },
  { name: 'Swarnim Developer', logo: '/clients/swarnim_Developer.png' },
  { name: 'Vivan Group', logo: '/clients/vivan_group.ico' }
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
           and real estate groups.
        </p>
      </motion.div>

      <div className="clients-grid">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            className="client-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 5) * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="client-logo-box">
              <img src={client.logo} alt={`${client.name} logo`} className="client-logo-img" />
            </div>
            <p className="client-name">{client.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="clients-marquee">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="marquee-item">
              <span className="dot"></span>
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
