import React from 'react';
import { BookOpen, Map, Landmark, Layers, FileText, Activity, ShieldCheck, Mail, Award, Clock } from 'lucide-react';
import { COURSES_LIST } from '../config';

export default function Deliverables() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Cursos Preparatórios Premium",
      desc: "Você recebe acesso completo aos principais preparatórios cobrados legalmente pelas instituições bancárias, todos no mesmo portal."
    },
    {
      icon: Map,
      title: "Mapas de Estudo Prático",
      desc: "Trilhas didáticas para você não desperdiçar energia nem tempo estudando conteúdos desalinhados com seu estágio atual de aprendizado."
    },
    {
      icon: Landmark,
      title: "Produtos de Crédito na Prática",
      desc: "Aulas focadas em como funcionam as principais modalidades de crédito, taxas, comissões de faturamento e canais burocráticos."
    },
    {
      icon: Layers,
      title: "Conteúdos Complementares",
      desc: "Módulos atualizados sobre Prevenção à Lavagem de Dinheiro (PLDFT) e conformidades de segurança jurídica estipuladas pela LGPD."
    },
    {
      icon: FileText,
      title: "Biblioteca de Simulados",
      desc: "Questões com feedback comentado e simulados idênticos às provas oficiais de bancos e correspondentes do país."
    },
    {
      icon: Mail,
      title: "Central de Dúvidas & Suporte",
      desc: "Canais exclusivos de atendimento pedagógico direto para que você nunca fique travado em nenhuma etapa dos seus estudos acadêmicos."
    },
    {
      icon: Award,
      title: "Certificação de Conclusão",
      desc: "Receba atestados formais individuais de frequência e finalização curricular por cada módulo concluído com sucesso."
    },
    {
      icon: Clock,
      title: "1 Ano de Acesso Livre",
      desc: "Faça seus exames e planeje suas novas operações estudando sem pressa: acesso irrestrito de qualquer dispositivo por 12 meses."
    }
  ];

  return (
    <section id="deliverables" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-widest text-sky-600 uppercase font-bold mb-3">
            CONTEÚDO DA FORMAÇÃO
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Pilares e Recursos inclusos no Melhor Ano
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mx-auto rounded" />
          <p className="text-slate-500 font-sans mt-5 text-sm sm:text-base">
            O Melhor Ano é um ambiente acadêmico completo com materiais dinâmicos integrados para quem exige excelência na sua capacitação.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-500/30 p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">{pillar.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Courses Box (Editable) */}
        <div className="bg-[#091024] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="font-mono text-sky-400 text-xs tracking-widest font-bold uppercase">GRADE DEFINITIVA DE RECURSOS</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">Cursos e preparatórios liberados de imediato</h3>
            </div>
            <span className="bg-white/10 text-white font-sans text-xs font-semibold py-1.5 px-3 rounded-full border border-white/10">
              Grade Completa e Inclusa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES_LIST.map((course) => (
              <div 
                key={course.id} 
                className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors flex items-start space-x-3.5"
              >
                <div className="bg-sky-500/10 text-sky-450 text-sky-400 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">{course.name}</h4>
                  {course.description && (
                    <p className="font-sans text-xs text-slate-400 mt-1 leading-relaxed">{course.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
