"use client";

import { useInView } from "./hooks/useInView";
import { Database, Cpu, Users } from "lucide-react";

const steps = [
  {
    n: 1,
    icon: <Database size={22} />,
    title: "Mapeamos seus dados",
    desc: "Entendemos onde estão as informações da sua empresa. Você não precisa organizar nada antes.",
  },
  {
    n: 2,
    icon: <Cpu size={22} />,
    title: "Construímos o assistente",
    desc: "Configuramos e treinamos com o conteúdo da sua empresa. Ele aprende seu vocabulário e seus processos.",
  },
  {
    n: 3,
    icon: <Users size={22} />,
    title: "Seu time começa a usar",
    desc: "Qualquer pessoa pergunta em linguagem natural e recebe a resposta na hora.",
  },
];

export default function Solution() {
  const { ref, inView } = useInView();

  return (
    <section id="solucao" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">A Solução</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] mb-4 leading-tight">
          Um assistente que conhece tudo sobre o seu negócio
        </h2>
        <p className="text-[#64748B] text-lg max-w-2xl mb-16">
          Em poucas semanas, seu time passa a ter acesso imediato a qualquer
          informação da empresa — sem depender de ninguém, a qualquer hora.
        </p>

        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 120}ms`,
                }}
              >
                {/* Number badge */}
                <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/25">
                    {step.n}
                  </div>
                  <div className="md:mt-4">
                    <div className="text-blue-500 mb-2 hidden md:flex justify-center">{step.icon}</div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
