import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PriceCalculatorSection from '@/components/home/PriceCalculatorSection';
import ProcessSection from '@/components/home/ProcessSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import DualLeadSection from '@/components/home/DualLeadSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <PriceCalculatorSection />
        <ProcessSection />
        <PortfolioSection />
        <DualLeadSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
