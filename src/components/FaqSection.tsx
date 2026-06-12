import React, { useState } from 'react';
import { HelpCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, CONFIG } from '../config';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-b border-slate-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-200/55 px-3 py-1.5 rounded-full text-slate-700 mb-2 font-mono text-xs font-bold uppercase">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>EXCLUA SUAS DÚVIDAS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-3">
            Dúvidas Frequentes (FAQ)
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded mb-4" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            Compilamos detalhadamente as principais indagações de candidatos e correspondentes para assegurar total transparência.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-150/70 overflow-hidden transition-all duration-300"
              >
                {/* Header button triggers accordion */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 font-display font-bold text-sm sm:text-base text-slate-900 hover:text-sky-600 transition-colors flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronRight className={`w-4 items-center h-4 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-90 text-sky-500' : ''}`} />
                </button>

                {/* Collapsible Answer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[350px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 sm:p-6 font-sans text-xs sm:text-sm text-slate-550 leading-relaxed bg-slate-50/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unresolved doubts WhatsApp box helper */}
        <div className="mt-14 bg-gradient-to-br from-sky-500/10 to-blue-500/5 border border-sky-500/20 rounded-3xl p-6 sm:p-8 text-center space-y-4 max-w-xl mx-auto">
          <p className="font-display font-bold text-slate-900 text-base sm:text-lg">
            Ainda restou alguma pendência sobre o programa?
          </p>
          <p className="font-sans text-xs sm:text-sm text-slate-550 leading-normal max-w-md mx-auto">
            Nossa equipe comercial da Aprova Bancários está apta a te ligar ou trocar mensagens diretas e humanizadas pelo WhatsApp para encontrar a resposta exata.
          </p>
          <button 
            onClick={handleWhatsappClick}
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-extrabold text-sm py-3 px-5 rounded-2xl shadow-lg transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com o Suporte Pré-Venda</span>
          </button>
        </div>

      </div>
    </section>
  );
}
