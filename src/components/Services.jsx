import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FaBuilding,
  FaAnchor,
  FaLayerGroup,
  FaTruck,
  FaWater,
  FaHardHat,
  FaShieldAlt,
  FaTools,
  FaWrench,
  FaIndustry,
  FaTimes,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaBuilding />,
    title: "Diaphragm Wall Construction",
    description:
      "Advanced reinforced concrete retaining walls designed for deep excavations, underground structures, metro stations, and large-scale infrastructure projects.",

    color: "#ff6b35",

    fullDescription: `Diaphragm Wall Construction is one of the most reliable deep foundation and earth-retaining solutions used in modern infrastructure and high-rise developments. At Shiv Shakti Infrastructure, we specialize in the design and construction of reinforced concrete diaphragm walls that provide exceptional structural stability, groundwater control, and excavation support. Constructed panel-by-panel using specialized hydraulic grabs and trench cutters, diaphragm walls are ideal for deep basements, metro stations, underground parking facilities, tunnels, and waterfront structures. These walls serve as both temporary excavation support and permanent structural elements, ensuring maximum safety, durability, and performance even in challenging ground conditions and congested urban environments.`,

    features: [
      "Construction depths exceeding 50 meters",
      "Excellent groundwater cut-off and seepage control",
      "Minimal vibration and noise during execution",
      "High structural strength and load-bearing capacity",
      "Suitable for restricted and congested urban sites",
      "Can function as both temporary and permanent structures",
      "Advanced quality control and monitoring systems",
      "Compatible with top-down construction techniques",
    ],

    applications: [
      "Metro Rail Stations",
      "Deep Basement Construction",
      "Underground Parking Structures",
      "Commercial & Residential High-Rise Buildings",
      "Tunnels & Underground Passages",
      "Waterfront & Marine Structures",
      "Industrial Facilities",
      "Infrastructure Development Projects",
    ],

    benefits: [
      "Enhanced excavation safety and stability",
      "Reduced impact on adjacent structures",
      "Effective groundwater management",
      "Faster project execution in urban environments",
      "Long-term structural durability",
      "Lower maintenance requirements",
      "Optimized use of underground space",
      "Cost-effective solution for deep excavations",
    ],

    projectHighlights: [
      "Experienced diaphragm wall construction specialists",
      "Modern hydraulic equipment and machinery",
      "Strict adherence to safety standards",
      "Comprehensive geotechnical expertise",
      "Proven execution of complex infrastructure projects",
      "End-to-end project management and support",
    ],
  },
  {
    icon: <FaAnchor />,
    title: "Rock & Soil Anchoring",

    description:
      "Specialized anchoring solutions designed to stabilize soil, rock masses, retaining structures, and deep excavations for enhanced structural safety and long-term performance.",

    color: "#ffa500",

    fullDescription:
      "Shiv Shakti Infrastructure provides advanced Rock & Soil Anchoring solutions for projects requiring additional ground support and structural stability. Our anchoring systems are engineered to transfer loads from unstable soil or rock formations to deeper, stronger strata, ensuring the safety and integrity of retaining walls, slopes, foundations, tunnels, and excavation support systems. Using state-of-the-art drilling, grouting, and testing techniques, we deliver both temporary and permanent anchoring solutions tailored to project-specific geotechnical conditions. Our expertise helps minimize ground movement, improve load-bearing capacity, and enhance overall project safety in challenging environments.",

    features: [
      "High-capacity tensile anchor systems",
      "Permanent and temporary anchoring solutions",
      "Advanced corrosion protection systems",
      "Comprehensive load testing and verification",
      "Suitable for diverse soil and rock conditions",
      "Precision drilling and grouting techniques",
      "Enhanced excavation and slope stability",
      "Custom-engineered anchor designs",
    ],

    applications: [
      "Retaining Walls",
      "Slope Stabilization Projects",
      "Deep Excavations",
      "Tunnel Support Systems",
      "Dam & Reservoir Structures",
      "Bridge Abutments",
      "Foundation Reinforcement",
      "Infrastructure Development Projects",
    ],

    benefits: [
      "Improves structural stability and safety",
      "Reduces ground movement and settlement",
      "Increases load-bearing capacity",
      "Cost-effective alternative to structural redesign",
      "Suitable for challenging geotechnical conditions",
      "Extends the service life of structures",
      "Minimizes risks during excavation activities",
      "Provides reliable long-term performance",
    ],

    projectHighlights: [
      "Experienced geotechnical engineering team",
      "Modern drilling and anchoring equipment",
      "Strict quality assurance procedures",
      "Compliance with international safety standards",
      "Successful execution of complex infrastructure projects",
      "End-to-end design, installation, and testing support",
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: "Top Down Construction",

    description:
      "Advanced construction methodology that enables simultaneous excavation and structural development, reducing project timelines while ensuring safety and efficiency.",

    color: "#ff6b35",

    fullDescription:
      "Top Down Construction is a highly efficient construction technique widely used for deep basements, metro stations, underground structures, and high-rise developments in densely populated urban areas. In this method, permanent structural slabs are constructed progressively from the ground level downward while the superstructure can be built simultaneously above ground. This approach significantly reduces construction time, minimizes disruption to surrounding properties, and provides continuous support to excavation works. Shiv Shakti Infrastructure utilizes modern engineering practices and advanced construction technologies to deliver safe, cost-effective, and high-quality top-down construction solutions for complex infrastructure and commercial projects.",

    features: [
      "Simultaneous superstructure and substructure construction",
      "Significant reduction in overall project duration",
      "Minimal ground settlement and movement",
      "Permanent floor slabs act as excavation supports",
      "Enhanced safety during deep excavation works",
      "Reduced impact on adjacent structures",
      "Ideal for congested urban environments",
      "Efficient groundwater and excavation management",
    ],

    applications: [
      "High-Rise Building Basements",
      "Metro Rail Stations",
      "Underground Parking Facilities",
      "Commercial Complexes",
      "Mixed-Use Developments",
      "Urban Infrastructure Projects",
      "Underground Transit Systems",
      "Deep Excavation Projects",
    ],

    benefits: [
      "Faster project completion and earlier occupancy",
      "Reduced construction-related disruptions",
      "Improved structural stability during excavation",
      "Lower risks in densely populated areas",
      "Efficient utilization of limited site space",
      "Enhanced safety and quality control",
      "Reduced environmental impact",
      "Optimized project costs and resources",
    ],

    projectHighlights: [
      "Expertise in complex urban construction projects",
      "Experienced structural and geotechnical engineering team",
      "Modern construction equipment and methodologies",
      "Strict compliance with safety and quality standards",
      "Successful execution of deep excavation projects",
      "Comprehensive planning, design, and project management",
    ],
  },
  {
    icon: <FaTruck />,
    title: "RMC Supply",

    description:
      "Premium Ready Mix Concrete solutions manufactured in our advanced batching plant, ensuring consistent quality, strength, and timely delivery for all construction projects.",

    color: "#ffa500",

    fullDescription:
      "Shiv Shakti Infrastructure operates a state-of-the-art Ready Mix Concrete (RMC) manufacturing facility designed to meet the growing demands of modern construction projects. Our fully automated batching plant produces high-quality concrete with precise mix proportions, ensuring superior strength, durability, and workability. By utilizing quality-tested raw materials, advanced production technology, and strict quality control measures, we deliver reliable concrete solutions for residential, commercial, industrial, and infrastructure developments. Supported by a dedicated fleet of transit mixers and experienced technical personnel, we ensure uninterrupted supply and timely delivery to project sites, helping clients achieve efficient and cost-effective construction.",

    features: [
      "Fully automated computerized batching plant",
      "Wide range of customized concrete mix designs",
      "Quality-tested cement, aggregates, and admixtures",
      "Dedicated transit mixer transportation fleet",
      "Strict laboratory quality control and testing",
      "Consistent strength and durability standards",
      "Timely delivery and supply management",
      "Capacity to support large-scale projects",
    ],

    applications: [
      "Commercial Buildings",
      "Residential Developments",
      "Industrial Facilities",
      "Road & Highway Construction",
      "Bridges & Flyovers",
      "Metro & Infrastructure Projects",
      "High-Rise Buildings",
      "Foundation & Structural Works",
    ],

    benefits: [
      "Consistent concrete quality and performance",
      "Reduced material wastage at construction sites",
      "Faster project execution and productivity",
      "Enhanced structural strength and durability",
      "Cost-effective construction solution",
      "Reliable supply for projects of any scale",
      "Improved workability and finish quality",
      "Compliance with industry standards and specifications",
    ],

    projectHighlights: [
      "Modern automated RMC production facility",
      "Experienced quality control and technical team",
      "Efficient logistics and delivery network",
      "Strict adherence to quality and safety standards",
      "Ability to meet high-volume project demands",
      "Trusted supplier for residential, commercial, and infrastructure projects",
    ],
  },
  {
    icon: <FaTools />,
    title: "Shoring & Piling Works",

    description:
      "Comprehensive shoring and piling solutions engineered to provide excavation stability, structural safety, and reliable deep foundation support for complex construction projects.",

    color: "#ff6b35",

    fullDescription:
      "Shiv Shakti Infrastructure delivers specialized Shoring & Piling solutions designed to support deep excavations and provide strong, durable foundations for residential, commercial, industrial, and infrastructure developments. Our expertise includes bored piles, secant piles, contiguous pile walls, soldier pile systems, and other advanced foundation techniques tailored to project-specific geotechnical conditions. By combining modern equipment, experienced engineering teams, and rigorous quality control measures, we ensure safe excavation support, enhanced load-bearing capacity, and long-term structural stability. Our solutions are designed to meet the challenges of urban construction, difficult soil conditions, and large-scale infrastructure projects while maintaining the highest standards of safety and efficiency.",

    features: [
      "Bored, driven, and cast-in-situ piling systems",
      "Secant and contiguous pile wall construction",
      "Soldier pile and lagging systems",
      "High-capacity deep foundation solutions",
      "Custom pile diameters and depths",
      "Advanced excavation support systems",
      "Suitable for challenging soil conditions",
      "Comprehensive quality testing and monitoring",
    ],

    applications: [
      "Deep Foundations",
      "Basement Excavations",
      "High-Rise Buildings",
      "Bridge & Flyover Foundations",
      "Metro Rail Projects",
      "Industrial Facilities",
      "Retaining Structures",
      "Infrastructure Development Projects",
    ],

    benefits: [
      "Enhanced excavation safety and stability",
      "Reliable load transfer to deeper strata",
      "Reduced risk of ground settlement",
      "Suitable for restricted urban construction sites",
      "Long-term structural performance",
      "Efficient support for deep excavations",
      "Improved project safety and compliance",
      "Cost-effective foundation solutions",
    ],

    projectHighlights: [
      "Experienced foundation engineering specialists",
      "Modern piling rigs and construction equipment",
      "Strict quality assurance and safety standards",
      "Proven expertise in complex geotechnical projects",
      "Customized solutions based on site conditions",
      "End-to-end design, execution, and technical support",
    ],
  },
  {
    icon: <FaIndustry />,
    title: "Micro Piles & Stone Columns",

    description:
      "Specialized ground improvement and foundation reinforcement solutions designed to enhance soil strength, increase load-bearing capacity, and ensure long-term structural stability.",

    color: "#ffa500",

    fullDescription:
      "Shiv Shakti Infrastructure offers advanced Micro Piles & Stone Columns solutions for projects facing challenging ground conditions, restricted access, or inadequate soil bearing capacity. Micro piles are high-strength, small-diameter foundation elements used for load transfer, underpinning, and structural reinforcement, while stone columns are ground improvement systems that strengthen weak soils, reduce settlement, and improve drainage characteristics. These techniques are widely used in infrastructure, industrial, commercial, and residential projects where conventional foundation methods may not be feasible. Our experienced geotechnical team utilizes modern equipment and proven engineering practices to deliver cost-effective, reliable, and long-lasting foundation solutions tailored to project-specific requirements.",

    features: [
      "Small diameter, high-capacity micro pile systems",
      "Effective stone column ground improvement techniques",
      "Suitable for restricted access and confined spaces",
      "Improves soil bearing capacity and strength",
      "Reduces settlement and ground deformation",
      "Enhances drainage and soil performance",
      "Applicable to a wide range of soil conditions",
      "Advanced installation and quality control methods",
    ],

    applications: [
      "Foundation Underpinning",
      "Soft Soil Improvement",
      "Embankment Stabilization",
      "Foundation Strengthening",
      "Industrial Facilities",
      "Bridge & Infrastructure Projects",
      "High-Rise Building Foundations",
      "Ground Improvement Works",
    ],

    benefits: [
      "Increased load-bearing capacity of weak soils",
      "Reduced foundation settlement and movement",
      "Cost-effective alternative to deep foundations",
      "Improved ground stability and performance",
      "Suitable for renovation and retrofit projects",
      "Minimal disturbance to surrounding structures",
      "Enhanced structural safety and durability",
      "Reliable performance in challenging site conditions",
    ],

    projectHighlights: [
      "Experienced geotechnical and foundation specialists",
      "Modern drilling and installation equipment",
      "Customized solutions based on soil investigations",
      "Strict adherence to quality and safety standards",
      "Proven expertise in complex ground improvement projects",
      "End-to-end design, execution, and technical support",
    ],
  },
  {
    icon: <FaWater />,
    title: "Dewatering",

    description:
      "Professional groundwater control and dewatering solutions that ensure safe, dry, and stable conditions for excavation, foundation, and infrastructure construction projects.",

    color: "#ff6b35",

    fullDescription:
      "Shiv Shakti Infrastructure provides comprehensive Dewatering solutions designed to control groundwater levels and create safe working environments for construction activities. Excess groundwater can compromise excavation stability, delay project timelines, and increase construction risks. Our dewatering systems utilize advanced techniques such as wellpoints, deep wells, ejector systems, and sump pumping to efficiently lower groundwater levels and maintain dry site conditions. With careful planning, continuous monitoring, and environmentally responsible practices, we deliver reliable dewatering solutions that enhance construction safety, improve productivity, and protect surrounding structures from groundwater-related issues.",

    features: [
      "Wellpoint dewatering systems",
      "Deep well groundwater control solutions",
      "Ejector and vacuum dewatering systems",
      "24/7 monitoring and performance assessment",
      "Environmentally compliant groundwater management",
      "Customized dewatering system design",
      "Advanced pumping and filtration equipment",
      "Suitable for complex geotechnical conditions",
    ],

    applications: [
      "Deep Excavations",
      "Basement Construction",
      "Tunnel & Underground Projects",
      "Foundation Works",
      "Metro Rail Developments",
      "Infrastructure Projects",
      "Industrial Construction Sites",
      "Bridge & Flyover Foundations",
    ],

    benefits: [
      "Provides dry and safe working conditions",
      "Improves excavation stability and safety",
      "Reduces risks of soil erosion and collapse",
      "Protects adjacent structures from groundwater impact",
      "Enhances construction efficiency and productivity",
      "Minimizes project delays caused by water ingress",
      "Supports compliance with environmental regulations",
      "Cost-effective groundwater management solution",
    ],

    projectHighlights: [
      "Experienced groundwater control specialists",
      "Modern dewatering equipment and technology",
      "Comprehensive site assessment and planning",
      "Real-time monitoring and maintenance support",
      "Strict safety and environmental compliance",
      "Successful execution across major infrastructure projects",
    ],
  },
  {
    icon: <FaWrench />,
    title: "Drilling & Grouting",

    description:
      "Specialized drilling and grouting solutions for ground stabilization, water control, structural strengthening, and foundation improvement across complex construction projects.",

    color: "#ff6b35",

    fullDescription:
      "Shiv Shakti Infrastructure provides advanced Drilling & Grouting services designed to improve ground conditions, control water ingress, strengthen foundations, and enhance overall structural stability. Our experienced team utilizes modern drilling equipment and proven grouting techniques, including pressure grouting, jet grouting, chemical grouting, and cementitious grouting, to address a wide range of geotechnical and construction challenges. Whether for ground improvement, void filling, seepage control, or structural reinforcement, our solutions are tailored to meet project-specific requirements while ensuring safety, durability, and long-term performance. We deliver reliable and cost-effective services for infrastructure, industrial, commercial, and civil engineering projects.",

    features: [
      "Pressure grouting for soil and rock stabilization",
      "Advanced jet grouting technology",
      "Chemical and cementitious grouting solutions",
      "Void filling and cavity treatment systems",
      "Ground improvement and soil strengthening",
      "Waterproofing and seepage control applications",
      "Precision drilling using modern equipment",
      "Comprehensive testing and quality assurance",
    ],

    applications: [
      "Ground Improvement Projects",
      "Water Sealing & Leakage Control",
      "Tunnel Construction & Rehabilitation",
      "Dam & Reservoir Foundations",
      "Deep Foundation Strengthening",
      "Slope Stabilization Works",
      "Infrastructure Development Projects",
      "Underground Structures & Basements",
    ],

    benefits: [
      "Improves soil strength and bearing capacity",
      "Controls groundwater seepage and water ingress",
      "Enhances foundation stability and durability",
      "Reduces settlement and ground movement",
      "Extends the service life of structures",
      "Cost-effective remediation and reinforcement solution",
      "Minimizes construction risks in difficult ground conditions",
      "Provides long-term structural reliability",
    ],

    projectHighlights: [
      "Experienced drilling and grouting specialists",
      "State-of-the-art drilling and injection equipment",
      "Customized solutions based on geotechnical requirements",
      "Strict adherence to quality and safety standards",
      "Proven expertise in complex infrastructure projects",
      "End-to-end planning, execution, and technical support",
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: "Sheet Piling",

    description:
      "Reliable steel sheet piling solutions for earth retention, groundwater control, and excavation support in challenging soil and waterfront environments.",

    color: "#ffa500",

    fullDescription:
      "Shiv Shakti Infrastructure provides professional Sheet Piling solutions for temporary and permanent retaining structures used in excavation support, waterfront developments, flood protection systems, and foundation works. Steel sheet piles are interlocking sections driven into the ground to create strong, continuous barriers that effectively retain soil and control groundwater infiltration. Our team utilizes advanced vibratory, hydraulic, and silent piling techniques to ensure efficient installation with minimal environmental impact. Whether for deep excavations, marine structures, cofferdams, or infrastructure projects, our sheet piling systems deliver exceptional stability, durability, and cost-effective performance while meeting stringent safety and engineering standards.",

    features: [
      "Wide range of steel sheet pile profiles",
      "Vibratory, hydraulic, and silent piling methods",
      "Temporary and permanent retaining solutions",
      "Excellent groundwater cut-off performance",
      "Watertight interlocking sheet pile systems",
      "Fast installation and extraction processes",
      "Reusable and sustainable construction solution",
      "Suitable for challenging soil and marine conditions",
    ],

    applications: [
      "Cofferdams",
      "Quay Walls & Marine Structures",
      "Flood Protection Systems",
      "Excavation Support Works",
      "Basement Construction",
      "River & Canal Retaining Structures",
      "Bridge and Infrastructure Projects",
      "Waterfront Developments",
    ],

    benefits: [
      "Provides strong earth retention and stability",
      "Effective groundwater and seepage control",
      "Rapid installation reduces project timelines",
      "Minimizes impact on surrounding structures",
      "Reusable materials lower overall project costs",
      "Suitable for temporary and permanent applications",
      "Improves safety during excavation activities",
      "Long-lasting and durable structural performance",
    ],

    projectHighlights: [
      "Experienced sheet piling installation specialists",
      "Modern piling equipment and technology",
      "Comprehensive planning and engineering support",
      "Strict compliance with safety and quality standards",
      "Proven expertise in marine and infrastructure projects",
      "End-to-end installation, monitoring, and extraction services",
    ],
  },
  {
    icon: <FaHardHat />,
    title: "Excavation",

    description:
      "Comprehensive excavation services executed with precision, safety, and efficiency for residential, commercial, industrial, and infrastructure developments.",

    color: "#ff6b35",

    fullDescription:
      "Shiv Shakti Infrastructure provides professional Excavation services for a wide range of construction and infrastructure projects. Our expertise covers bulk earthworks, deep excavations, foundation excavations, trenching, site grading, and land development activities. Equipped with a modern fleet of excavators, loaders, dumpers, and specialized machinery, we deliver safe, accurate, and cost-effective excavation solutions tailored to project requirements. Our experienced team ensures proper planning, slope stability, soil management, and environmental compliance throughout the excavation process. From small-scale foundation works to large infrastructure developments, we are committed to maintaining the highest standards of safety, quality, and operational efficiency.",

    features: [
      "Modern excavation equipment and machinery fleet",
      "Bulk and precision excavation capabilities",
      "Deep excavation and foundation preparation",
      "Safe slope stabilization and excavation support",
      "Efficient soil handling and disposal solutions",
      "Site grading and land leveling services",
      "Trenching and utility excavation works",
      "Strict safety and environmental compliance",
    ],

    applications: [
      "Building Foundations",
      "Commercial & Residential Developments",
      "Infrastructure Projects",
      "Industrial Facilities",
      "Road & Highway Construction",
      "Metro & Underground Structures",
      "Site Development & Land Preparation",
      "Utility and Pipeline Installations",
    ],

    benefits: [
      "Accurate and efficient earthwork execution",
      "Improved project timelines and productivity",
      "Enhanced site safety and risk management",
      "Optimized soil handling and disposal processes",
      "Reduced construction delays and operational costs",
      "Reliable support for large-scale developments",
      "Compliance with environmental regulations",
      "High-quality site preparation for construction",
    ],

    projectHighlights: [
      "Experienced excavation and earthwork specialists",
      "Advanced fleet of modern construction equipment",
      "Comprehensive project planning and execution",
      "Strict adherence to safety and quality standards",
      "Proven expertise in complex excavation projects",
      "End-to-end excavation, grading, and site preparation services",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Civil Constructions",

    description:
      "Comprehensive civil construction solutions delivering high-quality residential, commercial, industrial, and infrastructure projects from concept to completion.",

    color: "#ffa500",

    fullDescription:
      "Shiv Shakti Infrastructure offers end-to-end Civil Construction services tailored to meet the diverse requirements of modern construction and infrastructure development. Our expertise spans project planning, foundation works, structural construction, finishing works, and complete project execution. Backed by experienced engineers, skilled professionals, and advanced construction methodologies, we deliver projects that meet the highest standards of quality, safety, and sustainability. Whether it is residential developments, commercial complexes, industrial facilities, or large-scale infrastructure projects, we are committed to delivering durable, cost-effective, and timely construction solutions that exceed client expectations.",

    features: [
      "Complete project planning and execution",
      "Experienced engineering and project management team",
      "Strict quality assurance and quality control systems",
      "Modern construction technologies and methodologies",
      "Skilled workforce and specialized contractors",
      "Safety-focused construction practices",
      "Efficient resource and schedule management",
      "Timely project delivery with cost optimization",
    ],

    applications: [
      "Commercial Buildings",
      "Residential Developments",
      "Industrial Facilities",
      "Infrastructure Projects",
      "Educational Institutions",
      "Healthcare Facilities",
      "Government Buildings",
      "Mixed-Use Developments",
    ],

    benefits: [
      "Single-point responsibility for complete project execution",
      "Consistent quality throughout all construction phases",
      "Optimized project schedules and reduced delays",
      "Cost-effective construction solutions",
      "Enhanced safety and regulatory compliance",
      "Long-lasting and durable structures",
      "Efficient coordination between all stakeholders",
      "Reliable support from planning to project handover",
    ],

    projectHighlights: [
      "Experienced civil construction professionals",
      "Proven track record across diverse project sectors",
      "Modern equipment and construction resources",
      "Strong commitment to quality, safety, and sustainability",
      "Comprehensive project monitoring and reporting",
      "End-to-end support from design coordination to final delivery",
    ],
  },
];

const Services = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="services" className="section-wrapper bg-light">
      <div className="services-section container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ y }}
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
              onClick={() => openModal(service)}
            >
              <div
                className="service-icon-wrapper"
                style={{ "--icon-color": service.color }}
              >
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

      {/* ─── MODAL ─── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="service-modal"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div
                className="modal-header"
                style={{ "--accent-color": selectedService.color }}
              >
                <div className="modal-icon-wrapper">
                  <div className="modal-icon">{selectedService.icon}</div>
                  <div className="modal-icon-glow"></div>
                </div>
                <div className="modal-header-text">
                  <span className="modal-badge">Our Service</span>
                  <h3 className="modal-title">{selectedService.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <p className="modal-description">
                  {selectedService.fullDescription}
                </p>

                {/* Features */}
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <span className="title-bar"></span>
                    Key Features
                  </h4>
                  <ul className="modal-features">
                    {selectedService.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.07 }}
                      >
                        <FaCheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <span className="title-bar"></span>
                    Applications
                  </h4>
                  <div className="modal-applications">
                    {selectedService.applications.map((app, idx) => (
                      <motion.span
                        key={idx}
                        className="application-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                      >
                        {app}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  className="modal-cta-btn"
                  onClick={() => {
                    closeModal();
                    setTimeout(() => {
                      const contactSection = document.querySelector("#contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 300);
                  }}
                >
                  <span>Get a Quote</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
