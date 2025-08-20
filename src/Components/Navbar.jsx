"use client";
import { assets } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const navContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const navItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

const logoV = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const overlayV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panelV = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 280, damping: 28 } },
  exit: { x: "100%", transition: { type: "spring", stiffness: 240, damping: 28 } },
};

const linkHover = (reduce) =>
  reduce
    ? {}
    : { scale: 1.04, y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } };

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduce = useReducedMotion();
  const targetSection = useRef(null);
  const scrollPosition = useRef(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#Services" },
    { name: "My Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 6);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu opens
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMenuOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      if (scrollPosition.current) {
        window.scrollTo(0, scrollPosition.current);
        scrollPosition.current = 0;
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Smooth scroll to targetSection after mobile menu closes
  useEffect(() => {
    if (!isMenuOpen && targetSection.current) {
      const targetElement = document.querySelector(targetSection.current);
      if (targetElement) {
        // Unlock body first
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";

        // Calculate scroll start from current viewport
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
        const currentScroll = window.scrollY;
        const targetPosition = targetElement.getBoundingClientRect().top + currentScroll - navbarHeight;

        setTimeout(() => {
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }, 50);
      }
      targetSection.current = null;
    }
  }, [isMenuOpen]);

  // Handle link clicks (desktop & mobile)
  const handleNavClick = (href, e) => {
    e.preventDefault();

    if (isMenuOpen) {
      // Store target for scrolling after menu closes
      targetSection.current = href;
      setIsMenuOpen(false);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
        const currentScroll = window.scrollY;
        const targetPosition = targetElement.getBoundingClientRect().top + currentScroll - navbarHeight;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Background image */}
      <div className="fixed top-0 left-0 w-full -z-10 translate-y-[-60%] pointer-events-none">
        <Image src={assets.header_bg_color} alt="header background" className="w-full h-auto" />
      </div>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-5 md:px-16 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
        initial="hidden"
        animate="visible"
        variants={navContainer}
        style={{ willChange: "transform, opacity, backgroundColor" }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          aria-label="Home"
          className="flex items-center"
          variants={logoV}
          onClick={(e) => handleNavClick("#home", e)}
        >
          <Logo />
        </motion.a>

        {/* Desktop Links */}
        <motion.ul
          className={`md:flex hidden flex-wrap gap-3 lg:gap-10 ${ovo.className} transition-all duration-300
            py-3 px-6 md:px-12 rounded-full w-full md:w-auto text-sm md:text-base lg:text-lg
            ${isScrolled ? "bg-transparent shadow-none" : "bg-white shadow-sm"}
          `}
          variants={navContainer}
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={navItem} className="list-none">
              <a
                href={link.href}
                className="inline-block px-2 py-1 hover:text-[#6467f2] transition-colors"
                onClick={(e) => handleNavClick(link.href, e)}
              >
                <motion.span whileHover={linkHover(reduce)} style={{ display: "inline-block" }}>
                  {link.name}
                </motion.span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right controls */}
        <motion.div className="flex items-center gap-3 md:gap-2" variants={navItem}>
          <button className="cursor-pointer" aria-label="Toggle dark mode">
            <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
          </button>

          <motion.a
            href="#contact"
            className="md:flex hidden items-center gap-3 border border-gray-500 rounded-full px-6 py-2.5 hover:bg-gray-100 transition"
            whileHover={linkHover(reduce)}
            onClick={(e) => handleNavClick("#contact", e)}
          >
            Contact
            <Image src={assets.arrow_icon} alt="send-icon" className="w-3" />
          </motion.a>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(true)} className="block md:hidden" aria-label="Open menu">
            <Image src={assets.menu_black} alt="menu icon" className="w-6 cursor-pointer" />
          </button>
        </motion.div>

        {/* Mobile overlay + panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                key="overlay"
                className="fixed h-screen inset-0 z-40"
                style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                variants={overlayV}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.aside
                key="panel"
                className="fixed top-0 right-0 w-64 h-screen bg-rose-50 z-50 px-8 py-20 flex flex-col gap-6"
                variants={panelV}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="absolute top-6 right-6 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <Image src={assets.close_black} alt="close" className="w-5" />
                </div>

                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-lg font-medium hover:text-[#6467f2] transition-colors"
                    variants={navItem}
                    whileHover={linkHover(reduce)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
