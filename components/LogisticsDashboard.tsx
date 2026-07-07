'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data representing warehouse throughput
const throughputData = [
  { day: 'Mon', inbound: 4200, dispatched: 4100 },
  { day: 'Tue', inbound: 4800, dispatched: 4600 },
  { day: 'Wed', inbound: 5100, dispatched: 5050 },
  { day: 'Thu', inbound: 4500, dispatched: 4400 },
  { day: 'Fri', inbound: 5900, dispatched: 5800 },
  { day: 'Sat', inbound: 3200, dispatched: 3100 },
  { day: 'Sun', inbound: 2100, dispatched: 2000 },
];

// Custom Tooltip for the dark theme
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg shadow-xl">
        <p className="text-white font-semibold mb-2">{label}</p>
        <p className="text-blue-400 text-sm">Inbound Scans: {payload[0].value}</p>
        <p className="text-emerald-400 text-sm">Dispatched: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

export default function LogisticsDashboard() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 border-t border-gray-800 animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Operational Analytics
        </h2>
        <p className="text-gray-400">
          Interactive visualization of high-volume warehouse throughput, built with Recharts.
        </p>
      </div>
      
      <div className="bg-gray-900/50 border border-gray-800 p-4 md:p-6 rounded-xl hover:border-gray-600 transition-colors duration-300">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={throughputData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <XAxis dataKey="day" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
              <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="inbound" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Inbound" />
              <Bar dataKey="dispatched" fill="#10B981" radius={[4, 4, 0, 0]} name="Dispatched" />
            </BarChart>
          </ResponsiveContainer>
          {/* Security Disclaimer */}
      <div className="mt-4 pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 italic text-center md:text-left">
          * Note: Mock data utilized to demonstrate UI architecture while adhering to strict corporate data security policies.
        </p>
      </div>
        </div>
      </div>
    </section>
  );
}