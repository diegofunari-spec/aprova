/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Deliverables from './components/Deliverables';
import PricingSection from './components/PricingSection';
import PlanChooser from './components/PlanChooser';
import PathsSection from './components/PathsSection';
import ComparisonSection from './components/ComparisonSection';
import CertificationsInfo from './components/CertificationsInfo';
import EliteInside from './components/EliteInside';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic interactive top Header */}
      <Header />

      <main>
        {/* Step 1: Hero / Primeira Dobra */}
        <Hero />

        {/* Step 2: Seção de identificação */}
        <TargetAudience />

        {/* Step 3: Seção do problema */}
        <ProblemSection />

        {/* Step 4: Seção da solução */}
        <SolutionSection />

        {/* Step 5: Seção de entregáveis e pilares */}
        <Deliverables />

        {/* Step 6: O Corban do Zero e plataforma Corban (Elite highlights) */}
        <EliteInside />

        {/* Step 7: Seção educativa de certificações e produtos */}
        <CertificationsInfo />

        {/* Step 8: Seção de trilhas e objetivos de carreira */}
        <PathsSection />

        {/* Step 9: Seção de comparação Caminho Comum vs Melhor Ano */}
        <ComparisonSection />

        {/* Step 10: Oferta principal (Cards de preços Melhor Ano e Elite) */}
        <PricingSection />

        {/* Step 11: Seção de aconselhamento e escolha de planos */}
        <PlanChooser />

        {/* Step 12: Autoridade (Sobre Jefferson e Aprova Bancários) */}
        <Authority />

        {/* Step 13: Depoimentos e depoimentos recomendados */}
        <Testimonials />

        {/* Step 14: Selo de satisfação e Garantia de 7 dias */}
        <Guarantee />

        {/* Step 15: FAQ completo e interativo de objeções */}
        <FaqSection />

        {/* Step 16: Chamativo CTA final com os dois planos */}
        <FinalCta />
      </main>

      {/* Corporate Compliance Footer */}
      <Footer />
    </div>
  );
}

