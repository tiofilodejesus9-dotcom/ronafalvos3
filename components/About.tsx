import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ronaf-gold font-bold tracking-wider uppercase text-sm">Quem Somos</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold heading-font text-ronaf-navy">
            Excelência e Compromisso
          </h2>
          <div className="w-24 h-1 bg-ronaf-gold mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-ronaf-blue/10 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ronaf-gold/10 rounded-full z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
               alt="Team Working" 
               className="relative z-10 rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
             />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ronaf-blue">RONAF ALVOS</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Somos uma empresa dedicada a simplificar a burocracia e potencializar o crescimento dos nossos clientes. Com foco em resultados rápidos e seguros, tratamos de toda a documentação legal da sua empresa, desde a constituição até à gestão diária.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Além dos serviços administrativos, oferecemos soluções práticas como limpezas profissionais e fornecimento de materiais, garantindo que o seu foco permaneça apenas no crescimento do seu negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
               <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Target className="w-8 h-8 text-ronaf-gold mx-auto mb-2" />
                  <h4 className="font-bold text-ronaf-navy">Foco</h4>
               </div>
               <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-ronaf-blue mx-auto mb-2" />
                  <h4 className="font-bold text-ronaf-navy">Segurança</h4>
               </div>
               <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Zap className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <h4 className="font-bold text-ronaf-navy">Rapidez</h4>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};