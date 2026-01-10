import React from "react";
import { AppTone } from "../types";

interface TargetAudienceProps {
  tone: AppTone;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ tone }) => {
  const audiences = [
    {
      icon: "fa-lightbulb",
      text: "Quem quer validar sua ideia através de feedbacks reais",
    },
    { icon: "fa-code", text: "Programadores e profissionais tech" },
    { icon: "fa-comments", text: "Pessoas que gostam de debater" },
    { icon: "fa-star", text: "Quem acredita que boas ideias merecem palco" },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight ${
            tone === "bold"
              ? "font-bold-brand uppercase text-white"
              : "text-slate-900"
          }`}
        >
          Para quem é o Voxidea
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((item, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border flex flex-col items-center text-center gap-4 transition-all hover:-translate-y-1 ${
              tone === "bold"
                ? "bg-zinc-900 border-zinc-800 hover:border-blue-500/50"
                : "bg-white border-slate-200 shadow-sm hover:shadow-md"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                tone === "bold"
                  ? "bg-zinc-800 text-blue-500"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <p
              className={`font-medium ${
                tone === "bold" ? "text-zinc-200" : "text-slate-700"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudience;
