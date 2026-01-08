import React, { useState } from 'react';
import { Menu, X, Target } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Vantagens', href: '#por-que-nos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-ronaf-blue text-white' : 'bg-white text-ronaf-blue'}`}>
              <Target className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold heading-font tracking-tight ${
              isScrolled ? 'text-ronaf-navy' : 'text-white'
            }`}>
              RONAF <span className="text-ronaf-gold">ALVOS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-ronaf-gold ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-md ${
                isScrolled 
                  ? 'bg-ronaf-blue text-white hover:bg-ronaf-navy' 
                  : 'bg-white text-ronaf-blue hover:bg-slate-100'
              }`}
            >
              Fale Connosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-ronaf-blue hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};