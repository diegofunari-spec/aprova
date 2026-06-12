import React from 'react';
import { Check, GraduationCap, Briefcase, HelpCircle } from 'lucide-react';

export default function PlanChooser() {
  const chooseBase = [
    "Você quer focar em certificações, exames oficiais e formação acadêmica de base sólida.",
    "Você prefere organizar todo o seu ritmo de estudos teóricos de forma centralizada.",
    "Seu foco principal no curto prazo é passar nos testes de órgãos reguladores."
  ];

  const chooseElite = [
    "Você quer a formação técnica completa MAIS as instruções operacionais de trabalho.",
    "Você deseja o curso Corban do Zero para aprender a formatar sua empresa do zero.",
    "Você busca acesso à Plataforma Corban para atuar com crédito e com mais de 40 bancos parceiros.",
    "Você quer uma visão prática e uma estrutura adicional de atendimento para além da certificação oficial."
  ];

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plan-chooser" className="py-20 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title container */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
          <div className="bg-orange-50 text-orange-600 p-2 rounded-2xl mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-3">
            Qual plano do Melhor Ano escolher?
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Seja transparente consigo mesmo. Compare de forma simples e escolha o caminho que melhor atende à sua ambição atual de carreira técnica ou empresarial.
          </p>
        </div>

        {/* Double Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Base Plan Advice */}
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-200/50 mb-6">
                <div className="bg-slate-200 text-slate-800 p-2 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-950">Escolha o Melhor Ano (Base) se:</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Foco Principal: Habilitação Curricular</p>
                </div>
              </div>
              
              <ul className="space-y-4 font-sans text-sm text-slate-600">
                {chooseBase.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={handleScrollToPricing}
              className="mt-8 w-full py-3 px-4 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-xl font-display font-bold text-sm transition-all"
            >
              Inscrever no Plano Base
            </button>
          </div>

          {/* Elite Plan Advice */}
          <div className="bg-orange-500/5 border border-orange-500/25 p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            {/* Visual subtle glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400/15 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center space-x-3 pb-4 border-b border-orange-500/10 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-slate-950 p-2 rounded-xl">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-950">Escolha o Melhor Ano Elite se:</h3>
                  <p className="text-[11px] text-orange-600 font-mono font-bold">Foco Principal: Operação Prática e Bancos</p>
                </div>
              </div>
              
              <ul className="space-y-4 font-sans text-sm text-slate-700">
                {chooseElite.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-orange-600 font-extrabold shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={handleScrollToPricing}
              className="mt-8 w-full py-3.5 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 hover:text-slate-900 rounded-xl font-display font-extrabold text-sm transition-all shadow-md shadow-orange-500/15"
            >
              Inscrever no Plano Elite
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
