import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaFacebookMessenger, FaShareAlt } from 'react-icons/fa';
import { Modal, Tooltip } from 'flowbite-react';

const SocialMediaIcons = () => {
  const websiteURL = "https://najint.vercel.app/";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [shareIconOpacity, setShareIconOpacity] = useState(1);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      setShareIconOpacity(1);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShareIconOpacity(0.5);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 2000);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const socialIcons = [
    { icon: FaFacebook, color: 'bg-blue-600 hover:bg-blue-700', link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteURL)}` },
    { icon: FaInstagram, color: 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600', link: `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(websiteURL)}` },
    { icon: FaWhatsapp, color: 'bg-green-500 hover:bg-green-600', link: `https://wa.me/?text=${encodeURIComponent(websiteURL)}` },
    { icon: FaFacebookMessenger, color: 'bg-blue-500 hover:bg-blue-600', link: `https://www.messenger.com/t/?link=${encodeURIComponent(websiteURL)}` },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: shareIconOpacity, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <Tooltip content="Share" placement="right" trigger="hover">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleModal}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            <FaShareAlt className="text-xl" />
          </motion.button>
        </Tooltip>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Share this page</h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-around items-center mb-6"
                >
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => copyToClipboard(websiteURL)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center justify-center w-12 h-12 ${social.color} text-white transition duration-300 rounded-full shadow-md hover:shadow-lg`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-4"
                >
                  <input
                    type="text"
                    value={websiteURL}
                    readOnly
                    className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(websiteURL)}
                    className="mt-2 w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 font-semibold text-sm"
                  >
                    {copiedToClipboard ? 'Copied!' : 'Copy Link'}
                  </motion.button>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleModal}
                  className="w-full px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-lg transition duration-300 font-semibold text-sm"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialMediaIcons;

