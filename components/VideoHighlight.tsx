import React from 'react';
import { motion } from 'framer-motion';

export const VideoHighlight: React.FC = () => {
  return (
    <div className="bg-ronaf-navy py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-ronaf-gold font-bold tracking-wider uppercase text-sm">Multimédia</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold heading-font text-white">
            Conheça a RONAF ALVOS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-black aspect-video mx-auto"
        >
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/lXK914CxzRY?rel=0&modestbranding=1"
            title="Apresentação RONAF ALVOS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};