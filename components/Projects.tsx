"use client";

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Overtime & Attendance Tracker",
      desc: "A custom search-enabled application seamlessly syncing AppSheet with Google Sheets for real-time tracking.",
      tech: ["React", "AppSheet", "Google Sheets API"]
    },
    {
      title: "Digital Roster System",
      desc: "Engineered automated data management for shift timings, employee IDs, and transport status at Mother Hub operational units.",
      tech: ["Advanced SQL", "Data Management"]
    }
  ];

  return (
    <section id="projects" className="py-24 p-10 md:p-24 bg-black text-white min-h-screen relative">
      <h2 className="text-4xl font-bold mb-12 border-b border-neutral-800 pb-4 relative z-10">Featured Engineering</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 shadow-2xl group"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">{proj.title}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{proj.desc}</p>
            <div className="flex gap-3 flex-wrap">
              {proj.tech.map((t, i) => (
                <span key={i} className="px-4 py-1 bg-black/50 text-sm rounded-full text-blue-300 font-medium border border-blue-900/50 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}