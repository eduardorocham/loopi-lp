"use client";

import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="contato" className="py-28 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Quer ver como ficaria na sua empresa?
        </h2>
        <p className="text-lg text-[#94A3B8] mb-10 leading-relaxed">
          30 minutos, sem compromisso. Você explica o problema, a gente mostra se resolve.
        </p>

        <button
          onClick={onOpenModal}
          className="group cursor-pointer inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
        >
          Agendar conversa gratuita
          <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="mt-5 text-sm text-[#475569]">
          Sem enrolação. Se não fizer sentido para o seu caso, a gente fala abertamente.
        </p>
      </div>
    </section>
  );
}
