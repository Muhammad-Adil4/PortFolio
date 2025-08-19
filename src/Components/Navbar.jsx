"use client";
import { assets } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu opens, preserve scroll position
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isMenuOpen) {
      // store current scroll
      scrollPosition.current = window.scrollY;
      // lock the body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      // restore
      document.body.style.position = "";
      const top = document.body.style.top;
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      // restore scroll position
      if (scrollPosition.current) {
        window.scrollTo(0, scrollPosition.current);
        scrollPosition.current = 0;
      }
    }

    // cleanup on unmount just in case
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#Services" },
    { name: "My Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Background image */}
      <div className="fixed top-0 left-0 w-full -z-10 translate-y-[-60%]">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="w-full h-auto"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-5 md:px-16 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-white shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" aria-label="Home">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <ul
          className={`md:flex hidden flex-wrap gap-3 lg:gap-10 
            ${ovo.className} 
            ${isScrolled ? "shadow-none" : "shadow-sm bg-opacity-50"} 
            bg-white transition-all duration-300
            py-3 px-6 md:px-12 rounded-full 
            w-full md:w-auto text-sm md:text-base lg:text-lg`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#6467f2] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-2">
          <button className="cursor-pointer" aria-label="Toggle dark mode">
            <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
          </button>

          <a
            href="#contact"
            className="md:flex hidden items-center gap-3 border border-gray-500 rounded-full px-6 py-2.5 hover:bg-gray-100 transition"
          >
            Contact
            <Image src={assets.arrow_icon} alt="send-icon" className="w-3" />
          </a>

          {/* Mobile menu icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden"
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="menu icon" className="w-6 cursor-pointer" />
          </button>
        </div>

        {/* Mobile menu overlay (dimmer) */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            // change the last value (0.25) to make it lighter/darker as needed
            style={{ backgroundColor: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
            className="fixed top-0 left-0 w-full h-screen z-40 transition-opacity duration-300"
          />
        )}

        {/* Mobile menu */}
        <div
          className={`flex flex-col gap-4 fixed top-0 right-0 w-64 h-screen 
            bg-rose-50 transition-transform duration-500 ease-in-out 
            transform z-50 px-10 py-20 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-[#6467f2] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
