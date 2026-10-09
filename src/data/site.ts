// Dados centrais do negócio. SUBSTITUA pelos dados reais antes de publicar
// (nome exato, endereço, telefone e CNPJ devem ser IDÊNTICOS aos do Google Business Profile).
export const SITE = {
  name: 'Vidraçaria Botucatu',
  legalName: 'Vidraçaria Botucatu Vidros e Espelhos Ltda',
  shortName: 'Vidraçaria Botucatu',
  tagline: 'Vidros e espelhos sob medida em Botucatu - SP',
  description:
    'Vidraçaria em Botucatu SP especializada em box de banheiro, espelhos, portas de vidro, fachadas comerciais e guarda-corpo. Orçamento rápido e instalação garantida.',
  url: 'https://www.vidracariabotucatu.com.br',
  phoneDisplay: '(14) 3815-0000',
  phoneE164: '+551438150000',
  whatsappDisplay: '(14) 99712-3456',
  whatsappNumber: '5514997123456',
  email: 'contato@vidracariabotucatu.com.br',
  address: {
    street: 'Rua Amando de Barros, 1255',
    neighborhood: 'Vila dos Lavradores',
    city: 'Botucatu',
    state: 'SP',
    stateFull: 'São Paulo',
    zip: '18602-410',
    country: 'BR',
  },
  geo: {
    lat: -22.8838,
    lng: -48.4453,
  },
  hours: [
    { days: 'Segunda a Sexta', time: '08:00 – 18:00' },
    { days: 'Sábado', time: '08:00 – 12:00' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  foundingYear: 2009,
  priceRange: '$$',
  areaServed: [
    'Botucatu',
    'Pardinho',
    'São Manuel',
    'Areiópolis',
    'Pratânia',
    'Anhembi',
    'Conchas',
    'Bofete',
  ],
  social: {
    instagram: 'https://www.instagram.com/vidracariabotucatu',
    facebook: 'https://www.facebook.com/vidracariabotucatu',
  },
  mapEmbedSrc:
    'https://www.google.com/maps?q=Botucatu,SP&output=embed',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;
