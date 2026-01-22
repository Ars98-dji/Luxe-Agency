
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 48 48">
                <path d="M4 4H17V17H30V30H44V44H4V4Z" fill="currentColor"></path>
              </svg>
              <h3 className="text-lg font-black tracking-tighter uppercase">LUXE AGENCY</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              L'autorité mondiale du marketing et de l'acquisition de propriétés de prestige depuis plus de trois décennies.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Menu</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white transition-colors">Accueil</button>
              <button onClick={() => onNavigate('properties')} className="text-left hover:text-white transition-colors">Nos Biens</button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-white transition-colors">L'Agence</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Développeur</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p className="font-bold text-white">DJIVOEDO Arsène</p>
              <p className="text-xs italic">Développeur Fullstack (React / FastAPI / Django)</p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                djivoedoarsene@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +229 01 46 42 47 87
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Localisation</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p>Bénin, Afrique de l'Ouest</p>
              <p className="text-xs">Services disponibles à l'international.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          <p>© 2024 LUXE AGENCY INTERNATIONAL REALTY.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent">Mentions Légales</a>
            <a href="#" className="hover:text-accent">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
