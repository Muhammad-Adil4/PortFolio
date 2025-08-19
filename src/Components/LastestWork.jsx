import React from "react";
import { Github, ExternalLink } from "lucide-react";

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

const LastestWork = () => {
  return (
    <>
      {/* Header */}
      <div
        id="work"
        className="text-center flex flex-col gap-2 py-16 scroll-mt-10"
      >
        <h1 className="text-gray-500 text-lg tracking-widest">My portfolio</h1>
        <h1 className="text-4xl font-semibold tracking-widest">
          My Latest Work
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-3 px-4">
          Explore a collection of projects showcasing my expertise in front-end
          development, full-stack solutions, and modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className=" grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-6 
    md:gap-8 
    lg:gap-10 
    p-8 
    md:p-16 
    lg:p-24">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500 bg-white group"
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-black  hover:text-white transition-all duration-500">
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white  transition-all duration-500">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> 
    </>
  );
};

export default LastestWork;
