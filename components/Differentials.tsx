"use client";

import { useInView } from "./hooks/useInView";
import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Você não precisa entender de tecnologia",
    desc: "Cuidamos de toda a infraestrutura. Você usa o resultado, não opera o sistema.",
  },
  {
    title: "Seus dados ficam seguros e no Brasil",
    desc: "Armazenados em servidores no Brasil, em ambiente exclusivo para sua empresa.",
  },
  {
    title: "Começa a funcionar em semanas, não meses",
    desc: "Em 4 a 8 semanas seu time já está usando o assistente no dia a dia.",
  },
  {
    title: "O assistente aprende o vocabulário da sua empresa",
    desc: "Conhece seus produtos, processos e regras. Não é um chatbot genérico.",
  },
  {
    title: "Se os dados mudam, o assistente acompanha",
    desc: "Atualizou o catálogo ou mudou uma política? Mantemos o assistente atualizado.",
  },
];

export default function Differentials() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] mb-14 leading-tight">
          Por que funciona diferente do que você já tentou
        </h2>

        <div ref={ref} className="max-w-3xl flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-16px)",
                transition: `all 0.4s ease ${i * 90}ms`,
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={22} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-1">{item.title}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
