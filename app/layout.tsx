import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import AiChatWidget from '@/components/AiChatWidget'; // <-- Move AI import here!

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Badal Vasava | Full-Stack Engineer',
  description: 'Portfolio of Badal Vasava, Systems Architect and Full-Stack Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300`}>
        <Providers>
        {/* Navbar stays at the top of every page */}
        <Navbar />
        
        {/* The specific page content loads here */}
        {children}

        {/* AI Widget stays floating on every page */}
        <AiChatWidget />
        </Providers>
      </body>
    </html>
  );
}