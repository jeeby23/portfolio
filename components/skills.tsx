'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiGit,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiVuedotjs,
  SiReactiveresume,
  SiExpo,
  SiJavascript,
  SiCss3,
  SiReact,
  SiSupabase,
  SiFirebase,
} from 'react-icons/si'

const row1 = [
  { icon: <SiHtml5 className="text-[#E34F26]" />, name: 'HTML5' },
  { icon: <SiGit className="text-[#F05032]" />, name: 'Git' },
  { icon: <SiVuedotjs className="text-[#2496ED]" />, name: 'Vuejs' },
  { icon: <SiRedux className="text-[#764ABC]" />, name: 'Redux' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  { icon: <SiReact className="text-[#06B6D4]" />, name: 'React' },

  { icon: <SiNextdotjs className="text-black" />, name: 'Next.js' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  { icon: <SiSupabase className="text-[#06B6D4]" />, name: 'Supabase' },
]

const row2 = [
  { icon: <SiExpo className="text-[#2496ED]" />, name: 'Expo' },
  { icon: <SiReactiveresume className="text-[#2496ED]" />, name: 'Reactnative' },
  { icon: <SiJavascript className="text-[#2496ED]" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
  { icon: <SiGithub className="text-black" />, name: 'GitHub' },
  { icon: <SiNextdotjs className="text-black" />, name: 'Next.js' },
  { icon: <SiCss3 className="text-black" />, name: 'CSS' },
  { icon: <SiFirebase className="text-black" />, name: 'Firebase' },
]

const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex items-center gap-3 px-6 py-4 mx-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 min-w-40 cursor-default"
  >
    <span className="text-3xl">{icon}</span>
    <span className="text-gray-800 font-semibold text-sm">{name}</span>
  </motion.div>
)

const MarqueeRow = ({
  items,
  direction = 'left',
}: {
  items: typeof row1
  direction?: 'left' | 'right'
}) => {
  const scrollValue = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']

  return (
    <div className="flex overflow-hidden py-4 select-none">
      <motion.div
        animate={{ x: scrollValue }}
        transition={{
          ease: 'linear',
          duration: 25,
          repeat: Infinity,
        }}
        className="flex flex-nowrap"
      >
        {/* Render twice for seamless looping */}
        {[...items, ...items].map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </motion.div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="   py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold  text-center mb-2">Skills & Technologies</h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="right" />
        <MarqueeRow items={row2} direction="left" />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
