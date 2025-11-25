import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TESTIMONIALS } from '../../constants';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cardHover } from '../../lib/animations';

const TestimonialsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by Our Clients</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <motion.div
                whileHover={cardHover}
                className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg p-8 rounded-lg shadow-lg h-full flex flex-col"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
