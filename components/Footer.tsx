"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

const footerLinks = [
  { name: "About", href: "#About" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Reusable Logo Component for consistency
const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
      >
        <defs>
          <linearGradient id="am-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path
          d="M15 80L45 20L60 50L45 80"
          stroke="url(#am-gradient-footer)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 80L70 20L95 80"
          stroke="url(#am-gradient-footer)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 60H55"
          stroke="url(#am-gradient-footer)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-gray-900 dark:text-white font-bold tracking-tight text-sm leading-none">
        Abdulrahman Mujeeb
      </span>
      <div className="flex items-center mt-1">
        <div className="w-[1px] h-2 bg-cyan-400 mr-1 shadow-[0_0_4px_rgba(34,211,238,0.8)]"/>
        <span className="text-gray-500 dark:text-gray-400 text-[8px] font-medium tracking-widest uppercase">
          Frontend Developer
        </span>
      </div>
    </div>
  </div>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand/Logo Section - Replaced Developer.js */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Logo />
            <p className="text-gray-500 text-xs mt-4 max-w-62.5 leading-relaxed">
              Crafting responsive, high-performance user interfaces with modern frontend technologies.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/jeeby23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors text-xl cursor-pointer">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdulrahman-mujeeb-b2b5b126a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors text-xl cursor-pointer">
                <FiLinkedin />
              </a>
              <a href="https://x.com/jeeby_xo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors text-xl cursor-pointer">
                <FiTwitter />
              </a>
            </div>
            
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 bg-gray-100 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-wider">
            © {new Date().getFullYear()} Abdulrahman Mujeeb. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] flex items-center gap-1 uppercase tracking-wider">
            Built with <span className="text-red-500">❤</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}