'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'

interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: ' E-Commerce Audiophile',
    subtitle: 'Premium Audio Gear for True Sound Lovers',
    description:
      'A modern e-commerce platform for premium headphones, speakers, and audio equipment—built with performance, accessibility, and seamless shopping in mind. Designed to deliver an immersive user experience from product discovery to checkout.',
    tags: ['Next.js', 'Tailwind CSS', 'Convex'],
    image: '/audio.jpeg',
    liveUrl: 'https://audiophile-d9i7.vercel.app/',
    githubUrl: 'https://github.com/jeeby23/audiophile',
  },
  {
    title: 'Usman Domain Kitchen',
    subtitle: 'Hire, Train & Connect with Professional Chefs',
    description:
      'A chef-focused platform designed to connect households and businesses with skilled professional chefs while also providing structured culinary training. Built to streamline chef hiring, skill development, and talent discovery through a modern, user-friendly experience.',
    tags: ['Vue.js', 'Framer Motion', 'Tailwind CSS', 'Swipper'],
    image: '/kitchen.jpeg',
    liveUrl: 'https://usmankitchenfrontend.onrender.com/https://usmankitchenfrontend.onrender.com/',
    githubUrl: 'https://github.com/Faisal-tech007/UsmanKitchenFrontend',
  },
  {
    title: 'DefendNet',
    subtitle: 'Audit, Risk & Compliance Excellence',
    description:
      'A professional auditing and assurance platform delivering accurate financial audits, risk assessment, and compliance solutions. DefendNet helps organizations maintain transparency, strengthen governance, and make confident, data-driven decisions.',
    tags: ['Vue.js', 'Tailwind CSS', 'Swipper', 'Framer Motion'],
    image: '/defendpic.jpeg',
    liveUrl: 'https://defendnettechnolog.netlify.app/',
    githubUrl: 'https://github.com/jeeby23/trydef',
  },
  {
    title: 'TourWidget',
    subtitle: 'Onboarding Made Plug-and-Play',
    description:
      'A lightweight onboarding widget that allows developers to generate, copy, and embed guided product tours directly into their websites. TourWidget helps teams improve user activation with smooth, customizable walkthroughs—no complex setup required.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer motion', 'superbase'],
    image: '/widget.jpeg',
    liveUrl: 'https://tourwidget.vercel.app/',
    githubUrl: 'https://github.com/seyiadisa/hng-onboarding-app',
  },
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0

  return (
    <section>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 mb-24 last:mb-0`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 group">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h3 className="text-3xl font-bold  mb-2">{project.title}</h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-gray-600 text-sm font-medium rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-400 pb-1"
          >
            View Project <FiExternalLink />
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-400 pb-1"
          >
            Source Code <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
    </section>
  )
}

export default function FeaturedProjects() {
  return (
    <section className=" py-24 px-4 sm:px-6 lg:px-8" id='projects'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold  mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-gray-500 font-medium"
          >
            Some of my recent work
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
