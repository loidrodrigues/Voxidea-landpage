import React from "react";
import { AppTone, LandingContent } from "../types";

interface TesterCTAProps {
  tone: AppTone;
  content: LandingContent["testerCTA"];
}

const TesterCTA: React.FC<TesterCTAProps> = ({ tone, content }) => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5585996537401&text=ola%2C%20Loid%20Padre%2C%20quero%20testar%20o%20Voxidea.";

  return (
    <section id="tester" className="py-12">
      <div
        className={`p-8 md:p-16 rounded-[3rem] text-center relative overflow-hidden transition-all duration-500 ${
          tone === "bold"
            ? "bg-zinc-900 border-zinc-800"
            : "bg-blue-600 text-white shadow-2xl"
        }`}
      >
        {/* Decor */}
        {tone === "bold" && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full"></div>
        )}

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tighter ${
              tone === "bold"
                ? "font-bold-brand uppercase text-white"
                : "text-white"
            }`}
          >
            {content.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {content.requirements.map((req, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                  tone === "bold"
                    ? "bg-zinc-950 border-zinc-800 text-zinc-400"
                    : "bg-white/10 border-white/20 text-blue-50"
                }`}
              >
                {tone === "bold" ? (
                  <i className="fa-solid fa-check text-blue-500 mr-2"></i>
                ) : (
                  <i className="fa-solid fa-star mr-2"></i>
                )}
                {req}
              </span>
            ))}
          </div>

          <div className="space-y-6 pt-4">
            <p
              className={`text-lg ${
                tone === "bold" ? "text-zinc-500" : "text-blue-100 opacity-80"
              }`}
            >
              Estamos abrindo o app para quem quer ajudar a moldar o futuro das
              validações. Baixe o app e prove seu ponto.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                tone === "bold"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white hover:bg-slate-50 text-blue-600"
              }`}
            >
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TesterCTA;
