import Hero from '../components/Hero';
import AboutTabs from '../components/AboutTabs';
import SqlTerminal from '../components/SqlTerminal';
import DashboardSandbox from '../components/DashboardSandbox';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import AiChatWidget from '../components/AiChatWidget';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      <main>
        <Hero />
        <AboutTabs />
        <Experience />
        <SqlTerminal />
        <Projects />
        <Contact />
      </main>
        
      <AiChatWidget />
    </div>
  );
}