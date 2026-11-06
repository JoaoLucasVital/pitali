// Curadoria manual da home. Dados de vendas e catálogo ficam para outra etapa.
export const featuredLookbook = {
  enabled: true,
  heading: 'Em destaque',
  reference: 'https://21st.dev/@kedhareswer/components/runway-lookbook',
  selection: 'manual',
  looks: [
    {
      id: 'praia', name: 'Entre sol e movimento', category: 'Campanha Pitali',
      image: '/images/pitali-look-praia.webp', fallbackImage: '/images/pitali-hero-campanha-hq.webp',
      alt: 'Campanha Pitali na praia, com jaquetas rosa e cinza e shorts rosa e off-white.',
      pieces: [
        { image: '/images/jaqueta-rosa-recorte.webp', name: 'Jaqueta rosa', alt: 'Jaqueta rosa isolada da campanha.' },
        { image: '/images/short-rosa-recorte.webp', name: 'Short rosa', alt: 'Short rosa apresentado isoladamente.' },
        { image: '/images/jaqueta-cinza-recorte.webp', name: 'Jaqueta cinza', alt: 'Jaqueta cinza apresentada isoladamente.' },
        { image: '/images/short-off-white-recorte.webp', name: 'Short off-white', alt: 'Short off-white apresentado isoladamente.' },
      ],
    },
    {
      id: 'studio', name: 'Do seu jeito', category: 'Universo fitwear',
      image: '/images/pitali-look-studio.webp', fallbackImage: '/images/pitali-movimento.webp',
      alt: 'Modelos Pitali com camisetas brancas, short laranja e short vinho.',
      pieces: [
        { image: '/images/camiseta-branca-recorte.webp', name: 'Camiseta branca', alt: 'Camiseta branca apresentada isoladamente.' },
        { image: '/images/short-laranja-recorte.webp', name: 'Short laranja', alt: 'Short laranja apresentado isoladamente.' },
        { image: '/images/short-vinho-recorte.webp', name: 'Short vinho', alt: 'Short vinho apresentado isoladamente, vista traseira.' },
      ],
    },
  ],
} as const;
