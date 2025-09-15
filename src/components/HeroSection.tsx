import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
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
              Enterprise Intelligence Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              Enterprise Intelligence.{" "}
              <span className="text-primary">Delivered.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
              AxonStream unifies enterprise platforms, IT infrastructure, and AI-driven automation to help organizations operate smarter, faster, and more securely.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale">
                Schedule a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 hover-scale"
              >
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative z-10 hover-scale">
              <img 
                src={heroImage} 
                alt="Enterprise intelligence platform dashboard" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements with Animation */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full pulse" />
            
            {/* Stats Overlay */}
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-scale-in" style={{animationDelay: '1s'}}>
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Enterprise Deployments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;