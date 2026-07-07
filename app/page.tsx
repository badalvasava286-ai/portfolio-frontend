import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full min-h-[85vh] flex flex-col-reverse md:flex-row justify-center items-center py-20 px-4 max-w-5xl mx-auto animate-fadeIn gap-12">
        <div className="flex-1 flex flex-col items-start text-left">
          <p className="text-blue-500 font-semibold tracking-wide mb-3 text-lg">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">Badal Vasava.</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 leading-tight">I build systems that scale.</h2>
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            I'm a Full-Stack Engineer and Systems Architect specializing in React, Node.js, and complex data synchronization. From engineering logistics tracking apps to automating high-volume warehouse databases, I turn operational bottlenecks into elegant software solutions.
          </p>
          <div className="flex flex-wrap gap-5 mt-4">
            <a href="/resume.pdf" download="Badal_Vasava_Resume.pdf" className="inline-flex items-center justify-center px-7 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v9m0 0l-3-3m3 3l3-3" /></svg>
              Download Resume
            </a>
            <a href="/projects" className="inline-flex items-center justify-center px-7 py-3 bg-gray-900 text-white hover:bg-gray-800 font-semibold rounded-lg transition-all duration-300 border border-gray-700">
              View My Work
            </a>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[50px] opacity-20"></div>
          {/* Ensure your image name here is correct! */}
          <img src="/profile.jpg" alt="Badal Vasava" className="rounded-full w-full h-full object-cover border-4 border-gray-800 shadow-2xl relative z-10 hover:border-blue-500 transition-colors duration-500" />
        </div>
      </section>

      <Contact />
    </main>
  );
}