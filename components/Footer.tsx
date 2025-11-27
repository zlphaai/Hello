import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-6 text-center text-slate-600 text-sm">
      <p>&copy; {new Date().getFullYear()} React Hello World. Crafted with Tailwind CSS.</p>
    </footer>
  );
};