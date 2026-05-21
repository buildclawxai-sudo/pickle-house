import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BrandsSection from '@/components/BrandsSection';
import ProductsSection from '@/components/ProductsSection';
import WhySection from '@/components/WhySection';
import FutureSection from '@/components/FutureSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen paper-texture">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <ProductsSection />
        <WhySection />
        <FutureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}