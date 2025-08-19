"use client";

import React from "react";
import { Code, Server, Database, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const serviceData = [
  {
    icon: <Code className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React.js, Tailwind CSS, and modern frameworks.",
  },
  {
    icon: <Server className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
    title: "Backend Development",
    description:
      "Developing secure and scalable server-side applications with Node.js and Express.js.",
  },
  {
    icon: <Database className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
    title: "Database Management",
    description:
      "Designing and managing efficient databases with MongoDB and optimizing queries for performance.",
  },
  {
    icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
    title: "Full-Stack Projects",
    description:
      "Integrating frontend and backend into complete MERN applications with authentication and APIs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.08,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function MyService() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id="Services"
      className="scroll-mt-16 py-20 px-5 md:px-12 bg-gray-50"
      variants={containerVariants}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Heading */}
      <motion.div
        className="text-center flex flex-col gap-2 mb-6"
        variants={headingVariants}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h4 className="text-gray-500 text-sm sm:text-base tracking-widest uppercase">
          What I Offer
        </h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#6467f2] to-[#FD3889] bg-clip-text text-transparent">
          My Services
        </h1>

        <p className="text-center max-w-3xl mx-auto mt-3 text-gray-600 text-sm sm:text-base px-2">
          I’m a{" "}
          <span className="font-semibold text-[#6467f2]">MERN Stack Developer</span> skilled
          in creating scalable, efficient, and user-friendly web applications.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {serviceData.map((item, index) => (
          <motion.article
            key={index}
            className="bg-white border border-gray-100 flex flex-col gap-4 p-6 sm:p-7 rounded-2xl shadow-md cursor-pointer"
            variants={cardVariants}
            // parent controls the animation sequence; children only need variants
            whileHover={reduce ? {} : { scale: 1.035, y: -6 }}
            whileTap={reduce ? {} : { scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            role="article"
            aria-labelledby={`service-title-${index}`}
            style={{
              willChange: "transform, opacity",
              transformOrigin: "center center",
              minHeight: 160,
            }}
          >
            {/* Icon wrapper */}
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FD3889] shadow-sm mx-auto"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 16, delay: index * 0.04 }}
              style={{ willChange: "transform" }}
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h2
              id={`service-title-${index}`}
              className="text-lg sm:text-xl font-semibold text-gray-900 text-center"
            >
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base flex-grow text-center">
              {item.description}
            </p>

            {/* Read More */}
            <div className="text-center mt-1">
              <button
                className="text-[#6467f2] font-medium text-sm sm:text-base underline-offset-2"
                aria-label={`Read more about ${item.title}`}
                // keep visual feedback via transform only
                onClick={() => {}}
              >
                Read more →
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
