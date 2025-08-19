import React from "react";
import { Code, Server, Database, Globe } from "lucide-react";

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

const MyService = () => {
  return (
    <section id="Services" className="scroll-mt-16 py-20 px-5 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center flex flex-col gap-2">
        <h4 className="text-gray-500 text-sm sm:text-base tracking-widest uppercase">
          What I Offer
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#6467f2] to-[#FD3889] bg-clip-text text-transparent">
          My Services
        </h1>
        <p className="text-center max-w-3xl mx-auto mt-3 text-gray-600 text-sm sm:text-base px-2">
          I’m a{" "}
          <span className="font-semibold text-[#6467f2]">
            MERN Stack Developer
          </span>{" "}
          skilled in creating scalable, efficient, and user-friendly web
          applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="bg-white border shadow-md border-gray-100 flex flex-col gap-4 p-6 sm:p-7 rounded-2xl
                       hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FD3889] shadow-md">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              {item.description}
            </p>

            {/* Read More */}
            <p className="flex gap-2 items-center text-[#6467f2] font-medium cursor-pointer hover:underline text-sm sm:text-base">
              Read more →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyService;
