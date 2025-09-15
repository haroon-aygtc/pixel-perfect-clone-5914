import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-foreground rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Start Your Transformation with
            <br />
            <span className="text-primary-foreground/80">Enterprise Intelligence</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join 200+ enterprises who've achieved $50M+ in cost savings. 
            Schedule your free consultation and discover what AxonStream can do for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl animate-fade-in hover-scale" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Schedule Enterprise Demo</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-border transition-all focus:scale-[1.02]" />
                  <Input placeholder="Last Name" className="border-border transition-all focus:scale-[1.02]" />
                </div>
                <Input placeholder="Business Email" type="email" className="border-border transition-all focus:scale-[1.02]" />
                <Input placeholder="Company Name" className="border-border transition-all focus:scale-[1.02]" />
                <Textarea 
                  placeholder="What enterprise challenges are you looking to solve?" 
                  rows={4} 
                  className="border-border transition-all focus:scale-[1.02]"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-scale">
                  Schedule Free Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose AxonStream?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Trusted by 200+ Enterprises</h4>
                    <p className="text-primary-foreground/80">Finance, retail, healthcare, and more across 25+ countries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fast Implementation</h4>
                    <p className="text-primary-foreground/80">Average 30-day rollout without disrupting operations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: '1.2s'}}>
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Proven ROI</h4>
                    <p className="text-primary-foreground/80">$50M+ in cost savings and measurable efficiency gains</p>
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

export default ContactSection;