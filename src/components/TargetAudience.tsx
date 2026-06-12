import React from 'react';
import { UserPlus, TrendingUp, Home, BadgeDollarSign, GraduationCap, Compass } from 'lucide-react';

export default function TargetAudience() {
  const profiles = [
    {
      icon: UserPlus,
      title: "Quero me tornar correspondente",
      desc: "Ideal para iniciar com o pé direito, entender os processos regulatórios essenciais e escolher os produtos mais viáveis de atuação."
    },
    {
      icon: TrendingUp,
      title: "Já atuo e quero ampliar vendas",
      desc: "Excelente para quem já tem operação ativa, mas deseja adquirir mais certificações institucionais, abrindo novos canais de créditos."
    },
    {
      icon: Home,
      title: "Sou corretor de imóveis",
      desc: "Domine o funcionamento técnico dos subsídios de financiamento, consórcio ou crédito com garantia real, sem depender de terceiros."
    },
    {
      icon: BadgeDollarSign,
      title: "Quero trabalhar com múltiplos produtos",
      desc: "Aprofunde em frentes lucrativas como saque FGTS, crédito consignado, crédito pessoal corporativo ou débito em conta de energia."
    },
    {
      icon: GraduationCap,
      title: "Preciso me certificar com urgência",
      desc: "Estude por simulados e apostilas direcionadas para passar sem rodeios nas temíveis provas da FEBRABAN, ABECIP, ANEPS ou ANBIMA."
    },
    {
      icon: Compass,
      title: "Quero sair da confusão geral",
      desc: "Abandone os pedaços de vídeos soltos e dicas de rede social para adotar um roteiro educacional estruturado, seguro e com começo, meio e fim."
    }
  ];

  return (
    <section id="what-is" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-widest text-amber-600 uppercase font-bold mb-3">
            Para quem foi feito?
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            O Melhor Ano foi criado para quem quer atuar de verdade no mercado de crédito
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans mt-5 text-sm sm:text-base">
            Profissionais sérios buscam preparo estruturado. Identifique a sua situação e saiba como a nossa formação integrada abre novas frentes operacionais.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-slate-50 hover:bg-slate-950 border border-slate-100 hover:border-slate-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="mb-6 w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {profile.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
                
                {/* Visual subtle arrow cue */}
                <div className="mt-6 flex items-center font-mono text-[10px] uppercase font-bold tracking-widest text-orange-600 group-hover:text-amber-400 transition-colors duration-300">
                  <span>Conectar Trilha</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all transition-duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
