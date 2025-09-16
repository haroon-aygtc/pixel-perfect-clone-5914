// API Service for AxonStream Backend Integration
import { 
  ApiResponse, 
  ApiError, 
  ApiQueryParams,
  Hero,
  ValueBullet,
  Service,
  Product,
  HowStep,
  CaseStudy,
  Metric,
  Pricing,
  SeoMeta,
  SiteSettings,
  Lead,
  LoginRequest,
  AuthUser
} from '@/types/api';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  // Generic fetch wrapper with error handling
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // For cookie-based auth
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        const errorData: ApiError = await response.json();
        throw new Error(errorData.error.message || 'API Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      throw error;
    }
  }

  // Auth Methods
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthUser>> {
    return this.request<AuthUser>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.request<void>('/auth/logout', {
      method: 'POST',
    });
  }

  async getProfile(): Promise<ApiResponse<AuthUser>> {
    return this.request<AuthUser>('/auth/me');
  }

  // Public Content Methods (no auth required)
  async getHero(params?: ApiQueryParams): Promise<ApiResponse<Hero>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<Hero>(`/public/hero${queryString}`);
  }

  async getValueBullets(params?: ApiQueryParams): Promise<ApiResponse<ValueBullet[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<ValueBullet[]>(`/public/value-bullets${queryString}`);
  }

  async getServices(params?: ApiQueryParams): Promise<ApiResponse<Service[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<Service[]>(`/public/services${queryString}`);
  }

  async getProducts(params?: ApiQueryParams): Promise<ApiResponse<Product[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<Product[]>(`/public/products${queryString}`);
  }

  async getHowSteps(params?: ApiQueryParams): Promise<ApiResponse<HowStep[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<HowStep[]>(`/public/how-steps${queryString}`);
  }

  async getCaseStudies(params?: ApiQueryParams): Promise<ApiResponse<CaseStudy[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<CaseStudy[]>(`/public/case-studies${queryString}`);
  }

  async getMetrics(params?: ApiQueryParams): Promise<ApiResponse<Metric[]>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<Metric[]>(`/public/metrics${queryString}`);
  }

  async getPricing(params?: ApiQueryParams): Promise<ApiResponse<Pricing>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<Pricing>(`/public/pricing${queryString}`);
  }

  async getSeoMeta(slug: string, params?: ApiQueryParams): Promise<ApiResponse<SeoMeta>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<SeoMeta>(`/public/seo/${slug}${queryString}`);
  }

  async getSiteSettings(params?: ApiQueryParams): Promise<ApiResponse<SiteSettings>> {
    const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    return this.request<SiteSettings>(`/public/settings${queryString}`);
  }

  // Lead submission (public)
  async submitLead(lead: Omit<Lead, 'id' | 'status' | 'createdAt'>): Promise<ApiResponse<void>> {
    return this.request<void>('/public/lead', {
      method: 'POST',
      body: JSON.stringify(lead),
    });
  }

  // Admin Methods (auth required)
  async updateHero(hero: Partial<Hero>): Promise<ApiResponse<Hero>> {
    return this.request<Hero>('/admin/hero', {
      method: 'PUT',
      body: JSON.stringify(hero),
    });
  }

  async updateServices(services: Service[]): Promise<ApiResponse<Service[]>> {
    return this.request<Service[]>('/admin/services', {
      method: 'PUT',
      body: JSON.stringify(services),
    });
  }

  async revalidateContent(tags: string[]): Promise<ApiResponse<void>> {
    return this.request<void>('/admin/revalidate', {
      method: 'POST',
      body: JSON.stringify({ tags }),
    });
  }

  // File upload
  async uploadMedia(file: File): Promise<ApiResponse<{ url: string; width: number; height: number; mime: string }>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.request<{ url: string; width: number; height: number; mime: string }>('/admin/media', {
      method: 'POST',
      body: formData,
      headers: {}, // Remove Content-Type to let browser set it for FormData
    });
  }
}

// Create singleton instance
export const apiService = new ApiService();

// Utility function to get localized content
export function getLocalizedContent<T>(
  item: T, 
  field: string, 
  lang: 'en' | 'ar'
): string {
  const key = `${field}${lang === 'en' ? 'En' : 'Ar'}` as keyof T;
  return (item[key] as string) || '';
}

// React Query keys
export const queryKeys = {
  hero: (lang?: string) => ['hero', lang],
  valueBullets: (lang?: string) => ['valueBullets', lang],
  services: (lang?: string) => ['services', lang],
  products: (lang?: string) => ['products', lang],
  howSteps: (lang?: string) => ['howSteps', lang],
  caseStudies: (lang?: string) => ['caseStudies', lang],
  metrics: (lang?: string) => ['metrics', lang],
  pricing: (lang?: string) => ['pricing', lang],
  seoMeta: (slug: string, lang?: string) => ['seoMeta', slug, lang],
  settings: (lang?: string) => ['settings', lang],
} as const;