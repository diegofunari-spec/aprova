import React from 'react';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export default function Guarantee() {
  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="guarantee" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Double Column or Centered box */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          
          {/* Decorative side accent blur */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Stamp Icon */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center pb-4 md:pb-0 md:border-r border-white/10">
              <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="font-display font-black text-2xl tracking-tight text-white leading-none">
                {CONFIG.guaranteeDays} DIAS
              </h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-2">Garantia Ativa</p>
            </div>

            {/* Content text */}
            <div className="md:col-span-8 space-y-4">
              <span className="font-mono text-xs text-sky-400 tracking-wider font-extrabold uppercase">SATISFAÇÃO INCONDICIONAL</span>
              
              <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-snug">
                Garantia de Satisfação Aprova Bancários
              </h2>
              
              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                {CONFIG.guaranteeTerms}
              </p>

              <div className="bg-white/5 border border-white/5 p-4 rounded-xl text-[11px] sm:text-xs text-slate-400 font-mono space-y-1">
                <p className="text-white font-semibold flex items-center space-x-1.5">
                  <span>ℹ️</span>
                  <span>Como funciona a solicitação de reembolso?</span>
                </p>
                <p>
                  Caso a oferta vigente tenha garantia ativa, envie um e-mail para o nosso suporte oficial de atendimento descrevendo sua intenção de devolução dentro do prazo exato de {CONFIG.guaranteeDays} dias corridos desde a confirmação de compra original.
                </p>
              </div>

              {/* Quick interactive line */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={handleScrollToPricing}
                  className="inline-flex items-center space-x-1 font-mono text-[11px] uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>Ver os planos disponíveis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
