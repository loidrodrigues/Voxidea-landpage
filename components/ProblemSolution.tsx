
import React from 'react';
import { AppTone, LandingContent } from '../types';

interface ProblemSolutionProps {
  tone: AppTone;
  content: {
    problem: LandingContent['problem'];
    solution: LandingContent['solution'];
  };
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ tone, content }) => {
  const { problem, solution } = content;

  return (
    <section className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Problem Card */}
      <div className={`p-8 md:p-12 rounded-3xl border transition-all duration-500 ${
        tone === 'bold'
        ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
        : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
      }`}>
        <h2 className={`text-2xl mb-8 flex items-center gap-3 ${tone === 'bold' ? 'font-bold-brand text-3xl uppercase text-zinc-500' : 'font-bold text-slate-500'}`}>
          <i className="fa-solid fa-circle-exclamation text-blue-500/50"></i>
          {problem.title}
        </h2>
        
        <ul className="space-y-6">
          {problem.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${tone === 'bold' ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-100 text-slate-400'}`}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <p className={`text-lg font-medium leading-tight ${tone === 'bold' ? 'text-zinc-200' : 'text-slate-700'}`}>
                {point}
              </p>
            </li>
          ))}
        </ul>

        <div className={`mt-12 pt-8 border-t text-sm italic ${tone === 'bold' ? 'border-zinc-800 text-blue-400 font-bold' : 'border-slate-100 text-slate-500'}`}>
          {problem.footer}
        </div>
      </div>

      {/* Solution Card */}
      <div className={`p-8 md:p-12 rounded-3xl border transition-all duration-500 transform lg:translate-y-6 ${
        tone === 'bold'
        ? 'bg-blue-600 border-blue-500 text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)]'
        : 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/10'
      }`}>
        <h2 className={`text-2xl mb-8 flex items-center gap-3 ${tone === 'bold' ? 'font-bold-brand text-3xl uppercase' : 'font-bold'}`}>
          <i className="fa-solid fa-shield-check"></i>
          {solution.title}
        </h2>

        <ul className="space-y-6">
          {solution.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${tone === 'bold' ? 'bg-white/20 text-white' : 'bg-blue-500 text-white'}`}>
                <i className="fa-solid fa-check"></i>
              </span>
              <p className="text-lg font-semibold leading-tight">
                {point}
              </p>
            </li>
          ))}
        </ul>

        <div className={`mt-12 pt-8 border-t text-sm font-medium ${tone === 'bold' ? 'border-white/20 text-blue-100' : 'border-blue-500 text-blue-100'}`}>
          {solution.footer}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
