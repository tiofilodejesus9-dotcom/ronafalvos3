import React from 'react';
import { Target, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ronaf-navy text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="bg-white p-2 rounded-lg text-ronaf-navy">
                <Target className="h-6 w-6" />
               </div>
               <span className="text-2xl font-bold heading-font">
                RONAF <span className="text-ronaf-gold">ALVOS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Atingimos o seu alvo de forma rápida e segura. Soluções completas para empresas e particulares.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-ronaf-gold">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contactos</a></li>
            </ul>
          </div>

          {/* Services List (Short) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-ronaf-gold">Serviços Principais</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Constituição de Empresas</li>
              <li>Tratamento de Alvarás</li>
              <li>Inscrição INSS & SIGFE</li>
              <li>Serviços de Limpeza</li>
              <li>Faturação Certificada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} RONAF ALVOS. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-slate-800 hover:bg-ronaf-gold rounded-full text-white transition-all duration-300 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};