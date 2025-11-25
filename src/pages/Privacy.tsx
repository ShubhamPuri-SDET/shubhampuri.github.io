import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const Privacy: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader 
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Here's how we handle your data."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-slate-300">
            <h2>1. Information We Collect</h2>
            <p>We collect basic personal information such as your name, email address, and phone number when you fill out our contact or quote forms.</p>
            
            <h2>2. Use of Your Data</h2>
            <p>Your data is used solely to communicate with you about your project and to provide our services. We do not use it for marketing purposes without your consent.</p>

            <h2>3. Data Sharing</h2>
            <p>Your data is never shared with, sold to, or rented to third parties for any reason.</p>

            <h2>4. Document Security</h2>
            <p>Any documents you upload for services like resume writing are stored securely and are only accessible to the team members working on your project.</p>

            <h2>5. Data Deletion</h2>
            <p>You may request the deletion of your personal data and any uploaded files from our systems at any time after your project is completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
