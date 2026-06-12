import React from 'react';
import { ArrowRight, Check, Shield, Users, Trophy } from 'lucide-react';
import { CONFIG } from '../config';

export default function Hero() {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative bg-gradient-to-b from-[#060b19] via-[#091024] to-[#02050e] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Decorative Radial Radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            
            {/* Tag/Badge */}
            <div className="inline-flex self-start items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                CAMPANHA NACIONAL 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4.5xl lg:text-5xl tracking-tight leading-1.1 text-white">
              O Melhor Ano de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 font-black">Correspondente Bancário de 2026</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
              Pare de comprar cursos isolados e se perder em vídeos soltos no YouTube. Tenha acesso exclusivo a todos os preparatórios exigidos (FEBRABAN, ABECIP, ANEPS, ANBIMA) integrados à operação livre com mais de 40 bancos.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 font-sans text-sm text-slate-200">
              <li className="flex items-start space-x-2.5">
                <div className="mt-1 bg-sky-500/20 text-sky-400 p-0.5 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <span>
                  <strong>Todos os preparatórios exigidos:</strong> FEBRABAN, ABECIP (CA-300 e CA-600), ANEPS e ANBIMA.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <div className="mt-1 bg-sky-500/20 text-sky-400 p-0.5 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <span>
                  <strong>Duas trilhas integradas:</strong> Estudo acadêmico de alta taxa de aprovação ou Atuação Prática imediata.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <div className="mt-1 bg-sky-500/20 text-sky-400 p-0.5 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <span>
                  <strong>Plano Elite Incomparável:</strong> Inclui o método Corban do Zero + plataforma para operar 40+ bancos.
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToPricing}
                data-cta="hero-melhor-ano"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 active:scale-98 text-white font-display font-black py-4 px-7 rounded-2xl shadow-lg shadow-sky-500/15 transition-all text-base cursor-pointer"
              >
                <span>Garantir Minha Vaga</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#what-is"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 active:scale-98 border border-white/10 hover:border-white/20 text-white font-display font-semibold py-4 px-7 rounded-2xl transition-all text-base"
              >
                <span>Como Funciona o Programa</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-400">Garantia total de 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-400">10k+ alunos formados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-400">Escola Credenciada</span>
              </div>
            </div>

          </div>

          {/* Graphical/Video player column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backglow border radiance */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 rounded-3xl blur-md opacity-35" />
              
              {/* Browser/Video Player frame Container */}
              <div className="relative bg-[#091024]/95 border border-sky-500/20 rounded-3xl p-4 shadow-2xl backdrop-blur-md">
                
                {/* Simulator header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 px-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-sky-450 uppercase tracking-widest font-black">
                    APROVA_BANCARIOS_MELHOR_ANO_2026.MP4
                  </span>
                </div>

                {/* Main Video Box */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-white/5 bg-black relative">
                  <iframe 
                    className="w-full h-full"
                    src={`${CONFIG.videoUrl || "https://www.youtube.com/embed/YI7O-yQ426g"}?autoplay=0&rel=0&modestbranding=1`}
                    title="O Melhor Ano de Correspondente Bancário 2026"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Video Footer Status details */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between px-1">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-duration-1000"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-sans text-slate-300 font-medium">De Correspondente a Elite</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 font-bold bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/25">
                    EXCLUSIVO
                  </span>
                </div>

              </div>

              {/* Float floating banks badge */}
              <div className="absolute -bottom-5 -right-3 bg-gradient-to-br from-sky-400 via-blue-500 to-sky-650 text-slate-950 px-4.5 py-2.5 rounded-2xl shadow-xl border border-sky-400/20 hidden sm:flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest font-black leading-none text-blue-950">PLATAFORMA ATIVA</p>
                  <p className="text-xs font-display font-extrabold leading-none mt-1 text-slate-950">40+ Bancos Parceiros</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
