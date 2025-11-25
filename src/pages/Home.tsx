import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesHighlight from '../components/sections/ServicesHighlight';
import HowItWorks from '../components/sections/HowItWorks';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsPreview from '../components/sections/TestimonialsPreview';
import CtaSection from '../components/sections/CtaSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesHighlight />
      <HowItWorks />
      <StatsSection />
      <TestimonialsPreview />
      <CtaSection />
    </>
  );
};

export default Home;
