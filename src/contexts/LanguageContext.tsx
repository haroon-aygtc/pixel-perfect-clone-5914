// Language Context for i18n support
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: Record<string, string>) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Basic translations for UI elements
const translations = {
  en: {
    // Navigation
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.schedule_demo': 'Schedule Demo',
    
    // Hero
    'hero.schedule_demo': 'Schedule a Demo',
    'hero.explore_solutions': 'Explore Solutions',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.get_started': 'Get Started',
    'common.contact_us': 'Contact Us',
    'common.read_more': 'Read More',
    'common.view_all': 'View All',
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
    
    // Stats
    'stats.projects': 'Projects Delivered',
    'stats.satisfaction': 'Client Satisfaction',
    'stats.uptime': 'Uptime SLA',
    'stats.countries': 'Countries Served',
    'stats.savings': 'Cost Savings',
    'stats.implementation': 'Avg. Implementation',
    
    // Contact Form
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to transform your enterprise?',
    'contact.company': 'Company',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message',
    'contact.consent': 'I agree to the processing of my personal data',
    'contact.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message',
    
    // Footer
    'footer.company': 'Company',
    'footer.solutions': 'Solutions',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.case_studies': 'Case Studies',
    'footer.whitepapers': 'Whitepapers',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved',
    
    // Admin
    'admin.login': 'Login',
    'admin.logout': 'Logout',
    'admin.dashboard': 'Dashboard',
    'admin.content': 'Content Management',
    'admin.publish': 'Publish Changes',
    'admin.preview': 'Preview',
    'admin.save': 'Save',
    'admin.cancel': 'Cancel',
    'admin.edit': 'Edit',
    'admin.delete': 'Delete',
  },
  ar: {
    // Navigation
    'nav.platform': 'المنصة',
    'nav.solutions': 'الحلول',
    'nav.industries': 'الصناعات',
    'nav.services': 'الخدمات',
    'nav.resources': 'الموارد',
    'nav.contact': 'اتصل بنا',
    'nav.schedule_demo': 'جدولة عرض توضيحي',
    
    // Hero
    'hero.schedule_demo': 'جدولة عرض توضيحي',
    'hero.explore_solutions': 'استكشف الحلول',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.get_started': 'ابدأ الآن',
    'common.contact_us': 'اتصل بنا',
    'common.read_more': 'اقرأ المزيد',
    'common.view_all': 'عرض الكل',
    'common.loading': 'جار التحميل...',
    'common.error': 'خطأ في تحميل المحتوى',
    
    // Stats
    'stats.projects': 'مشروع منجز',
    'stats.satisfaction': 'رضا العملاء',
    'stats.uptime': 'مستوى الخدمة',
    'stats.countries': 'دولة نخدمها',
    'stats.savings': 'توفير في التكاليف',
    'stats.implementation': 'متوسط التنفيذ',
    
    // Contact Form
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لتحويل مؤسستك؟',
    'contact.company': 'الشركة',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.consent': 'أوافق على معالجة بياناتي الشخصية',
    'contact.submit': 'إرسال الرسالة',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'فشل في إرسال الرسالة',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.solutions': 'الحلول',
    'footer.resources': 'الموارد',
    'footer.legal': 'قانوني',
    'footer.about': 'حولنا',
    'footer.careers': 'الوظائف',
    'footer.blog': 'المدونة',
    'footer.case_studies': 'دراسات الحالة',
    'footer.whitepapers': 'الأوراق البيضاء',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Admin
    'admin.login': 'تسجيل الدخول',
    'admin.logout': 'تسجيل الخروج',
    'admin.dashboard': 'لوحة التحكم',
    'admin.content': 'إدارة المحتوى',
    'admin.publish': 'نشر التغييرات',
    'admin.preview': 'معاينة',
    'admin.save': 'حفظ',
    'admin.cancel': 'إلغاء',
    'admin.edit': 'تحرير',
    'admin.delete': 'حذف',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to English
    const saved = localStorage.getItem('axonstream-language');
    return (saved as Language) || 'en';
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem('axonstream-language', language);
    
    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update document class for styling
    document.documentElement.className = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Translation function with interpolation support
  const t = (key: string, options: Record<string, string> = {}) => {
    let text = translations[language][key] || translations.en[key] || key;
    
    // Simple interpolation
    Object.keys(options).forEach(option => {
      text = text.replace(`{{${option}}}`, options[option]);
    });
    
    return text;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    dir: language === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper hook for getting localized content from API responses
export function useLocalizedContent() {
  const { language } = useLanguage();
  
  return {
    getContent: function<T>(item: T, field: string): string {
      const key = `${field}${language === 'en' ? 'En' : 'Ar'}` as keyof T;
      return (item[key] as string) || '';
    },
    language,
  };
}