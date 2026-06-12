import React from 'react';
import { UserCheck, Network, Home, Award, LineChart } from 'lucide-react';

export default function PathsSection() {
  const paths = [
    {
      num: "Trilha 1",
      icon: UserCheck,
      title: "Começar como correspondente bancário",
      desc: "Instruções didáticas do básico ao avançado. Ideal para quem está migrando de área profissional ou montando escritório do zero."
    },
    {
      num: "Trilha 2",
      icon: Network,
      title: "Ampliar portfólio de produtos financeiros",
      desc: "Aprimore suas operações adicionando consórcios de crédito, FGTS, veículos ou crédito agropecuário, diversificando os honorários."
    },
    {
      num: "Trilha 3",
      icon: Home,
      title: "Corretores e parceiros de imóveis",
      desc: "Compreenda como analisar crédito habitacional, financiamento do SFH e regras da CEF sem travar suas transações habitacionais."
    },
    {
      num: "Trilha 4",
      icon: Award,
      title: "Conquistar certificações em lote",
      desc: "Prepare-se simultaneamente com simulados e e-books oficiais, diminuindo a ansiedade antes dos agendamentos oficiais."
    },
    {
      num: "Trilha 5",
      icon: LineChart,
      title: "Atuar com estrutura no mercado de crédito",
      desc: "Construa uma engrenagem recorrente de vendas integrando conformidade técnica com ferramentas de operacionalização bancária."
    }
  ];

  return (
    <section id="paths" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-sky-600 text-xs tracking-widest font-black uppercase block mb-3">
            OBJETIVOS DE CARREIRA
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Escolha sua Trilha de Especialização
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded mb-4" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            O Melhor Ano é flexível e se molda ao seu nível atual e seus objetivos práticos de faturamento ou habilitação profissional.
          </p>
        </div>

        {/* Paths grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon;
            // First two cards take col-span-1 on desktop, 3rd logic or layout variations
            return (
              <div 
                key={index}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Number block */}
                <div className="absolute top-4 right-4 font-mono text-slate-100 font-extrabold text-4xl group-hover:text-slate-200 transition-colors pointer-events-none">
                  {index + 1}
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-sky-500 font-bold block mb-1">
                    {path.num}
                  </span>
                  
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-950 mb-3 block leading-tight">
                    {path.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-slate-550 leading-relaxed">
                    {path.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between text-xs font-mono font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                  <span>Conteúdo Dedicado</span>
                  <span>Disponível</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
