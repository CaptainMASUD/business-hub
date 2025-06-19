import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [activeQA, setActiveQA] = useState(null);

  const faqData = [
    { question: "What services does NAJ International offer?", answer: "NAJ specializes in work permit services for various Asian & European countries." },
    { question: "How long does the work permit process take?", answer: "The duration varies depending on the country and individual circumstances. Typically, it can take anywhere from 4 to 8 months." },
    { question: "Do you provide assistance with visa applications?", answer: "Yes, we offer comprehensive support for both work permits and associated visa applications." },
    { question: "What documents are required for a work permit application?", answer: "Required documents usually include a valid passport, job offer, educational qualifications, and work experience certificates. We provide a detailed checklist based on your specific case." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-20 px-4 md:px-12 lg:px-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-[#872341]">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <button
              className="w-full p-5 text-left bg-[#f5f5f5] hover:bg-[#e0e0e0] transition duration-300 flex justify-between items-center rounded-lg"
              onClick={() => setActiveQA(activeQA === index ? null : index)}
            >
              <div className="flex items-center space-x-3">
                <FaQuestionCircle className="text-[#872341] text-2xl" />
                <span className="font-semibold text-lg text-[#333]">{faq.question}</span>
              </div>
              <motion.div
                initial={false}
                animate={{ rotate: activeQA === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#872341]" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {activeQA === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-[#f8f8f8] rounded-b-lg"
                >
                  <div className="p-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
