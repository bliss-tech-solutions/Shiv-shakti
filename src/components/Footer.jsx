import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const services = [
    "Diaphragm Wall",
    "Rock & Soil Anchoring",
    "Top Down Construction",
    "RMC Supply",
    "Shoring & Piling",
    "Dewatering",
  ];

  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Why Us",
    "Clients",
    "Projects",
    "Contact",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <img src="/logo.jpeg" alt="Shiv Shakti" className="footer-logo-img" />
              <span className="logo-text">Shiv Shakti</span>
            </div>
            <p className="footer-desc">
              Pioneering ground engineering solutions across India. 
              ISO 9001:2015 certified reliability for your most 
              ambitious infrastructure projects.
            </p>
            <div className="footer-socials">
              {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="social-link">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <a href="#services">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-items">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@shivshakti.in</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shiv Shakti Construction. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
