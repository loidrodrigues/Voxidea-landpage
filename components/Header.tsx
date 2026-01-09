import React from "react";
import { AppTone } from "../types";

interface HeaderProps {
  tone: AppTone;
  toggleTone: () => void;
}

const Header: React.FC<HeaderProps> = ({ tone, toggleTone }) => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5585996537401&text=ola%2C%20Loid%20Padre%2C%20quero%20testar%20o%20Voxidea.";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        tone === "bold"
          ? "bg-zinc-950/80 border-zinc-800"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                tone === "bold" ? "bg-blue-600" : "bg-blue-600"
              }`}
            >
              <i className="fa-solid fa-lightbulb text-white"></i>
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                tone === "bold"
                  ? "font-bold-brand text-2xl uppercase text-white"
                  : "text-slate-900"
              }`}
            >
              Voxidea
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTone}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm border ${
                tone === "bold"
                  ? "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <i
                className={`fa-solid ${
                  tone === "bold"
                    ? "fa-toggle-on text-blue-500"
                    : "fa-toggle-off text-blue-500"
                }`}
              ></i>
              {tone === "bold" ? "OUSADO" : "PROFISSIONAL"}
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:block px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                tone === "bold"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Baixar App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
