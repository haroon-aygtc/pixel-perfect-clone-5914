// Dynamic Hero Section with API Integration
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useHero } from "@/hooks/useApi";
import { useLanguage, useLocalizedContent } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-business.jpg";

const DynamicHeroSection = () => {
  const { language, t } = useLanguage();
  const { getContent } = useLocalizedContent();
  const { data: heroData, isLoading, error } = useHero(language);

  // Fallback content for when API is unavailable
  const fallbackContent = {
    h1: language === 'en' 
      ? 'Enterprise Intelligence. Delivered.' 
      : 'ذكاء المؤسسات. مُسلّم.',
    h2: language === 'en'
      ? 'Complete Enterprise IT: Software, Platforms, Hardware & Managed AI'
      : 'تكنولوجيا المعلومات المؤسسية الكاملة: البرمجيات والمنصات والأجهزة والذكاء الاصطناعي المُدار',
    paragraph: language === 'en'
      ? 'AxonStream unifies enterprise platforms, IT infrastructure, and AI-driven automation to help organizations operate smarter, faster, and more securely.'
      : 'يوحد AxonStream منصات المؤسسات وبنية تكنولوجيا المعلومات والأتمتة المدفوعة بالذكاء الاصطناعي لمساعدة المؤسسات على العمل بذكاء وسرعة وأمان أكبر.',
    primaryCta: language === 'en' ? 'Schedule a Demo' : 'جدولة عرض توضيحي',
    secondaryCta: language === 'en' ? 'Explore Solutions' : 'استكشف الحلول',
  };

  if (isLoading) {
    return (
      <section className="relative min-h-[600px] bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"
          style={{ clipPath: "polygon(0 0, 70% 0, 45% 100%, 0 100%)" }} />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-6">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-24 w-full" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="w-full h-80 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const hero = heroData?.data;
  const content = hero ? {
    h1: getContent(hero, 'h1'),
    h2: getContent(hero, 'h2'),
    paragraph: getContent(hero, 'paragraph'),
    primaryCta: getContent(hero, 'primaryCtaLabel'),
    secondaryCta: getContent(hero, 'secondaryCtaLabel'),
  } : fallbackContent;

  return (
    <section className="relative min-h-[600px] bg-background overflow-hidden">
      {/* Diagonal Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"
        style={{
          clipPath: "polygon(0 0, 70% 0, 45% 100%, 0 100%)"
        }}
      />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in">
              {language === 'en' ? 'Enterprise Intelligence Platform' : 'منصة ذكاء المؤسسات'}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" 
                style={{animationDelay: '0.2s'}}>
              {content.h1.split(' ').slice(0, -1).join(' ')}{" "}
              <span className="text-primary">{content.h1.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in" 
               style={{animationDelay: '0.4s'}}>
              {content.paragraph}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" 
                 style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale">
                {content.primaryCta || t('hero.schedule_demo')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 hover-scale"
              >
                {content.secondaryCta || t('hero.explore_solutions')}
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative z-10 hover-scale">
              <img 
                src={hero?.lottieUrl || heroImage} 
                alt={language === 'en' ? 'Enterprise intelligence platform dashboard' : 'لوحة تحكم منصة ذكاء المؤسسات'} 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements with Animation */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full pulse" />
            
            {/* Stats Overlay */}
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-scale-in" 
                 style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Enterprise Deployments' : 'عمليات نشر المؤسسات'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error state indicator (subtle) */}
      {error && (
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-destructive/10 text-destructive text-xs rounded">
          {t('common.error')}
        </div>
      )}
    </section>
  );
};

export default DynamicHeroSection;