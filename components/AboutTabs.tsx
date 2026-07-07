'use client';
import React, { useState } from 'react';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-4">
      {/* Tab Navigation */}
      <div className="flex space-x-6 border-b border-gray-700 pb-2 mb-6">
        <button 
          onClick={() => setActiveTab('skills')}
          className={`text-lg font-semibold transition-colors duration-300 ${activeTab === 'skills' ? 'text-white border-b-2 border-blue-500 pb-2 -mb-[10px]' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Technical Skills
        </button>
        <button 
          onClick={() => setActiveTab('education')}
          className={`text-lg font-semibold transition-colors duration-300 ${activeTab === 'education' ? 'text-white border-b-2 border-blue-500 pb-2 -mb-[10px]' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px] text-gray-300">
        
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="animate-fadeIn">
            <ul className="list-disc list-inside space-y-3">
              <li><strong className="text-white">Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion</li>
              <li><strong className="text-white">Backend & DB:</strong> Node.js, Express, PostgreSQL, SQL Scripting</li>
              <li><strong className="text-white">Systems:</strong> AppSheet Integration, Advanced Google Sheets</li>
              <li><strong className="text-white">Operations:</strong> Logistics Routing, Digital Roster Automation</li>
            </ul>
          </div>
        )}
        
        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold text-white">B.Tech in Renewable Energy and Environmental Engineering</h4>
              <p className="text-gray-400 font-medium mt-1">SD Agriculture University, Dantiwada</p>
              <div className="mt-2 inline-block bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full">
                Graduated: 2021 | CGPA: 7.32
              </div>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold text-white">State-Level Professional Preparation</h4>
              <p className="text-gray-400 font-medium mt-1">Gujarat Online Job Application System</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Rigorous preparation for Revenue Talati Class-III & Assistant Environment Engineer Class-2. Developed advanced administrative, regulatory, and analytical competencies.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}