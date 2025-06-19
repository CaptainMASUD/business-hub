import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaRegPaperPlane, FaPassport, FaSuitcase } from "react-icons/fa";
import { Link, Element } from "react-scroll"; // Import from react-scroll
import { RiArrowRightSLine } from "react-icons/ri"; // Arrow icon for options
import { useNavigate } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FaPassport,
      title: "Work Permit Assistance",
      description: "Expert guidance through the work permit application process with personalized support.",
      color: "#4CAF50",
    },
    {
      icon: FaRegPaperPlane,
      title: "Visa Support",
      description: "Comprehensive assistance with visa applications, documentation, and submission.",
      color: "#2196F3",
    },
    {
      icon: FaSuitcase,
      title: "Job Placement",
      description: "Connect with top employers in your desired European country to secure your dream job.",
      color: "#9C27B0",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });  // Change threshold to trigger earlier on mobile

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const navigate = useNavigate()
  const handleOptionClick = (region) => {
    if (region === "asia") {
     navigate("/asia");
     scroll(0,0)
    } else if (region === "europe") {
      navigate("/europe");
      scroll(0,0)
    }
    closeModal();
  };

  return (
    <>
      <Element name="services-section" className="services-section" style={{ padding: "4rem 1rem", background: "#fff" }}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#333",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Our Innovative Services
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((service, index) => (
            <Element key={index} name={`service-${index}`}>
              <motion.div
                variants={cardVariants}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ padding: "2rem", position: "relative" }}>
                  <motion.div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1rem",
                      display: "inline-block",
                      color: service.color,
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon style={{ color: service.color }} />
                  </motion.div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      color: service.color,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1.5rem" }}>
                    {service.description}
                  </p>
                  <Link
                    to={`service-${index}`}
                    smooth={true}
                    duration={500}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      borderRadius: "25px",
                      background: service.color,
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: "bold",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(service)}
                    className="cursor-pointer"
                  >
                    Learn More
                    <motion.span
                      style={{ marginLeft: "0.5rem" }}
                      initial={{ x: 0 }}
                      animate={{ x: 5 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, repeatType: "reverse" }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </Element>
          ))}
        </motion.div>
      </Element>

      {/* Modal Component */}
      {isModalOpen && selectedService && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "10px",
              minWidth: "300px",
              maxWidth: "500px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: selectedService.color,
              }}
            >
              {selectedService.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                marginBottom: "1.5rem",
              }}
            >
              {selectedService.description}
            </p>

            {/* Options Section */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "1.2rem",
                  color: selectedService.color,
                  marginBottom: "0.5rem",
                }}
              >
                Choose Your Region
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "1rem 0",
                  borderBottom: "1px solid #ddd",
                }}
                onClick={() => handleOptionClick("europe")}
              >
                <div style={{ marginLeft: "1rem", flex: 1 }}>
                  <h5
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: selectedService.color,
                    }}
                  >
                    European Opportunities
                  </h5>
                  <p style={{ color: "#666", fontSize: "1rem" }}>
                    Explore job opportunities in various European countries.
                  </p>
                </div>
                <RiArrowRightSLine style={{ fontSize: "1.5rem", color: selectedService.color }} />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "1rem 0",
                }}
                onClick={() => handleOptionClick("asia")}
              >
                <div style={{ marginLeft: "1rem", flex: 1 }}>
                  <h5
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: selectedService.color,
                    }}
                  >
                    Asian Opportunities
                  </h5>
                  <p style={{ color: "#666", fontSize: "1rem" }}>
                    Explore job opportunities in different Asian countries.
                  </p>
                </div>
                <RiArrowRightSLine style={{ fontSize: "1.5rem", color: selectedService.color }} />
              </div>
            </div>

            {/* Contact Us Button */}
            <button
  onClick={() => {
    navigate("/contact");
    window.scrollTo(0, 0); // Scroll to the top of the page
  }}
  style={{
    padding: "0.8rem 1.5rem",
    background: "#333",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "25px",
    cursor: "pointer",
  }}
>
  Contact Us
</button>

          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Services;
