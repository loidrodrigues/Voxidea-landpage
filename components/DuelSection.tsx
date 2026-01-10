import React from "react";
import { AppTone } from "../types";

interface DuelSectionProps {
  tone: AppTone;
}

const DuelSection: React.FC<DuelSectionProps> = ({ tone }) => {
  const steps = [
    {
      number: "1",
      title: "Lance um desafio",
      description: "“Qual a melhor forma de aprender programação hoje?”",
    },
    {
      number: "2",
      title: "Aceite o duelo",
      description: "Uma ideia contra outra. Sem rodeios.",
    },
    {
      number: "3",
      title: "Argumente",
      description: "Até 10 argumentos. Sem edição. Sem truques.",
    },
    {
      number: "4",
      title: "A comunidade vota",
      description: "Duelistas não votam. O julgamento é público.",
    },
    {
      number: "5",
      title: "A ideia vencedora entra para a história",
      description: "O duelo vira referência.",
    },
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span
            className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${
              tone === "bold"
                ? "bg-red-500/10 text-red-500 border border-red-500/20"
                : "bg-blue-50 text-blue-600 border border-blue-100"
            }`}
          >
            Novo Modo de Disputa
          </span>

          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight leading-tight ${
              tone === "bold"
                ? "font-bold-brand uppercase text-white"
                : "text-slate-900"
            }`}
          >
            Ideias não vencem por likes.
            <br />
            <span
              className={tone === "bold" ? "text-red-500" : "text-blue-600"}
            >
              Vencem por argumentos.
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl leading-relaxed ${
              tone === "bold" ? "text-zinc-400" : "text-slate-600"
            }`}
          >
            No Voxidea, duas ideias entram em duelo. A comunidade vota. A melhor
            vence.
            <br />
            <span className="opacity-70 text-base mt-2 block font-medium">
              O campo de batalha onde ideias competem — e a comunidade decide.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-6 text-left`}>
          <div
            className={`p-8 rounded-3xl border transition-all hover:-translate-y-1 ${
              tone === "bold"
                ? "bg-zinc-900 border-zinc-800 hover:border-red-500/30"
                : "bg-white border-slate-200 shadow-sm hover:shadow-md"
            }`}
          >
            <div className="text-4xl mb-6">⚔️</div>
            <h3
              className={`text-xl font-bold mb-3 ${
                tone === "bold" ? "text-white" : "text-slate-900"
              }`}
            >
              O Confronto
            </h3>
            <p
              className={`leading-relaxed ${
                tone === "bold" ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              Qualquer pessoa pode lançar uma pergunta desafiadora. Outra entra
              no duelo com uma ideia oposta.
            </p>
          </div>
          <div
            className={`p-8 rounded-3xl border transition-all hover:-translate-y-1 ${
              tone === "bold"
                ? "bg-zinc-900 border-zinc-800 hover:border-red-500/30"
                : "bg-white border-slate-200 shadow-sm hover:shadow-md"
            }`}
          >
            <div className="text-4xl mb-6">💬</div>
            <h3
              className={`text-xl font-bold mb-3 ${
                tone === "bold" ? "text-white" : "text-slate-900"
              }`}
            >
              Argumentos Reais
            </h3>
            <p
              className={`leading-relaxed ${
                tone === "bold" ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              Cada lado tem argumentos limitados. Nada de edição depois que a
              batalha começa. Só lógica e clareza.
            </p>
          </div>
          <div
            className={`p-8 rounded-3xl border transition-all hover:-translate-y-1 ${
              tone === "bold"
                ? "bg-zinc-900 border-zinc-800 hover:border-red-500/30"
                : "bg-white border-slate-200 shadow-sm hover:shadow-md"
            }`}
          >
            <div className="text-4xl mb-6">🗳️</div>
            <h3
              className={`text-xl font-bold mb-3 ${
                tone === "bold" ? "text-white" : "text-slate-900"
              }`}
            >
              A Decisão
            </h3>
            <p
              className={`leading-relaxed ${
                tone === "bold" ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              Duelistas não votam. O julgamento é público. A comunidade decide
              quem vence.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="pt-12">
          <h3
            className={`text-2xl font-bold text-center mb-12 ${
              tone === "bold" ? "text-white" : "text-slate-900"
            }`}
          >
            Como funciona um Duelo
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl border text-center ${
                  tone === "bold"
                    ? "bg-zinc-900/50 border-zinc-800"
                    : "bg-white border-slate-100"
                }`}
              >
                <div
                  className={`w-8 h-8 mx-auto mb-4 rounded-full flex items-center justify-center text-sm font-bold ${
                    tone === "bold"
                      ? "bg-red-500 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {step.number}
                </div>
                <h4
                  className={`font-bold mb-2 text-sm ${
                    tone === "bold" ? "text-zinc-200" : "text-slate-900"
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-xs ${
                    tone === "bold" ? "text-zinc-500" : "text-slate-500"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuelSection;
