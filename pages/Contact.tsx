
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-bgLight">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">Contactez-nous</h1>
          <p className="text-slate-500 max-w-2xl text-lg">Nos experts sont à votre disposition pour vous accompagner dans vos projets les plus ambitieux.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-primary mb-10">Dites-nous tout</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Nom complet</label>
                    <input className="border-b border-slate-200 focus:border-accent border-t-0 border-x-0 bg-transparent py-4 text-sm font-bold focus:ring-0 outline-none" placeholder="Jean Dupont" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
                    <input className="border-b border-slate-200 focus:border-accent border-t-0 border-x-0 bg-transparent py-4 text-sm font-bold focus:ring-0 outline-none" placeholder="jean@example.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Objet de votre demande</label>
                  <select className="border-b border-slate-200 focus:border-accent border-t-0 border-x-0 bg-transparent py-4 text-sm font-bold focus:ring-0 outline-none">
                    <option>Acquisition résidentielle</option>
                    <option>Vendre un bien</option>
                    <option>Investissement commercial</option>
                    <option>Estimation gratuite</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea className="border-b border-slate-200 focus:border-accent border-t-0 border-x-0 bg-transparent py-4 text-sm font-bold focus:ring-0 outline-none min-h-[150px] resize-none" placeholder="Votre message..."></textarea>
                </div>
                <button className="bg-primary text-white w-full md:w-auto px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-primary/20">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Siège Social</h3>
              <div className="space-y-4 text-slate-600">
                <p className="text-xl font-bold text-primary">Cotonou, Bénin</p>
                <p>Quartier Haie Vive, Rue 802</p>
                <p>Ouvert du Lundi au Samedi : 9h00 - 19h00</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Ligne Directe</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Téléphone / WhatsApp</p>
                    <p className="text-lg font-bold text-primary">+229 01 46 42 47 87</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</p>
                    <p className="text-lg font-bold text-primary">djivoedoarsene@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 h-64 rounded-2xl relative overflow-hidden flex items-center justify-center grayscale">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Map mockup" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-xl flex flex-col items-center gap-2">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                <p className="text-xs font-bold uppercase tracking-widest">Luxe Agency HQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
