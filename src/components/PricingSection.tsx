import React from 'react';
import { Check, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';
import { PLANS, CONFIG } from '../config';

export default function PricingSection() {
  const handleCheckout = (url: string, planName: string) => {
    // We can tracking clicks with data attributes, redirecting safely
    if (url === "INSERIR_LINK_DO_CHECKOUT_697" || url === "INSERIR_LINK_DO_CHECKOUT_947") {
      alert(`Configuração do Checkout: Este botão direcionará para o link de pagamento do plano "${planName}". Insira o link real em /src/config.ts!`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-amber-600 text-xs tracking-widest font-bold uppercase block mb-3">CONDIÇÃO ESPECIAL DE ADESÃO</span>
          <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight leading-none mb-4">
            Escolha seu plano no Melhor Ano
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded mb-5" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Selecione a opção ideal para os seus objetivos de carreira. Se você busca capacitações completas, escolha a versão Base. Se busca também operacionalizar, a versão Elite é o caminho estruturado.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          {PLANS.map((plan, index) => {
            const isElite = plan.recommended;
            return (
              <div 
                key={index}
                className={`lg:col-span-6 flex flex-col justify-between rounded-3xl p-6 sm:p-10 transition-all duration-300 relative ${
                  isElite 
                    ? 'bg-slate-900 text-white border-2 border-amber-500 shadow-2xl shadow-orange-500/10 lg:-translate-y-4' 
                    : 'bg-white text-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Visual Banner badge for Recommended */}
                {isElite && (
                  <div className="absolute -top-4 right-6 sm:right-10 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-xs font-mono font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Altamente Recomendado</span>
                  </div>
                )}

                {/* Plan Header details */}
                <div>
                  <h3 className={`font-display font-black text-2xl sm:text-3xl ${isElite ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`font-sans text-xs sm:text-sm font-semibold mt-2 min-h-[40px] leading-tight ${isElite ? 'text-amber-400' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>
                  
                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline space-x-1.5 pb-6 border-b border-gray-100/10 mb-6">
                    <span className={`text-sm font-sans font-medium ${isElite ? 'text-slate-400' : 'text-slate-500'}`}>R$</span>
                    <span className={`text-4xl sm:text-5xl font-display font-black tracking-tight ${isElite ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs font-sans ${isElite ? 'text-slate-400' : 'text-slate-500'}`}>à vista</span>
                  </div>

                  <div className={`p-4 rounded-xl mb-6 flex items-center justify-between ${isElite ? 'bg-white/5 border border-white/5' : 'bg-slate-50 border border-slate-100'}`}>
                    <div className="flex items-center space-x-2">
                      <CreditCard className={`w-4 h-4 ${isElite ? 'text-amber-400' : 'text-orange-600'}`} />
                      <span className={`text-xs font-sans font-medium ${isElite ? 'text-slate-300' : 'text-slate-600'}`}>Parcelado no cartão</span>
                    </div>
                    <span className={`text-xs font-mono font-bold ${isElite ? 'text-amber-350 text-[#FBBF24]' : 'text-slate-800'}`}>
                      {plan.installmentsText}
                    </span>
                  </div>

                  <p className={`font-sans text-sm leading-relaxed mb-6 ${isElite ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  {/* Feature Lists */}
                  <div className="space-y-3.5 mb-8">
                    <p className={`font-mono text-xs uppercase tracking-wider font-bold ${isElite ? 'text-slate-400' : 'text-slate-500'}`}>
                      O que está incluído no plano:
                    </p>
                    <ul className="space-y-3 font-sans text-sm">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5">
                          <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${
                            isElite ? 'bg-orange-550/20 text-orange-400 bg-orange-500/20' : 'bg-orange-500/10 text-orange-600'
                          }`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <span className={isElite ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buy Button & Microcopy */}
                <div className="pt-4 border-t border-gray-100/10">
                  <button
                    onClick={() => handleCheckout(plan.checkoutUrl, plan.name)}
                    data-cta={`plan-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    data-plan={plan.name.toLowerCase().replace(/\s+/g, '-')}
                    className={`w-full py-4 px-6 rounded-2xl font-display font-extrabold text-base transition-all duration-300 cursor-pointer text-center ${
                      isElite 
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-98 text-slate-950 shadow-lg shadow-orange-500/25' 
                        : 'bg-slate-900 hover:bg-slate-850 active:scale-98 text-white shadow-md'
                    }`}
                  >
                    Quero o {plan.name}
                  </button>

                  {/* Trust check badge underneath */}
                  <div className="flex items-center justify-center space-x-1.5 mt-3 text-[11px] text-slate-400 font-sans">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                    <span>Compra 100% segura e intermediada</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer Microcopy */}
        <p className="text-center text-xs sm:text-sm text-slate-500 mt-12 max-w-lg mx-auto font-sans leading-relaxed">
          Após a confirmação do pagamento, o acesso é enviado por e-mail conforme as regras da plataforma e de nossa oferta vigente.
        </p>

      </div>
    </section>
  );
}
