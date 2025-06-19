import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPassport } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CountrySection = ({ country, flagSrc, imageSrc, reverse = false }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to the top after navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 md:grid-cols-2 items-center mb-20 gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${reverse ? 'md:order-2' : ''}`}>
        <div className="flex justify-center gap-6 mb-6">
          <motion.img
            src={flagSrc}
            alt={`${country} Flag`}
            className="h-20"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
            alt="Bangladesh Flag"
            className="h-20"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-[#872341]">{country} Work Permit Services</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Unlock opportunities in {country} with our expert guidance. We provide comprehensive support for securing your work permit, ensuring a smooth transition to your new career in this beautiful country.
        </p>
        <motion.button
          onClick={() => handleNavigation(`/${country.toLowerCase()}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#872341] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6d1c34] transition duration-300 inline-flex items-center shadow-md"
        >
          <FaPassport className="mr-2 text-lg" />
          Explore {country} Opportunities
        </motion.button>
      </div>

      <motion.img
        src={imageSrc}
        alt={`Work in ${country}`}
        className={`rounded-lg shadow-lg w-full h-auto object-cover ${reverse ? 'md:order-1' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.section>
  );
};

export default CountrySection;
