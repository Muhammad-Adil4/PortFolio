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
    live: "https://go-cart-ecommerce.vercel.app/",
  },
  {
    title: "SaaS AI Platform",
    description:
      "A SaaS web application showcasing AI-powered tools and solutions. Features interactive demos, predictive analytics, and a clean responsive UI.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    live: "https://quick-ai-liard-seven.vercel.app/",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A powerful dashboard for managing multiple social media accounts, scheduling posts, tracking engagement, and analyzing performance metrics. Designed for content creators and businesses to streamline their social media workflow.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
  },
  {
    title: "Blogging Website",
    description:
      "A blogging platform where users can write, publish, and manage articles. Includes categories, SEO optimization, and a modern responsive layout.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    live: "https://ai-blog-six-lovat.vercel.app/",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
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
      >
        <h1 className="text-gray-500 text-lg tracking-widest">My portfolio</h1>
        <h1 className="text-4xl font-semibold tracking-widest">
          My Latest Work
        </h1>
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
      >
        {projects.map((item, index) => (
          <motion.article
            key={index}
            className="flex flex-col justify-between border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white"
            variants={cardVariants}
            style={{ minHeight: 420 }}
            whileHover={reduce ? {} : { scale: 1.03, y: -8 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            {/* Image */}
            <motion.div className="overflow-hidden h-56">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-4">
                {item.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
}
