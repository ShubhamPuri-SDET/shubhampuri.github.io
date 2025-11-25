import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const Terms: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader 
        title="Terms & Conditions"
        subtitle="Please read our terms carefully before using our services."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-300">
            <h2>1. General</h2>
            <p>All designs are custom-created for the client and cannot be resold or redistributed without our explicit permission.</p>
            
            <h2>2. Payments</h2>
            <p>Payments for services must be cleared before the final delivery of files. We typically require a 50% upfront payment for large projects.</p>

            <h2>3. Refunds</h2>
            <p>Refunds may be issued only if no work has commenced on the project. Once design work has started, refunds are not applicable.</p>

            <h2>4. Pricing</h2>
            <p>The prices listed on our website are indicative. Final pricing may change based on the complexity, scope, and urgency of the project.</p>

            <h2>5. Confidentiality</h2>
            <p>We guarantee the privacy and confidentiality of all user data and project details. Your information will not be shared with third parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
