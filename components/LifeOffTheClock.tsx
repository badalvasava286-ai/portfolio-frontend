'use client';
import React from 'react';

export default function LifeOffTheClock() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 border-t border-gray-800 animate-fadeIn">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-2">
          Life Off-the-Clock
        </h2>
        <p className="text-gray-400">
          Because there is more to life than writing code and running SQL queries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Architecture/Design */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
          <div className="text-blue-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">3D Architecture</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            I enjoy designing and visualizing 3D floor plans. I recently worked on a classic 40x24ft Indian-style residential layout.
          </p>
        </div>

        {/* Card 2: Motorcycles */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
          <div className="text-emerald-500 mb-4">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">The Open Road</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            When I step away from the keyboard, you can usually find me riding and appreciating bikes like the Royal Enfield GT.
          </p>
        </div>

        {/* Card 3: Poetry */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="text-purple-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Urdu Poetry</h3>
            <p className="text-sm text-gray-400 italic mb-4 leading-relaxed">
              "उजाले अपनी यादों के हमारे साथ रहने दो<br/>न जाने किस गली में ज़िंदगी की शाम हो जाए"
            </p>
          </div>
          <p className="text-xs text-gray-500 text-right">— Bashir Badr</p>
        </div>

      </div>
    </section>
  );
}