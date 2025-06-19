import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

// Import local images
import b3 from "../../images/banner/b3.jpg";
import b4 from "../../images/banner/b4.jpg";
import b5 from "../../images/banner/b5.jpg";
import b6 from "../../images/banner/b6.jpg";

const Hero = () => {
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1668017178993-4c8fc9f59872?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Let's Start Your Journey with NAJ International",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661962898863-a953de62bfd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Expert Work Permit Services",
    },
    { image: b3, text: "Your Trusted Partner in Employment" },
    { image: b4, text: "Bringing Opportunities Closer to You" },
    { image: b5, text: "Achieve Your Dreams with Us" },
    { image: b6, text: "Your Gateway to Global Careers" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full mb-10"
    >
      {/* Carousel */}
      <Carousel slides={slides} />

      
     
    </motion.section>
  );
};

export default Hero;
