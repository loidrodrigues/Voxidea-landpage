import React from "react";
import { AppTone } from "../types";

interface AboutVoxideaProps {
  tone: AppTone;
}

const AboutVoxidea: React.FC<AboutVoxideaProps> = ({ tone }) => {
  const isBold = tone === "bold";
  const baseText = isBold ? "text-zinc-400" : "text-slate-600";
  const heading = isBold ? "text-white" : "text-slate-900";
  const highlight = isBold ? "text-blue-500" : "text-blue-600";

  return (
    <section className="py-12 md:py-16 space-y-16 md:space-y-20">
      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight ${
            isBold ? "font-bold-brand uppercase" : ""
          } ${heading}`}
        >
          Voxidea
        </h2>
        <div className={`text-lg md:text-xl leading-relaxed ${baseText}`}>
          <p>
            O Voxidea dá destino às ideias. A maioria se perde em feeds
            infinitos ou conversas rasas.
          </p>
          <p
            className={`mt-6 font-bold ${
              isBold ? "text-white" : "text-slate-900"
            }`}
          >
            Aqui é diferente.
          </p>
          <p className="mt-2">
            Ideias são questionadas, aprimoradas e validadas pela comunidade.
          </p>
        </div>
      </div>

      {/* Ecosystem */}
      <div
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center`}
      >
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${heading}`}>
            Um ecossistema de{" "}
            <span className={highlight}>pensamento crítico</span>
          </h3>
          <p className={`text-base ${baseText}`}>
            A comunidade não apenas consome, ela participa ativamente.
          </p>
          <ul className="space-y-3 mt-2">
            {[
              "Lançar ideias provocadoras",
              "Receber feedback real",
              "Participar de duelos com regras",
              "Votar por mérito, não popularidade",
            ].map((item, i) => (
              <li key={i} className={`flex items-start gap-3 ${baseText}`}>
                <div
                  className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                    isBold ? "bg-zinc-800" : "bg-blue-100"
                  }`}
                >
                  <i className={`fa-solid fa-check text-xs ${highlight}`}></i>
                </div>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`h-full min-h-[250px] rounded-2xl border ${
            isBold
              ? "bg-zinc-900/50 border-zinc-800"
              : "bg-white border-slate-200 shadow-sm"
          } flex items-center justify-center p-8`}
        >
          <i
            className={`fa-solid fa-network-wired text-8xl opacity-20 ${
              isBold ? "text-white" : "text-blue-600"
            }`}
          ></i>
        </div>
      </div>

      {/* Evolution */}
      <div
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center`}
      >
        <div
          className={`h-full min-h-[250px] rounded-2xl border ${
            isBold
              ? "bg-zinc-900/50 border-zinc-800"
              : "bg-white border-slate-200 shadow-sm"
          } flex items-center justify-center md:order-2 p-8`}
        >
          <i
            className={`fa-solid fa-layer-group text-8xl opacity-20 ${
              isBold ? "text-white" : "text-blue-600"
            }`}
          ></i>
        </div>
        <div className="space-y-4 md:order-1">
          <h3 className={`text-2xl font-bold ${heading}`}>
            Onde ideias <span className={highlight}>evoluem</span>
          </h3>
          <p className={`text-base ${baseText}`}>
            Focado em clareza, não em validação rápida.
          </p>
          <ul className="space-y-3 mt-2">
            {[
              "Opiniões são desafiadas",
              "Argumentos são testados",
              "Boas ideias ganham destaque",
            ].map((item, i) => (
              <li key={i} className={`flex items-start gap-3 ${baseText}`}>
                <div
                  className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                    isBold ? "bg-zinc-800" : "bg-blue-100"
                  }`}
                >
                  <i
                    className={`fa-solid fa-arrow-trend-up text-xs ${highlight}`}
                  ></i>
                </div>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h3 className={`text-3xl font-bold ${heading}`}>A comunidade decide</h3>
        <p className={`text-lg ${baseText}`}>
          Sem algoritmos opacos. O destaque vem do mérito:
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "fa-check-to-slot", text: "Pelo voto" },
            { icon: "fa-comments", text: "Pela argumentação" },
            { icon: "fa-clock-rotate-left", text: "Pela consistência" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${
                isBold
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-slate-200"
              } flex flex-col items-center gap-4`}
            >
              <i className={`fa-solid ${item.icon} text-3xl ${highlight}`}></i>
              <span className={`font-bold ${heading}`}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div
        className={`max-w-5xl mx-auto px-4 p-12 rounded-3xl text-center border ${
          isBold
            ? "bg-zinc-900/50 border-zinc-800"
            : "bg-blue-50 border-blue-100"
        }`}
      >
        <h3 className={`text-3xl font-bold mb-4 ${heading}`}>
          Estamos só começando
        </h3>
        <div className={`text-lg space-y-4 ${baseText}`}>
          <p>Em fase de testes, construindo com você.</p>
          <div className={`text-2xl font-bold mt-6 ${highlight}`}>
            👉 Participe. Teste. Construa.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVoxidea;
