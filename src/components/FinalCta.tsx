import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export default function FinalCta() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="final-cta" className="py-24 bg-[#060b19] text-white relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Emblem badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E0F2FE] text-sky-300 font-bold">O SEU PRÓXIMO PASSO</span>
        </div>

        {/* Message */}
        <h2 className="font-display font-black text-3xl sm:text-4.5xl leading-tight max-w-3xl mx-auto text-white">
          Se você quer parar de estudar o mercado de crédito aos pedaços e construir uma formação mais completa para atuar com mais clareza, o Melhor Ano é o seu próximo passo
        </h2>

        <p className="font-sans text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Inicie agora mesmo sua jornada prática. Escolha estudar focado nas certificações mais exigidas ou monte sua estrutura de negócios com bancos parceiros no plano Elite.
        </p>

        {/* Dual button targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <button
            onClick={scrollToPricing}
            data-cta="final-melhor-ano"
            className="w-full sm:w-1/2 bg-white/15 hover:bg-white/20 text-white font-display font-extrabold text-sm py-4 px-6 rounded-2xl border border-white/10 transition-all cursor-pointer text-center"
          >
            Quero o Melhor Ano (Base)
          </button>

          <button
            onClick={scrollToPricing}
            data-cta="final-melhor-ano-elite"
            className="w-full sm:w-1/2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-display font-extrabold text-sm py-4 px-6 rounded-2xl shadow-lg transition-all cursor-pointer text-center"
          >
            Quero o Melhor Ano Elite
          </button>
        </div>

        {/* Confidence micro text */}
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 pt-2 font-sans">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>7 dias de garantia • Pagamento seguro com PIX ou Cartão</span>
        </div>

      </div>
    </section>
  );
}
