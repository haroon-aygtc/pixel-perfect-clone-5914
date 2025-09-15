import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ConsultingServices = () => {
  const services = [
    {
      title: "Strategic Planning",
      description: "Comprehensive strategic planning services to align your business goals with market opportunities.",
      features: ["Market Analysis", "Competitive Research", "Growth Strategy", "Risk Assessment"]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial consulting to optimize your capital structure and improve profitability.",
      features: ["Financial Planning", "Investment Strategy", "Cost Optimization", "Performance Metrics"]
    },
    {
      title: "Operations Excellence",
      description: "Streamline your operations for maximum efficiency and sustainable growth.",
      features: ["Process Optimization", "Quality Management", "Supply Chain", "Digital Transformation"]
    },
    {
      title: "Digital Transformation",
      description: "Navigate the digital landscape with our comprehensive transformation services.",
      features: ["Technology Strategy", "Digital Solutions", "Data Analytics", "Innovation Planning"]
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Business & Financial
            <br />
            <span className="text-primary">Consulting Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end consulting services that drive measurable results 
            and sustainable business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded" />
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
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                >
                  Learn More
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