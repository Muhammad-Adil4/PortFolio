"use client";

import { ChevronsLeftRight, Database, Globe, Zap } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const data = [
  {
    Icon: ChevronsLeftRight,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and well-structured code that follows best practices.",
  },
  {
    Icon: Database,
    title: "Full Stack Development",
    description:
      "Building complete solutions from database architecture to intuitive user interfaces.",
  },
  {
    Icon: Globe,
    title: "Modern Web Apps",
    description:
      "Creating responsive, secure, and SEO-friendly applications with the latest web technologies.",
  },
  {
    Icon: Zap,
    title: "High Performance",
    description:
      "Delivering fast, optimized, and reliable applications for seamless user experiences.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const textVariants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
};

const cardVariants = {
  hidden: { y: 22, opacity: 0, scale: 0.99 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-5 py-40 px-5 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        variants={textVariants}
        style={{ willChange: "transform, opacity" }}
      >
        <motion.h4
          className="text-gray-500 text-base md:text-lg"
          variants={textVariants}
        >
          Introduction
        </motion.h4>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2"
          variants={textVariants}
        >
          About Me
        </motion.h1>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Text */}
        <div className="flex flex-col justify-center text-gray-700 leading-relaxed space-y-8">
          <motion.div variants={textVariants} style={{ willChange: "transform, opacity" }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#6467f2]">Who am I?</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Hi, I’m <span className="text-[#6467f2] font-semibold">Muhammad Adil</span>, a dedicated{" "}
              <span className="font-semibold">MERN Stack Developer</span> based in{" "}
              <span className="text-[#6467f2] font-medium">Lahore, Pakistan</span>. I specialize
              in building modern, scalable, and high-performance web applications that deliver
              seamless user experiences.
            </p>
          </motion.div>

          <motion.div variants={textVariants} style={{ willChange: "transform, opacity" }}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#6467f2]">Skills</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              With hands-on expertise in{" "}
              <span className="font-medium">MongoDB, Express.js, React, and Node.js</span>, I
              craft full-stack solutions that are clean, efficient, and future-ready. I’m deeply
              passionate about problem-solving and writing maintainable code while staying on top
              of the latest industry trends.
            </p>
          </motion.div>

          <motion.div variants={textVariants} style={{ willChange: "transform, opacity" }}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#6467f2]">Beyond Coding</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              I enjoy exploring emerging technologies, contributing to open-source projects, and
              sharing knowledge with the developer community. I strongly believe in continuous
              learning and the power of technology to create real-world impact.
            </p>
          </motion.div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.045, y: -6 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="bg-white border border-gray-200 p-5 rounded-lg shadow-md cursor-pointer flex flex-col"
              // removed CSS hover/background transitions to avoid repaint jank
              style={{ willChange: "transform, opacity", transformOrigin: "center center" }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-10 h-10 rounded-md"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 20, delay: index * 0.02 }}
                style={{ willChange: "transform" }}
              >
                <item.Icon className="text-[#6467f2] w-7 h-7 sm:w-8 sm:h-8" />
              </motion.div>

              <motion.h3
                className="text-lg sm:text-xl font-semibold mt-3 text-gray-900"
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 mt-2 text-sm sm:text-base flex-grow"
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
              >
                {item.description}
              </motion.p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
