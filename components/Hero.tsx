import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ronaf-navy">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ronaf-navy/95 to-ronaf-blue/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 text-ronaf-gold backdrop-blur-sm border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-ronaf-gold animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Excelência em Serviços</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold heading-font text-white leading-tight">
            Atingimos o seu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ronaf-gold to-yellow-300">
              Alvo de Sucesso
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            RONAF ALVOS – Atingimos o seu alvo de forma rápida e segura. Especialistas em legalização, gestão e suporte empresarial para alavancar o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#servicos"
              className="w-full sm:w-auto px-8 py-4 bg-ronaf-gold hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              Fale Connosco
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-ronaf-gold mr-2" />
              <span>Atendimento Rápido</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-ronaf-gold mr-2" />
              <span>Suporte Profissional</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-ronaf-gold mr-2" />
              <span>Processos Seguros</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual/Graphic (Hidden on mobile for cleaner look or adapted) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Business Meeting" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white font-bold text-lg">Soluções Corporativas Completas</p>
              <p className="text-slate-300 text-sm">Legalização e Suporte</p>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">Documentação</p>
                <p className="text-ronaf-navy font-bold text-xl">100% Legal</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};