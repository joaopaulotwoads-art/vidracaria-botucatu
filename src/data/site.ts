// Dados centrais do negócio. SUBSTITUA pelos dados reais antes de publicar
// (nome exato, endereço, telefone e CNPJ devem ser IDÊNTICOS aos do Google Business Profile).
export const SITE = {
  name: 'Vidraçaria Botucatu',
  legalName: 'Vidraçaria Botucatu',
  shortName: 'Vidraçaria Botucatu',
  tagline: 'Vidros e espelhos sob medida em Botucatu SP',
  description:
    'Vidraçaria em Botucatu-SP: box para banheiro, espelhos, sacadas e vidro temperado sob medida. Orçamento pelo WhatsApp. Atendemos toda a região.',
  url: 'https://vidracariabotucatu.com.br',
  phoneDisplay: '(14) 98165-1674',
  phoneE164: '+5514981651674',
  whatsappDisplay: '(14) 98165-1674',
  whatsappNumber: '5514981651674',
  // TODO: email ainda é um dado de exemplo (não confirmado pelo cliente),
  // por isso continua removido da UI até ter um e-mail real confirmado.
  // Endereço confirmado pelo cliente em 2026-10-21 (real, usado no
  // schema.org e exibido publicamente no rodapé e na página de contato).
  // Geo: coordenadas aproximadas (nível de rua, via geocodificação), não
  // confirmadas no Google Business Profile — ajustar se o cliente tiver as
  // coordenadas exatas do GBP.
  email: 'contato@vidracariabotucatu.com.br',
  address: {
    street: 'R. Mario Guimarães, 578',
    neighborhood: 'Vila Nova',
    city: 'Botucatu',
    state: 'SP',
    stateFull: 'São Paulo',
    zip: '18608-230',
    country: 'BR',
  },
  geo: {
    lat: -22.866,
    lng: -48.4565,
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
  experienceYears: 15,
  priceRange: 'R$$',
  areaServed: [
    'Botucatu',
    'Pardinho',
    'São Manuel',
    'Itatinga',
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
    'https://www.google.com/maps?q=R.+Mario+Guimar%C3%A3es,+578+-+Vila+Nova,+Botucatu+-+SP,+18608-230&output=embed',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos/', label: 'Serviços' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/contato/', label: 'Contato' },
] as const;
