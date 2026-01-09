
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AppTone } from '../types';

interface IdeaRoasterProps {
  tone: AppTone;
}

const IdeaRoaster: React.FC<IdeaRoasterProps> = ({ tone }) => {
  const [idea, setIdea] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRoast = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setFeedback('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = tone === 'bold' 
        ? "Você é um crítico ácido e brutalmente honesto de ideias de startups. Seu objetivo é 'assar' (roast) a ideia do usuário, apontando falhas óbvias com sarcasmo e humor provocativo. Seja direto, curto e impiedoso. Use gírias de negócios e foco no fracasso provável. Idioma: Português Brasileiro."
        : "Você é um consultor sênior de inovação e validação de negócios. Analise a ideia do usuário de forma construtiva, profissional e estruturada. Aponte pontos fortes, riscos e sugestões de melhoria. Use um tom encorajador mas realista. Idioma: Português Brasileiro.";

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analise esta ideia: "${idea}"`,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.8,
        }
      });

      setFeedback(response.text || 'Ocorreu um erro ao processar o feedback.');
    } catch (err) {
      console.error(err);
      setFeedback('Erro ao conectar com o servidor. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`p-8 md:p-12 rounded-[2rem] border transition-all duration-500 ${
      tone === 'bold'
      ? 'bg-zinc-950 border-red-900/30 ring-1 ring-red-500/20'
      : 'bg-white border-blue-100 shadow-2xl shadow-blue-500/5'
    }`}>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
            tone === 'bold' ? 'bg-red-500 text-white' : 'bg-blue-100 text-blue-600'
          }`}>
            Recurso Exclusivo AI
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold ${tone === 'bold' ? 'font-bold-brand text-5xl' : 'text-slate-900'}`}>
            {tone === 'bold' ? 'MÁQUINA DE VERDADES' : 'AVALIAÇÃO ESTRATÉGICA'}
          </h2>
          <p className={tone === 'bold' ? 'text-zinc-500' : 'text-slate-500'}>
            {tone === 'bold' 
              ? 'Teste sua coragem antes de postar no app.' 
              : 'Receba uma análise preliminar baseada em frameworks de mercado.'}
          </p>
        </div>

        <div className="space-y-4">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Descreva sua ideia em poucas palavras..."
            className={`w-full h-32 p-6 rounded-2xl border transition-all outline-none resize-none text-lg font-medium ${
              tone === 'bold'
              ? 'bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-700 focus:border-red-600'
              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500'
            }`}
          />
          
          <button
            onClick={handleRoast}
            disabled={loading || !idea.trim()}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 ${
              tone === 'bold'
              ? 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading ? (
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            ) : (
              <>
                <i className={`fa-solid ${tone === 'bold' ? 'fa-fire' : 'fa-brain'}`}></i>
                {tone === 'bold' ? 'Receber Feedback Brutal' : 'Análise Profissional'}
              </>
            )}
          </button>
        </div>

        {feedback && (
          <div className={`p-6 rounded-2xl border animate-in fade-in slide-in-from-bottom-4 duration-500 ${
            tone === 'bold'
            ? 'bg-red-950/20 border-red-500/30 text-red-100'
            : 'bg-blue-50 border-blue-200 text-slate-800'
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <i className={`fa-solid ${tone === 'bold' ? 'fa-skull-crossbones text-red-500' : 'fa-clipboard-check text-blue-500'}`}></i>
              <span className="text-xs font-bold uppercase tracking-wider opacity-60">Resultado:</span>
            </div>
            <p className="whitespace-pre-wrap leading-relaxed font-medium">
              {feedback}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeaRoaster;
