import AboutTabs from '@/components/AboutTabs';
import LifeOffTheClock from '@/components/LifeOffTheClock';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About & Education
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            My technical foundation, academic background, and what I do when I step away from the keyboard.
          </p>
        </div>
        
        {/* The Components We Built Earlier */}
        <div className="space-y-16">
          <AboutTabs />
          <LifeOffTheClock />
        </div>

      </div>
    </main>
  );
}