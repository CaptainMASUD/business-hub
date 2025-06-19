import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';
import img1 from "../../images/About/about.png"
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center text-[#872341]"
      >
        About NAJ
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#872341]">Our Story</h2>
          <p className="text-xl mb-6 text-gray-600">
          Naj International is dedicated to transforming the service industry through innovative solutions.
          </p>
          <p className="text-xl mb-6 text-gray-600">
          Our focus on excellence and customer satisfaction has fueled our growth, establishing us as a trusted leader across diverse sectors and fostering lasting partnerships with clients and collaborators.          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <img src={img1} alt="NAJ Team" className="rounded-lg shadow-lg w-full h-auto" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { icon: FaBuilding, title: "Established Presence", description: "With over a decade of experience, we have established ourselves as a trusted name in the industry." },
          { icon: FaUsers, title: "Expert Team", description: "Our team of skilled professionals is dedicated to delivering exceptional results for every client." },
          { icon: FaHandshake, title: "Client-Centric Approach", description: "We prioritize our clients' needs and work closely with them to ensure their success." },
          { icon: FaLightbulb, title: "Innovative Solutions", description: "We constantly innovate and adapt to provide cutting-edge solutions that drive results." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <item.icon className="text-6xl mb-4 text-[#872341] mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-[#872341]">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-100 p-8 rounded-lg mb-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-[#872341]">Our Mission</h2>
        <p className="text-xl mb-8 text-gray-600">
        At Naj International, we empower businesses with innovative, reliable services that fuel growth and success. Our commitment to excellence drives long-term partnerships and supports our clients' continued success.        </p>
        <h2 className="text-3xl font-semibold mb-6 text-[#872341]">Our Vision</h2>
        <p className="text-xl text-gray-600">
        We aim to be the global leader in service provision, reliability and client success. Our vision is to set new industry standards and make a positive impact on businesses and communities worldwide.        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;

