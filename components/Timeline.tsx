"use client";

import { useInView } from "./hooks/useInView";

const steps = [
  {
    period: "Semana 1",
    title: "Diagnóstico",
    desc: "Entendemos seu negócio e seus dados.",
  },
  {
    period: "Semanas 2–4",
    title: "Construção",
    desc: "Configuramos e construímos o assistente.",
  },
  {
    period: "Semana 5",
    title: "Testes",
    desc: "Testamos com perguntas reais do seu negócio.",
  },
  {
    period: "Semana 6",
    title: "Entrega",
    desc: "Seu time começa a usar.",
  },
  {
    period: "Mês 2+",
    title: "Manutenção",
    desc: "Mantemos tudo funcionando e atualizado.",
  },
];

export default function Timeline() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] mb-16 leading-tight">
          Do primeiro contato até o assistente funcionando
        </h2>

        {/* Desktop horizontal timeline */}
        <div ref={ref} className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
          <div
            className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
            style={{ width: inView ? "100%" : "0%" }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.4s ease ${200 + i * 150}ms`,
                }}
              >
                {/* Dot */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold mb-4 shadow-lg shadow-blue-600/20 z-10 border-4 border-white">
                  {i + 1}
                </div>
                <p className="font-bold text-[#0F172A] mb-1 text-sm">{step.title}</p>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-600 to-purple-600 opacity-20 my-1" />
                )}
              </div>
              <div className="pb-8">
                <p className="font-bold text-[#0F172A] mb-1">{step.title}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
