"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('Message delivered successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Network error. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="py-24 p-10 md:p-24 bg-black text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 border-b border-white/10 pb-4">Start a Conversation</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-4 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-colors"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="p-4 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-colors"
          />
          <textarea 
            placeholder="How can I help your engineering team?" 
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="p-4 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 resize-none transition-colors"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="px-8 py-4 bg-blue-600/90 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            Send Message
          </motion.button>
          
          {status && <p className="text-center text-gray-300 mt-4 font-medium">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}