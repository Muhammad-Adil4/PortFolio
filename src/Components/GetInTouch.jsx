"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

const headingV = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const childV = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
};

export default function GetInTouch() {
  const reduce = useReducedMotion();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill all fields.");
      return;
    }

    setSubmitting(true);
    setStatus(null);
    setStatusMessage("");

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch("/api/FormData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(`Server error: ${res.status}`);
      } else {
        const data = await res.json().catch(() => ({}));
        if (data.success) {
          setStatus("ok");
          setStatusMessage(data.message || "Message sent ✓");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
          setStatusMessage(data.message || "Submission failed");
        }
      }
    } catch (err) {
      if (err.name === "AbortError") {
        setStatus("error");
        setStatusMessage("Request timed out. Try again.");
      } else {
        setStatus("error");
        setStatusMessage("Network error. Check console.");
        console.error(err);
      }
    } finally {
      setTimeout(() => setSubmitting(false), 600);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden scroll-mt-20 px-4 pt-20"
      variants={container}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Heading */}
      <motion.div className="scroll-mt-28 text-center flex flex-col items-center gap-2 py-12" variants={headingV} style={{ willChange: "transform, opacity" }}>
        <motion.h2 variants={headingV} className="text-gray-500 text-sm md:text-lg tracking-widest">Connect with me</motion.h2>
        <motion.h1 variants={headingV} className="text-4xl md:text-5xl font-medium tracking-widest">Get in touch</motion.h1>
        <motion.p variants={headingV} className="text-center max-w-2xl mx-auto mt-3 text-gray-600 p-3 text-sm md:text-base">
          I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </motion.p>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4 z-10 relative w-full">
        <motion.div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-3xl py-6">
          <motion.input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-gray-500 text-sm"
            variants={childV}
            aria-label="Your name"
            style={{ willChange: "transform, opacity" }}
          />

          <motion.input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-gray-500 text-sm"
            variants={childV}
            aria-label="Your email"
            style={{ willChange: "transform, opacity" }}
          />
        </motion.div>

        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="w-full max-w-3xl border border-gray-300 rounded-xl px-5 py-4 outline-none min-h-[150px] focus:border-gray-500 text-sm"
          variants={childV}
          aria-label="Your message"
          style={{ willChange: "transform, opacity" }}
        />

        <div className="flex items-center justify-center py-12">
          {/** BUTTON: inline whileHover / whileTap + entrance animate **/}
          <motion.button
            type="submit"
            onClick={() => {/* nothing extra */}}
            className={`group flex items-center py-3 px-3 md:py-3 md:px-4 rounded-full gap-1 border text-sm md:text-base justify-center
              ${submitting ? "bg-gray-300 text-gray-700 border-gray-300 cursor-not-allowed" : "bg-black text-white border-black"}
            `}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay: 0.08 } }}
            whileHover={!reduce && !submitting ? { scale: 1.035, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } } : {}}
            whileTap={!reduce && !submitting ? { scale: 0.98 } : {}}
            aria-label="Send message"
            aria-disabled={submitting}
            disabled={submitting}
            style={{ willChange: "transform" , pointerEvents: submitting ? 'none' : 'auto' }}
          >
            {submitting ? (
              <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeLinecap="round" fill="none" opacity="0.25" />
                <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            ) : null}
            {submitting ? "Sending..." : "Send message"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </div>
      </form>

      {/* Background */}
      <motion.div className="absolute bottom-0 left-0 w-full -z-10" initial={reduce ? {} : { opacity: 0 }} whileInView={reduce ? {} : { opacity: 0.55 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} style={{ willChange: "opacity" }}>
        <Image src={assets.header_bg_color} alt="header_bg_color" className="w-full object-cover opacity-50 max-h-48" />
      </motion.div>

      {/* Footer / toasts */}
      <motion.div className="flex flex-col items-center gap-1 justify-center mt-16 text-center" variants={childV} style={{ willChange: "transform, opacity" }}>
        <Logo width={90} />
        <div className="flex items-center gap-3 text-sm md:text-lg text-gray-700">
          <Image src={assets.mail_icon} className="w-6" alt="mail icon" />
          themuhammad.adil4@gmail.com
        </div>
      </motion.div>

      <motion.hr className="w-[90%] mx-auto mt-8 border-gray-300" variants={childV} />

      <motion.ul className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-6 gap-4 text-sm text-gray-600 flex-wrap text-center" variants={childV}>
        <li>© 2025 Aadi_86. All rights reserved.</li>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
          <li><a href="">Terms of Services</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Connect with me</a></li>
        </div>
      </motion.ul>

      {status === "ok" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg">
          {statusMessage || "Message sent ✓"}
        </motion.div>
      )}
      {status === "error" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg">
          {statusMessage || "Something went wrong"}
        </motion.div>
      )}
    </motion.section>
  );
}
