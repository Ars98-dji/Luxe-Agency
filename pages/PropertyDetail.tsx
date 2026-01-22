
import React from 'react';
import { Property, Page } from '../types';

interface PropertyDetailProps {
  property: Property;
  onNavigate: (page: Page) => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onNavigate }) => {
  return (
    <div className="min-h-screen bg-bgLight">
      <div className="relative h-[70vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${property.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <button 
          onClick={() => onNavigate('properties')}
          className="absolute top-8 left-8 md:left-20 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white hover:text-primary transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Retour aux biens</span>
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 -mt-32 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-[0.2em]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                    {property.location}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary">{property.title}</h1>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light text-accent">
                    {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.price)}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Ref: LUXE-{property.id}00{property.id}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-b border-slate-100">
                {[
                  { label: 'Chambres', value: property.beds, icon: 'bed' },
                  { label: 'Salles de Bain', value: property.baths, icon: 'hot_tub' },
                  { label: 'Surface', value: `${property.sqft} m²`, icon: 'square_foot' },
                  { label: 'Type', value: property.type, icon: 'home' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2">
                    <span className="text-xl font-bold text-primary">{item.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="py-10 space-y-6">
                <h3 className="text-2xl font-bold text-primary">À propos de cette propriété</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>

              <div className="pt-10 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-8">Équipements & Caractéristiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-primary p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-2xl font-bold mb-6">Contactez un expert</h4>
                <p className="text-white/70 text-sm mb-8">Intéressé par ce bien ? Nos conseillers sont à votre disposition pour organiser une visite privée.</p>
                <form className="space-y-4">
                  <input className="w-full bg-white/10 border-none rounded-lg p-4 text-sm focus:ring-accent" placeholder="Nom complet" type="text" />
                  <input className="w-full bg-white/10 border-none rounded-lg p-4 text-sm focus:ring-accent" placeholder="Email" type="email" />
                  <textarea className="w-full bg-white/10 border-none rounded-lg p-4 text-sm focus:ring-accent resize-none" placeholder="Message" rows={4}></textarea>
                  <button className="w-full bg-accent text-primary font-bold py-4 rounded-lg uppercase tracking-widest text-xs hover:bg-white transition-all">
                    Envoyer la demande
                  </button>
                </form>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="font-bold text-primary mb-4">Informations</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-slate-400">Statut</span>
                    <span className="font-bold text-green-600">Disponible</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-slate-400">Taxe foncière</span>
                    <span className="font-bold">Sur demande</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
