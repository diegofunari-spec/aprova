export interface CourseItem {
  id: string;
  name: string;
  description?: string;
}

export interface PlanConfig {
  name: string;
  subtitle: string;
  price: number;
  installmentsText: string;
  description: string;
  checkoutUrl: string;
  features: string[];
  recommended?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  achievement: string;
  text: string;
  avatarUrl?: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppConfig {
  checkoutMelhorAno: string;
  checkoutMelhorAnoElite: string;
  priceMelhorAno: number;
  priceMelhorAnoElite: number;
  whatsappNumber: string;
  whatsappMessage: string;
  yearsOfAccess: number;
  authorityName: string;
  authorityTitle: string;
  authorityBio: string;
  authorityImageUrl: string;
  mockupImageUrl: string;
  platformImageUrl: string;
  guaranteeDays: number;
  guaranteeTerms: string;
  videoUrl?: string;
}
