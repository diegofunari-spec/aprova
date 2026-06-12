import React from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: Target,
      title: "Jornada Organizada",
      desc: "Guia passo a passo para você escolher as certificações adequadas aos seus objetivos específicos de vendas, sem dispersão."
    },
    {
      icon: Compass,
      title: "Visão Prática",
      desc: "Não focamos apenas nas questões do exame; ensinamos os produtos de crédito, fluxos operacionais e o comportamento comercial de sucesso."
    },
    {
      icon: Award,
      title: "Preparação Premium",
      desc: "Todas as apostilas exclusivas, simulados atualizados e banco de questões revisados diretamente por quem vive do mercado."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-[#060b19] via-[#091024] to-[#02050e] text-white relative overflow-hidden">
      {/* Visual Ambient Light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main box */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Core Message Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full text-sky-450 text-sky-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono tracking-wider font-bold">A SOLUÇÃO DEFINITIVA</span>
              </div>
              
              <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-none text-white">
                O Melhor Ano reúne os principais cursos e preparatórios em uma única formação organizada
              </h2>
              
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                Chega de se perder comprando cursos separados e ficando travado entre certificações, produtos e exigências burocráticas. Nossa resposta é juntar a melhor base teórica de testes institucionais com a realidade prática de operação do mercado de correspondentes.
              </p>

              <div className="border-l-2 border-sky-500 pl-4 py-1 text-slate-400 font-sans text-xs sm:text-sm italic">
                “Nós simplificamos o seu caminho. Estudando com direção, você completa os exames oficiais and começa a operar com total convicção técnica.”
              </div>
            </div>

            {/* Pillar Grid Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={i} 
                    className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-4 hover:border-white/10 transition-colors"
                  >
                    <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white p-2.5 rounded-xl w-11 h-11 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white font-black" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
              
              {/* Stat Card placeholder */}
              <div className="bg-gradient-to-br from-sky-500/15 to-blue-500/10 border border-sky-500/20 p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-display font-black text-2xl text-white">100%</h4>
                  <p className="font-sans text-xs text-slate-300">De conformidade com as diretrizes regulatórias vigentes do Banco Central.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
