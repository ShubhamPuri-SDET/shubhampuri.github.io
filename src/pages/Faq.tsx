import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import AccordionItem from '../components/ui/Accordion';
import { FAQ_DATA } from '../constants';

const Faq: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
