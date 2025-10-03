"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import image1 from "../assets/logo1.jpg";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 22 },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="scroll-mt-28 flex items-center justify-center flex-col pt-30 px-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // hint to browser for smoother compositing
      style={{ willChange: "transform, opacity" }}
    >
      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        // keep initial scale pop but as part of variants for consistency
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 16 }}
        whileHover={{ scale: 1.04, rotate: 1 }}
        className="mt-4 w-50 h-50 rounded-full overflow-hidden relative"
        style={{ willChange: "transform, opacity" }}
      >
        <Image
          src={image1}
          alt="Profile-image"
          fill
          unoptimized
          className="object-cover object-[80%_15%] scale-100"
        />
      </motion.div>

      {/* Heading with waving hand */}
      <div className="flex gap-2 mt-4 text-center items-center">
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-2xl font-medium flex items-center gap-2 text-gray-900"
          style={{ willChange: "transform, opacity" }}
        >
          Hi! I’m Muhammad Adil{" "}
          <motion.span
            // keep a tiny, cheap wave using rotate only (GPU-friendly)
            animate={{ rotate: [0, 16, -8, 16, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
            style={{ display: "inline-block", willChange: "transform" }}
          >
            <Image src={assets.hand_icon} className="w-5 h-5" alt="hand icon" />
          </motion.span>
        </motion.h3>
      </div>

      {/* Big Heading */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-6xl py-2 font-light max-w-2xl text-center leading-tight"
        style={{ willChange: "transform, opacity" }}
      >
        MERN Stack Developer based in Lahore.
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-center text-gray-600 px-3"
        style={{ willChange: "transform, opacity" }}
      >
        I’m a passionate web developer from Lahore, Pakistan, skilled in
        building full-stack applications using MongoDB, Express.js, React, and
        Node.js. I love solving real-world problems with clean, scalable code.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 mt-6 md:flex-row flex-col"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Primary CTA */}
        <motion.a
          // entrance handled by parent variants; just keep hover/tap for interactivity
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          href="#contact"
          role="button"
          aria-label="Connect with Muhammad Adil"
          // color transitions via Tailwind (CSS) for smoothness
          className="group flex items-center py-3 px-4 md:py-4 md:px-6 rounded-full gap-2 transition-colors duration-200 bg-black text-white hover:bg-white hover:text-black border border-black text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          style={{ willChange: "transform" }}
        >
          Connect with me
          <ArrowRight className="w-4 h-4" />
        </motion.a>

        {/* Resume CTA */}
        <motion.a
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.975 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href="/Muhammad Adil Cv.pdf"
          role="button"
          aria-label="Download resume of Muhammad Adil"
          className="flex items-center py-3 px-5 md:py-4 md:px-7 rounded-full gap-2 transition-colors duration-200 border-gray-400 text-md border hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          style={{ willChange: "transform" }}
        >
          My resume
          <Download className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
