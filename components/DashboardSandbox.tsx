"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simulated database of employees and shifts
const initialData = [
  { id: 'EMP-8021', role: 'Picker', shift: 'Morning (06:00 - 14:00)', status: 'Active' },
  { id: 'EMP-8044', role: 'Packer', shift: 'Night (22:00 - 06:00)', status: 'Conflict' },
  { id: 'EMP-8059', role: 'Loader', shift: 'Evening (14:00 - 22:00)', status: 'Active' },
  { id: 'EMP-8091', role: 'Supervisor', shift: 'Night (22:00 - 06:00)', status: 'Conflict' },
];

export default function DashboardSandbox() {
  const [roster, setRoster] = useState(initialData);
  const [filter, setFilter] = useState('All');
  const [isSyncing, setIsSyncing] = useState(false);

  // Filter logic
  const filteredRoster = roster.filter(item => {
    if (filter === 'All') return true;
    return item.status === filter;
  });

  // Simulate a complex backend sync and conflict resolution
  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setRoster(prev => prev.map(emp => ({ ...emp, status: 'Active' })));
      setIsSyncing(false);
      setFilter('All');
    }, 1500);
  };

  const resetData = () => setRoster(initialData);

  return (
    <section className="py-24 p-10 md:p-24 bg-black text-white relative z-10 flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4">Operations Dashboard Sandbox</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience a simulated operational tracking environment. Filter real-time shift data and execute a data sync to resolve roster conflicts automatically.
        </p>
      </div>
      
      <div className="w-full max-w-4xl bg-neutral-900/50 rounded-2xl border border-neutral-800 backdrop-blur-md overflow-hidden shadow-2xl relative z-10">
        
        {/* Dashboard Header & Controls */}
        <div className="p-6 border-b border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 bg-black/50">
          <div className="flex gap-2">
            {['All', 'Active', 'Conflict'].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  filter === f 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button 
              onClick={resetData}
              className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Reset Data
            </button>
            <button 
              onClick={handleSync}
              disabled={isSyncing || roster.every(r => r.status === 'Active')}
              className="px-6 py-2 rounded-md text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSyncing ? (
                <span className="animate-pulse">Syncing APIs...</span>
              ) : (
                'Resolve Conflicts & Sync'
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Data Grid */}
        <div className="p-6 min-h-[300px]">
          <div className="grid grid-cols-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">
            <div>Employee ID</div>
            <div>Role</div>
            <div>Shift Timing</div>
            <div>Status</div>
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredRoster.map((emp) => (
                <motion.div
                  key={emp.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`grid grid-cols-4 items-center p-4 rounded-lg border ${
                    emp.status === 'Active' 
                      ? 'bg-emerald-900/10 border-emerald-900/30' 
                      : 'bg-red-900/10 border-red-900/30'
                  }`}
                >
                  <div className="font-mono text-sm text-gray-300">{emp.id}</div>
                  <div className="text-sm text-gray-300">{emp.role}</div>
                  <div className="text-sm text-gray-400">{emp.shift}</div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      emp.status === 'Active'
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-800/50'
                        : 'bg-red-950 text-red-400 border-red-800/50 animate-pulse'
                    }`}>
                      {emp.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredRoster.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-12 text-gray-500"
              >
                No records match this filter.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}