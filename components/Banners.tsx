import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const bannerImages = [
  "https://i.postimg.cc/wTcpxqZq/IMG_20260105_WA0039.jpg",
  "https://i.postimg.cc/BQyx63KM/IMG_20260105_WA0035.jpg",
  "https://i.postimg.cc/sD2kzYY4/IMG_20260105_WA0043.jpg",
  "https://i.postimg.cc/jq3fgTZY/IMG_20260105_WA0036.jpg",
  "https://i.postimg.cc/Znjzcjrh/IMG_20260105_WA0037.jpg",
  "https://i.postimg.cc/90DD54JC/IMG_20260105_WA0041.jpg",
  "https://i.postimg.cc/hPPBjWB4/IMG_20260105_WA0040.jpg",
  "https://i.postimg.cc/Z5XtVWyR/IMG_20260105_WA0042.jpg",
  "https://i.postimg.cc/gkBf2xs7/IMG_20260105_WA0044.jpg",
  "https://i.postimg.cc/fRt1tMg4/IMG_20260106_WA0003.jpg"
];

export const Banners: React.FC = () => {
  return (
    <div className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ronaf-gold font-bold tracking-wider uppercase text-sm">Galeria</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold heading-font text-ronaf-navy">
            O Nosso Trabalho em Imagens
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Um olhar visual sobre os nossos serviços, equipa e instalações.
          </p>
        </div>

        {/* Masonry Layout using CSS Columns to prevent cropping */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {bannerImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-slate-100"
            >
              <div className="absolute inset-0 bg-ronaf-navy/0 group-hover:bg-ronaf-navy/20 transition-colors duration-300 z-10" />
              
              <img 
                src={img} 
                alt={`Galeria Ronaf Alvos ${index + 1}`}
                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center text-white space-x-2">
                  <Image className="w-5 h-5 text-ronaf-gold" />
                  <span className="font-medium text-sm">Ver Imagem</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};