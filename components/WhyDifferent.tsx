import React from "react";
import { AppTone } from "../types";

interface WhyDifferentProps {
  tone: AppTone;
}

const WhyDifferent: React.FC<WhyDifferentProps> = ({ tone }) => {
  const negatives = [
    "Sem like fácil",
    "Sem ego inflado",
    "Sem edição estratégica",
  ];

  const positives = [
    "Regras claras",
    "Argumentos públicos",
    "Comunidade como juiz",
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
            tone === "bold"
              ? "font-bold-brand uppercase text-white"
              : "text-slate-900"
          }`}
        >
          Por que isso é diferente
        </h2>
        <p
          className={`text-xl ${
            tone === "bold" ? "text-zinc-400" : "text-slate-600"
          }`}
        >
          Não é rede social. É confronto intelectual.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className={`p-8 rounded-3xl border ${
            tone === "bold"
              ? "bg-zinc-900/50 border-red-900/30"
              : "bg-red-50 border-red-100"
          }`}
        >
          <ul className="space-y-4">
            {negatives.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <i className="fa-solid fa-xmark text-red-500"></i>
                <span
                  className={
                    tone === "bold" ? "text-zinc-300" : "text-slate-700"
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`p-8 rounded-3xl border ${
            tone === "bold"
              ? "bg-zinc-900/50 border-green-900/30"
              : "bg-green-50 border-green-100"
          }`}
        >
          <ul className="space-y-4">
            {positives.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <i className="fa-solid fa-check text-green-500"></i>
                <span
                  className={
                    tone === "bold" ? "text-zinc-300" : "text-slate-700"
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
