import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../lib/animations';

interface BeforeAfterCardProps {
  title: string;
  type: string;
}

// Role-specific before/after images for maximum impact
const roleImages: { [key: string]: { before: string; after: string } } = {
  'Software Engineer': {
    before: 'https://images.unsplash.com/photo-1586953208270-e1e0ce0e8cb8?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=300&h=400&q=80'
  },
  'Graphic Designer': {
    before: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=300&h=400&q=80'
  },
  'Marketing Student': {
    before: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400&q=80'
  },
  'Sales Executive': {
    before: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=400&q=80'
  },
  'Tech Startup': {
    before: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=300&h=400&q=80'
  },
  'Project Manager': {
    before: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&h=400&q=80',
    after: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&h=400&q=80'
  }
};

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ title, type }) => {
  const images = roleImages[title] || roleImages['Software Engineer'];

  return (
    <motion.div
      whileHover={cardHover}
      className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-900/50 flex flex-col transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-foreground text-center">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-4">{type}</p>
      <div className="flex-grow grid grid-cols-2 gap-4 items-center">
        <div className="text-center">
          <img src={images.before} alt={`Before - Old ${title} resume design`} className="rounded-md shadow-md mb-2 w-full h-auto object-cover" />
          <span className="font-semibold text-red-500">Before</span>
        </div>
        <div className="text-center">
          <img src={images.after} alt={`After - Improved ${title} resume design`} className="rounded-md shadow-md mb-2 w-full h-auto object-cover" />
          <span className="font-semibold text-green-500">After</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <span className="text-sm font-medium text-primary-600">See the Transformation</span>
      </div>
    </motion.div>
  );
};

export default BeforeAfterCard;
