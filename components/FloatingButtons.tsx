import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8">
      <div className="flex justify-between items-end max-w-7xl mx-auto">
        
        {/* Left: Phone Call Button */}
        <motion.a
          href="tel:943122825"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="pointer-events-auto bg-ronaf-blue hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 relative group"
          aria-label="Ligar Agora"
        >
          {/* Ping animation effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-ronaf-blue opacity-75 animate-ping group-hover:hidden"></span>
          
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
        </motion.a>

        {/* Right: WhatsApp Button */}
        <motion.a
          href="https://wa.me/244943122825"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 relative group"
          aria-label="Contactar via WhatsApp"
        >
          {/* Ping animation effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping group-hover:hidden"></span>
          
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
        </motion.a>
        
      </div>
    </div>
  );
};