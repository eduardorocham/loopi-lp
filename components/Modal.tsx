"use client";

import { useEffect, useState } from "react";
import { X, Calendar, ArrowRight, ChevronDown } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const niches = [
  "🏭 Distribuidoras",
  "⚖️ Advocacia",
  "📈 Vendas",
  "🏗️ Construtoras",
  "🛒 Varejo",
  "👥 RH",
];

const inputClass =
  "w-full border border-[#E5E7EB] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

export default function Modal({ open, onClose }: ModalProps) {
  const [niche, setNiche] = useState("");
  const [customNiche, setCustomNiche] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const isOther = niche === "Outro";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Calendar size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-[#0F172A] text-lg">Agendar conversa</h3>
            <p className="text-sm text-[#64748B]">30 minutos, sem compromisso</p>
          </div>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => { e.preventDefault(); onClose(); }}
        >
          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">E-mail corporativo</label>
            <input
              type="email"
              placeholder="voce@empresa.com.br"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">Empresa</label>
            <input
              type="text"
              placeholder="Nome da empresa"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374151] mb-1.5">Nicho da empresa</label>
            <div className="relative">
              <select
                value={niche}
                onChange={(e) => { setNiche(e.target.value); setCustomNiche(""); }}
                className={`${inputClass} appearance-none pr-10 cursor-pointer bg-white text-[#0F172A] ${!niche ? "text-[#9CA3AF]" : ""}`}
              >
                <option value="" disabled>Selecione o segmento...</option>
                {niches.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
                <option value="Outro">Outro</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
              />
            </div>

            {isOther && (
              <input
                type="text"
                value={customNiche}
                onChange={(e) => setCustomNiche(e.target.value)}
                placeholder="Qual é o nicho da sua empresa?"
                className={`${inputClass} mt-2`}
                autoFocus
              />
            )}
          </div>

          <button
            type="submit"
            className="group cursor-pointer mt-1 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            Enviar solicitação
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        <p className="text-center text-xs text-[#94A3B8] mt-4">
          Sem compromisso · Resposta em até 24h · Dados protegidos pela LGPD
        </p>
      </div>
    </div>
  );
}
