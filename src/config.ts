import { AppConfig, PlanConfig, ReviewItem, FaqItem, CourseItem } from './types';

// ==========================================
// CONFIGURAÇÕES GERAIS (FÁCIL EDIÇÃO)
// ==========================================

export const CHECKOUT_MELHOR_ANO = "INSERIR_LINK_DO_CHECKOUT_697";
export const CHECKOUT_MELHOR_ANO_ELITE = "INSERIR_LINK_DO_CHECKOUT_947";

export const CONFIG: AppConfig = {
  // Links de Checkout
  checkoutMelhorAno: CHECKOUT_MELHOR_ANO,
  checkoutMelhorAnoElite: CHECKOUT_MELHOR_ANO_ELITE,

  // Preços atuais
  priceMelhorAno: 697,
  priceMelhorAnoElite: 947,

  // WhatsApp de suporte pré-venda
  whatsappNumber: "5511999999999", // Altere para o número real (ex: "5511999999999")
  whatsappMessage: "Olá! Gostaria de tirar algumas dúvidas sobre o Melhor Ano da Aprova Bancários.",

  // Prazo de acesso
  yearsOfAccess: 1, // 1 ano de acesso

  // Dados da Autoridade (Professor Jefferson)
  authorityName: "Professor Jefferson Cabrera",
  authorityTitle: "Fundador do Aprova Bancários & Especialista em Crédito",
  authorityBio: "Jefferson Cabrera é correspondente bancário ativo e fundador da Aprova Bancários. Com anos de bagagem real de mercado, já ajudou mais de 10.000 alunos a obterem suas certificações nacionais e criarem operações de crédito altamente rentáveis em todo o Brasil. Sua metodologia alia preparação teórica imbatível com atalhos de operação real de mesa.",
  authorityImageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300", // Placeholder de alta qualidade

  // Imagens e Mockups (Placeholders editáveis)
  mockupImageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", // Representando materiais acadêmicos e estudos
  platformImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Representando plataforma financeira / dashboards com mais de 40 bancos

  // Garantia comercial
  guaranteeDays: 7, // 7 dias de garantia incondicional
  guaranteeTerms: "Experimente a formação Melhor Ano por 7 dias. Se você achar que a jornada não é para você, basta solicitar o estorno integral do valor pago dentro deste prazo.",
  videoUrl: "https://www.youtube.com/embed/YI7O-yQ426g"
};

// ==========================================
// CURSOS INCLUÍDOS NA PLATAFORMA
// ==========================================
export const COURSES_LIST: CourseItem[] = [
  { id: "1", name: "Preparatório FEBRABAN Completo", description: "Formação para atuar com crédito consignado e CDC." },
  { id: "2", name: "Preparatório ABECIP CA-300 / CA-600", description: "O passaporte obrigatório para atuar no crédito imobiliário." },
  { id: "3", name: "Preparatório ANEPS", description: "Certificação exigida para correspondentes de microcrédito e CDC." },
  { id: "4", name: "Preparatório de Certificações ANBIMA (CPA-10 e CPA-20)", description: "Preparação de base para produtos financeiros e mercado de investimentos." },
  { id: "5", name: "Curso Extensão Mercado de Crédito", description: "Imersão jurídica e de processos na atuação profissional." },
  { id: "6", name: "Curso de Prevenção à Lavagem de Dinheiro (PLDFT) e LGPD", description: "Exigência indispensável para todos os correspondentes ativos no mercado." }
];

// ==========================================
// CONFIGURAÇÃO DOS PLANOS (CARDS DE OFERTA)
// ==========================================
export const PLANS: PlanConfig[] = [
  {
    name: "Melhor Ano",
    subtitle: "Formação completa em certificações e mercado de correspondentes",
    price: CONFIG.priceMelhorAno,
    installmentsText: "Até 12x de R$ 69,56",
    description: "Para quem quer organizar seus estudos, se preparar para certificações importantes e entender melhor o mercado de crédito e correspondentes bancários.",
    checkoutUrl: CONFIG.checkoutMelhorAno,
    features: [
      "Acesso completo ao pacote Melhor Ano por 1 ano",
      "Preparatórios para certificações de mercado (FEBRABAN, ABECIP, ANEPS, ANBIMA)",
      "Cursos voltados ao mercado de correspondentes de crédito",
      "Acesso imediato à área do aluno online de última geração",
      "Simulados práticos atualizados com as últimas provas",
      "Material de apoio em PDF completo para download",
      "Suporte exclusivo para tirar dúvidas pedagógicas",
      "Certificado de conclusão individual de cada curso preparatório"
    ]
  },
  {
    name: "Melhor Ano Elite",
    subtitle: "Formação completa + Corban do Zero + plataforma de trabalho",
    price: CONFIG.priceMelhorAnoElite,
    installmentsText: "Até 12x de R$ 94,51",
    description: "Para quem quer ir além da preparação acadêmica e ter acesso a uma estrutura profissional real com mais de 40 bancos para operar crédito na prática.",
    checkoutUrl: CONFIG.checkoutMelhorAnoElite,
    features: [
      "Tudo incluído no plano Melhor Ano",
      "Curso Corban do Zero (Como iniciar sua operação prática)",
      "Acesso exclusivo à Plataforma Corban de Trabalho",
      "Estrutura com mais de 40 bancos e instituições financeiras integradas",
      "Liberdade para operar múltiplos produtos de crédito (Consignado, Imobiliário, Agro, Energia)",
      "Ambiente desenhado para operacionalizar oportunidades reais no mercado",
      "Vídeos tutoriais gravados de operação de propostas dentro do sistema",
      "Prioridade no canal de suporte de atendimento comercial"
    ],
    recommended: true
  }
];

// Com correção rápida sobre o priceMelhorElite
PLANS[1].price = CONFIG.priceMelhorAnoElite;

// ==========================================
// DEPOIMENTOS DE ALUNOS (PLACEHOLDERS REAIS)
// ==========================================
export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "dep1",
    name: "Carlos Eduardo Menezes",
    role: "Corretor de Imóveis & Correspondente",
    achievement: "Aprovado ABECIP CA-600",
    text: "Eu tentei estudar sozinho por materiais soltos no YouTube, mas o mercado de crédito imobiliário tem exigências muito duras. O Melhor Ano foi um divisor de águas pela facilidade de organizar meus estudos. Consegui a CA-600 de primeira e já estou operando.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "dep2",
    name: "Mariana Souza Reis",
    role: "Correspondente Bancária Independente",
    achievement: "Aprovada FEBRABAN & ANEPS",
    text: "O plano Elite superou todas as minhas expectativas. Além dos preparatórios para as certificações obrigatórias, o curso Corban do Zero abriu meus olhos sobre como formatar o meu negócio de crédito consignado. O suporte deles realmente responde rápido.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "dep3",
    name: "Roberto Guimarães",
    role: "Ex-Bancário e Consultor Financeiro",
    achievement: "Certificado CPA-20 ANBIMA",
    text: "Excelente conteúdo. O Jefferson explica com base em quem realmente trabalha no mercado real e não apenas decora regras para provas. Ter os preparatórios reunidos em um único plano economiza muito tempo e dinheiro. Recomendo de olhos fechados.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

// ==========================================
// FAQ - PERGUNTAS FREQUENTES (22 PERGUNTAS E RESPOSTAS)
// ==========================================
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O que é o Melhor Ano?",
    answer: "O Melhor Ano é um programa de formação integrada da escola Aprova Bancários. Ao invés de vender cursos de certificação soltos ou isolados, organizamos os principais preparatórios, materiais práticos de mercado e suporte em um único pacote anual estruturado. Assim, você tem tudo o que precisa para estudar, certificar-se e compreender o mercado de crédito brasileiro por inteiro, economizando e tendo clareza do seu caminho."
  },
  {
    question: "Qual a diferença entre o plano Melhor Ano e o Melhor Ano Elite?",
    answer: "O plano comum (R$697) entrega acesso total de estudos: todos os cursos preparatórios para certificações essenciais (FEBRABAN, ABECIP, ANEPS, ANBIMA), simulados atualizados, suporte pedagógico e apostila. O plano Elite (R$947) é voltado para quem quer ir além da teoria e se aproximar da prática: ele inclui o curso estratégico 'Corban do Zero' e concede o acesso à Plataforma Corban de trabalho, onde há mais de 40 bancos e instituições financeiras conectados para operacionalização e intermediação de produtos."
  },
  {
    question: "O que vem exatamente no plano Melhor Ano de R$697?",
    answer: "Contempla 1 ano de acesso completo online à área acadêmica contendo: Preparatório FEBRABAN, Preparatório ABECIP CA-300 / 600, Preparatório ANEPS, Preparatório ANBIMA (CPA-10 e CPA-20), Curso complementar de Mercado de Crédito, Curso de Prevenção à Lavagem de Dinheiro (PLDFT) + LGPD, simulados autogestores, suporte sob a plataforma pedagógica e certificados de conclusão individuais por curso concluído."
  },
  {
    question: "O que vem a mais no plano Melhor Ano Elite de R$947?",
    answer: "Além de todo o conteúdo preparado para exames presente no Melhor Ano base, o plano Elite inclui o exclusivo treinamento 'Corban do Zero' (instruções profissionais de formatação operacional, fluxo comercial, gestão de leads e processos administrativos) e acesso monitorado à Plataforma Corban de Trabalho conectada a mais de 40 parceiros bancários de relevância nacional."
  },
  {
    question: "O que é o Corban do Zero?",
    answer: "É um curso prático passo a passo planejado e liderado pela equipe da Aprova Bancários que explica os meandros de como funciona uma empresa correspondente bancária na prática: como obter suas credenciais, como buscar clientes, como formalizar as operações, models societários ou de atuação autônoma, e canais de escala de faturamento."
  },
  {
    question: "O que é a Plataforma Corban de trabalho?",
    answer: "Trata-se de um software de integração no mercado que coloca o profissional em contato com sistemas que processam crédito junto a mais de 40 bancos no país, possibilitando realizar simulações e propor contatos comerciais operacionais reais dentro das exigências legais."
  },
  {
    question: "A plataforma de trabalho realmente tem mais de 40 bancos conectados?",
    answer: "Sim, a ferramenta parceira integra propostas diretas e indiretas junto aos maiores players do país (bancos privados tradicionais, bancos públicos, fintechs de crédito e financeiras independentes), o que amplia incrivelmente as chances de o correspondente atender às necessidades de qualquer perfil de cliente cadastrado."
  },
  {
    question: "A escola Aprova Bancários garante aprovação nas provas das certificações?",
    answer: "Nossos cursos possuem taxas excepcionais de aprovação, mas não prometemos 'aprovação garantida' sem esforço. A conquista do certificado oficial depende estritamente do estudo dedicado do método, preenchimento correto de simulados e realização da inscrição pessoal junto aos órgãos responsáveis. Oferecemos a melhor metodologia e suporte de ponta para elevar suas chances de êxito."
  },
  {
    question: "A inscrição nas provas das certificações está inclusa no preço da formação?",
    answer: "Não. As taxas oficiais de inscrição dos exames (como Febraban, Aneps ou Abecip) são pagas às respectivas instituições aplicadoras (como FGV, IBR, etc.) e são de responsabilidade exclusiva do estudante no momento de agendar sua prova."
  },
  {
    question: "O curso garante que vou conseguir emprego ou faturamento garantido?",
    answer: "Não fazemos promessas de 'ganhos garantidos', 'trabalho garantido' ou comissões fixas sem esforço. A intermediação de crédito é uma das profissões mais meritocráticas e promissoras no mercado financeiro brasileiro. Seu faturamento e êxito são determinados pela sua competência ativa, organização profissional e dedicação aos clientes."
  },
  {
    question: "Preciso ter experiência prévia para começar?",
    answer: "Não. A formação foi idealizada de maneira didática para pegar pela mão tanto quem é iniciante absoluto no mercado de crédito quanto profissionais adjacentes (corretores, despachantes, etc.) que queiram ampliar seus conhecimentos. Começamos dos conceitos mais simples até as complexidades burocráticas mais detalhadas."
  },
  {
    question: "Preciso abrir um CNPJ de imediato?",
    answer: "Não obrigatoriamente. Você pode iniciar a formação, passar nas provas e planejar sua atuação comercial com seu CPF em diversos produtos. O curso indica o momento mais vantajoso fiscal e operacionalmente para constituir um CNPJ ou atuar em parceria com outras corretoras de crédito estruturadas."
  },
  {
    question: "O Melhor Ano serve para corretores de imóveis?",
    answer: "Com certeza. O mercado imobiliário e o mercado de crédito imobiliário andam de mãos dadas. Corretores de imóveis que não dominam a estruturação financeira da proposta perdem vendas constantemente e perdem a chance de faturar também na intermediação de financiamentos e consórcios. A formação ABECIP prepara exatamente para este nicho bilionário."
  },
  {
    question: "Quais produtos de crédito vou aprender a operar?",
    answer: "A formação contempla produtos que sustentam o faturamento de assessores e correspondentes nacionais: Crédito Imobiliário, Financiamento de Veículos, Crédito Consignado (INSS, GOV, Siape), FGTS (Saque-Aniversário), Crédito com débito na conta de energia, Crédito Pessoal tradicional, Consórcios de bens e Crédito para o Agronegócio brasileiro."
  },
  {
    question: "Quais certificações estão incluídas no conteúdo pedagógico?",
    answer: "Oferecemos os melhores módulos focados nas quatro principais certificações do mercado financeiro e de crédito nacional: FEBRABAN (crédito em geral e consignado), ABECIP (com foco no imobiliário comercial e habitacional), ANEPS (microcrédito e correspondente em geral), além das formações de base para a ANBIMA CPA-10 e CPA-20."
  },
  {
    question: "Por quanto tempo terei acesso à área do aluno do Melhor Ano?",
    answer: "O acesso de estudos, fórum de comentários, envio de dúvidas didáticas e simulados integrados é válido pelo tempo exato de 1 ano (12 meses completos) a contar da data de confirmação do pagamento."
  },
  {
    question: "Posso estudar no meu próprio ritmo ou há horários fixos das aulas?",
    answer: "Todas as aulas são 100% gravadas e disponibilizadas em nossa plataforma online moderna. Você pode assistir aos vídeos, revisar as apostilas, fazer simulados e enviar dúvidas de qualquer lugar, a qualquer hora do dia ou da noite, seja pelo computador, tablet ou celular."
  },
  {
    question: "Como funciona a área de perguntas e o canal de suporte?",
    answer: "Você pode sanar suas dúvidas de estudo diretamente abaixo das lições assistidas na área acadêmica exclusiva, ou valer-se do canal de atendimento pedagógico dedicado. No Elite, as eventuais pontualidades comerciais recebem prioridade de triagem."
  },
  {
    question: "Existe prazo de arrependimento (garantia)?",
    answer: "Sim, respeitamos rigorosamente a legislação brasileira de proteção ao consumidor e vamos além: disponibilizamos 7 dias inteiros de garantia incondicional de reembolso. Experimente, faça aulas, baixe o material. Se não ficar totalmente satisfeito, basta fazer contato que devolvemos seu investimento."
  },
  {
    question: "Como recebo o acesso aos cursos contratados?",
    answer: "Se a inscrição for feita via cartão de crédito ou PIX, o acesso é disparado automaticamente para o e-mail cadastrado em poucos minutos. Para pagamentos via boleto bancário, a liberação ocorre tão logo o banco compense o documento (geralmente entre 24 e 48 horas úteis)."
  },
  {
    question: "Quais são as formas habituais de pagamento oferecidas?",
    answer: "A plataforma de transações oficiais suporta amortizar o investimento à vista por PIX ou boleto bancário, ou em até 12 parcelas estruturadas com cartão de crédito (podendo consultar o limite disponível em múltiplos cartões)."
  },
  {
    question: "E se eu tiver mais alguma dúvida antes de efetuar minha compra hoje?",
    answer: "Não se preocupe! Nossos especialistas de atendimento estão prontos para te apoiar em uma conversa humanizada. Basta clicar no botão flutuante do WhatsApp ou no link do suporte comercial nesta página."
  }
];
