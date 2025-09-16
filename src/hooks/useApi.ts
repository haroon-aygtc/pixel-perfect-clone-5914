// React hooks for API integration with React Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService, queryKeys } from '@/services/api';
import { toast } from '@/hooks/use-toast';
import { 
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
  LoginRequest 
} from '@/types/api';

// Auth hooks
export function useLogin() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (credentials: LoginRequest) => apiService.login(credentials),
    onSuccess: () => {
      toast({
        title: "Login successful",
        description: "Welcome to AxonStream Admin",
      });
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: () => apiService.logout(),
    onSuccess: () => {
      queryClient.clear();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    },
  });
}

export function useProfile() {
  return useQuery({
    queryKey: ['auth', 'profile'],
    queryFn: () => apiService.getProfile(),
    retry: false,
  });
}

// Content hooks
export function useHero(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.hero(lang),
    queryFn: () => apiService.getHero({ lang }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useValueBullets(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.valueBullets(lang),
    queryFn: () => apiService.getValueBullets({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useServices(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.services(lang),
    queryFn: () => apiService.getServices({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useProducts(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.products(lang),
    queryFn: () => apiService.getProducts({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useHowSteps(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.howSteps(lang),
    queryFn: () => apiService.getHowSteps({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useCaseStudies(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.caseStudies(lang),
    queryFn: () => apiService.getCaseStudies({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useMetrics(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.metrics(lang),
    queryFn: () => apiService.getMetrics({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function usePricing(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.pricing(lang),
    queryFn: () => apiService.getPricing({ lang }),
    staleTime: 5 * 60 * 1000,
  });
}

export function useSeoMeta(slug: string, lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.seoMeta(slug, lang),
    queryFn: () => apiService.getSeoMeta(slug, { lang }),
    staleTime: 10 * 60 * 1000, // 10 minutes for SEO data
  });
}

export function useSiteSettings(lang: 'en' | 'ar' = 'en') {
  return useQuery({
    queryKey: queryKeys.settings(lang),
    queryFn: () => apiService.getSiteSettings({ lang }),
    staleTime: 10 * 60 * 1000,
  });
}

// Lead submission hook
export function useSubmitLead() {
  return useMutation({
    mutationFn: (lead: Omit<Lead, 'id' | 'status' | 'createdAt'>) => 
      apiService.submitLead(lead),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

// Admin update hooks
export function useUpdateHero() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (hero: Partial<Hero>) => apiService.updateHero(hero),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hero'] });
      toast({
        title: "Hero updated",
        description: "Hero section has been updated successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useRevalidateContent() {
  return useMutation({
    mutationFn: (tags: string[]) => apiService.revalidateContent(tags),
    onSuccess: () => {
      toast({
        title: "Content published",
        description: "Your changes are now live on the website",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Publish failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

// Media upload hook
export function useUploadMedia() {
  return useMutation({
    mutationFn: (file: File) => apiService.uploadMedia(file),
    onError: (error: Error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}