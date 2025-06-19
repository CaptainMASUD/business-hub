import React from "react";
import {
  FaRegPaperPlane,
  FaHandshake,
  FaShieldAlt,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useRef } from "react";
import News from "./News";
import WorkPermitCountries from "./WorkPermitCountries";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Welcome = () => {
  const controlsTrust = useAnimation();
  const controlsNews = useAnimation();
  const controlsFollowUs = useAnimation();

  // Refs for scroll detection
  const trustIconsRef = useRef(null);
  const newsRef = useRef(null);
  const followUsRef = useRef(null);

  const isTrustIconsInView = useInView(trustIconsRef, { once: true });
  const isNewsInView = useInView(newsRef, { once: true });
  const isFollowUsInView = useInView(followUsRef, { once: true });

  useEffect(() => {
    if (isTrustIconsInView) {
      controlsTrust.start("visible");
    }
    if (isNewsInView) {
      controlsNews.start("visible");
    }
    if (isFollowUsInView) {
      controlsFollowUs.start("visible");
    }
  }, [isTrustIconsInView, isNewsInView, isFollowUsInView, controlsTrust, controlsNews, controlsFollowUs]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 ">
      {/* Header Section */}
      <motion.div
        className="w-full text-center bg-white p-8 rounded-lg"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 mb-6"
          variants={fadeInUp}
        >
          Welcome to <span
  className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
>
  NAJ
</span>

        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={fadeInUp}
        >
          Your gateway to international career opportunities. We specialize in
          providing expert work permit services for various European countries,
          ensuring a smooth transition to your dream job abroad.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <ScrollLink
            to="news"
            smooth={true}
            duration={800}
            offset={-50}
            className="inline-block"
          >
          <motion.button
  className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={{
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
  }}
>
  <FaRegPaperPlane className="inline-block mr-2 text-xl" />
  Get Started
</motion.button>


          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* Trust Icons Section */}
      <motion.div
        ref={trustIconsRef}
        className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8"
        initial="hidden"
        animate={controlsTrust}
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInUp}
        >
          <FaHandshake className="text-4xl text-indigo-600 mb-2" />
          <p className="text-gray-600 text-lg font-semibold">Reliable Service</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInUp}
        >
          <FaShieldAlt className="text-4xl text-indigo-600 mb-2" />
          <p className="text-gray-600 text-lg font-semibold">Secure Process</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={fadeInUp}
        >
          <FaGlobe className="text-4xl text-indigo-600 mb-2" />
          <p className="text-gray-600 text-lg font-semibold">Global Reach</p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full mt-12 flex flex-col lg:flex-row gap-6">
        {/* News Section */}
       
        <motion.div
          id="news"
          ref={newsRef}
          className="flex-1 bg-white md:p-6 p-1 rounded-lg shadow-lg"
          initial="hidden"
          animate={controlsNews}
          variants={fadeInUp}
        >
          <News />
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          ref={followUsRef}
          className="bg-white p-6 rounded-2xl shadow-lg mt-8 lg:mt-0 lg:w-1/4"
          initial="hidden"
          animate={controlsFollowUs}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-4">Stay connected with us on social media:</p>
          <div className="flex flex-col space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <FaFacebook className="text-3xl mr-2" /> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <FaTwitter className="text-3xl mr-2" /> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <FaInstagram className="text-3xl mr-2" /> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              <FaLinkedin className="text-3xl mr-2" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
