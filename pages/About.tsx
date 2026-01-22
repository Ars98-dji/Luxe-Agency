
import React from 'react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">L'Agence</h1>
          <p className="text-slate-500 max-w-xl mx-auto uppercase tracking-[0.2em] text-sm">Plus de 30 ans d'excellence immobilière</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-primary leading-tight">Notre mission : l'excellence sans compromis</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Fondée sur la conviction que chaque client mérite une attention exclusive, Luxe Agency s'est imposée comme le leader incontesté de l'immobilier de prestige au Bénin et à l'international.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nous comprenons que l'acquisition d'une propriété d'exception est bien plus qu'une simple transaction. C'est l'aboutissement d'une vision, une étape de vie majeure qui nécessite un accompagnement sur mesure, discret et hautement professionnel.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div className="space-y-2">
                <span className="text-4xl font-serif font-bold text-accent">15</span>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Agences mondiales</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-serif font-bold text-accent">120+</span>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Experts dédiés</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1000" 
              alt="Bureau de luxe" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary font-bold shadow-lg">LUXE</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bgLight px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-16">Nos Services Exclusifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Vente & Acquisition', desc: 'Une approche stratégique pour sécuriser les meilleurs actifs.' },
              { title: 'Gestion Privée', desc: 'Un entretien méticuleux de votre patrimoine immobilier.' },
              { title: 'Conseil en Investissement', desc: 'Analyse de marché et optimisation fiscale internationale.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
