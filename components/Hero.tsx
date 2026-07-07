"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-10 md:p-24  text-gray-900 dark:text-white overflow-hidden text-center">
      bg-white dark:bg-black
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        
        {/* Profile Photo Wrapper */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/10 p-1 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative group cursor-pointer"
        >
          {/* Replace this src with your actual image path later */}
          <img 
            src="profile.jpg.webp" 
            alt="Badalbhai Ineshbhai Vasava" 
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-500"
          />
          {/* Hover Overlay Glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </motion.div>

        {/* Name Header */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Badalbhai</span>
        </h1>

        {/* Cool Subtitle */}
        <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-6">
          Full-Stack Engineer & Systems Architect
        </h2>

        {/* Punchy Summary */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
          I bridge the gap between operational complexity and elegant software. From managing high-volume warehouse logic to engineering high-performance React and SQL applications, I build intelligent tools that scale.
        </p>

        {/* Call to Action */}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects" 
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition duration-300"
        >
          Explore My Architecture
        </motion.a>
        
      </motion.div>
    </section>
  );
}