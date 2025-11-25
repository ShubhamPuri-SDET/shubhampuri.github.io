import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

// Specific images and alt texts for services
const specificImages: { [key: string]: { src: string; alt: string } } = {
  'Website Development': {
    src: 'https://i.ibb.co/yB4tH2T/developer-workspace.jpg',
    alt: 'Developer working on website design and code in modern workspace'
  },
  'Digital Invitations': {
    src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=600&q=80',
    alt: 'Digital invitation design on mobile device'
  },
  'Printing Services': {
    src: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=600&q=80',
    alt: 'Professional printing press in action'
  },
  'Resume & Profile Services': {
    src: 'https://images.unsplash.com/photo-1586953208270-e1e0ce0e8cb8?auto=format&fit=crop&w=600&q=80',
    alt: 'Professional resume and LinkedIn profile materials on desk'
  }
};

const Services: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader
        title="Our Services"
        subtitle="A comprehensive suite of digital and professional services designed to elevate your brand and accelerate your career."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.filter(s => s.details).map((service, index) => {
              const specificImage = specificImages[service.title];
              const imageUrl = specificImage?.src || 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80';
              const imageAlt = specificImage?.alt || `Visual representation of ${service.title}`;

              return (
                <div key={service.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{service.details.intro}</p>
                    <ul className="space-y-3">
                      {(service.details.includes || service.details.types || service.details.prints || service.details.offers || service.details.features).map((item: string) => (
                        <li key={item} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {(service.details.industries) && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-foreground mb-2">Industries we serve:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.details.industries.map((industry: string) => (
                            <span key={industry} className="bg-slate-100 dark:bg-slate-800 text-sm px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">{industry}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`p-4 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-xl" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
