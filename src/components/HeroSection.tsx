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
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to Consult
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Business Solutions For{" "}
              <span className="text-primary">All Enterprises</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              We provide comprehensive business consulting services to help enterprises 
              achieve their goals and maximize their potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional business consultants" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;