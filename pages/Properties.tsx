
import React, { useState, useMemo } from 'react';
import { PROPERTIES } from '../constants';
import { Property, Page } from '../types';

interface PropertiesProps {
  onNavigate: (page: Page, params?: any) => void;
}

const Properties: React.FC<PropertiesProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterCity, setFilterCity] = useState<string>('all');

  const cities = useMemo(() => Array.from(new Set(PROPERTIES.map(p => p.city))), []);
  const types = useMemo(() => Array.from(new Set(PROPERTIES.map(p => p.type))), []);

  const filtered = PROPERTIES.filter(p => {
    return (filterType === 'all' || p.type === filterType) &&
           (filterCity === 'all' || p.city === filterCity);
  });

  return (
    <div className="min-h-screen py-16 bg-bgLight px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 mb-16">
          <h1 className="text-5xl font-bold text-primary">Collection Exclusive</h1>
          <p className="text-slate-500 max-w-xl">Parcourez notre catalogue méticuleusement sélectionné de propriétés d'exception à travers le monde.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-12 flex flex-wrap gap-8 items-center">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Type de bien</label>
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border-none bg-slate-50 rounded-lg p-3 text-sm font-bold focus:ring-accent"
            >
              <option value="all">Tous les types</option>
              {types.map(t => <option key={t} value={t}>{t}s</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2 min-w-[200px]">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Localisation</label>
            <select 
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="border-none bg-slate-50 rounded-lg p-3 text-sm font-bold focus:ring-accent"
            >
              <option value="all">Toutes les villes</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="ml-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {filtered.length} résultats trouvés
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filtered.map((p) => (
            <div 
              key={p.id} 
              onClick={() => onNavigate('detail', p)}
              className="property-card group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200 shadow-lg">
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

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <h2 className="text-2xl font-bold text-slate-400">Aucun bien ne correspond à vos critères</h2>
            <button 
              onClick={() => { setFilterType('all'); setFilterCity('all'); }}
              className="mt-4 text-accent font-bold uppercase text-xs border-b border-accent"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
