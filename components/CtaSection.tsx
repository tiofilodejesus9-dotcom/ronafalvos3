import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-ronaf-blue to-ronaf-navy rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Abstract circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-ronaf-gold/20 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 heading-font">
            Pronto para impulsionar o seu negócio?
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Não perca tempo com burocracias. Deixe a RONAF ALVOS cuidar de tudo enquanto você foca no que realmente importa: o seu sucesso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="https://wa.me/244943122825"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-ronaf-blue font-bold rounded-full shadow-lg hover:bg-slate-100 transition-colors duration-300"
            >
              Falar no WhatsApp
            </a>
            <a 
              href="tel:943122825"
              className="px-8 py-4 bg-ronaf-gold text-white font-bold rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};