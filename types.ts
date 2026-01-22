
export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Penthouse' | 'Domaine';
  category: 'Buy' | 'Rent';
  imageUrl: string;
  description: string;
  features: string[];
}

export type Page = 'home' | 'properties' | 'about' | 'contact' | 'detail';
