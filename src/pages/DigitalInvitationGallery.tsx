import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../lib/animations';
import Lightbox from '../components/ui/Lightbox';

const GallerySection = ({ title, images, altPrefix, onImageClick }: { title: string, images: string[], altPrefix: string, onImageClick: (url: string) => void }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {images.map((img, index) => {
        const imageUrl = `https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=400&q=80`;
        return (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={cardHover}
            className="aspect-w-9 aspect-h-16 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => onImageClick(imageUrl)}
          >
            <img src={imageUrl} alt={`${altPrefix} ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        )
      })}
    </motion.div>
  </div>
);

const DigitalInvitationGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const weddingImages = ["1515934751635-c81c6bc9a2d8", "1607190074257-dd4b769791ac", "1605106702734-205df224ecce", "1586105251261-72a756497a11"];
  const birthdayImages = ["1530103862676-de3c9a59af38", "1558636508-e0db3814bd1d", "1602631985686-1bb0e6a8696e", "1531592937781-344ad78b838c"];
  const businessImages = ["1515187029135-18ee286d815b", "1556761175-5973dc0f32e7", "1540575467063-17e6fc48dee5", "1559223605-39148eb596d6"];

  return (
    <div className="bg-background">
      <PageHeader
        title="Digital Invitation Gallery"
        subtitle="Explore a selection of our elegant, modern, and fun invitation designs."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GallerySection title="Wedding Invitations" images={weddingImages} altPrefix="Elegant wedding invitation design" onImageClick={setSelectedImage} />
          <GallerySection title="Birthday Invitations" images={birthdayImages} altPrefix="Fun birthday invitation design" onImageClick={setSelectedImage} />
          <GallerySection title="Business Events" images={businessImages} altPrefix="Professional business event invitation" onImageClick={setSelectedImage} />
        </div>
      </div>
      {selectedImage && (
        <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default DigitalInvitationGallery;
