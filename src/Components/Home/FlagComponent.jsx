import React from "react";
import { motion } from "framer-motion";

// Flag and map data
const asiaMap =
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Blank_map_of_Asia_%28includes_Russia%29.png";
const europeMap =
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Blank_map_of_Europe_%28including_Northern_Africa%29.png";

const flags = {
  asia: [
    {
      name: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      position: { top: "40%", left: "50%" },
    },
    {
      name: "China",
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      position: { top: "35%", left: "60%" },
    },
    {
      name: "Japan",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
      position: { top: "30%", left: "70%" },
    },
  ],
  europe: [
    {
      name: "France",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      position: { top: "40%", left: "30%" },
    },
    {
      name: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      position: { top: "35%", left: "40%" },
    },
    {
      name: "United Kingdom",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      position: { top: "20%", left: "20%" },
    },
  ],
};

const MapWithFlags = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 space-y-8">
      {/* Asia Map */}
      <div className="relative">
        <h2 className="text-lg font-bold mb-2 text-center">Asia Map</h2>
        <img
          src={asiaMap}
          alt="Asia Map"
          className="w-full max-w-xl border-2 border-gray-300 rounded-lg"
        />
        {flags.asia.map((country) => (
          <motion.div
            key={country.name}
            className="absolute"
            style={{
              top: country.position.top,
              left: country.position.left,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-6 h-6 md:w-10 md:h-10 cursor-pointer rounded-full shadow-md"
              title={country.name}
            />
          </motion.div>
        ))}
      </div>

      {/* Europe Map */}
      <div className="relative">
        <h2 className="text-lg font-bold mb-2 text-center">Europe Map</h2>
        <img
          src={europeMap}
          alt="Europe Map"
          className="w-full max-w-xl border-2 border-gray-300 rounded-lg"
        />
        {flags.europe.map((country) => (
          <motion.div
            key={country.name}
            className="absolute"
            style={{
              top: country.position.top,
              left: country.position.left,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-6 h-6 md:w-10 md:h-10 cursor-pointer rounded-full shadow-md"
              title={country.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MapWithFlags;
