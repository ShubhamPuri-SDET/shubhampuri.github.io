import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Target, Eye, Heart, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: "Quality", description: "We are committed to delivering high-quality work that exceeds expectations and provides real value.", icon: Award },
    { title: "Transparency", description: "We believe in clear, honest communication with our clients throughout the entire process.", icon: Eye },
    { title: "Creativity", description: "We push creative boundaries to deliver unique and impactful designs and solutions.", icon: Heart },
    { title: "Customer Success", description: "Your success is our success. We are dedicated to helping you achieve your goals.", icon: Users }
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title="About InnovateX"
        subtitle="We are a digital design and branding service provider helping businesses and individuals look professional and stand out. Our focus is on creativity, clarity, and results."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  To make high-quality digital and branding services accessible and affordable to everyone, empowering individuals and small businesses to thrive in a competitive landscape.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  A world where every business — big or small — has a strong, professional, and effective digital identity that enables them to connect with their audience and grow.
                </p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1170&q=80" alt="Creative consultant reviewing resume and brand materials on a desk." className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">The principles that guide our work and our relationships.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.title} className="text-center p-6 bg-background rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full">
                    <value.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
