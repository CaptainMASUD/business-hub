import React from "react";
import { motion } from "framer-motion";

const NAJNewsLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 overflow-hidden">
      {/* Central Logo with Gradient Text */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.h1
          className="text-6xl font-bold tracking-wider"
          style={{
            background: "linear-gradient(to right, #3b82f6, #8b5cf6, #9333ea)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
            textShadow: [
              "0px 0px 10px rgba(59, 130, 246, 0.5)",
              "0px 0px 20px rgba(139, 92, 246, 0.5)",
              "0px 0px 10px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          NAJ
        </motion.h1>
        <motion.span
          className="text-3xl font-medium mt-2"
          style={{
            background: "linear-gradient(to right, #8b5cf6, #9333ea, #3b82f6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          News
        </motion.span>
      </motion.div>

      {/* Rotating Gradient Rings */}
      <motion.div
        className="absolute w-52 h-52 rounded-full border-4 border-transparent"
        style={{
          borderImage: "linear-gradient(to right, #3b82f6, #9333ea) 1",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border-4 border-transparent"
        style={{
          borderImage: "linear-gradient(to right, #9333ea, #3b82f6) 1",
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing Gradient Dot */}
      {/* <motion.div
        className="absolute w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 rounded-full shadow-xl mt-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 10px rgba(59, 130, 246, 0.5)",
            "0 0 20px rgba(139, 92, 246, 0.7)",
            "0 0 10px rgba(59, 130, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
    </div>
  );
};

export default NAJNewsLoader;
