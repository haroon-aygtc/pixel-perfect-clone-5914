import { Button } from "@/components/ui/button";
import consultantImage from "@/assets/consultant-professional.jpg";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in">
              Why AxonStream
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              Proven Results At{" "}
              <span className="text-primary">Enterprise Scale</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              Trusted by 200+ enterprises across finance, retail, healthcare, and more. 
              Fast 30-day implementation with $50M+ in proven cost savings and 
              measurable efficiency gains across 25+ countries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Agent Orchestration & Multi-agent Workflows</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Real-Time Event-Driven Automation</span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">ERP, CRM & Tool Integrations</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale animate-fade-in" style={{animationDelay: '1s'}}>
              Talk to an Advisor
            </Button>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="relative">
              <img 
                src={consultantImage} 
                alt="Professional business consultant" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 animate-scale-in" style={{animationDelay: '1.2s'}}>
                <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">30</div>
                      <div className="text-sm opacity-90">Days Implementation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;