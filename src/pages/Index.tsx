import Header from "@/components/Header";
import DynamicHeroSection from "@/components/DynamicHeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeatureSection from "@/components/FeatureSection";
import ConsultingServices from "@/components/ConsultingServices";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DynamicHeroSection />
      <ServicesSection />
      <FeatureSection />
      <ConsultingServices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
