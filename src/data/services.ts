import type { ImageMetadata } from 'astro';
import boxBanheiro from '../assets/images/box-banheiro-vidro-temperado-botucatu-sp.jpg';
import espelho from '../assets/images/espelho-sob-medida-botucatu-sp.jpg';
import portaVidro from '../assets/images/porta-vidro-temperado-botucatu-sp.jpg';
import fachadaComercial from '../assets/images/fachada-comercial-vidro-botucatu-sp.jpg';
import guardaCorpo from '../assets/images/guarda-corpo-vidro-escada-botucatu-sp.jpg';
import vidroTemperadoTampo from '../assets/images/vidro-temperado-tampo-mesa-botucatu-sp.jpg';
import envidracamentoSacada from '../assets/images/envidracamento-sacada-cortina-vidro-botucatu-sp.jpg';

export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: ImageMetadata;
  heroImageAlt: string;
  summary: string;
  intro: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: Faq[];
};

export const SERVICES: Service[] = [
  {
    slug: 'box-de-banheiro',
    title: 'Box de Banheiro em Botucatu',
    shortTitle: 'Box de Banheiro',
    metaTitle: 'Box para Banheiro em Botucatu | Vidro Temperado Sob Medida',
    metaDescription:
      'Box de vidro temperado sob medida em Botucatu: modelos de correr, de abrir e até o teto. Instalação profissional e orçamento rápido pelo WhatsApp.',
    heroImage: boxBanheiro,
    heroImageAlt:
      'Box de banheiro de vidro temperado instalado em banheiro moderno com acabamento em branco',
    summary:
      'Box de vidro temperado sob medida, com instalação rápida e vedação que evita vazamento de água.',
    intro: [
      'O box de banheiro é o acabamento que mais valoriza a reforma do banheiro. Trabalhamos com vidro temperado de 8mm, testado e certificado, cortado sob medida para o seu espaço, sem folgas, sem vazamento e com acabamento profissional.',
      'Atendemos Botucatu e região com visita técnica para medição, projeto do box (de abrir, correr ou fixo) e instalação em até 7 dias após o fechamento do pedido.',
    ],
    benefits: [
      'Vidro temperado de 8mm, 3 a 5x mais resistente que o vidro comum',
      'Opções incolor, fumê, verde ou jateado',
      'Perfis em alumínio branco, preto ou anodizado',
      'Vedação com silicone estrutural antivazamento',
      'Garantia de instalação e do material',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos o espaço do seu banheiro gratuitamente e tiramos todas as dúvidas no local.' },
      { title: 'Orçamento e projeto', description: 'Você recebe o valor fechado e escolhe o tipo de vidro e o modelo do box.' },
      { title: 'Fabricação sob medida', description: 'O vidro é temperado e cortado exatamente nas medidas do seu banheiro.' },
      { title: 'Instalação', description: 'Nossa equipe instala o box e já deixa pronto para uso no mesmo dia.' },
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para instalar um box de banheiro?',
        answer:
          'Após a medição e aprovação do orçamento, a fabricação e instalação costumam levar de 5 a 7 dias úteis, dependendo do modelo escolhido.',
      },
      {
        question: 'Qual a diferença entre box de abrir e box de correr?',
        answer:
          'O box de correr economiza espaço e é indicado para banheiros menores. O box de abrir tem abertura total, facilita a limpeza e costuma ser preferido em banheiros maiores.',
      },
      {
        question: 'O vidro do box pode quebrar com facilidade?',
        answer:
          'Não. Usamos vidro temperado, que passa por tratamento térmico e se torna muito mais resistente a impactos do que o vidro comum, além de ser mais seguro caso se quebre.',
      },
    ],
  },
  {
    slug: 'espelhos',
    title: 'Espelhos Sob Medida em Botucatu',
    shortTitle: 'Espelhos',
    metaTitle: 'Espelhos Sob Medida em Botucatu | Banheiro e Decoração',
    metaDescription:
      'Espelhos sob medida em Botucatu para banheiro, sala, quarto e academia. Bisotê, LED e lapidação. Peça seu orçamento sem compromisso pelo WhatsApp.',
    heroImage: espelho,
    heroImageAlt:
      'Espelho grande sob medida instalado acima da pia em banheiro moderno',
    summary:
      'Espelhos cortados e lapidados sob medida para banheiro, sala, academia, closet e salões.',
    intro: [
      'Fabricamos e instalamos espelhos sob medida para qualquer ambiente: banheiros, salas, academias, estúdios de dança, salões de beleza e closets. Cortamos no formato que você precisar: retangular, redondo, oval ou com bordas lapidadas.',
      'Trabalhamos com espelhos de diferentes espessuras e acabamentos, incluindo bordas polidas, chanfradas ou com friso decorativo.',
    ],
    benefits: [
      'Corte sob medida em qualquer formato',
      'Bordas lapidadas, polidas ou chanfradas',
      'Fixação com cola própria ou parafusos, conforme o ambiente',
      'Espelhos para academias e estúdios com fixação reforçada',
      'Entrega e instalação em toda Botucatu e região',
    ],
    process: [
      { title: 'Medição', description: 'Fazemos a medição precisa do espaço ou você nos envia as medidas desejadas.' },
      { title: 'Escolha do acabamento', description: 'Você escolhe espessura, formato e tipo de borda.' },
      { title: 'Corte e lapidação', description: 'O espelho é cortado e as bordas são lapidadas com segurança.' },
      { title: 'Instalação', description: 'Instalamos com o método de fixação mais adequado à parede e ao ambiente.' },
    ],
    faqs: [
      {
        question: 'Vocês cortam espelhos em formatos personalizados?',
        answer:
          'Sim. Cortamos espelhos em formato redondo, oval, com cantos arredondados ou qualquer desenho sob medida, conforme o projeto do ambiente.',
      },
      {
        question: 'O espelho pode ser instalado em qualquer parede?',
        answer:
          'Sim, desde que a parede esteja em boas condições. Avaliamos o tipo de parede na visita técnica para indicar o método de fixação mais seguro.',
      },
    ],
  },
  {
    slug: 'portas-de-vidro',
    title: 'Portas de Vidro em Botucatu',
    shortTitle: 'Portas de Vidro',
    metaTitle: 'Portas de Vidro em Botucatu SP | Vidraçaria Botucatu',
    metaDescription:
      'Portas de vidro temperado para residências e comércios em Botucatu: pivotante, de abrir ou automática. Projeto, fabricação e instalação.',
    heroImage: portaVidro,
    heroImageAlt:
      'Entrada de prédio moderno com porta de vidro temperado e estrutura em alumínio',
    summary:
      'Portas de vidro temperado para entradas residenciais e comerciais, com ou sem estrutura de alumínio.',
    intro: [
      'Fabricamos portas de vidro temperado para residências, escritórios, lojas e clínicas em Botucatu. Trabalhamos com porta de abrir, pivotante e sistemas automáticos, com ou sem caixilho de alumínio.',
      'O vidro temperado oferece segurança, transparência e uma entrada com visual mais moderno para o seu imóvel ou comércio.',
    ],
    benefits: [
      'Vidro temperado de 10mm para portas pivotantes',
      'Opção com ou sem estrutura de alumínio',
      'Fechaduras e molas hidráulicas de alta durabilidade',
      'Projeto para portas automáticas em comércios',
      'Atendimento residencial e comercial',
    ],
    process: [
      { title: 'Projeto', description: 'Avaliamos o vão e o uso da porta para indicar o sistema ideal.' },
      { title: 'Orçamento', description: 'Enviamos o orçamento detalhado com ferragens e prazo de entrega.' },
      { title: 'Fabricação', description: 'O vidro é temperado e furado conforme o sistema de ferragens escolhido.' },
      { title: 'Instalação', description: 'Instalamos e regulamos a porta, testando o fechamento e a segurança.' },
    ],
    faqs: [
      {
        question: 'Qual a espessura ideal para uma porta de vidro?',
        answer:
          'Para portas pivotantes residenciais e comerciais, recomendamos vidro temperado de 10mm. Para portas menores ou internas, 8mm pode ser suficiente. Avaliamos isso na visita técnica.',
      },
      {
        question: 'Vocês instalam portas automáticas de vidro?',
        answer:
          'Sim, projetamos e instalamos sistemas de portas automáticas de vidro para comércios, em parceria com fornecedores de motores e sensores homologados.',
      },
    ],
  },
  {
    slug: 'fachadas-comerciais',
    title: 'Fachadas e Vitrines Comerciais em Botucatu',
    shortTitle: 'Fachadas Comerciais',
    metaTitle: 'Fachadas Comerciais em Botucatu SP | Vidraçaria Botucatu',
    metaDescription:
      'Fachadas comerciais e vitrines de vidro em Botucatu para lojas, clínicas e escritórios. Projeto, fabricação e instalação com garantia.',
    heroImage: fachadaComercial,
    heroImageAlt:
      'Fachada comercial com vitrine de vidro e estrutura de alumínio em loja de rua',
    summary:
      'Fachadas e vitrines de vidro para lojas, clínicas e escritórios, com estrutura em alumínio.',
    intro: [
      'Uma fachada de vidro bem projetada aumenta a visibilidade e atrai mais clientes para o seu comércio. Desenvolvemos projetos de vitrines e fachadas para lojas, clínicas, escritórios e fachadas de prédios comerciais em Botucatu.',
      'Trabalhamos com vidro temperado e estrutura em alumínio, atendendo desde pequenas vitrines até fachadas completas.',
    ],
    benefits: [
      'Projeto personalizado para cada ponto comercial',
      'Vidro temperado com espessuras de 8mm a 12mm',
      'Estrutura em alumínio nas cores padrão ou sob medida',
      'Película de proteção solar e controle de luminosidade',
      'Instalação com equipe própria e garantia por escrito',
    ],
    process: [
      { title: 'Visita e projeto', description: 'Visitamos o local, tiramos medidas e elaboramos o projeto da fachada ou vitrine.' },
      { title: 'Aprovação', description: 'Você aprova o projeto, os materiais e o cronograma de instalação.' },
      { title: 'Fabricação', description: 'Produzimos os vidros e a estrutura de alumínio sob medida.' },
      { title: 'Instalação', description: 'Fazemos a instalação com o menor impacto possível no funcionamento do seu comércio.' },
    ],
    faqs: [
      {
        question: 'É possível instalar a fachada sem fechar a loja?',
        answer:
          'Em muitos casos sim. Planejamos a instalação por etapas ou fora do horário comercial para reduzir o impacto no funcionamento do seu negócio.',
      },
      {
        question: 'Vocês aplicam película nos vidros da fachada?',
        answer:
          'Sim, trabalhamos com películas de controle solar e privacidade, que ajudam a reduzir o calor interno e proteger a vitrine.',
      },
    ],
  },
  {
    slug: 'guarda-corpo-de-vidro',
    title: 'Guarda-Corpo de Vidro em Botucatu',
    shortTitle: 'Guarda-Corpo de Vidro',
    metaTitle: 'Guarda-Corpo de Vidro em Botucatu | Escadas e Sacadas',
    metaDescription:
      'Guarda-corpo de vidro temperado ou laminado em Botucatu para escadas, sacadas e mezaninos. Segurança e acabamento moderno. Orçamento pelo WhatsApp.',
    heroImage: guardaCorpo,
    heroImageAlt:
      'Escada moderna com guarda-corpo de vidro temperado e estrutura metálica',
    summary:
      'Guarda-corpo de vidro temperado para sacadas, escadas e piscinas, com fixação segura e certificada.',
    intro: [
      'O guarda-corpo de vidro traz segurança sem bloquear a vista, sendo ideal para sacadas, escadas, mezaninos e áreas de piscina. Utilizamos vidro temperado laminado, com espessura e fixação dimensionadas conforme a norma técnica de cada aplicação.',
      'Projetamos o guarda-corpo com perfil de alumínio, inox ou fixação por sapatas, de acordo com o estilo do seu projeto.',
    ],
    benefits: [
      'Vidro temperado laminado, mais seguro contra quedas',
      'Fixação por perfil U, sapatas ou spider conforme o projeto',
      'Indicado para sacadas, escadas, mezaninos e piscinas',
      'Acabamento em alumínio, inox ou vidro aparente',
      'Dimensionamento conforme o uso e altura da instalação',
    ],
    process: [
      { title: 'Avaliação técnica', description: 'Avaliamos a estrutura existente e o uso do guarda-corpo para indicar o sistema correto.' },
      { title: 'Projeto e orçamento', description: 'Definimos espessura do vidro, tipo de fixação e enviamos o orçamento.' },
      { title: 'Fabricação', description: 'O vidro laminado é produzido e furado conforme o sistema de fixação escolhido.' },
      { title: 'Instalação', description: 'Instalamos com nivelamento e testes de segurança antes da entrega final.' },
    ],
    faqs: [
      {
        question: 'Guarda-corpo de vidro é seguro para crianças?',
        answer:
          'Sim, quando o vidro e a fixação são dimensionados corretamente. Utilizamos vidro laminado, que permanece na estrutura mesmo se quebrado, reduzindo o risco de queda.',
      },
      {
        question: 'Posso usar guarda-corpo de vidro na piscina?',
        answer:
          'Sim, é uma das aplicações mais comuns. Recomendamos vidro temperado laminado com fixação por sapatas de alumínio ou inox, resistentes à umidade.',
      },
    ],
  },
  {
    slug: 'envidracamento-de-sacada',
    title: 'Envidraçamento de Sacada em Botucatu',
    shortTitle: 'Envidraçamento de Sacada',
    metaTitle: 'Envidraçamento de Sacada em Botucatu | Cortina de Vidro',
    metaDescription:
      'Envidraçamento de sacada em Botucatu com cortina de vidro temperado. Proteção contra vento, chuva e poeira sem perder a vista. Solicite seu orçamento.',
    heroImage: envidracamentoSacada,
    heroImageAlt:
      'Ambiente envidraçado com painéis de vidro do piso ao teto e vista para área externa arborizada',
    summary:
      'Cortina de vidro para sacadas e varandas, com proteção contra vento, chuva e poeira sem perder a vista.',
    intro: [
      'O envidraçamento de sacada fecha o espaço com vidro temperado sem obstruir a vista, protegendo a sacada contra vento, chuva, poeira e barulho externo. É uma das soluções mais procuradas para ganhar um ambiente extra em apartamentos e casas.',
      'Trabalhamos com sistemas de cortina de vidro retrátil (de correr) ou vidro fixo, em estrutura com ou sem perfil de alumínio, conforme o projeto da sacada e o regulamento do condomínio.',
    ],
    benefits: [
      'Cortina de vidro retrátil, abre totalmente para dias de sol',
      'Vidro temperado incolor para manter a vista livre',
      'Reduz entrada de vento, chuva, poeira e barulho da rua',
      'Trilhos em alumínio com baixo atrito e fácil deslizamento',
      'Projeto conforme as normas e o regulamento do condomínio',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos a sacada e avaliamos o regulamento do condomínio, quando aplicável.' },
      { title: 'Orçamento e projeto', description: 'Definimos o sistema de abertura e enviamos o orçamento detalhado.' },
      { title: 'Fabricação', description: 'O vidro temperado é cortado e os trilhos preparados sob medida para a sacada.' },
      { title: 'Instalação', description: 'Instalamos os painéis e testamos o deslizamento e a vedação antes da entrega.' },
    ],
    faqs: [
      {
        question: 'O envidraçamento de sacada precisa de aprovação do condomínio?',
        answer:
          'Na maioria dos condomínios sim, é preciso seguir o padrão definido em assembleia. Ajudamos a adequar o projeto às normas antes da instalação.',
      },
      {
        question: 'É possível abrir totalmente a sacada depois de envidraçada?',
        answer:
          'Sim. Com o sistema de cortina de vidro retrátil, os painéis deslizam e se recolhem lateralmente, liberando a abertura quase por completo.',
      },
      {
        question: 'O vidro da sacada embaça ou acumula água da chuva?',
        answer:
          'Não quando a instalação é bem feita. Usamos trilhos com pingadeira e vedação adequada para escoar a água e evitar infiltração.',
      },
    ],
  },
  {
    slug: 'vidro-temperado',
    title: 'Vidro Temperado e Tampos em Botucatu',
    shortTitle: 'Vidro Temperado e Tampos',
    metaTitle: 'Vidro Temperado em Botucatu | Portas, Janelas e Tampos',
    metaDescription:
      'Vidro temperado sob medida em Botucatu: portas, janelas, divisórias e tampos. Mais resistência e segurança para sua casa ou empresa. Fale conosco.',
    heroImage: vidroTemperadoTampo,
    heroImageAlt:
      'Mesa com tampo de vidro temperado e estrutura metálica em ambiente moderno',
    summary:
      'Vidro temperado sob medida para tampos de mesa, pias, prateleiras e divisórias internas.',
    intro: [
      'Cortamos e temperamos vidro sob medida para tampos de mesa, proteção de móveis, prateleiras, divisórias internas e bancadas. O vidro temperado é mais resistente a riscos e impactos do que o vidro comum, prolongando a vida útil dos seus móveis.',
      'Atendemos pedidos residenciais e comerciais, com prazos de entrega combinados conforme a espessura e o acabamento escolhido.',
    ],
    benefits: [
      'Corte sob medida para qualquer formato de móvel',
      'Espessuras de 4mm a 12mm, conforme o uso',
      'Bordas lapidadas e polidas',
      'Indicado para mesas, racks, prateleiras e bancadas',
      'Maior resistência a riscos e variações de temperatura',
    ],
    process: [
      { title: 'Medição', description: 'Você nos envia as medidas ou agendamos uma visita para medir o móvel.' },
      { title: 'Escolha da espessura', description: 'Indicamos a espessura ideal conforme o uso do tampo ou peça.' },
      { title: 'Corte e temperagem', description: 'O vidro é cortado, lapidado e temperado no formato definido.' },
      { title: 'Entrega', description: 'Entregamos ou instalamos a peça pronta, com todo o cuidado no transporte.' },
    ],
    faqs: [
      {
        question: 'Qual espessura usar em um tampo de mesa de jantar?',
        answer:
          'Para tampos de mesa de jantar, normalmente usamos vidro temperado de 8mm a 10mm, dependendo do tamanho da mesa e da estrutura de apoio.',
      },
      {
        question: 'O vidro temperado pode substituir o tampo de madeira de um móvel antigo?',
        answer:
          'Sim, é uma solução comum para proteger e dar um novo visual a móveis antigos, além de facilitar a limpeza do dia a dia.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
