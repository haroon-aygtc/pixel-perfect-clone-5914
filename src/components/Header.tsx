import { Button } from "@/components/ui/button";

const Header = () => {
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
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Platform</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Solutions</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Industries</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Services</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Resources</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors story-link">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
            Schedule Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;