"use client";

import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export const projects = [
  {
    title: "Chatting App",
    description:
      "A real-time messaging application that supports text, voice, and video calls. Users can share media files, create group chats, and enjoy a fully responsive and interactive UI built for seamless communication.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and secure checkout. Includes admin dashboard for managing products, orders, and users, offering a complete online shopping experience.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A powerful dashboard for managing multiple social media accounts, scheduling posts, tracking engagement, and analyzing performance metrics. Designed for content creators and businesses to streamline their social media workflow.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative platform to organize and track project tasks, timelines, and team communication. Features include task assignment, progress tracking, file sharing, and real-time updates to boost team productivity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "Online Learning Platform",
    description:
      "A comprehensive e-learning website offering video lectures, quizzes, and course progress tracking. Allows instructors to create and manage courses while providing students with interactive learning materials and performance analytics.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "AI Web Tool",
    description:
      "A platform showcasing AI-powered solutions, featuring interactive demos, predictive analytics, and data visualization. Users can explore AI models and gain insights through a user-friendly interface designed for learning and experimentation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.995 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function LatestWork() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Header */}
      <motion.div
        id="work"
        className="text-center flex flex-col gap-2 py-16 scroll-mt-10"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={headingVariants}
        style={{ willChange: "transform, opacity" }}
      >
        <h1 className="text-gray-500 text-lg tracking-widest">My portfolio</h1>
        <h1 className="text-4xl font-semibold tracking-widest">My Latest Work</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-3 px-4">
          Explore a collection of projects showcasing my expertise in front-end
          development, full-stack solutions, and modern web technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 p-8 md:p-16 lg:p-24 max-w-[1400px] mx-auto"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        variants={containerVariants}
        style={{ willChange: "transform, opacity" }}
      >
        {projects.map((item, index) => (
          <motion.article
            key={index}
            className="flex flex-col justify-between border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
            variants={cardVariants}
            style={{
              transformOrigin: "center center",
              willChange: "transform, opacity",
              minHeight: 420,
            }}
            whileHover={reduce ? {} : { scale: 1.03, y: -8 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            aria-labelledby={`project-title-${index}`}
          >
            {/* Image */}
            <motion.div
              className="overflow-hidden h-56"
              initial={{ scale: 1 }}
              whileHover={reduce ? {} : { scale: 1.02 }}
              style={{ willChange: "transform" }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
                // subtle entrance for images (only if not reduced)
                initial={reduce ? undefined : { scale: 1.03 }}
                animate={reduce ? undefined : { scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2
                id={`project-title-${index}`}
                className="text-xl font-semibold text-gray-800"
              >
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <motion.button
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
                  aria-label={`View code for ${item.title}`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.button>

                <motion.button
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
                  aria-label={`View live demo for ${item.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
}
