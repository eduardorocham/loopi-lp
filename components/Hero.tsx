"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

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

      // draw connections
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
      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-blue-300 font-medium">
          <span className="text-yellow-400">✦</span>
          Inteligência Artificial para o seu negócio
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-white leading-tight tracking-tight mb-6">
          Sua empresa já tem as{" "}
          <span className="gradient-text">respostas</span>
          <span className="text-white">.</span>
          <br />
          Só falta conseguir encontrá-las.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos os dados que você já tem — planilhas, PDFs, sistemas, históricos — num
          assistente inteligente que responde qualquer pergunta do seu time em segundos.{" "}
          <span className="text-white/60">Sem precisar de TI, sem precisar de cloud, sem complicação.</span>
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={onOpenModal}
            className="group cursor-pointer inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Agendar conversa gratuita
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Trust line */}
        <p className="text-sm text-[#475569] flex items-center justify-center gap-3 flex-wrap">
          <span>Sem compromisso</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
          <span>Resposta em 24h</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
          <span>Dados no Brasil</span>
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
