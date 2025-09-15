import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-collaboration.jpg";
import growthImage from "@/assets/business-growth.jpg";
import financialImage from "@/assets/financial-consulting.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: teamImage,
      title: "Platform Features",
      description: "Agent orchestration and real-time workflows"
    },
    {
      image: growthImage,
      title: "Enterprise Solutions",
      description: "Comprehensive intelligence platform for all departments"
    },
    {
      image: financialImage,
      title: "Proven Results",
      description: "$50M+ cost savings across 200+ deployments"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-fade-in">
            Transform Your Enterprise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Assess, Build & Optimize
            <br />
            <span className="text-primary">Your Digital Future.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Our proven methodology delivers comprehensive analysis, seamless integration, 
            and continuous optimization for enterprise-scale transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md animate-fade-in hover-scale" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;