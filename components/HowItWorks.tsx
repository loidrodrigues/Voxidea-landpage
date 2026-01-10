import React from "react";
import { AppTone, LandingContent } from "../types";

interface HowItWorksProps {
  tone: AppTone;
  steps: LandingContent["steps"];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ tone, steps }) => {
  return (
    <section className="space-y-12 py-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight ${
            tone === "bold"
              ? "font-bold-brand text-6xl uppercase"
              : "text-slate-900"
          }`}
        >
          Como Funciona
        </h2>
        <p className={tone === "bold" ? "text-zinc-500" : "text-slate-500"}>
          Três passos simples para descobrir o potencial da sua ideia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative group p-8 rounded-3xl border transition-all duration-300 ${
              tone === "bold"
                ? "bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900"
                : "bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-lg"
            }`}
          >
            <div
              className={`absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110 group-hover:rotate-12 ${
                tone === "bold"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {step.number}
            </div>

            <div className="pt-4 space-y-3">
              <h3
                className={`text-xl font-bold ${
                  tone === "bold" ? "uppercase text-white" : "text-slate-900"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={
                  tone === "bold"
                    ? "text-zinc-400 leading-relaxed"
                    : "text-slate-600 leading-relaxed"
                }
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
