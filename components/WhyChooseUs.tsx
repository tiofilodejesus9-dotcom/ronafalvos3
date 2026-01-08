import React from 'react';
import { Clock, Shield, Briefcase, ThumbsUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-24 bg-ronaf-navy text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ronaf-gold/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold heading-font mb-6 leading-tight">
              Porquê escolher a <br/>
              <span className="text-ronaf-gold">RONAF ALVOS?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Sabemos que o tempo é dinheiro e a segurança é inegociável. A nossa equipa trabalha incansavelmente para garantir que os seus objetivos sejam atingidos sem atrasos e com total transparência.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ronaf-blue text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Segurança Total</h3>
                  <p className="mt-1 text-slate-400">Processos transparentes e totalmente legais.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ronaf-blue text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Rapidez na Execução</h3>
                  <p className="mt-1 text-slate-400">Cumprimos prazos rigorosos para não parar o seu negócio.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ronaf-blue text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Profissionalismo</h3>
                  <p className="mt-1 text-slate-400">Equipa qualificada e experiente ao seu dispor.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative">
            <div className="absolute top-4 right-4 text-9xl font-extrabold text-white/5 pointer-events-none">#1</div>
            <h3 className="text-2xl font-bold mb-6">O Nosso Compromisso</h3>
            <div className="space-y-4">
               <div className="bg-white/10 p-4 rounded-xl flex items-center space-x-4">
                 <ThumbsUp className="h-8 w-8 text-ronaf-gold" />
                 <div>
                   <p className="font-bold">Satisfação Garantida</p>
                   <p className="text-sm text-slate-400">Focados nas suas necessidades</p>
                 </div>
               </div>
               <div className="h-px bg-white/10 my-4"></div>
               <p className="text-slate-300 italic">
                 "Atingimos o seu alvo de forma rápida e segura."
               </p>
               <div className="mt-6">
                 <a href="#contacto" className="block w-full text-center py-3 bg-ronaf-gold hover:bg-amber-600 rounded-lg font-bold transition-colors">
                   Solicitar Orçamento
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};