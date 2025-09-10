// src/components/PreLoader.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

export default function Preloader() {
  const shapes = [
    { delay: 0 },
    { delay: 0.2 },
    { delay: 0.4 },
  ];

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.5 }}
    >
      {/* Shapes Animation */}
      <div className="shapes">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="shape"
            style={{
              background: "linear-gradient(270deg, #FA5674 0%, #6065D4 100%)",
            }}
            animate={{
              y: ["0%", "-50%", "0%"],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "50%", "50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Loader Text */}
      <motion.h2
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        Preparing Awesomeness...
      </motion.h2>

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: "35%" }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
