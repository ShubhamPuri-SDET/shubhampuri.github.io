import React from 'react';

const NewsletterSignUp: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
      <h3 className="text-xl font-bold text-foreground mb-2">Subscribe to our Newsletter</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">Get the latest insights on branding, design, and career development delivered to your inbox.</p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button 
          type="submit"
          className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignUp;
