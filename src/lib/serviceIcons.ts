// Ícones simples (stroke, 24x24) usados ao lado do título nos cards de serviço.
// Agrupados por forma/categoria visual, não um desenho único por serviço.
export type IconKey = 'droplet' | 'mirror' | 'door' | 'window' | 'storefront' | 'rail' | 'roof' | 'wrench';

const ICONS: Record<IconKey, string[]> = {
  droplet: ['M12 3c-3.2 4-5.5 7.2-5.5 10.3a5.5 5.5 0 0 0 11 0C17.5 10.2 15.2 7 12 3Z'],
  mirror: ['M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z', 'M9.5 6.5v11'],
  door: ['M5 3h14v18H5V3Z', 'M15.5 12a1 1 0 1 0 0-2'],
  window: ['M4 4h16v16H4V4Z', 'M12 4v16', 'M4 12h16'],
  storefront: ['M4 5h16v15H4V5Z', 'M4 10h16', 'M9 10v10', 'M15 10v10'],
  rail: ['M4 6h16', 'M6 6v14', 'M12 6v14', 'M18 6v14'],
  roof: ['M3 12 12 5l9 7', 'M5 12v7h14v-7'],
  wrench: ['M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z'],
};

const SERVICE_ICON: Record<string, IconKey> = {
  'box-de-banheiro': 'droplet',
  'espelhos': 'mirror',
  'portas-de-vidro': 'door',
  'fachadas-comerciais': 'storefront',
  'guarda-corpo-de-vidro': 'rail',
  'envidracamento-de-sacada': 'window',
  'vidro-temperado': 'window',
  'cobertura-de-vidro': 'roof',
  'janelas-de-vidro': 'window',
  'esquadrias-de-aluminio': 'door',
  'parede-de-vidro': 'window',
  'manutencao-de-box': 'wrench',
};

export function getServiceIconPaths(slug: string): string[] {
  const key = SERVICE_ICON[slug] ?? 'window';
  return ICONS[key];
}
