import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";

const HomePage = () => {
  return (
    <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <main className="flex flex-col gap-20 md:gap-32 py-20 md:py-32">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default HomePage;
