import React from 'react';
import { 
  Building2, 
  FileCheck, 
  Users, 
  CreditCard, 
  Sparkles, 
  PenTool, 
  Receipt, 
  Package
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Constituição de Empresas",
    description: "Tratamos de todo o processo legal e burocrático para a abertura da sua empresa."
  },
  {
    icon: <FileCheck className="w-10 h-10" />,
    title: "Alvará Comercial",
    description: "Tratamento de Alvará Comercial e de Prestação de Serviços com máxima agilidade."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Abertura na INSS",
    description: "Regularização completa e inscrição da empresa e funcionários na Segurança Social."
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Conta no SIGFE",
    description: "Inserção do número de conta no SIGFE para recebimento por ordem de saque."
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Serviços de Limpeza",
    description: "Higienização profissional para casas, ruas, escolas, hospitais e empresas."
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Logotipo e Carimbo",
    description: "Criação de identidade visual profissional, logotipos e carimbos empresariais."
  },
  {
    icon: <Receipt className="w-10 h-10" />,
    title: "Emissão de Fatura AGT",
    description: "Software e emissão de faturas certificadas e reconhecidas pela AGT."
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Fornecimento de Material",
    description: "Fornecimento completo de material escolar, hospitalar e de escritório."
  }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-ronaf-blue font-bold tracking-wider uppercase text-sm">O Que Fazemos</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold heading-font text-ronaf-navy">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Da legalização ao suporte operacional: tudo o que a sua empresa precisa num só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-ronaf-blue mb-6 group-hover:bg-ronaf-blue group-hover:text-white transition-colors duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-ronaf-navy mb-3 group-hover:text-ronaf-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};