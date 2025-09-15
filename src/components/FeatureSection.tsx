import { Button } from "@/components/ui/button";
import consultantImage from "@/assets/consultant-professional.jpg";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              About Us
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Doing The Right Thing At{" "}
              <span className="text-primary">The Right Time</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced consultants brings decades of expertise 
              to help your business navigate complex challenges and achieve 
              sustainable growth. We believe in delivering results that matter.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Strategic Business Planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Market Analysis & Research</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">Operational Excellence</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Learn More
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
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Projects Completed</div>
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