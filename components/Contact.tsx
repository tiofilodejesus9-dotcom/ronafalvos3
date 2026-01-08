import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ronaf-gold font-bold tracking-wider uppercase text-sm">Fale Connosco</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold heading-font text-ronaf-navy">
            Estamos à sua espera
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Entre em contacto hoje mesmo e descubra como podemos acelerar o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-ronaf-navy mb-8">Informações de Contacto</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="bg-ronaf-blue/10 p-4 rounded-xl group-hover:bg-ronaf-blue transition-colors duration-300">
                      <Phone className="w-6 h-6 text-ronaf-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-6">
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Ligue para nós</p>
                      <a href="tel:943122825" className="text-xl md:text-2xl font-bold text-ronaf-navy hover:text-ronaf-gold transition-colors block mt-1">
                        943 122 825
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-ronaf-blue/10 p-4 rounded-xl group-hover:bg-ronaf-blue transition-colors duration-300">
                      <Mail className="w-6 h-6 text-ronaf-blue group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-6 overflow-hidden">
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Envie um Email</p>
                      <a href="mailto:alvosempreendimentos01huila@gmail.com" className="text-lg md:text-xl font-bold text-ronaf-navy hover:text-ronaf-gold transition-colors block mt-1 break-words">
                        alvosempreendimentos01huila@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                     <div className="bg-ronaf-blue/10 p-4 rounded-xl group-hover:bg-ronaf-blue transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-ronaf-blue group-hover:text-white transition-colors" />
                    </div>
                     <div className="ml-6">
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Localização</p>
                      <p className="text-xl font-bold text-ronaf-navy mt-1">
                        Angola
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-ronaf-navy mb-6">Siga-nos nas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/pastorluis111" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white p-4 rounded-full hover:bg-blue-700 transition-transform hover:-translate-y-1 shadow-lg shadow-blue-500/20"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/ronaf011" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4 rounded-full hover:opacity-90 transition-transform hover:-translate-y-1 shadow-lg shadow-pink-500/20"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="bg-ronaf-navy rounded-2xl overflow-hidden shadow-2xl min-h-[400px] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-ronaf-navy/90 via-ronaf-navy/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Corporate Office" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-10 text-center">
                  <h3 className="text-white text-3xl font-bold mb-3 heading-font">RONAF ALVOS</h3>
                  <p className="text-ronaf-gold font-medium text-xl">"Atingimos o seu alvo"</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};