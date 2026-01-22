
import React from 'react';
import { PROPERTIES } from '../constants';
import { Property, Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page, params?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featured = PROPERTIES.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: 'linear-gradient(rgba(10, 37, 92, 0.4), rgba(10, 37, 92, 0.2)), url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-accent font-bold uppercase tracking-[0.5em] text-xs mb-6">Expertise & Prestige</span>
          <h1 className="text-white text-4xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl">
            L'excellence immobilière à votre service
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl">
            Une sélection exclusive de résidences d'exception pour une clientèle exigeante.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => onNavigate('properties')}
              className="bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl"
            >
              Découvrir la collection
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="border border-white text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all"
            >
              Contactez un expert
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: '30+', label: 'Années d\'expérience' },
            { value: '2.5B€', label: 'Volume de ventes' },
            { value: '450+', label: 'Propriétés exclusives' },
            { value: '15', label: 'Pays couverts' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">{stat.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-6 md:px-20 bg-bgLight">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <h2 className="text-4xl font-bold text-primary">Biens d'Exception</h2>
            </div>
            <button 
              onClick={() => onNavigate('properties')}
              className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 hover:border-primary pb-1 transition-all"
            >
              Tout voir
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((p) => (
              <div 
                key={p.id} 
                onClick={() => onNavigate('detail', p)}
                className="property-card group cursor-pointer flex flex-col gap-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200 shadow-xl">
                  <div 
                    className="zoom-img absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                    style={{ backgroundImage: `url(${p.imageUrl})` }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tighter text-primary">{p.type}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-bold text-2xl">{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p.price)}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    {p.location}
                  </p>
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <span>{p.beds} Ch.</span>
                    <span>{p.baths} Sdb.</span>
                    <span>{p.sqft} m²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
              alt="Interieur de luxe" 
              className="rounded-xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">Notre Philosophie</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">L'art de vivre l'exceptionnel</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Chez Luxe Agency, nous ne vendons pas seulement des propriétés ; nous façonnons des modes de vie. Chaque demeure de notre collection est choisie pour son âme, son architecture et son potentiel unique.
            </p>
            <ul className="space-y-4 mb-10">
              {['Service de conciergerie personnalisé', 'Accès exclusif au marché "Off-Market"', 'Expertise juridique et fiscale internationale'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('about')}
              className="border border-white/30 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all"
            >
              Notre histoire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
