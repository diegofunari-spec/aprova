import React from 'react';
import { ShieldCheck, Ban, ArrowRightLeft, HelpCircle } from 'lucide-react';

export default function ComparisonSection() {
  const comparisons = [
    {
      aspect: "Modelo de Compra",
      common: "Comprar cursos avulsos custando R$ 300+ cada, elevando os gastos em pilhas.",
      bestYear: "Um único programa, integrando todos os preparatórios essenciais de uma vez."
    },
    {
      aspect: "Organização",
      common: "Vídeos e dicas soltas e desordenadas no Google e Youtube.",
      bestYear: "Formação pedagogicamente planejada para o mercado correspondente brasileiro."
    },
    {
      aspect: "Certificações",
      common: "Falta de discernimento técnico de qual exame fazer para cada produto exigido.",
      bestYear: "Clareza absoluta sobre as regras da Febraban, Abecip, Aneps ou Anbima."
    },
    {
      aspect: "Conexão Prática",
      common: "Decorar regras apenas para provas e travar na simulação operacional.",
      bestYear: "Possibilidade de evoluir para o plano Elite e operar junto a 40+ bancos parceiros."
    },
    {
      aspect: "Desperdício de Tempo",
      common: "Anos coletando informações obsoletas sem saber como emitir propostas.",
      bestYear: "Foco exclusivo no próximo passo estratégico para sua operação."
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full text-slate-600 mb-3 font-mono text-xs font-bold uppercase">
            <ArrowRightLeft className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>ANÁLISE DE CUSTO-BENEFÍCIO</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Compare: O Caminho Comum vs. O Melhor Ano
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded mb-4" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Pare de jogar tempo e dinheiro fora. Veja por que centralizar sua jornada educacional com a Aprova Bancários evita retrabalho e promove mais resultado técnico.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-display text-sm sm:text-base border-b border-slate-800">
                  <th className="p-4 sm:p-6 w-1/4">Recurso / Aspecto</th>
                  <th className="p-4 sm:p-6 bg-slate-950/40 text-red-400 w-3/8 flex items-center space-x-1.5 pt-6 font-semibold">
                    <Ban className="w-4 h-4 shrink-0" />
                    <span>Caminho Fragmentado</span>
                  </th>
                  <th className="p-4 sm:p-6 text-sky-500 w-3/8 font-bold">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-sky-500" />
                      <span>Formação Melhor Ano</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-xs sm:text-sm text-slate-700">
                {comparisons.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/60 transition-colors">
                    {/* Aspect */}
                    <td className="p-4 sm:p-6 font-display font-bold text-slate-900 bg-slate-50/40">
                      {row.aspect}
                    </td>
                    
                    {/* Common Path */}
                    <td className="p-4 sm:p-6 text-slate-500">
                      {row.common}
                    </td>
                    
                    {/* Mejor Ano */}
                    <td className="p-4 sm:p-6 text-slate-900 font-medium bg-sky-50/20">
                      {row.bestYear}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Microcopy Below Table */}
        <p className="text-center text-xs text-slate-400 mt-6 font-mono">
          Eficácia didática testada e recomendada por milhares de profissionais regulados ativos no Brasil.
        </p>

      </div>
    </section>
  );
}
