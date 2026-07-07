import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
        Education & Certifications
      </h2>
      
      <div className="space-y-6">
        {/* SD Agriculture University */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-white">
            B.Tech in Renewable Energy and Environmental Engineering
          </h3>
          <p className="text-gray-400 font-medium mt-1">
            SD Agriculture University, Dantiwada
          </p>
          <div className="mt-3 inline-block bg-gray-800 text-gray-200 text-sm px-3 py-1 rounded-full">
            Graduated: 2021 | CGPA: 7.32
          </div>
        </div>

        {/* Professional Preparation */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-white">
            State-Level Professional Preparation
          </h3>
          <p className="text-gray-400 font-medium mt-1">
            Gujarat Online Job Application System
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
            <li>
              Prepared for rigorous state-level professional roles, including Revenue Talati Class-III and Assistant Environment Engineer Class-2.
            </li>
            <li>
              Developed strong analytical, administrative, and regulatory comprehension skills, including the Land Acquisition Act.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}