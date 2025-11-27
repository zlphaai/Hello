import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';

export const HelloWorld: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast",
      desc: "Built with React 18 & Vite"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Modern",
      desc: "Tailwind CSS Styling"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Typed",
      desc: "100% TypeScript"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center relative">
      <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-sm font-medium animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        System Online
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">World.</span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Welcome to your high-performance React application. 
        Designed with precision, styled with elegance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all duration-300 cursor-default ${
              activeFeature === idx
                ? 'bg-slate-800/80 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-105'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
            onMouseEnter={() => setActiveFeature(idx)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
              activeFeature === idx ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
            }`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <button className="group px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors flex items-center gap-2">
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all">
          View Documentation
        </button>
      </div>
    </div>
  );
};