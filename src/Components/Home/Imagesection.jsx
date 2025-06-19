import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation

const ImageSection = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [showFlagOptions, setShowFlagOptions] = useState(false);
  const navigate = useNavigate(); 

  // Array of image URLs for the background images
  const bgImages = [
    'https://images.unsplash.com/photo-1507622560124-621e26755fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1593291805141-990f40ec982d?q=80&w=1932&auto=format&fit=crop&ixib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Function to handle flag selection and navigate
  const handleFlagSelect = (country) => {
    if (country === 'norway') {
      navigate('/norway'); // Navigate to Norway route
      scroll(0,0)
    } else if (country === 'hungary') {
      navigate('/hungary'); // Navigate to Hungary route
      scroll(0,0)
    }
    setShowFlagOptions(false); // Hide flag options after selection
  };

  // Function to close the flag options modal
  const handleCloseModal = () => {
    setShowFlagOptions(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-white py-16 px-4 rounded-lg mb-20 text-center"
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

      {/* Fade Animation for Background */}
      <motion.div
        key={bgImageIndex} // This ensures the transition happens on each image switch
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[bgImageIndex]})`, // Dynamically switch background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <h3 className="text-3xl font-bold mb-4 drop-shadow-lg relative z-10">
        Ready to Start Your European Adventure?
      </h3>
      <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg relative z-10">
        Let us guide you through the work permit process and open doors to exciting career opportunities abroad.
      </p>

      {/* <motion.button
        onClick={() => setShowFlagOptions(true)} // Show flag options when clicked
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-[#872341] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg relative z-10"
      >
        Get Started Today
      </motion.button> */}

      {/* Display flag options if showFlagOptions is true */}
      {showFlagOptions && (
        <div className="absolute inset-0 flex justify-center items-center z-20">
          {/* Modal Container */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 relative">
            {/* Close Button (Cross Bar) */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition duration-200"
            >
              &times;
            </button>

            {/* Title Text */}
            <h2 className="text-2xl font-semibold text-[#872341]">Choose Your Country</h2>
            <p className="text-lg text-gray-700">
              Currently, we are offering work visas for the following countries:
            </p>

            {/* Flag Selection */}
            <div className="flex space-x-8 justify-center">
              {/* Norway */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleFlagSelect('norway')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" // Norway Flag
                  alt="Norway Flag"
                  className="w-20 h-12 mb-2" // Adjust size
                />
                <span className="text-lg text-[#872341]">Norway</span>
              </div>

              {/* Hungary */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleFlagSelect('hungary')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" // Hungary Flag
                  alt="Hungary Flag"
                  className="w-20 h-12 mb-2" // Adjust size
                />
                <span className="text-lg text-[#872341]">Hungary</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default ImageSection;
