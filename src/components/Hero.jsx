import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { FaArrowDown } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
import "./Hero.css";

const heroImage = "/Images/Cage lifting start Silvassa site.jpeg";

const CountUpComponent = CountUp?.default || CountUp;

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const card1Y = useTransform(scrollY, [0, 500], [0, -50]);
  const card2Y = useTransform(scrollY, [0, 500], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div className="hero-background" style={{ y: y1 }}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
      </motion.div>

      <div className="container hero-container">
        {/* ─── LEFT: HERO CONTENT ─── */}
        <motion.div className="hero-content animate-left" style={{ opacity }}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Premium Construction Services</span>
          </div>
          <h1 className="hero-title">
            Building Your <span className="text-gradient">Vision</span>
            <br />
            With Excellence
          </h1>
          <p className="hero-description">
            We transform ideas into architectural masterpieces. Experience the
            perfect blend of modern design and structural integrity with
            Shiv-Shakti.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, "#projects")}
            >
              Our Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, "#contact")}
            >
              Contact Us
            </button>
          </div>
          <motion.div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: HERO VISUAL ─── */}
        <div className="hero-visual animate-right">
          <motion.div className="visual-wrapper" style={{ y: y2, scale }}>
            <img
              src={heroImage}
              alt="Modern Architecture"
              className="hero-image"
            />
            <div className="visual-overlay"></div>
          </motion.div>
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
  );
};

export default Hero;
