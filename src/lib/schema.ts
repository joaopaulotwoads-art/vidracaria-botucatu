import { SITE } from '../data/site';
import { SERVICES, servicePath, type Service, type Faq } from '../data/services';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GlassAndMirrorShop',
    '@id': `${SITE.url}/#business`,
    name: SITE.shortName,
    // TODO: legalName, address e geo ainda são dados de exemplo em
    // src/data/site.ts (não confirmados pelo cliente). Só adicione esses
    // campos aqui depois que o cliente confirmar que são idênticos ao
    // Google Business Profile real.
    // NÃO adicionar aggregateRating/review até haver avaliações reais
    // (ver componente ReviewsSection, oculto até o cliente fornecer
    // depoimentos reais).
    description: SITE.description,
    url: `${SITE.url}/`,
    telephone: SITE.phoneE164,
    priceRange: SITE.priceRange,
    logo: `${SITE.url}/apple-touch-icon.png`,
    image: `${SITE.url}/og-default.jpg`,
    sameAs: [SITE.social.instagram, SITE.social.facebook],
    areaServed: [
      ...SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        geoRadius: '50000',
      },
    ],
    openingHoursSpecification: SITE.openingHoursSpecification,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de vidraçaria',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${SITE.url}${servicePath(service)}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.shortName,
    url: `${SITE.url}/`,
    publisher: { '@id': `${SITE.url}/#business` },
    inLanguage: 'pt-BR',
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.shortTitle,
    name: service.title,
    description: service.metaDescription,
    url: `${SITE.url}${servicePath(service)}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
  };
}

export function reviewsSchema(reviews: { name: string; rating: number; text: string }[]) {
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    '@context': 'https://schema.org',
    '@type': 'GlassAndMirrorShop',
    '@id': `${SITE.url}/#business`,
    name: SITE.shortName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(average.toFixed(1)),
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}

export function citySchema(cityName: string, cityPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Vidraçaria',
    name: `Serviços de vidraçaria em ${cityName}`,
    description: `Fabricação e instalação de vidro temperado sob medida (box de banheiro, espelhos, portas de vidro e outros) para ${cityName} e região, com visita técnica agendada a partir de Botucatu.`,
    url: `${SITE.url}${cityPath}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'City', name: cityName },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
