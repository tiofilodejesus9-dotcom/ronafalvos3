import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ronaf-navy">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ronaf-navy/95 via-ronaf-navy/90 to-ronaf-blue/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 text-ronaf-gold backdrop-blur-sm border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-ronaf-gold animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">Soluções Empresariais em Angola</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold heading-font text-white leading-[1.1]">
            RONAF ALVOS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ronaf-gold to-yellow-300 text-3xl sm:text-4xl lg:text-5xl block mt-2">
              Atingimos o seu alvo.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            De forma rápida e segura. Especialistas em constituição de empresas, alvarás, INSS, SIGFE e serviços gerais. O parceiro ideal para o seu sucesso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-ronaf-gold hover:bg-amber-600 text-white font-bold rounded-lg shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-lg"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/244943122825"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm text-lg"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-300">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-ronaf-gold mr-2" />
              <span>Rapidez e Segurança</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-ronaf-gold mr-2" />
              <span>Atendimento Personalizado</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual/Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <div className="absolute inset-0 bg-ronaf-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Business Strategy" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg z-20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-ronaf-navy font-bold text-lg">Legalização Completa</p>
                  <p className="text-slate-500 text-sm">Constituição, Alvarás & INSS</p>
                </div>
                <div className="bg-ronaf-gold h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};