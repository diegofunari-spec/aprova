import React from 'react';
import { AlertCircle, EyeOff, ShieldAlert, ArrowDown } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      title: "Cursos e exames sem conexão estratégica",
      desc: "Você estuda focado unicamente na aprovação em uma prova teórica, decora conceitos burocráticos, mas depois não faz a mínima ideia de qual é o primeiro passo operacional para abrir um cadastro bancário."
    },
    {
      title: "Dispersão financeira comprando tudo separado",
      desc: "Comprar um preparatório para Febraban hoje, outro para Abecip amanhã, e um terceiro de vendas drena seus recursos financeiros antes mesmo de iniciar suas intermediações de crédito bancário."
    },
    {
      title: "Falta de segurança jurídica e de processo",
      desc: "A falta de acompanhamento ou de um modelo de simulação estruturado deixa você inseguro na hora de orientar o cliente. Um único erro em dados pode invalidar as propostas ou gerar multas desnecessárias."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout with 2 columns: Text and Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title and Persuasive Argument */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="inline-flex self-start items-center space-x-2 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full text-rose-600">
              <ShieldAlert className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider font-bold uppercase">O DESAFIO REAL DO MERCADO</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Passar em uma certificação técnica é apenas metade do caminho de sucesso
            </h2>
            
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Milhares de pessoas compram preparatórios, estudam para passar na certificação técnica, colocam o diploma no currículo, mas continuam sem clareza para atuar. 
            </p>

            <div className="bg-amber-50 border border-amber-200/60 p-4 rounded-xl text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <span className="text-xl">⚠️</span>
              <p className="font-sans leading-relaxed text-amber-800">
                A atuação real de correspondente exige <strong>entender os produtos viáveis</strong>, desenhar propostas conforme as regras dos bancos e saber lidar com clientes de forma segura, sem perder tempo navegando por tutoriais incompletos ou obsoletos na internet.
              </p>
            </div>
          </div>

          {/* Right Column: Pain cards */}
          <div className="lg:col-span-7 space-y-6">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-start space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
