// Dados centrais do negócio. SUBSTITUA pelos dados reais antes de publicar
// (nome exato, endereço, telefone e CNPJ devem ser IDÊNTICOS aos do Google Business Profile).
export const SITE = {
  name: 'Vidraçaria Botucatu',
  legalName: 'Vidraçaria Botucatu Vidros e Espelhos Ltda',
  shortName: 'Vidraçaria Botucatu',
  tagline: 'Vidros e espelhos sob medida em Botucatu - SP',
  description:
    'Vidraçaria em Botucatu-SP: box para banheiro, espelhos, sacadas e vidro temperado sob medida. Orçamento pelo WhatsApp. Atendemos toda a região.',
  url: 'https://vidracariabotucatu.com.br',
  phoneDisplay: '(14) 98165-1674',
  phoneE164: '+5514981651674',
  whatsappDisplay: '(14) 98165-1674',
  whatsappNumber: '5514981651674',
  // TODO: legalName, email, address e geo abaixo ainda são dados de exemplo
  // (não confirmados pelo cliente). Por isso NÃO são incluídos no schema.org
  // LocalBusiness (src/lib/schema.ts) — só volte a adicioná-los lá depois de
  // confirmar que são idênticos ao Google Business Profile real.
  // O endereço voltou a aparecer na UI (rodapé, /contato) a pedido do
  // cliente — troque pelo endereço real antes de publicar. O e-mail
  // continua removido da UI até ter um e-mail real confirmado.
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
    'https://www.google.com/maps?q=Botucatu,SP&output=embed',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;
