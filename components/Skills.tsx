"use client";

import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "AppSheet UI"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "PostgreSQL", "SQL Scripting"]
    },
    {
      title: "Data & Architecture",
      skills: ["Advanced Google Sheets (QUERY, FILTER)", "System Methodologies", "LLM Integration"]
    }
  ];

  return (
    <section className="py-24 p-10 md:p-24 bg-black text-white relative">
      <h2 className="text-4xl font-bold mb-12 border-b border-neutral-800 pb-4 relative z-10">Core Competencies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-6">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map((skill, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}