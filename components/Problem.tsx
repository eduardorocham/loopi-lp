"use client";

import { useInView } from "./hooks/useInView";

const cards = [
  {
    emoji: "🗂️",
    title: '"Está em alguma planilha"',
    desc: "Toda vez que alguém precisa de uma informação, a resposta é sempre essa. Só que ninguém sabe qual planilha, onde está, ou se está atualizada.",
  },
  {
    emoji: "📞",
    title: '"Pergunta pra fulano"',
    desc: "O conhecimento está na cabeça de 2 ou 3 pessoas. Quando elas estão ocupadas, o time inteiro trava.",
  },
  {
    emoji: "📄",
    title: '"Tem um documento sobre isso"',
    desc: "Manuais e procedimentos existem. Mas encontrar a informação certa dentro deles leva mais tempo do que ligar pra alguém.",
  },
  {
    emoji: "⏱️",
    title: '"Vou verificar e te retorno"',
    desc: "Responder uma dúvida simples vira uma tarefa. Alguém para o que está fazendo, procura, e responde — quando lembra.",
  },
];

export default function Problem() {
  const { ref, inView } = useInView();

  return (
    <section id="problema" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">O Problema</p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] max-w-2xl mb-16 leading-tight">
          Você provavelmente reconhece pelo menos uma dessas situações
        </h2>

        {/* Cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl p-6 transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{card.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
