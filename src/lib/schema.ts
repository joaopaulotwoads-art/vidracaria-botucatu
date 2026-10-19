import { SITE } from '../data/site';
import { servicePath, type Service, type Faq } from '../data/services';

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
    description: SITE.description,
    url: `${SITE.url}/`,
    telephone: SITE.phoneE164,
    priceRange: SITE.priceRange,
    logo: `${SITE.url}/apple-touch-icon.png`,
    image: `${SITE.url}/og-default.jpg`,
    sameAs: [SITE.social.instagram, SITE.social.facebook],
    areaServed: SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
    openingHoursSpecification: SITE.openingHoursSpecification,
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
