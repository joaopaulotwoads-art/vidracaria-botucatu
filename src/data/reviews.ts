export type Review = {
  name: string;
  rating: number;
  text: string;
  service?: string;
};

// Vazio até o cliente fornecer depoimentos reais de clientes.
// Quando preenchido, o componente ReviewsSection.astro passa a exibir
// a seção na home automaticamente e a incluir o schema Review/AggregateRating.
export const REVIEWS: Review[] = [];
