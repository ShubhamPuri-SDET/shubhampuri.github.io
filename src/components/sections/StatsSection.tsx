import React from 'react';
import CountUp from 'react-countup';
import { STATS } from '../../constants';
import { useInView } from 'framer-motion';

const StatsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-10 w-10 mb-2 opacity-80" />
              <div className="text-4xl md:text-5xl font-extrabold">
                {isInView && <CountUp end={stat.value} duration={3} />}{stat.suffix}
              </div>
              <p className="text-sm md:text-base font-medium text-primary-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
