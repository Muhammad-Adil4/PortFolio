"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import { ArrowRight ,Mail } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/FormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === true) {
        console.log(data.message, data.data);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div id="contact" className="relative overflow-hidden scroll-mt-20 px-4 pt-20">

      {/* ✅ Heading Section */}
      <div
        id="work"
        className="scroll-mt-28 text-center flex flex-col items-center gap-2 py-12 "
      >
        <h1 className="text-gray-500 text-sm md:text-lg tracking-widest">
          Connect with me
        </h1>
        <h1 className="text-4xl md:text-5xl font-medium tracking-widest">
          Get in touch
        </h1>
        <p className="text-center max-w-2xl mx-auto mt-3 text-gray-600 p-3 text-sm md:text-base">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </div>

      {/* ✅ Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-4 z-10 relative w-full"
      >
        <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-3xl py-6">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-gray-500 transition text-sm"
          />
          <input
            value={formData.email}
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-gray-500 transition text-sm"
          />
        </div>

        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          placeholder="Enter your message"
          className="w-full max-w-3xl border border-gray-300 rounded-xl px-5 py-4 outline-none min-h-[150px] focus:border-gray-500 transition text-sm"
        ></textarea>
        <div className="flex items-center justify-center py-12">
          <button className="group flex items-center py-3 px-3 md:py-3 md:px-4 rounded-full gap-1 transition-all duration-500 bg-black text-white hover:bg-white hover:text-black border border-black text-sm md:text-base justify-center">
           Send message
            <ArrowRight className="w-5 h-5 " />
          </button>
        </div>
      </form>

      {/* ✅ Background Image */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <Image
          src={assets.header_bg_color}
          alt="header_bg_color"
          className="w-full object-cover opacity-50 max-h-48"
        />
      </div>

      {/* ✅ Call to Action Button */}

      {/* ✅ Footer Section */}
      <div className="flex flex-col items-center gap-1 justify-center mt-16 text-center">
        <Logo width={90} />
        <div className="flex items-center gap-3 text-sm md:text-lg text-gray-700">
          <Image src={assets.mail_icon} className="w-6" alt="mail icon" />
          themuhammad.adil4@gmail.com
        </div>
      </div>

      <hr className="w-[90%] mx-auto mt-8 border-gray-300" />

      {/* ✅ Bottom Footer Links */}
      <ul className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-6 gap-4 text-sm text-gray-600 flex-wrap text-center">
        <li>© 2025 Aadi_86. All rights reserved.</li>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
          <li>
            <a href="">Terms of Services</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Connect with me</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default GetInTouch;
