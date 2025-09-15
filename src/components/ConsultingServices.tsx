import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConsultingServices = () => {
  const services = [
    {
      title: "Platform Licensing",
      description: "Microsoft, Oracle, SAP enterprise licensing & integration with seamless deployment.",
      features: ["Enterprise Licensing", "System Integration", "Compliance Management", "Support Services"]
    },
    {
      title: "Custom Development",
      description: "SaaS applications, APIs, and enterprise-grade solutions tailored to your needs.",
      features: ["API Development", "SaaS Solutions", "Custom Applications", "Scalable Architecture"]
    },
    {
      title: "AI Integration & Automation",
      description: "Workflow intelligence, cognitive agents, and predictive analytics for enterprise operations.",
      features: ["Intelligent Workflows", "Cognitive Agents", "Predictive Analytics", "Process Automation"]
    },
    {
      title: "Hardware Procurement",
      description: "Enterprise servers, networking, and IT infrastructure with expert implementation.",
      features: ["Server Infrastructure", "Network Equipment", "Security Hardware", "Cloud Migration"]
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Enterprise Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Complete Technology &
            <br />
            <span className="text-primary">Integration Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            From platform licensing to AI automation, we deliver end-to-end technology solutions 
            that drive measurable enterprise transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md animate-fade-in hover-scale" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full hover-scale"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;