import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlagModal = ({ show, onClose, onSelect }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition duration-200"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-[#872341]">Choose Your Country</h2>
            <p className="text-lg text-gray-700">
              Currently, we are offering work visas for the following countries:
            </p>

            <div className="flex space-x-8 justify-center">
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => onSelect('norway')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
                  alt="Norway Flag"
                  className="w-20 h-12 mb-2"
                />
                <span className="text-lg text-[#872341]">Norway</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => onSelect('hungary')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg"
                  alt="Hungary Flag"
                  className="w-20 h-12 mb-2"
                />
                <span className="text-lg text-[#872341]">Hungary</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlagModal;

