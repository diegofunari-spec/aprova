import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { CONFIG } from '../config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3' 
          : 'bg-slate-900/90 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-sky-500 text-white p-1.5 rounded-lg flex items-center justify-center shadow-md shadow-sky-500/20">
            <ShieldCheck className="w-5 h-5 text-sky-100" />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-black text-lg sm:text-xl tracking-tight leading-none ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              AprovaBancários<span className="text-sky-500">.com</span>
            </span>
            <span className={`text-[9px] font-mono uppercase tracking-widest block leading-none mt-1 font-bold ${
              isScrolled ? 'text-sky-600' : 'text-sky-400'
            }`}>
              Escola Preparatória
            </span>
          </div>
        </div>

        {/* Links / Actions */}
        <div className="flex items-center space-x-4">
          <a 
            href="#pricing"
            className={`hidden sm:inline-block font-sans text-sm font-semibold transition-colors ${
              isScrolled 
                ? 'text-slate-600 hover:text-slate-900' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Ver Planos
          </a>
          <button
            onClick={handleWhatsappClick}
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-sans text-xs sm:text-sm font-semibold py-2 px-3.5 sm:px-4 rounded-xl shadow-md shadow-emerald-500/10 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Consultor</span>
          </button>
        </div>
      </div>
    </header>
  );
}
