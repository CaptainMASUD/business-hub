import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Flags from "react-world-flags"
import { useNavigate } from "react-router-dom"
import { FiArrowRight, FiGlobe } from "react-icons/fi"

const countries = {
  Asia: [
    { code: "AE", name: "Dubai" },
    { code: "SG", name: "Singapore" },
    { code: "MY", name: "Malaysia" },
    { code: "CN", name: "China" },
  ],
  Europe: [
    { code: "HR", name: "Croatia" },
    { code: "DK", name: "Denmark" },
    { code: "HU", name: "Hungary" },
    { code: "LU", name: "Luxembourg" },
    { code: "MT", name: "Malta" },
    { code: "NO", name: "Norway" },
    { code: "NL", name: "Netherlands" },
    { code: "RS", name: "Serbia" },
  ],
}

const WorkPermitCountries = () => {
  const [activeContinent, setActiveContinent] = useState("Asia")
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveContinent((prevContinent) => (prevContinent === "Asia" ? "Europe" : "Asia"))
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const handleContinentSwitch = (continent) => {
    setActiveContinent(continent)
  }

  const handleRouteNavigation = (continent) => {
    if (continent === "Asia") {
      navigate("/asia")
    } else if (continent === "Europe") {
      navigate("/europe")
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br rounded-xl from-blue-50 to-purple-50 p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Title with Enhanced Gradient Text */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">
          Explore{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Work Permit
          </span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-12 text-gray-600">
          Discover{" "}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Opportunities
          </span>{" "}
          Across Continents
        </h3>

        {/* Improved Continent Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {["Asia", "Europe"].map((continent) => (
            <motion.button
              key={continent}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContinentSwitch(continent)}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeContinent === continent
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-800 shadow-sm hover:shadow-md"
              }`}
            >
              <FiGlobe />
              <span>{continent}</span>
            </motion.button>
          ))}
        </div>

        {/* Country List with Enhanced Animation */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContinent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {countries[activeContinent].map((country) => (
                <motion.div
                  key={country.code}
                  className="flex flex-col items-center bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Animated Country Flag */}
                  <motion.div
                    initial={{ rotateY: 0, opacity: 0 }}
                    animate={{ rotateY: [0, 360, 720, 1080], opacity: 1 }}
                    transition={{
                      duration: 2,
                      times: [0, 0.2, 0.5, 1],
                      ease: "easeInOut",
                      opacity: { duration: 0.5 },
                    }}
                    className="relative"
                  >
                    <Flags code={country.code} className="w-20 h-12 object-cover mb-4 rounded shadow" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 mix-blend-overlay rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    />
                  </motion.div>
                  {/* Country Name */}
                  <p className="text-gray-800 font-semibold text-lg text-center">{country.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Extra Details and Button */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContinent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8 flex-col items-center"
          >
            <p className="text-gray-700 text-xl mb-6 text-center max-w-2xl">
              {activeContinent === "Asia"
                ? "Asia offers diverse work permit opportunities across multiple countries. Discover more about each nation's unique job market and visa requirements."
                : "Europe provides an array of work visa options for skilled professionals, with country-specific regulations and opportunities. Find the right fit for your career."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleRouteNavigation(activeContinent)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Explore {activeContinent}</span>
              <FiArrowRight size={24} />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WorkPermitCountries

