import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../config';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full text-sky-700 mb-2 font-mono text-xs font-bold uppercase">
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>RESULTADOS REAIS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-3">
            O que dizem os alunos aprovados e correspondentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded mb-4" />
          <p className="text-slate-500 font-sans text-sm sm:text-base">
            *Orientação: Substituir esses depoimentos por relatos reais da Aprova Bancários.* Veja avaliações e trajetórias de quem seguiu nossa orientação pedagógica.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-150/70 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Upper Quote Frame */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-0.5 text-sky-450 text-sky-400">
                    {Array.from({ length: testimonial.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-current text-sky-455 text-sky-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-sky-500/10" />
                </div>

                {/* Main Content */}
                <p className="font-sans text-sm text-slate-600 leading-relaxed italic mb-6">
                  “{testimonial.text}”
                </p>
              </div>

              {/* Lower Profile Box */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                {testimonial.avatarUrl && (
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name} 
                    className="w-11 h-11 rounded-full object-cover filter grayscale border border-slate-250 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-900 leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-sans mt-1">
                    {testimonial.role}
                  </p>
                  <span className="text-[10px] font-mono text-sky-600 uppercase tracking-wider font-extrabold block mt-0.5">
                     👉 {testimonial.achievement}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Customizable Placeholder Notice */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-100/60 border border-slate-200 text-slate-450 font-mono text-[11px] px-4 py-2.5 rounded-xl max-w-lg leading-normal">
            ⚙️ <strong>Espaço para depoimentos reais da Aprova Bancários:</strong> Se você possuir prints oficiais de conversas do WhatsApp, e-mails de agradecimento ou avaliações no Google, utilize esta seção para inseri-los alterando os campos correspondentes no arquivo <code>/src/config.ts</code>.
          </div>
        </div>

      </div>
    </section>
  );
}
