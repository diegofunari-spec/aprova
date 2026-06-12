import React from 'react';
import { ShieldCheck, Award, GraduationCap, Star } from 'lucide-react';
import { CONFIG } from '../config';

export default function Authority() {
  return (
    <section id="authority" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main box */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Professor / Brand visual Column (Left) */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative">
                {/* Back glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 to-blue-500 rounded-2xl blur-sm opacity-20" />
                
                {/* Professional portrait */}
                <div className="relative bg-white border border-slate-200/60 p-3 rounded-2xl shadow-xl max-w-xs">
                  <img 
                    src={CONFIG.authorityImageUrl} 
                    alt={CONFIG.authorityName} 
                    className="w-full h-auto aspect-square object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Rating Badge underneath */}
                  <div className="bg-slate-900 border border-slate-800 text-white rounded-xl p-3 mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold leading-none">Aprova Bancários</p>
                      <p className="text-xs font-display font-medium text-white mt-1">Escola Especializada</p>
                    </div>
                    <div className="flex items-center space-x-1 text-sky-400 text-sm">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono font-extrabold text-xs text-white">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Message Column (Right) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full text-sky-700">
                <Award className="w-4 h-4" />
                <span className="text-xs font-mono tracking-wider font-bold">SOBRE A ESCOLA</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                Educação especialista sob a liderança do {CONFIG.authorityName}
              </h2>

              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                A <strong>Aprova Bancários</strong> é uma instituição de ensino focada no mercado de correspondentes bancários, imobiliários, consórcios e crédito em geral. Desenvolvemos métodos que traduzem a complexidade teórica de circulares do Banco Central em planos de estudos simples, eficientes e direcionados.
              </p>

              <div className="border-l-4 border-sky-500 pl-4 py-1 text-slate-800 font-sans text-xs sm:text-sm leading-relaxed">
                <strong>Quem é {CONFIG.authorityName}?</strong>
                <p className="text-slate-500 mt-1">{CONFIG.authorityBio}</p>
              </div>

              {/* Customizable spaces / Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200/60 font-mono text-center">
                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xl text-slate-900 leading-none">Nº 1</h4>
                  <p className="text-[10px] text-slate-400 uppercase mt-1 leading-tight font-sans font-medium">Metodologia Focada</p>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xl text-slate-900 leading-none">100%</h4>
                  <p className="text-[10px] text-slate-400 uppercase mt-1 leading-tight font-sans font-medium">Online Atualizado</p>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xl text-slate-900 leading-none">7 Dias</h4>
                  <p className="text-[10px] text-slate-400 uppercase mt-1 leading-tight font-sans font-medium">Garantia Ativa</p>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-xs">
                  <h4 className="font-display font-black text-xl text-slate-900 leading-none">Simulados</h4>
                  <p className="text-[10px] text-slate-400 uppercase mt-1 leading-tight font-sans font-medium">Comentados</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
