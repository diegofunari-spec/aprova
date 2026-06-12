import React from 'react';
import { Landmark, Home, BadgeCheck, Compass, Info } from 'lucide-react';

export default function CertificationsInfo() {
  const certifications = [
    {
      code: "FEBRABAN",
      title: "Consignado e CDC",
      focus: "Garante a conformidade técnica para intermediar crédito consignado institucional, consignações INSS, órgãos públicos e crédito pessoal básico."
    },
    {
      code: "ABECIP CA-300 / CA-600",
      title: "Crédito Imobiliário e Habitacional",
      focus: "Credencial obrigatória exigida por cooperativas e bancos nacionais para o trâmite, encaminhamento ou venda de crédito imobiliário comercial."
    },
    {
      code: "ANEPS",
      title: "Correspondente do Consumidor",
      focus: "Voltada para certificar a atuação em créditos pessoais simples, microcréditos assistidos populares e CDC em redes do comércio local."
    },
    {
      code: "ANBIMA CPA-10 e CPA-20",
      title: "Distribuição Bancária",
      focus: "Formação conceitual de investimentos, taxas nacionais, capitais e noções de riscos, útil para relacionamento e produtos financeiros."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-sky-600 text-xs tracking-widest font-black uppercase block">CONFORMIDADE REGULATÓRIA</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Quais certificações ativam cada tipo de produto de crédito?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded" />
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-slate-655 text-sm sm:text-base leading-relaxed">
              No Brasil, o Banco Central e os órgãos reguladores exigem certificações técnicas dos correspondentes. Cada produto de crédito necessita de uma credencial correspondente. Estudar com clareza evita que você direcione energia para cursos desnecessários na sua área de vendas.
            </p>
          </div>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-150 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Visual Label */}
                <span className="bg-sky-50 text-sky-700 font-mono text-[11px] font-black uppercase px-2.5 py-1 rounded-md inline-block">
                  {cert.code}
                </span>

                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                  {cert.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-4 text-[11px] font-mono font-semibold text-slate-400">
                Curso Preparatório Incluso
              </div>
            </div>
          ))}
        </div>

        {/* Secure Disclaimer Box */}
        <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-150 p-5 rounded-2xl flex items-start space-x-3 text-xs sm:text-sm text-slate-600">
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div className="font-sans space-y-1.5 leading-relaxed">
            <p className="font-semibold text-slate-900">Nota Legal e Educacional de Transparência:</p>
            <p>
              A escola Aprova Bancários prepara você por meio de metodologias completas de exames. A conquista das certificações não garante o credenciamento automático, concessão de vaga imediata, faturamento financeiro pré-estabelecido ou aprovação compulsória junto às instituições financeiras, os quais continuam regidos por critérios autônomos de mercado e agências reguladoras brasileiras.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
