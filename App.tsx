
import React, { useState } from 'react';
import { AppTone } from './types';
import { CONTENT_BOLD, CONTENT_PROFESSIONAL } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import TesterCTA from './components/TesterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [tone, setTone] = useState<AppTone>('bold');

  const content = tone === 'bold' ? CONTENT_BOLD : CONTENT_PROFESSIONAL;

  const toggleTone = () => {
    setTone(prev => prev === 'bold' ? 'professional' : 'bold');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${tone === 'bold' ? 'bg-zinc-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Header tone={tone} toggleTone={toggleTone} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24 py-12">
        {/* The Hero now contains the high-fidelity mockups of Voxidea */}
        <Hero tone={tone} content={content.hero} />
        
        <div className="pt-12">
          <ProblemSolution tone={tone} content={{ problem: content.problem, solution: content.solution }} />
        </div>
        
        <HowItWorks tone={tone} steps={content.steps} />
        
        <TesterCTA tone={tone} content={content.testerCTA} />

        <div className="text-center py-20 px-4">
          <p className={`text-xl md:text-3xl italic font-medium transition-all duration-500 ${tone === 'bold' ? 'font-bold-brand text-3xl md:text-5xl uppercase text-blue-500' : 'text-slate-600'}`}>
            "{content.finalPhrase}"
          </p>
        </div>
      </main>

      <Footer tone={tone} />
    </div>
  );
};

export default App;
