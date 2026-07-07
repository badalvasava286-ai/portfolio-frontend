"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = ['Experience', 'Skills', 'Education', 'Personal'];

  return (
    <section className="py-24 p-10 md:p-24 bg-neutral-950 text-white min-h-screen relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Tab Navigation Menu */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition-all duration-300 relative ${
                activeTab === tab ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            
            {/* --- EXPERIENCE TAB --- */}
            {activeTab === 'Experience' && (
              <motion.div
                key="Experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="border-l-2 border-blue-600 pl-8 space-y-12"
              >
                <div className="relative group">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-black border-4 border-blue-600 group-hover:scale-125 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <h3 className="text-2xl font-bold text-white">HR-Helpdesk</h3>
                  <div className="text-blue-400 font-semibold mb-2">Flipkart_STV <span className="text-gray-500 ml-2 text-sm">Feb,2026 - Present</span></div>
                  <p className="text-gray-400 leading-relaxed">Engineered custom tracking applications. Designed functional search-enabled features and established seamless bidirectional syncing between AppSheet and Google Sheets.</p>
                </div>
                <div className="relative group">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-black border-4 border-blue-600 group-hover:scale-125 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <h3 className="text-2xl font-bold text-white">System Supervisior</h3>
                  <div className="text-blue-400 font-semibold mb-2">Expressbeess Logistic Solutions<span className="text-gray-500 ml-2 text-sm">Dec,2024-Jan,2026</span></div>
                  <p className="text-gray-400 leading-relaxed">Managed digital employee rosters. Executed SQL-style logic to resolve errors involving shift timings and transport status across operational units.</p>
                </div>
              </motion.div>
            )}

            {/* --- SKILLS TAB --- */}
            {activeTab === 'Skills' && (
              <motion.div
                key="Skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-400 mb-6">Development & Database</h3>
                  <ul className="space-y-3">
                    {["React & Next.js", "Node.js & Express", "PostgreSQL & SQL Scripting", "AppSheet Integration"].map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>{skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-400 mb-6">Data & Systems</h3>
                  <ul className="space-y-3">
                    {["Advanced Google Sheets (QUERY, FILTER)", "LLM Integration", "Automated Roster Management", "System Architectures"].map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>{skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* --- EDUCATION TAB --- */}
            {activeTab === 'Education' && (
              <motion.div
                key="Education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-white mb-2">State-Level Professional Preparation</h3>
                  <p className="text-blue-400 font-semibold mb-4">Competitive Examinations</p>
                  <p className="text-gray-400">Actively pursued and prepared for rigorous state-level professional roles, including Revenue Talati Class-III and Assistant Environment Engineer Class-2, demonstrating strong analytical and administrative capabilities.</p>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech (Renewable Energy & Environmental Engineering)</h3>
                  <p className="text-blue-400 font-semibold mb-4">SD Agriculture University,Dantiwada <span className="text-gray-500 ml-2 text-sm">2021</span></p>
                  <p className="text-gray-400"> <em>(Purchased graduation with Good Grades and Practical Experience)</em>.</p>
                </div>
              </motion.div>
            )}

            {/* --- PERSONAL TAB --- */}
            {activeTab === 'Personal' && (
              <motion.div
                key="Personal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Motorcycles</h3>
                  <p className="text-gray-400 text-sm">Passionate about riding and tracking models like the Yamaha MT 15, Royal Enfield GT, and high-performance adventure bikes.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Literature</h3>
                  <p className="text-gray-400 text-sm">A deep appreciator of classic Urdu poetry and Shayari, including the works of Bashir Badr and Jaun Elia.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Strategy & Gaming</h3>
                  <p className="text-gray-400 text-sm">Enjoy strategic base planning in Clash of Clans and exploring various simulation engines.</p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}