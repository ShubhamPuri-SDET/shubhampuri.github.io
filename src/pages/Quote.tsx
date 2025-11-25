import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import QuoteCalculator from '../components/quote/QuoteCalculator';

const Quote: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader 
        title="Automated Quote Calculator"
        subtitle="Get an instant price estimate for your project. Select your desired services and options to see the real-time cost."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteCalculator />
        </div>
      </div>
    </div>
  );
};

export default Quote;
