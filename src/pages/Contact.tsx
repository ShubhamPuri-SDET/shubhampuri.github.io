import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions or want to start a project? We’d love to hear from you."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=600&q=80" alt="Contact section visual showing a phone and laptop representing messaging and consultation." className="rounded-lg shadow-xl mb-8" />
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary-500" />
                  <a href="mailto:yourbusiness@email.com" className="text-lg text-slate-700 dark:text-slate-200 hover:underline">yourbusiness@email.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary-500" />
                  <a href="tel:+91XXXXXXXXXX" className="text-lg text-slate-700 dark:text-slate-200 hover:underline">+91 XXXXXXXXXX</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary-500" />
                  <span className="text-lg text-slate-700 dark:text-slate-200">Tech City, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-lg shadow-lg">
              <form>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone</label>
                    <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground">Select Service</label>
                    <select id="service" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500">
                      <option>Website Development</option>
                      <option>Digital Invitation</option>
                      <option>Resume Writing</option>
                      <option>Printing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
