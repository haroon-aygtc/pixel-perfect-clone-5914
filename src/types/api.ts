// API Types for AxonStream Backend Integration

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: any;
  };
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
}

// Content Types with i18n
export interface Hero {
  id: string;
  h1En: string;
  h1Ar: string;
  h2En: string;
  h2Ar: string;
  paragraphEn: string;
  paragraphAr: string;
  primaryCtaLabelEn: string;
  primaryCtaLabelAr: string;
  secondaryCtaLabelEn: string;
  secondaryCtaLabelAr: string;
  lottieUrl?: string;
}

export interface ValueBullet {
  id: string;
  iconKey: string;
  textEn: string;
  textAr: string;
  order: number;
}

export interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  iconKey: string;
  order: number;
}

export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  bulletsEn: string[];
  bulletsAr: string[];
  ctaLabelEn: string;
  ctaLabelAr: string;
  ctaUrl: string;
  order: number;
}

export interface HowStep {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  order: number;
}

export interface CaseStudy {
  id: string;
  industryEn: string;
  industryAr: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  outcomeEn: string;
  outcomeAr: string;
  metricsJson: {
    kpi: string;
    value: string;
  };
  order: number;
}

export interface Metric {
  id: string;
  labelEn: string;
  labelAr: string;
  value: string;
  order: number;
}

export interface Pricing {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  ctaLabelEn: string;
  ctaLabelAr: string;
  ctaUrl: string;
}

export interface SeoMeta {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  ogImageUrl?: string;
  canonicalUrl?: string;
}

export interface SiteSettings {
  id: string;
  companyEmail: string;
  companyPhone: string;
  officeAddressEn: string;
  officeAddressAr: string;
  mapEmbedUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
}

export interface Lead {
  id?: string;
  company: string;
  name: string;
  email: string;
  message: string;
  consent: boolean;
  status?: string;
  createdAt?: string;
}

// API Query Parameters
export interface ApiQueryParams {
  lang?: 'en' | 'ar';
  page?: number;
  limit?: number;
  search?: string;
}

// Localized Content Helper Type
export type LocalizedContent<T> = {
  [K in keyof T]: K extends `${string}En` | `${string}Ar` 
    ? string 
    : T[K];
};

// Helper function type for getting localized content
export type GetLocalizedContent<T> = (item: T, lang: 'en' | 'ar') => string;