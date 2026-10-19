import { SITE } from '../data/site';

export const DEFAULT_WHATSAPP_MESSAGE = `Olá, vim pelo site ${SITE.url}/ e quero um orçamento.`;

export function waLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappMessage(shortTitle: string): string {
  return `Olá, vim pelo site ${SITE.url}/ e quero orçamento de ${shortTitle}.`;
}
