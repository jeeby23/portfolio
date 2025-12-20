'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const navLinks = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="am-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <path
          d="M15 80L45 20L60 50L45 80"
          stroke="url(#am-gradient-mobile)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 80L70 20L95 80"
          stroke="url(#am-gradient-mobile)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 60H55"
          stroke="url(#am-gradient-mobile)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-gray-900 font-bold tracking-tight text-sm leading-none">
        Abdulrahman Mujeeb
      </span>
      <div className="flex items-center mt-1">
        <div className="w-[1.5px] h-2.5 bg-cyan-400 mr-1.5 shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
        <span className="text-gray-500 text-[10px] font-medium tracking-widest uppercase">
          Frontend Developer
        </span>
      </div>
    </div>
  </div>
)

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 bg-[#f8f9fa] w-[85%] max-w-sm flex flex-col p-8 text-gray-800 shadow-2xl"
          >
            {/* Top Bar with New Logo */}
            <div className="flex justify-between items-center">
              <Logo />
              <button
                onClick={onClose}
                className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <IoClose size={24} className="text-gray-500 cursor-pointer" />
              </button>
            </div>

            {/* Heading Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-normal leading-tight text-gray-700">
                Let&apos;s build something <br />
                <span className="font-bold ">legendary</span> together
              </h2>
              <div className="h-[1px] bg-gray-200 w-full mt-4" />
            </div>

            {/* Navigation Links */}
            <nav className="mt-12 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className={`text-lg font-semibold tracking-widest transition-colors ${
                    link === 'HOME' ? '' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Section: Connect */}
            <div className="mt-auto">
              <p className="text-xs font-bold tracking-widest mb-4">LET&apos;S CONNECT</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abdulrahman-mujeeb-b2b5b126a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={<FaLinkedinIn />} />
                </a>
                <a href="https://github.com/jeeby23" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={<FaGithub />} />
                </a>
                <a href="mailto:shola.mujeeb@gmail.com">
                <SocialIcon icon={<FaEnvelope />} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center text-gray-700 hover:scale-110 hover:text-gray-600 transition-all cursor-pointer">
      {icon}
    </div>
  )
}
