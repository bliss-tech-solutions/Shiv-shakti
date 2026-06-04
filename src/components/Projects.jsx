// Projects.jsx - Fixed version

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaArrowRight,
  FaChevronDown,
  FaLayerGroup,
  FaCalendarAlt,
} from "react-icons/fa";
import "./Projects.css";

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Infrastructure",
];

const clientGroups = [
  {
    client: "Swara Group",
    clientFullName: "Swara Group",
    category: "Residential",
    color: "#0066cc",
    image: "/Images/Grabbing start p-21.jpeg",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        title: "Swara Sky Elegance",
        location: "Vasna, Ahmedabad, Gujarat",
        description:
          "Residential high-rise development featuring premium 2 & 3 BHK apartments, modern amenities, advanced security systems, and contemporary architectural design in the heart of North Vasna.",
        year: "2025",
      },
      {
        title: "Swara Sky Arise",
        location: "North Vasna, Ahmedabad, Gujarat",
        description:
          "Premium 3 BHK residential development featuring modern architecture, landscaped open spaces, wellness amenities, smart security systems, and contemporary urban living in the heart of North Vasna.",
        year: "2025",
      },
      {
        title: "Swara Sky Luxuria",
        location: "North Vasna, Ahmedabad, Gujarat",
        description:
          "Construction and structural development works for a luxury residential project, delivering high-quality craftsmanship, robust engineering, and timely execution.",
        year: "2025",
      },
    ],
  },
  {
    client: "Nitya Buildcon",
    clientFullName: "Nitya Buildcon",
    category: "Infrastructure",
    color: "#ff6600",
    image: "/Images/Cage Lifting start.jpeg",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        title: "Nitya Aurelia",
        location: "Usmanpura, Ahmedabad",
        description:
          "Premium high-end residential apartment project featuring exclusive 3 BHK and 4 BHK configurations in a low-density, single-block development.",
        year: "2027",
      },
    ],
  },
  {
    client: "Shreenath Travels",
    clientFullName: "Shreenath Travels",
    category: "Commercial",
    color: "#c8102e",
    image: "/Images/Grabbing start panel.jpeg",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        title: "Shreenath Sky",
        location: "Shahibaug, Ahmedabad",
        description:
          "Premium residential project offering spacious apartment living with modern amenities in a highly sought-after central neighborhood.",
        year: "2026",
      },
    ],
  },
  {
    client: "Shivalik Group",
    clientFullName: "Shivalik Group",
    category: "Residential",
    color: "#8b0000",
    icon: "🏗️",
    image: "/Images/Cage lifting start2.jpeg",
    location: "Ahmedabad",
    projects: [
      {
        title: "Shivalik Sharda Harmony",
        location: "Panjrapole, Ambawadi, Ahmedabad",
        description:
          "Premium eco-conscious mixed-use development featuring luxurious 3 BHK + WFH and 4 BHK 'Green Home' residences alongside ground-floor retail spaces.",
        year: "2024",
      },
    ],
  },
  {
    client: "Gamara Group",
    clientFullName: "Gamara Group",
    category: "Infrastructure",
    color: "#00838f",
    image: "/Images/Guidewall labar kaam start.jpeg",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        title: "Gamara Hills",
        location: "Shela, Ahmedabad",
        description:
          "A premium, modern mid-budget residential community featuring thoughtfully designed 3 BHK apartments and standard lifestyle amenities in a fast-growing hub.",
        year: "2026",
      },
    ],
  },
  {
    client: "Shanti Procon",
    clientFullName: "Shanti Procon LLP",
    category: "Infrastructure",
    color: "#4a148c",
    icon: "🏥",
    image: "/Images/Cage lifting start Silvassa site.jpeg",
    location: "Silvassa",
    projects: [
      {
        title: "Namo Medical College",
        location: "Silvassa, DNHDD",
        description:
          "Comprehensive development of the institutional campus, featuring premium exposed concrete works and state-of-the-art medical education infrastructure.",
        year: "2023",
      },
    ],
  },
  {
    client: "Sobha Developer",
    clientFullName: "Sobha Developer",
    category: "Residential",
    color: "#4a148c",
    icon: "🏢",
    image: "/Images/Sobha Elysia Elevation.jpeg",
    location: "Gandhinagar, Gujarat",
    projects: [
      {
        title: "SOBHA Elysia",
        location: "GIFT City, Gandhinagar",
        description:
          "Ultra-luxury high-rise residential towers featuring premium 3 & 4 BHK residences with home offices and duplexes, redefining international smart-city living.",
        year: "2024",
      },
    ],
  },
  {
    client: "DRA",
    clientFullName: "Dineshchandra R. Agrawal Infracon Pvt. Ltd.",
    category: "Infrastructure",
    color: "#4a148c",
    icon: "🌉",
    image: "/Images/Sabarmati Riverfront Subhash Bridge DRA.jpeg",
    location: "Ahmedabad, Gujarat",
    projects: [
      {
        title: "Sabarmati Riverfront Development (Subhash Bridge Section)",
        location: "Ahmedabad, Gujarat",
        description:
          "Comprehensive infrastructure and promenade development works for the Sabarmati Riverfront project near Subhash Bridge, including structural and allied civil works.",
        year: "2024",
      },
    ],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedClient, setExpandedClient] = useState(null);

  const filtered =
    activeCategory === "All"
      ? clientGroups
      : clientGroups.filter((p) => p.category === activeCategory);

  const toggleExpand = (client) => {
    setExpandedClient(expandedClient === client ? null : client);
  };

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
            Delivering excellence across India's most challenging and prestigious
            infrastructure developments.
          </p>
        </motion.div>

        {/* ─── Filter Buttons ─── */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedClient(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─── Projects Grid ─── */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((group) => {
              const isExpanded = expandedClient === group.client;
              const hasMultiple = group.projects.length > 1;
              const singleProject = group.projects[0];

              return (
                <motion.div
                  key={group.client}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`project-card glass-card ${
                    isExpanded ? "expanded" : ""
                  }`}
                  style={{
                    gridColumn: isExpanded && hasMultiple ? "1 / -1" : "auto",
                  }}
                >
                  {/* ─── IMAGE HEADER ─── */}
                  <div className="project-image-box">
                    <img
                      src={group.image}
                      alt={group.client}
                      className="project-img"
                    />
                    <div className="project-overlay">
                      {group.icon && (
                        <div className="project-icon">{group.icon}</div>
                      )}
                      <div className="project-category">{group.category}</div>
                    </div>

                    {/* ── Multi-project badge (only when >1 project) ── */}
                    {hasMultiple && (
                      <motion.div
                        className="multi-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <FaLayerGroup />
                        <span>{group.projects.length} Projects</span>
                      </motion.div>
                    )}

                    {/* ── Single-project year badge ── */}
                    {!hasMultiple && (
                      <motion.div
                        className="year-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <FaCalendarAlt />
                        <span>{singleProject.year}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* ─── CARD CONTENT ─── */}
                  <div className="project-info">
                    {/* Client name */}
                    <h3 className="project-title">{group.client}</h3>
                    <p className="client-fullname">{group.clientFullName}</p>

                    {/* ── SINGLE PROJECT: show project title prominently ── */}
                    {!hasMultiple && (
                      <div className="single-project-title-box">
                        <span className="single-project-label">Project</span>
                        <span className="single-project-name">
                          {singleProject.title}
                        </span>
                      </div>
                    )}

                    {/* Details row */}
                    <div className="project-details">
                      <div className="detail-item">
                        <FaBuilding className="detail-icon" />
                        <span>
                          {group.projects.length}{" "}
                          {group.projects.length === 1 ? "Project" : "Projects"}
                        </span>
                      </div>
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>
                          {hasMultiple
                            ? group.location
                            : singleProject.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="project-description">
                      {singleProject.description}
                    </p>

                    {/* ─── EXPANDED CONTENT (multi-project only) ─── */}
                    <AnimatePresence>
                      {isExpanded && hasMultiple && (
                        <motion.div
                          className="expanded-projects"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                        >
                          <div className="expanded-divider">
                            <span>All Projects</span>
                          </div>
                          <div className="expanded-list">
                            {group.projects.map((project, idx) => (
                              <motion.div
                                key={project.title}
                                className="expanded-project-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <div
                                  className="expanded-marker"
                                  style={{ background: group.color }}
                                >
                                  {idx + 1}
                                </div>
                                <div className="expanded-content">
                                  <div className="expanded-header">
                                    <h4>{project.title}</h4>
                                    <span className="expanded-year">
                                      {project.year}
                                    </span>
                                  </div>
                                  <div className="expanded-location">
                                    <FaMapMarkerAlt /> {project.location}
                                  </div>
                                  <p>{project.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ─── FOOTER ─── */}
                    <div className="project-footer">
                      {hasMultiple ? (
                        /* Multi-project: expand/collapse button */
                        <button
                          className="view-project expand-btn"
                          onClick={() => toggleExpand(group.client)}
                        >
                          {isExpanded
                            ? "Show Less"
                            : `View All ${group.projects.length} Projects`}
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: "inline-flex" }}
                          >
                            <FaChevronDown />
                          </motion.span>
                        </button>
                      ) : (
                        /* Single project: contact CTA */
                        <a href="#contact" className="view-project">
                          View Case Study <FaArrowRight />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;