
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, params?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 md:px-20 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="text-primary">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17V17H30V30H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="text-xl font-black tracking-tighter text-primary uppercase">LUXE AGENCY</h1>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-10">
          {[
            { id: 'home', label: 'Accueil' },
            { id: 'properties', label: 'Propriétés' },
            { id: 'about', label: 'À Propos' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as Page)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent ${
                currentPage === item.id ? 'text-accent border-b-2 border-accent pb-1' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="hidden md:block rounded-full bg-primary px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-slate-900 shadow-lg shadow-primary/20"
          >
            Estimation
          </button>
          <button className="md:hidden p-2 text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
