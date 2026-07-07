import SqlTerminal from '@/components/SqlTerminal';
import Projects from '@/components/Projects';
import GithubGraph from '@/components/GithubGraph';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Projects & Code
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A showcase of my engineering work, interactive database querying skills, and live open-source contributions.
          </p>
        </div>
        
        {/* The Components We Built Earlier */}
        <div className="space-y-16">
          <SqlTerminal />
          <Projects />
          <GithubGraph />
        </div>

      </div>
    </main>
  );
}