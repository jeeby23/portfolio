"use client";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer pointer-events-auto">
    {/* The Monogram SVG */}
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-110"
      >
        <defs>
          <linearGradient id="am-gradient-header" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path
          d="M15 80L45 20L60 50L45 80"
          stroke="url(#am-gradient-header)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 80L70 20L95 80"
          stroke="url(#am-gradient-header)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 60H55"
          stroke="url(#am-gradient-header)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* Name and Title Text */}
    <div className="hidden sm:flex flex-col justify-center">
      <span className="text-gray-900 dark:text-white font-bold tracking-tight text-sm leading-none">
        Abdulrahman Mujeeb
      </span>
      <div className="flex items-center mt-1">
        <div className="w-[1.5px] h-2.5 bg-cyan-400 mr-1.5 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
        <span className="text-gray-500 dark:text-gray-400 text-[10px] font-medium tracking-widest uppercase">
          Frontend Developer
        </span>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-40 w-full pointer-events-none">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto border border-gray-200 dark:border-gray-800 rounded-full bg-white/70 dark:bg-black/20 backdrop-blur-md transition-all">
            <div className="flex h-16 items-center justify-between px-6">
              
              {/* Replaced pLogo.png with the new Logo component */}
              <a href="#home">
                <Logo />
              </a>

              <div className="flex items-center gap-4">
                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
                  <li><a href="#About" className="hover:text-blue-500 transition">About</a></li>
                  <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
                  <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
                </ul>
                <ThemeToggle />
                {/* Mobile Hamburger */}
                <button 
                  onClick={() => setIsOpen(true)}
                  className="md:hidden p-2 text-black dark:text-gray-300 pointer-events-auto"
                >
                  <HiOutlineMenuAlt3 size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}