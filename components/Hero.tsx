"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Bot, User } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const messages = [
  { role: "user", text: "Qual o preço do produto X para cliente categoria B acima de 50 unidades?" },
  { role: "assistant", text: "Para cliente categoria B, acima de 50 unidades, o preço unitário do produto X é R$ 18,40 — com desconto progressivo de 12% já aplicado. Quer que eu gere o orçamento?" },
  { role: "user", text: "Tem substituto disponível caso esteja em falta?" },
  { role: "assistant", text: "Sim! O produto Y-2 é o substituto homologado. Estoque atual: 340 unidades. Mesmo preço e certificação INMETRO válida até dez/2025." },
];

export default function Hero({ onOpenModal }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 150, 255, ${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 150, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A0A0F] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-100" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-blue-300 font-medium">
              <Bot size={14} className="text-blue-400" />
              Assistente de IA conversacional para empresas
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-white leading-tight tracking-tight mb-6">
              Sua empresa já tem as{" "}
              <span className="gradient-text">respostas</span>
              <span className="text-white">.</span>
              <br />
              Só falta conseguir encontrá-las.
            </h1>

            <p className="text-lg text-[#94A3B8] mb-10 leading-relaxed">
              Criamos um <span className="text-white font-medium">chat de IA</span> treinado com os dados da sua empresa — planilhas, PDFs, sistemas e históricos. Qualquer pessoa do time faz uma pergunta e recebe a resposta na hora.{" "}
            </p>

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <button
                onClick={onOpenModal}
                className="group cursor-pointer inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Agendar conversa gratuita
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <p className="text-sm text-[#475569] flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <span>Sem compromisso</span>
              <span className="w-1 h-1 rounded-full bg-[#475569]" />
              <span>Resposta em 24h</span>
              <span className="w-1 h-1 rounded-full bg-[#475569]" />
              <span>Dados no Brasil</span>
            </p>
          </div>

          {/* Right — chat mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1E293B] border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <div className="flex items-center gap-1.5 ml-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot size={11} className="text-white" />
                  </div>
                  <span className="text-xs text-white/60 font-medium">Assistente — Distribuidora Exemplo</span>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-green-400">online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${msg.role === "assistant"
                        ? "bg-gradient-to-br from-blue-500 to-purple-500"
                        : "bg-[#334155]"
                      }`}>
                      {msg.role === "assistant"
                        ? <Bot size={13} className="text-white" />
                        : <User size={13} className="text-white/70" />
                      }
                    </div>

                    {/* Bubble */}
                    <div className={`max-w-[78%] px-3 py-2 rounded-xl text-xs leading-relaxed ${msg.role === "assistant"
                        ? "bg-[#1E293B] text-[#CBD5E1] rounded-tl-sm"
                        : "bg-blue-600 text-white rounded-tr-sm"
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Bot size={13} className="text-white" />
                  </div>
                  <div className="bg-[#1E293B] rounded-xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-[#1E293B] border border-white/10 rounded-xl px-3 py-2.5">
                  <span className="text-xs text-white/30 flex-1">Pergunte qualquer coisa...</span>
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
