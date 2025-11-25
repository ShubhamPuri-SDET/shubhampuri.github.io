import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import BeforeAfterCard from '../components/ui/BeforeAfterCard';
import { CheckCircle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeSamples: React.FC = () => {
  const samples = [
    { title: "Software Engineer", type: "ATS-Optimized Resume" },
    { title: "Graphic Designer", type: "Creative Portfolio" },
    { title: "Marketing Student", type: "Entry-Level Resume" },
    { title: "Sales Executive", type: "Results-Driven CV" },
    { title: "Tech Startup", type: "Pitch Deck Design" },
    { title: "Project Manager", type: "Leadership Resume" },
  ];

  const stats = [
    { icon: CheckCircle, value: "95%", label: "Interview Success Rate" },
    { icon: TrendingUp, value: "3x", label: "More Profile Views" },
    { icon: Award, value: "500+", label: "Happy Clients" },
  ];

  return (
    <div className="bg-background">
      <PageHeader
        title="Resume & Portfolio Transformations"
        subtitle="See how we transform ordinary resumes into interview-winning documents that get you noticed by recruiters and hiring managers."
      />

      {/* Stats Section */}
      <div className="py-12 bg-primary-50 dark:bg-primary-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before-After Gallery */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Transformations, Real Results
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our expert team has helped hundreds of professionals across industries land their dream jobs.
              Each resume is custom-designed to highlight your unique strengths and pass ATS systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samples.map((sample, index) => (
              <BeforeAfterCard key={index} {...sample} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who've landed their dream jobs with our expertly crafted resumes and profiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">ATS-Optimized</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  All our resumes are designed to pass Applicant Tracking Systems used by 99% of companies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Industry Experts</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our team includes former recruiters and HR professionals who know what hiring managers want.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Unlimited Revisions</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We work with you until you're 100% satisfied with your resume and ready to apply.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fast Turnaround</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Get your professionally designed resume within 3-5 business days, rush options available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSamples;
