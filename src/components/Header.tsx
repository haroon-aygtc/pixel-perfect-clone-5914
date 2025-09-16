import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full bg-background border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AxonStream</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.platform')}
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.solutions')}
            </a>
            <a href="#industries" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.industries')}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.services')}
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.resources')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors story-link">
              {t('nav.contact')}
            </a>
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
              {t('nav.schedule_demo')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;