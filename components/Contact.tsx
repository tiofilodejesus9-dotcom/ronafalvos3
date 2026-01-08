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
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-ronaf-navy mb-6">Informações de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ronaf-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-ronaf-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-semibold uppercase">Telefone</p>
                    <a href="tel:943122825" className="text-lg font-bold text-ronaf-navy hover:text-ronaf-gold transition-colors">
                      943 122 825
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ronaf-blue/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-ronaf-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-semibold uppercase">Email</p>
                    <a href="mailto:alvosempreendimentos01huila@gmail.com" className="text-lg font-bold text-ronaf-navy hover:text-ronaf-gold transition-colors break-all">
                      alvosempreendimentos01huila@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="bg-ronaf-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-ronaf-blue" />
                  </div>
                   <div className="ml-4">
                    <p className="text-sm text-slate-500 font-semibold uppercase">Localização</p>
                    <p className="text-lg font-bold text-ronaf-navy">
                      Angola
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-ronaf-navy mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/pastorluis111" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/ronaf011" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Map or Image */}
          <div className="bg-ronaf-navy rounded-2xl overflow-hidden shadow-xl min-h-[400px] relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Building" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 text-center p-8">
                  <h3 className="text-white text-3xl font-bold mb-2 heading-font">RONAF ALVOS</h3>
                  <p className="text-ronaf-gold font-medium text-lg">Atingimos o seu alvo.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};