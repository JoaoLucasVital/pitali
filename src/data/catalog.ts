export type CatalogProduct = {
  id: string;
  name: string;
  category: 'Jaquetas' | 'Shorts' | 'Camisetas';
  color: string;
  image: string;
  lookImage: string;
  view?: string;
};

// Curadoria visual. Preços, tamanhos e estoque entram com os dados da cliente.
// Para incluir fotos novas, adicione aqui o WebP isolado e a foto do look.
export const catalogProducts: readonly CatalogProduct[] = [
  { id: 'jaqueta-rosa', name: 'Jaqueta rosa', category: 'Jaquetas', color: 'Rosa', image: '/images/jaqueta-rosa-recorte.webp', lookImage: '/images/pitali-hero-campanha.webp' },
  { id: 'short-rosa', name: 'Short rosa', category: 'Shorts', color: 'Rosa', image: '/images/short-rosa-recorte.webp', lookImage: '/images/pitali-hero-campanha.webp' },
  { id: 'jaqueta-cinza', name: 'Jaqueta cinza', category: 'Jaquetas', color: 'Cinza', image: '/images/jaqueta-cinza-recorte.webp', lookImage: '/images/pitali-hero-campanha.webp' },
  { id: 'short-off-white', name: 'Short off-white', category: 'Shorts', color: 'Off-white', image: '/images/short-off-white-recorte.webp', lookImage: '/images/pitali-hero-campanha.webp' },
  { id: 'camiseta-branca', name: 'Camiseta branca', category: 'Camisetas', color: 'Branco', image: '/images/camiseta-branca-recorte.webp', lookImage: '/images/pitali-movimento.webp' },
  { id: 'short-laranja', name: 'Short laranja', category: 'Shorts', color: 'Laranja', image: '/images/short-laranja-recorte.webp', lookImage: '/images/pitali-movimento.webp' },
  { id: 'short-vinho', name: 'Short vinho', category: 'Shorts', color: 'Vinho', image: '/images/short-vinho-recorte.webp', lookImage: '/images/pitali-movimento.webp', view: 'Vista traseira' },
];
