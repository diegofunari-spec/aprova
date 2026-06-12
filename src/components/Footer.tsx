import React from 'react';
import { ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { CONFIG } from '../config';

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Footer list */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/5 mb-8 gap-6">
          
          {/* Brand block */}
          <div className="flex items-center space-x-2">
            <div className="bg-sky-500 text-white p-1.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left font-sans">
              <span className="font-display font-black text-white text-lg tracking-tight block leading-none">
                APROVA BANCÁRIOS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-sky-400 font-bold block mt-0.5">
                CURSOS PREPARATÓRIOS E TREINAMENTOS
              </span>
            </div>
          </div>

          {/* Quick links & support email link */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans">
            <a href="https://aprovabancarios.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Página Oficial da Escola
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Ver Ofertas
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Perguntas e Respostas
            </a>
            <span className="text-slate-600">|</span>
            <span className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-500" />
              <span>suporte@aprovabancarios.com</span>
            </span>
          </div>

        </div>

        {/* Legal Disclaimers & Transparencies */}
        <div className="space-y-4 text-[11px] font-sans leading-relaxed text-slate-500">
          <p>
            <strong>AVISO LEGAL E CONFORMIDADE:</strong> Aprova Bancários é uma escola independente de formação preparatória profissional. Não comercializamos vagas de trabalho fixas, cadastros de correspondentes bancários automatizados, comissionamento garantido, consultorias de faturamento ou aprovações oficiais compulsórias junto à FEBRABAN, ABECIP, ANEPS, ANBIMA ou parceiros financeiros. Todas as marcas, siglas e certificações citadas nesta página pertencem exclusivamente aos seus respectivos registradores institucionais e são utilizadas com finalidades pedagógicas educacionais informativas.
          </p>
          <p>
            O Melhor Ano Elite oferece uma ferramenta integradora parceira com bancos cadastrados que requer preenchimento cadastral e validação individual de créditos e regras de compliance bancário interno dos próprios bancos parceiros, os quais possuem regimento autônomo sobre cadastros ou concessão de acessos.
          </p>
        </div>

        {/* Lower row details */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-white/5 gap-4">
          <p className="text-xs text-slate-600 font-mono text-center sm:text-left">
            © 2026 Aprova Bancários. Todos os direitos reservados. CNPJ: XX.XXX.XXX/YYYY-ZZ. Desenvolvido com total conformidade.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all flex items-center justify-center cursor-pointer shadow-md"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
