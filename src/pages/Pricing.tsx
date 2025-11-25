import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Check, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../lib/animations';
import ComparisonTable from '../components/ui/ComparisonTable';
import { COMPARISON_DATA } from '../constants';

const Pricing: React.FC = () => {
  const pricingTiers = {
    "Website Development": [
      { name: "Basic Portfolio", price: "₹3,999 – ₹6,999", features: ["1-3 Pages", "Responsive Design", "Contact Form", "Basic SEO"] },
      { name: "Business Website", price: "₹7,999 – ₹14,999", features: ["Up to 8 Pages", "CMS Integration", "Advanced SEO", "Social Media Integration"], popular: true },
      { name: "E-commerce", price: "₹15,999 – ₹35,000", features: ["Full Online Store", "Payment Gateway", "Product Management", "Advanced Analytics"] },
    ],
    "Digital Invitation Cards": [
      { name: "Static Invitation", price: "₹399 – ₹799", features: ["1 Design Concept", "High-res JPEG/PNG", "2 Revisions"] },
      { name: "Animated Invitation", price: "₹1,299 – ₹2,999", features: ["Video/GIF format", "Background Music", "Photo Integration", "3 Revisions"], popular: true },
      { name: "Full Wedding Package", price: "₹3,999 – ₹7,999", features: ["Save the Date", "Main Invite", "Event Reminders", "Thank You Card"] },
    ],
    "Resume & Portfolio": [
      { name: "Resume Writing", price: "₹499 – ₹1,999", features: ["Professional Format", "Keyword Optimized", "PDF & Docx"] },
      { name: "ATS Resume + Cover Letter", price: "₹1,999 – ₹3,499", features: ["ATS-Optimized", "Custom Cover Letter", "LinkedIn Review", "3 Revisions"], popular: true },
      { name: "Portfolio Website", price: "₹4,499 – ₹12,000", features: ["Custom Domain Setup", "Up to 10 Projects", "Responsive Design", "Contact Form"] },
    ],
  };

  return (
    <div className="bg-background relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      </div>
      <div className="relative z-10">
        <PageHeader
          title="Flexible Pricing Plans"
          subtitle="Choose a plan that fits your needs and budget. All prices are indicative and may vary based on project complexity."
        />

        {/* Trust Badges */}
        <div className="py-12 bg-primary-50 dark:bg-primary-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-foreground">100% Secure</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Payment Protection</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-foreground">Fast Delivery</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">On-Time Guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Award className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-foreground">Quality Work</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Professional Results</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-semibold text-foreground">Satisfaction</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Money-Back Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(pricingTiers).map(([category, tiers]) => (
              <div key={category} className="mb-20">
                <h2 className="text-3xl font-bold text-center text-foreground mb-10">{category}</h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer()}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {tiers.map(tier => (
                    <motion.div
                      key={tier.name}
                      variants={fadeInUp}
                      whileHover={cardHover}
                      className={`relative flex flex-col rounded-2xl p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg transition-shadow duration-300 ${tier.popular ? 'border-2 border-primary-500 shadow-2xl' : 'border border-slate-200 dark:border-slate-700 shadow-lg'}`}
                    >
                      {tier.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold text-white bg-primary-500 rounded-full">POPULAR</div>}
                      <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                      <p className="mt-4 text-4xl font-extrabold text-foreground">{tier.price}</p>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">One-time payment</p>
                      <ul className="mt-8 space-y-4 flex-grow">
                        {tier.features.map(feature => (
                          <li key={feature} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/quote" className="mt-8 block w-full text-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                        Get a Quote
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}

            <div className="mb-20">
              <ComparisonTable data={COMPARISON_DATA} />
            </div>

            <div className="text-center p-8 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">Printing Services</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Prices for printing vary based on quantity, size, and material. Please contact us for a custom quote.</p>
              <Link to="/contact" className="mt-4 inline-block px-6 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
                Contact for Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
