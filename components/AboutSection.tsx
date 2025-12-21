'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, GraduationCap, Briefcase } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutSection() {
  return (
    <section id="About" className="py-20 px-6  overflow-hidden ">
      <motion.div
        max-width="1200px"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        {/* Headings */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm tracking-widest mb-2 uppercase">Introduction</p>
          <h2 className="text-5xl  font-medium ">About me</h2>
        </div>

        {/* Main Content: Photo and Bio */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-16">
          <motion.div variants={itemVariants} className="w-full md:w-1/3">
            <div className="relative group">
              <img
                src="/port-image.jpeg"
                alt="Portrait"
                className="rounded-[2.5rem] w-full aspect-square object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full md:w-2/3">
            <p className="text-gray-600 text-lg leading-relaxed font-sans max-w-2xl">
              I’m a Frontend Developer with hands-on experience building modern, user-focused web
              applications. I’m also an HNG Finalist, where I collaborated closely with
              cross-functional teams, consumed and integrated APIs, and worked extensively with Git,
              managing branches, pull requests, and code reviews. I’m passionate about writing
              clean, scalable code and delivering responsive, high-performance interfaces through
              effective teamwork and modern frontend best practices.
            </p>

            {/* Stats/Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <Card
                icon={<Code2 className="w-6 h-6 text-cyan-600" />}
                title="Languages"
                desc="HTML, CSS, JavaScript, React Js, Next Js,Vue Js, TypeScript, Tailwind CSS, React Native"
              />
              <Card
                icon={<GraduationCap className="w-6 h-6 text-gray-700" />}
                title="Education"
                desc="B.S.C in Business Administration"
              />
              <Card
                icon={<Briefcase className="w-6 h-6 text-gray-700" />}
                title="Projects"
                desc="Built more than 5 projects"
              />
            </div>

            {/* Tools Section */}
            <div className="mt-12">
              <a
                href="#projects"
                className="mt-8 inline-block px-6 py-3 rounded-full bg-gray-500 hover:bg-gray-400 text-white font-semibold shadow-lg transition-colors"
              >
                View my projects
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50/50 transition-colors shadow-sm flex flex-col items-start gap-3">
      <div className="mb-1">{icon}</div>
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-snug">{desc}</p>
    </div>
  )
}
