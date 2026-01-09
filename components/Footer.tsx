
import React from 'react';
import { AppTone } from '../types';

interface FooterProps {
  tone: AppTone;
}

const Footer: React.FC<FooterProps> = ({ tone }) => {
  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${tone === 'bold' ? 'bg-zinc-950 border-zinc-900 text-zinc-500' : 'bg-white border-slate-100 text-slate-400'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 flex items-center justify-center rounded-md ${tone === 'bold' ? 'bg-zinc-800' : 'bg-slate-100'}`}>
              <i className={`fa-solid fa-lightbulb text-[10px] ${tone === 'bold' ? 'text-blue-500' : 'text-blue-500'}`}></i>
            </div>
            <span className={`text-lg font-bold ${tone === 'bold' ? 'font-bold-brand uppercase tracking-widest text-white' : 'text-slate-900'}`}>
              Voxidea
            </span>
          </div>

          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Voxidea. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
