
import { Property } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'La Villa Azure',
    location: 'Cotonou, Bénin • Haie Vive',
    city: 'Cotonou',
    price: 1250000,
    beds: 5,
    baths: 6,
    sqft: 550,
    type: 'Villa',
    category: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Une prouesse architecturale située au cœur du quartier le plus prisé de Cotonou. Cette villa offre des volumes généreux et une finition haut de gamme.',
    features: ['Piscine à débordement', 'Domotique', 'Sécurité 24/7', 'Jardin paysager']
  },
  {
    id: '2',
    title: 'Penthouse Horizon',
    location: 'Paris, France • 8ème Arr.',
    city: 'Paris',
    price: 8500000,
    beds: 4,
    baths: 4,
    sqft: 320,
    type: 'Penthouse',
    category: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Surplombant la ville lumière, ce penthouse unique dispose d\'une terrasse panoramique avec vue imprenable sur la Tour Eiffel.',
    features: ['Terrasse plein ciel', 'Conciergerie', 'Cave à vin', 'Accès privé']
  },
  {
    id: '3',
    title: 'Le Belvédère Assinie',
    location: 'Assinie, Côte d\'Ivoire',
    city: 'Assinie',
    price: 950000,
    beds: 6,
    baths: 5,
    sqft: 480,
    type: 'Domaine',
    category: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    description: 'Une retraite paisible entre lagune et océan. Parfait pour les amateurs de nautisme et de tranquillité absolue.',
    features: ['Ponton privé', 'Cuisine extérieure', 'Espace Spa', 'Garage bateaux']
  },
  {
    id: '4',
    title: 'Résidence Impériale',
    location: 'Marrakech, Maroc',
    city: 'Marrakech',
    price: 3200000,
    beds: 7,
    baths: 8,
    sqft: 1200,
    type: 'Villa',
    category: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'Située dans la Palmeraie, cette propriété d\'exception allie style mauresque et confort moderne.',
    features: ['Hammam privé', 'Piscine chauffée', 'Cinéma privé', 'Terrain de tennis']
  },
  {
    id: '5',
    title: 'Loft Industriel Chic',
    location: 'Lomé, Togo • Cité OUA',
    city: 'Lomé',
    price: 450000,
    beds: 3,
    baths: 3,
    sqft: 210,
    type: 'Penthouse',
    category: 'Rent',
    imageUrl: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1200',
    description: 'Un espace de vie contemporain idéal pour les cadres dynamiques. Design minimaliste et lumineux.',
    features: ['Smart Home', 'Salle de fitness', 'Parking sous-sol', 'Vue mer']
  }
];
