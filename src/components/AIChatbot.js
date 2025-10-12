// AIChatbot.js - Floating AI Assistant Chatbot for CAXiE Technologies
// Features: floating button, chat window, simple Q&A logic, modern UI

import React, { useState, useRef, useEffect } from 'react';

const defaultMessages = [
  { sender: 'bot', text: 'Hi! I\'m caxie your AI Assistant. Ask me anything about CAXiE Tech.' },
];

const exampleAnswers = {
  'services': 'CAXiE offers cybersecurity, ICT infrastructure, data & BI, web/branding, and training. See the Services section for details!',
  'projects': 'You can view CAXie Tech\'s projects in the Projects section. We have delivered portfolio sites, e-commerce platforms, and more.',
  'contact': 'You can contact us using the form in the Contact section, or via LinkedIn and GitHub links.',
  //'certifications': 'CAXiE has certifications in IT, networking, and analytics. See the Certifications section for more.',
  'about': 'CAXiE Technologies is an IT Consultant, Network & Systems Engineer, and more. See the About section for more info about us and quick facts, from the Founder\'s desk.',
  'blog': 'The Blog section features posts about tech, networking, cyber security and threats, defects of technology and other technological advancements.',
};

function getBotReply(input) {
  const lower = input.toLowerCase();
  if (lower.includes('service') || lower.includes('skill')) return exampleAnswers.services;
  if (lower.includes('project')) return exampleAnswers.projects;
  if (lower.includes('contact')) return exampleAnswers.contact;
  if (lower.includes('certif')) return exampleAnswers.certifications;
  if (lower.includes('about')) return exampleAnswers.about;
  if (lower.includes('blog')) return exampleAnswers.blog;
  return "I'm here to help! Try asking about services, projects, contact, certifications, about, or blog.";
}

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setTimeout(() => {
      const botMsg = { sender: 'bot', text: getBotReply(input) };
      setMessages((msgs) => [...msgs, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-36 right-6 z-50 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl transition-all duration-300 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI Assistant"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 15h8M9 9h.01M15 9h.01" strokeWidth="2" /></svg>
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-w-xs bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in">
          <div className="bg-purple-700 text-white rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">AI Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-purple-200 text-xl">&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg shadow text-sm max-w-[80%] ${msg.sender === 'user' ? 'bg-purple-100 text-purple-900' : 'bg-purple-600 text-white'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex border-t border-purple-100">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-bl-2xl focus:outline-none text-sm"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-purple-700 text-white rounded-br-2xl hover:bg-purple-800 transition">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatbot; 