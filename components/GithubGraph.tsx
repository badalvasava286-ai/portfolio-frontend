'use client';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GithubGraph() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 border-t border-gray-800 animate-fadeIn">
      <h2 className="text-3xl font-bold text-white mb-2">
        Code Contributions
      </h2>
      <p className="text-gray-400 mb-8">
        My live commit history pulled directly from GitHub.
      </p>
      
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex justify-center overflow-x-auto hover:border-gray-600 transition-colors duration-300">
        <GitHubCalendar 
          username="badalvasava286-ai" 
          colorScheme="dark"
          blockSize={14}
          blockMargin={6}
          fontSize={14}
        />
      </div>
    </section>
  );
}