"use client";

import { useState } from "react";
import { MessageSquareQuote, Clock } from "lucide-react";

const tabs = [
  {
    id: "distribuidoras",
    label: "Distribuidoras",
    emoji: "🏭",
    questions: [
      "Qual o preço do produto X para cliente categoria B acima de 50 unidades?",
      "Esse parafuso tem certificação INMETRO?",
      "Tem substituto disponível para o item em falta?",
      "Qual o prazo de entrega para o CEP 80000-000?",
    ],
    saving: "3–5h economizadas por vendedor por semana",
    problem:
      "Representantes perdem horas por semana ligando para o escritório para tirar dúvidas sobre preço, estoque e especificação técnica.",
    result:
      "Representante fecha pedido na reunião com o cliente, sem ligar para o escritório.",
    metric: "3–5h",
    metricLabel: "economizadas por vendedor por semana",
  },
  {
    id: "advocacia",
    label: "Advocacia",
    emoji: "⚖️",
    questions: [
      "Qual o prazo de não-concorrência nos contratos com empresas de tecnologia?",
      "Já tivemos casos semelhantes? Como foi resolvido?",
      "Quais contratos têm reajuste pelo IPCA?",
      "Mostre modelos de notificação para inadimplência.",
    ],
    saving: "4–6h economizadas por advogado por semana",
    problem:
      "Advogados perdem horas pesquisando em contratos antigos e precedentes internos.",
    result:
      "Advogado júnior encontra em 30 segundos o que levaria 2 horas de pesquisa.",
    metric: "4–6h",
    metricLabel: "economizadas por advogado por semana",
  },
  {
    id: "vendas",
    label: "Vendas",
    emoji: "📈",
    questions: [
      "Quais foram os produtos mais vendidos no último trimestre por região?",
      "Qual o histórico de compras do cliente Empresa X nos últimos 6 meses?",
      "Quais contas estão sem contato há mais de 30 dias?",
      "Qual o desconto máximo aprovado para pedidos acima de R$ 50 mil?",
    ],
    saving: "4–6h economizadas por vendedor por semana",
    problem:
      "Vendedores perdem tempo vasculhando CRM, planilhas e e-mails para montar contexto antes de uma reunião ou responder um cliente.",
    result:
      "Vendedor entra na reunião preparado e responde dúvidas do cliente na hora, sem precisar consultar o time interno.",
    metric: "30%",
    metricLabel: "de aumento na taxa de conversão com respostas mais rápidas",
  },
  {
    id: "construtoras",
    label: "Construtoras",
    emoji: "🏗️",
    questions: [
      "Qual a especificação do concreto para a laje do bloco B?",
      "O contrato com a elétrica prevê reajuste? Em qual condição?",
      "Qual norma ABNT para para-raios acima de 30 metros?",
      "Quais itens da NR-35 se aplicam aqui?",
    ],
    saving: "1–2h economizadas por engenheiro por dia",
    problem:
      "Engenheiros perdem tempo procurando especificações e normas em documentos de obras diferentes.",
    result:
      "Engenheiro resolve dúvida no canteiro sem ligar para o escritório.",
    metric: "1–2h",
    metricLabel: "economizadas por engenheiro por dia",
  },
  {
    id: "varejo",
    label: "Varejo",
    emoji: "🛒",
    questions: [
      "Esse modelo suporta até quantos kg? Tem em preto e cinza?",
      "Qual a política de troca para produto de e-commerce?",
      "Parcela em 12x sem juros no Visa?",
      "Esse produto é compatível com tomada 20A?",
    ],
    saving: "50% de redução no tempo médio de atendimento",
    problem:
      "Equipe de atendimento não consegue responder dúvidas técnicas com agilidade. Cada resposta vira uma pesquisa manual.",
    result: "Atendente responde sem colocar o cliente na espera.",
    metric: "50%",
    metricLabel: "de redução no tempo médio de atendimento",
  },
  {
    id: "rh",
    label: "RH",
    emoji: "👥",
    questions: [
      "Quantos dias de férias tenho disponíveis?",
      "Qual o vale refeição para home office?",
      "Quais documentos para licença maternidade?",
      "A empresa reembolsa especialização? Qual o limite?",
    ],
    saving: "65% de redução em perguntas repetitivas ao RH",
    problem:
      "RH responde as mesmas perguntas todos os dias, perdendo tempo em FAQ que deveria estar disponível para todos.",
    result: "Funcionário encontra a resposta sozinho, a qualquer hora.",
    metric: "65%",
    metricLabel: "de redução em perguntas repetitivas ao RH",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="exemplos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Exemplos Reais</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] mb-12 leading-tight">
          Veja como funciona em diferentes tipos de empresa
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]"
              }`}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — dark card */}
          <div className="bg-[#0F172A] rounded-2xl p-7 flex flex-col">
            <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-5">
              O assistente responde perguntas como:
            </p>

            <div className="flex flex-col gap-3 flex-1">
              {tab.questions.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <MessageSquareQuote size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white leading-relaxed">{q}</p>
                </div>
              ))}
            </div>

            {/* Saving tag */}
            <div className="mt-6 inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-2">
              <Clock size={14} className="text-blue-400" />
              <span className="text-xs font-medium text-blue-300">Economia: {tab.saving}</span>
            </div>
          </div>

          {/* Right — white card */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">O desafio</p>
              <p className="text-[#0F172A] text-base leading-relaxed mb-6">{tab.problem}</p>

              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">O resultado</p>
              <p className="text-[#0F172A] text-base leading-relaxed">{tab.result}</p>
            </div>

            {/* Metric */}
            <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
              <p className="text-5xl font-bold gradient-text leading-none mb-1">{tab.metric}</p>
              <p className="text-sm text-[#64748B]">{tab.metricLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
