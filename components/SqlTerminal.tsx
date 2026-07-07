"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SqlTerminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'PostgreSQL Terminal v14.0 initialized.' },
    { type: 'system', text: 'Type "HELP" to see available commands.' }
  ]);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new output appears
  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toUpperCase();
    if (!cmd) return;

    // Add user input to output log
    const newOutput = [...output, { type: 'user', text: `root@badalbhai-db:~# ${input}` }];

    // Command Logic
    if (cmd === 'HELP') {
      newOutput.push({ type: 'system', text: 'Available commands: SELECT * FROM projects;, SELECT * FROM skills;, EXECUTE hire_badalbhai;, CLEAR' });
    } else if (cmd === 'CLEAR') {
      setOutput([{ type: 'system', text: 'Terminal cleared. Type "HELP" for commands.' }]);
      setInput('');
      return;
    } else if (cmd === 'SELECT * FROM PROJECTS;') {
      newOutput.push({ type: 'success', text: '=> 1. Overtime Tracker (React, AppSheet, Sheets API)' });
      newOutput.push({ type: 'success', text: '=> 2. Digital Roster System (SQL, Data Management)' });
      newOutput.push({ type: 'success', text: '(2 rows returned)' });
    } else if (cmd === 'SELECT * FROM SKILLS;') {
      newOutput.push({ type: 'success', text: '=> FRONTEND: React, Next.js, Tailwind' });
      newOutput.push({ type: 'success', text: '=> BACKEND: Node.js, PostgreSQL' });
      newOutput.push({ type: 'success', text: '=> DATA: Advanced Google Sheets (QUERY, FILTER), LLM Integration' });
      newOutput.push({ type: 'success', text: '(3 rows returned)' });
    } else if (cmd === 'EXECUTE HIRE_BADALBHAI;') {
      newOutput.push({ type: 'easter-egg', text: '*** INITIATING RECRUITMENT PROTOCOL ***' });
      newOutput.push({ type: 'easter-egg', text: 'Scroll down to the Contact form to complete execution!' });
    } else {
      newOutput.push({ type: 'error', text: `ERROR: syntax error at or near "${input.split(' ')[0]}"` });
    }

    setOutput(newOutput);
    setInput('');
  };

  return (
    <section className="py-24 p-10 md:p-24 bg-neutral-950 text-white relative z-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4 text-center">Interactive Database</h2>
      <p className="text-gray-400 mb-12 text-center max-w-xl">Test my backend architecture. Run live queries to explore my engineering background.</p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-black rounded-lg border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-sm"
      >
        {/* Terminal Header */}
        <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800 flex gap-2 items-center">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-gray-500 text-xs tracking-widest">BASH - SQL INTERFACE</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-80 overflow-y-auto flex flex-col gap-2">
          {output.map((line, idx) => (
            <div key={idx} className={`
              ${line.type === 'user' ? 'text-white' : ''}
              ${line.type === 'system' ? 'text-gray-400' : ''}
              ${line.type === 'success' ? 'text-emerald-400' : ''}
              ${line.type === 'error' ? 'text-red-400' : ''}
              ${line.type === 'easter-egg' ? 'text-blue-400 font-bold animate-pulse' : ''}
            `}>
              {line.text}
            </div>
          ))}
          <div ref={endOfTerminalRef} />
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleCommand} className="flex px-6 py-4 bg-neutral-900/50 border-t border-neutral-800">
          <span className="text-emerald-500 mr-2">root@badalbhai-db:~#</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white focus:ring-0"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </motion.div>
    </section>
  );
}