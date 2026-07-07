"use client";

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeMode, setChallengeMode] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am the AI assistant. Ask about my skills, or toggle Challenge Mode to see if you can pass my technical interview!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const chatHistory = messages.slice(1); 
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Make sure you keep the /api/ai/chat at the end!
const response = await fetch('https://badalbhai-portfolio-api.onrender.com/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We now send the challengeMode flag to the backend!
        body: JSON.stringify({ message: input, history: chatHistory, challengeMode }),
      });
      const data = await response.json();
      
      if (data.error) {
        setMessages((prev) => [...prev, { role: 'assistant', text: `Oops: ${data.error}` }]);
      } else {
        let replyText = data.reply;
        
        // The Magic Trigger!
        if (replyText.includes('[CONFETTI_TRIGGER]')) {
          confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#3b82f6', '#10b981', '#ffffff'] });
          // Remove the secret keyword before showing the text to the user
          replyText = replyText.replace('[CONFETTI_TRIGGER]', '').trim();
        }

        setMessages((prev) => [...prev, { role: 'assistant', text: replyText }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Connection failed.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
      >
        {isOpen ? '✕ Close Assistant' : '💬 Ask My AI'}
      </button>
      
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-neutral-900 border border-neutral-700 rounded-2xl mt-4 flex flex-col overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Header & Toggle */}
          <div className={`p-4 flex justify-between items-center border-b border-neutral-800 transition-colors ${challengeMode ? 'bg-blue-900/50' : 'bg-black/50'}`}>
            <span className="font-bold text-white text-sm">
              {challengeMode ? '🎮 Challenge Active' : '🤖 AI Assistant'}
            </span>
            <button 
              onClick={() => setChallengeMode(!challengeMode)}
              className={`text-xs px-3 py-1 rounded-full font-bold transition-colors ${challengeMode ? 'bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'bg-neutral-800 text-gray-400'}`}
            >
              {challengeMode ? 'Standard Mode' : 'Challenge Mode'}
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-black/80">
            {messages.map((msg, index) => (
              <div key={index} className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'self-end bg-blue-600 text-white rounded-tr-sm' 
                  : 'self-start bg-neutral-800 text-gray-200 border border-neutral-700 rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500 text-xs ml-2 animate-pulse">AI is typing...</div>}
          </div>

          <form onSubmit={sendMessage} className="p-3 bg-neutral-900 border-t border-neutral-800 flex gap-2">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={challengeMode ? "Type your answer..." : "Ask about my skills..."}
              className="flex-1 bg-black border border-neutral-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}