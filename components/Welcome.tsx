'use client'

import { motion } from 'framer-motion'
import Container from './Container'
import { Icon } from '@iconify/react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const introText = 'Hello, My name is'
const fullName = 'Abdulrahman Shola Mujeeb'
const tagline = 'Building Scalable, High-Performance Frontend Experiences!'
const description =
  "I'm a Frontend Developer experienced in building intuitive web experiences that convert visitors into fans - keeping into consideration speed, accessibility and beauty."

export default function Welcome() {
  return (
    <section id="home">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10  min-h-[60vh]">
          <div className="w-full max-w-3xl flex flex-col items-center text-center">
            {/* --- START OF ROTATING TEXT BORDER --- */}
            <div className="relative flex items-center justify-center w-48 h-48 mb-6">
              {/* Rotating SVG Text */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                viewBox="0 0 100 100"
                className="absolute w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[9px] uppercase tracking-[3px] fill-gray-500 font-medium">
                  <textPath xlinkHref="#circlePath">
                    Frontend Developer • Frontend Developer •
                  </textPath>
                </text>
              </motion.svg>

              {/* Your Original Image - Untouched logic */}
              <img
                src="/port-image.jpeg"
                alt="Portrait"
                className="rotate rounded-full w-32 h-32 object-cover relative z-10"
              />
            </div>
            {/* --- END OF ROTATING TEXT BORDER --- */}

            {/* 🔹 Hello text: added justify-center */}
            <small className="text-[15px] flex flex-wrap justify-center">
              {introText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                  className={char === 'H' ? 'underline mb-2' : ''}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </small>

            {/* 🔹 Full name: added justify-center */}
            <h1 className="text-2xl md:text-5xl font-bold mt-2 flex flex-wrap justify-center leading-tight">
              {fullName.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.8 + index * 0.06,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* 🔹 Tagline: added justify-center */}
            <div className="text-gray-500 dark:text-gray-400 mt-4 w-full">
              <p className="text-[15px] md:text-xl font-medium flex flex-wrap justify-center">
                {tagline.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 3.8 + index * 0.04,
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* 🔹 Description: added justify-center */}
            <div className="text-gray-500 dark:text-gray-400 pt-4 w-full">
              <p className="flex flex-wrap justify-center max-w-2xl mx-auto">
                {description.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 6 + index * 0.02,
                      duration: 0.2,
                      ease: 'easeOut',
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </p>

              {/* Icons — Positioned in center */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 8.5,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className="flex justify-center gap-4 mt-6"
              >
                <a href="https://github.com/jeeby23" target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon="mdi:github"
                    className="text-3xl text-gray-400 animate-bounce hover:text-gray-950 dark:hover:text-white"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdulrahman-mujeeb-b2b5b126a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="text-3xl text-gray-400 animate-bounce hover:text-blue-700 hover:dark:text-blue-400"
                  />
                </a>

                <a href="https://x.com/jeeby_xo" target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon="mdi:twitter"
                    className="text-3xl text-gray-400 animate-bounce hover:text-blue-500 hover:dark:text-blue-400"
                  />
                </a>

                <a
                 href="mailto:abdulrahmanmujeeb23@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="mdi:email"
                    className="text-3xl text-gray-400 animate-bounce hover:text-pink-500 hover:dark:text-pink-400"
                  />
                </a>
                
              </motion.div>
            </div>
            <div className="py-3 px-6 mt-6 flex gap-6 text-sm dark:border-gray-800 rounded-full dark:bg-black/20 backdrop-blur-md transition-all">
              <a href="mailto:shola.mujeeb@gmail.com" className="rounded-full border p-3 flex items-center gap-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition">
                contact me
              </a>

              <a
                href="/Abdulrahman-Cv.pdf"
                download
                className="rounded-full border p-3 flex items-center gap-2 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Resume
                <Icon icon="mdi:download" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
