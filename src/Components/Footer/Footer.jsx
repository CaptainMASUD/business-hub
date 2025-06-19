import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../logo/N.png";
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAbout = () => {
    navigate("/about");
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const handlePrivacy = () => {
    navigate("/privacy");
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const admin = () => {
    navigate("/login");
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleCareersClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-[#1c1b1b] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img src={logo} alt="NAJ Logo" className="h-10 w-10 rounded-full mr-2" />
              <span className="text-xl font-bold">NAJ International</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing innovative solutions and exceptional service since 2024.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Work Permit Advisory</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Application Assistance</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Support for Employers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Relocation Guidance</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 cursor-pointer">
              <li><a onClick={handleAbout} className="text-sm hover:text-gray-300 transition-colors">About</a></li>
              <li><a onClick={handleCareersClick} className="text-sm hover:text-gray-300 transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Blog</a></li>
              <li><a onClick={handlePrivacy}  className="text-sm hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a onClick={admin}  className="text-sm hover:text-gray-300 transition-colors">Secure</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-sm" />
                <span className="text-sm">Dhulipara, Cumilla, BD</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-sm" />
                <span className="text-sm">+880 1744 416607</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-sm" />
                <span className="text-sm">najint@hotmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-300 mb-4 sm:mb-0"
          >
            © 2024 NAJ™. All Rights Reserved.
          </motion.span>
          <div className="flex space-x-4">
            {[{ icon: FaFacebook, href: "#" }, { icon: FaTwitter, href: "#" }, { icon: FaInstagram, href: "#" }, { icon: FaLinkedin, href: "#" }].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 w-96"
          >
            <h2 className="text-lg font-bold mb-4 text-[#872341]">Careers at NAJ</h2>
            <p className="text-gray-700 mb-6">
              We're currently not hiring. Stay tuned for future updates.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#872341] text-white px-4 py-2 rounded-full hover:bg-[#6d1c34] transition duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </footer>
  );
};

export default FooterComponent;
