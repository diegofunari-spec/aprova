import React from 'react';
import { Sparkles, Network, Terminal, CheckCircle } from 'lucide-react';
import { CONFIG } from '../config';

export default function EliteInside() {
  const points = [
    {
      title: "Passo a passo no Corban do Zero",
      desc: "Como estruturar canais de contato, formatar processos internos e organizar os primeiros atendimentos para evitar dores de cabeça burocráticas."
    },
    {
      title: "Plataforma Corban de Trabalho",
      desc: "Aproxima a formação da realidade prática e pode facilitar a organização da sua operação, oferecendo mais recursos de simulações com bancos parceiros."
    },
    {
      title: "Mais de 40 bancos conectados",
      desc: "Entrega uma estrutura adicional para quem quer entender o mercado de crédito e correspondentes bancários por inteiro, ampliando horizontes de produtos."
    }
  ];

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="elite-inside" className="py-24 bg-[#060b19] text-white relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual representations Left column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Backing color board */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl blur opacity-30 animate-pulse" />
              
              <div className="relative bg-[#091024] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
                
                {/* Simulator header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
                      PLANO_ELITE_ATIVO
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Aprova Bancários</span>
                </div>

                {/* Dashboard Image Preview of 40+ banks */}
                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-inner mb-6 relative group">
                  <img 
                    src={CONFIG.platformImageUrl} 
                    alt="Plataforma Corban de Trabalho" 
                    className="w-full h-52 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-[10px] font-mono text-sky-300">
                    40+ Bancos Integrados
                  </div>
                </div>

                {/* Secure micro details */}
                <p className="text-center font-sans text-xs text-slate-400 leading-normal italic">
                  “Aproxima a formação da prática diária sem promessa de faturamentos mágicos.”
                </p>

              </div>

            </div>
          </div>

          {/* Details / Text Column Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-full text-sky-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider font-bold">VANTAGEM EXCLUSIVA ELITE</span>
            </div>

            <h2 className="font-display font-black text-3.5xl sm:text-4.5xl tracking-tight leading-1.1 text-white">
              No Elite, você vai além dos cursos: recebe estrutura para entender e avançar na sua atuação como Corban
            </h2>

            <p className="font-sans text-slate-350 text-sm sm:text-base leading-relaxed">
              Muitas pessoas estudam, conquistam as certificações oficiais exigidas, mas continuam paralisadas sem saber como sair da teoria e entrar em campo. O plano <strong>Melhor Ano Elite</strong> foi desenhado justamente para cobrir essa lacuna prática.
            </p>

            {/* List steps */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="p-1 px-2 rounded-lg bg-sky-500/15 text-sky-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white">{point.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Elite CTA link button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-650 hover:to-blue-600 active:scale-98 text-white font-display font-extrabold text-sm py-3 px-6 rounded-2xl shadow-lg transition-all cursor-pointer text-center"
              >
                Quero Garantir o Plano Elite
              </button>
              <span className="text-xs text-slate-400 font-sans">
                Acesso imediato enviado após a compra.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
