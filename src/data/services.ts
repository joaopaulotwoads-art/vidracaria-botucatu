import type { ImageMetadata } from 'astro';
import boxBanheiro from '../assets/images/box-banheiro-vidro-temperado-botucatu-sp.jpg';
import espelho from '../assets/images/espelho-sob-medida-botucatu-sp.jpg';
import portaVidro from '../assets/images/porta-vidro-temperado-botucatu-sp.jpg';
import fachadaComercial from '../assets/images/fachada-comercial-vidro-botucatu-sp.jpg';
import guardaCorpo from '../assets/images/guarda-corpo-vidro-escada-botucatu-sp.jpg';
import vidroTemperadoTampo from '../assets/images/vidro-temperado-tampo-mesa-botucatu-sp.jpg';
import envidracamentoSacada from '../assets/images/envidracamento-sacada-cortina-vidro-botucatu-sp.jpg';
import coberturaVidro from '../assets/images/cobertura-vidro-residencial-botucatu-sp.jpg';
import paredeVidro from '../assets/images/sobre-vidracaria-fachada-botucatu-sp.jpg';

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
  typesAndThickness: string[];
  priceFactors: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  careTips: string[];
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
      'Box de banheiro de vidro temperado com perfil preto instalado em banheiro com revestimento em mármore',
    summary:
      'Box de vidro temperado sob medida, com instalação rápida e vedação que evita vazamento de água.',
    intro: [
      'O box de banheiro é o acabamento que mais valoriza a reforma do banheiro. Trabalhamos com vidro temperado de 8mm, de fornecedor com procedência, cortado sob medida para o seu espaço, sem folgas, sem vazamento e com acabamento profissional.',
      'Atendemos Botucatu e região com visita técnica para medição, projeto do box (de abrir, correr ou fixo) e instalação em até 7 dias após o fechamento do pedido.',
      'Se você está reformando o banheiro, também fabricamos <a href="/espelhos/" class="font-semibold text-brand-600 hover:underline">espelhos sob medida</a> e outras peças em <a href="/vidro-temperado/" class="font-semibold text-brand-600 hover:underline">vidro temperado</a> para completar o ambiente.',
    ],
    typesAndThickness: [
      'Vidro temperado de 8mm (padrão) ou 10mm para vãos maiores',
      'Modelo de correr (2 ou 3 folhas), de abrir (com ou sem fixo) ou de canto (L)',
      'Acabamento incolor, fumê, verde ou jateado (fosco)',
      'Perfil de alumínio branco, preto ou anodizado, ou sistema sem perfil (só roldana e trilho)',
    ],
    priceFactors: [
      'Metragem do vão (largura x altura) a ser fechado',
      'Espessura do vidro (8mm ou 10mm)',
      'Modelo: box de correr costuma sair mais em conta que box de abrir com fixo',
      'Acabamento do vidro (incolor é o mais simples; jateado e fumê custam mais)',
      'Tipo de perfil (com perfil de alumínio ou sistema sem perfil)',
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
    careTips: [
      'Limpe com rodinho após o banho para evitar manchas de água',
      'Use pano macio e detergente neutro; evite esponjas abrasivas',
      'Lubrifique a roldana a cada poucos meses para o box deslizar sem travar',
      'Verifique a borracha de vedação periodicamente',
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
      {
        question: 'O box de banheiro pode ser instalado em qualquer tipo de banheiro?',
        answer:
          'Sim, adaptamos o projeto ao tamanho e ao formato do banheiro, incluindo banheiros pequenos ou com formato irregular.',
      },
      {
        question: 'Preciso tirar as medidas antes de pedir o orçamento?',
        answer:
          'Não precisa. Fazemos a visita técnica gratuita para medir o espaço com precisão antes de fechar o orçamento.',
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
      'Está reformando o banheiro? Também fabricamos <a href="/box-de-banheiro/" class="font-semibold text-brand-600 hover:underline">box de banheiro em vidro temperado</a> sob medida, além de outras peças em <a href="/vidro-temperado/" class="font-semibold text-brand-600 hover:underline">vidro temperado</a> para o mesmo ambiente.',
    ],
    typesAndThickness: [
      'Espelho prata (padrão) ou bronze/fumê para ambientes mais aquecidos visualmente',
      'Espessuras de 4mm (uso decorativo) a 6mm (academias e uso intenso)',
      'Bordas lapidadas retas, chanfradas (bisotadas) ou com friso',
      'Espelho com LED embutido na borda, sob encomenda',
    ],
    priceFactors: [
      'Área total do espelho (m²)',
      'Espessura escolhida (4mm, 5mm ou 6mm)',
      'Tipo de borda (reta é mais simples; lapidada/bisotada tem mais trabalho)',
      'Formato: cortes retos custam menos que formatos redondos ou personalizados',
      'Se tem LED embutido ou não',
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
    careTips: [
      'Limpe com pano macio e produto específico para espelhos (evite excesso de água na borda)',
      'Não use produtos à base de amônia em espelhos antigos ou com borda não vedada',
      'Em banheiros, garanta ventilação para evitar oxidação da parte posterior',
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
      {
        question: 'Qual espessura de espelho é indicada para banheiro?',
        answer:
          'Para a maioria dos banheiros, o espelho de 4mm já atende bem. Em espelhos muito grandes, recomendamos 5mm ou 6mm para mais rigidez.',
      },
      {
        question: 'O espelho pode manchar com a umidade do banheiro?',
        answer:
          'Com boa ventilação e instalação correta, o risco é baixo. Evitamos deixar as bordas sem vedação em ambientes muito úmidos.',
      },
      {
        question: 'Vocês instalam espelho com iluminação de LED?',
        answer:
          'Sim, fazemos espelhos com LED embutido na borda, sob encomenda, para banheiros, closets e salões de beleza.',
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
      'Porta de vidro de correr com estrutura em alumínio branco e bandeira superior em entrada residencial',
    summary:
      'Portas de vidro temperado para entradas residenciais e comerciais, com ou sem estrutura de alumínio.',
    intro: [
      'Fabricamos portas de vidro temperado para residências, escritórios, lojas e clínicas em Botucatu. Trabalhamos com porta de abrir, pivotante e sistemas automáticos, com ou sem caixilho de alumínio.',
      'O vidro temperado oferece segurança, transparência e uma entrada com visual mais moderno para o seu imóvel ou comércio.',
      'Para comércios, também desenvolvemos projetos de <a href="/fachadas-comerciais/" class="font-semibold text-brand-600 hover:underline">fachadas e vitrines de vidro</a>, e para áreas internas com desnível, <a href="/guarda-corpo-de-vidro/" class="font-semibold text-brand-600 hover:underline">guarda-corpo de vidro</a>.',
    ],
    typesAndThickness: [
      'Vidro temperado de 8mm (porta interna) ou 10mm (porta pivotante/entrada)',
      'Sistemas de abrir, pivotante, de correr ou automático',
      'Com caixilho de alumínio ou minimalista (só ferragem, sem caixilho)',
      'Incolor, fumê ou jateado para mais privacidade',
    ],
    priceFactors: [
      'Tamanho e número de folhas da porta',
      'Espessura do vidro (8mm ou 10mm)',
      'Tipo de ferragem: molas hidráulicas e fechaduras de alta durabilidade custam mais que dobradiças simples',
      'Com ou sem caixilho de alumínio',
      'Sistema automático (motor e sensores) custa bem mais que porta manual',
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
    careTips: [
      'Lubrifique dobradiças e molas hidráulicas periodicamente',
      'Limpe os trilhos da porta de correr para não acumular sujeira',
      'Evite bater a porta com força, mesmo sendo vidro temperado',
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
      {
        question: 'A porta de vidro oferece a mesma segurança que uma porta de madeira?',
        answer:
          'O vidro temperado é resistente a impactos, mas para portas de entrada residencial recomendamos avaliar fechaduras reforçadas junto com o vidro.',
      },
      {
        question: 'É possível colocar película nas portas de vidro para mais privacidade?',
        answer:
          'Sim, aplicamos película jateada ou fumê para reduzir a visibilidade sem perder a entrada de luz.',
      },
      {
        question: 'Quanto tempo leva a fabricação de uma porta de vidro sob medida?',
        answer:
          'Depende do sistema escolhido, mas em geral a fabricação leva alguns dias úteis após a aprovação do orçamento e das medidas finais.',
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
      'Além da fachada, também fabricamos <a href="/portas-de-vidro/" class="font-semibold text-brand-600 hover:underline">portas de vidro</a> para a entrada do seu comércio e peças em <a href="/vidro-temperado/" class="font-semibold text-brand-600 hover:underline">vidro temperado</a> sob medida para balcões e divisórias.',
    ],
    typesAndThickness: [
      'Vidro temperado de 8mm a 12mm, conforme o vão e a altura',
      'Vidro laminado para vãos muito grandes ou acima do térreo',
      'Estrutura em alumínio padrão ou perfil estrutural (fachada sem caixilho aparente)',
      'Película de controle solar incolor ou espelhada',
    ],
    priceFactors: [
      'Metragem total da fachada ou vitrine',
      'Altura do pé-direito (vãos muito altos pedem vidro laminado, mais caro)',
      'Tipo de estrutura (alumínio padrão x perfil estrutural sem caixilho aparente)',
      'Se inclui película de controle solar',
      'Complexidade da instalação (fachada térrea x prédio)',
    ],
    benefits: [
      'Projeto personalizado para cada ponto comercial',
      'Vidro temperado com espessuras de 8mm a 12mm',
      'Estrutura em alumínio nas cores padrão ou sob medida',
      'Película de proteção solar e controle de luminosidade',
      'Instalação feita pelo próprio vidraceiro, com garantia por escrito',
    ],
    process: [
      { title: 'Visita e projeto', description: 'Visitamos o local, tiramos medidas e elaboramos o projeto da fachada ou vitrine.' },
      { title: 'Aprovação', description: 'Você aprova o projeto, os materiais e o cronograma de instalação.' },
      { title: 'Fabricação', description: 'Produzimos os vidros e a estrutura de alumínio sob medida.' },
      { title: 'Instalação', description: 'Fazemos a instalação com o menor impacto possível no funcionamento do seu comércio.' },
    ],
    careTips: [
      'Limpeza regular (interna e externa) para manter a transparência da vitrine',
      'Verifique a vedação de silicone anualmente, principalmente em fachadas expostas à chuva',
      'Revise a estrutura de alumínio se notar folga ou ruído',
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
      {
        question: 'Fachadas de vidro precisam de manutenção frequente?',
        answer:
          'A limpeza regular é o principal cuidado. Revisões na vedação e na estrutura de alumínio podem ser feitas uma vez por ano.',
      },
      {
        question: 'Vocês atendem fachadas de lojas pequenas, não só prédios grandes?',
        answer:
          'Sim, atendemos desde pequenas vitrines de loja até fachadas comerciais completas.',
      },
      {
        question: 'O vidro da fachada pode ser trocado se quebrar?',
        answer:
          'Sim, fazemos a substituição do painel danificado, mantendo a mesma estrutura de alumínio sempre que possível.',
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
      'Sacada de casa com guarda-corpo de vidro temperado e estrutura em alumínio branco',
    summary:
      'Guarda-corpo de vidro temperado para sacadas, escadas e piscinas, com fixação segura e dimensionada conforme a norma técnica.',
    intro: [
      'O guarda-corpo de vidro traz segurança sem bloquear a vista, sendo ideal para sacadas, escadas, mezaninos e áreas de piscina. Utilizamos vidro temperado laminado, com espessura e fixação dimensionadas conforme a norma técnica de cada aplicação.',
      'Projetamos o guarda-corpo com perfil de alumínio, inox ou fixação por sapatas, de acordo com o estilo do seu projeto.',
      'Para sacadas, também fazemos <a href="/envidracamento-de-sacada/" class="font-semibold text-brand-600 hover:underline">envidraçamento com cortina de vidro</a>, e para áreas gourmet e varandas, <a href="/cobertura-de-vidro/" class="font-semibold text-brand-600 hover:underline">cobertura de vidro</a> sob medida.',
    ],
    typesAndThickness: [
      'Vidro laminado 8mm (2 lâminas de 4mm) ou 10mm, conforme altura e norma',
      'Fixação por perfil U embutido, sapatas (spigots) ou sistema spider',
      'Com corrimão em alumínio ou inox, ou só vidro (full glass)',
    ],
    priceFactors: [
      'Metragem linear do guarda-corpo',
      'Altura exigida pela norma técnica do local',
      'Tipo de fixação (perfil U é mais em conta que sistema spider)',
      'Se tem corrimão em alumínio/inox',
      'Espessura do vidro laminado (8mm x 10mm)',
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
    careTips: [
      'Limpe com produto neutro; evite objetos pontiagudos encostados no vidro',
      'Verifique anualmente o aperto das sapatas ou do perfil de fixação',
      'Fique atento a trincas, mesmo pequenas — vidro laminado trincado deve ser avaliado',
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
      {
        question: 'Qual a altura mínima exigida para guarda-corpo de vidro?',
        answer:
          'A altura varia conforme a norma técnica aplicável ao uso (residencial, sacada, escada ou piscina). Definimos isso na visita técnica.',
      },
      {
        question: 'O guarda-corpo de vidro pode ser instalado em casa já pronta?',
        answer:
          'Sim, a instalação é feita sobre a estrutura existente, sem necessidade de obra, desde que a base suporte a fixação.',
      },
      {
        question: 'Vidro laminado quebra mais fácil que o temperado comum?',
        answer:
          'Não. O laminado é tão resistente quanto o temperado, com a vantagem de não se soltar em cacos caso trinque.',
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
      'Se a sacada tem peitoril baixo, também instalamos <a href="/guarda-corpo-de-vidro/" class="font-semibold text-brand-600 hover:underline">guarda-corpo de vidro</a> para mais segurança, e para áreas gourmet cobertas, veja nossa <a href="/cobertura-de-vidro/" class="font-semibold text-brand-600 hover:underline">cobertura de vidro</a>.',
    ],
    typesAndThickness: [
      'Vidro temperado de 8mm (painéis fixos) ou 6mm a 8mm (painéis de correr)',
      'Sistema de cortina de vidro retrátil (sem perfil vertical) ou com perfil de alumínio',
      'Incolor para manter a vista ou fumê para mais privacidade',
    ],
    priceFactors: [
      'Metragem da sacada (largura x altura do vão)',
      'Número de painéis/folhas do sistema',
      'Sistema com perfil de alumínio x cortina de vidro sem perfil vertical',
      'Espessura do vidro',
      'Se o condomínio exige um padrão específico de ferragem',
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
    careTips: [
      'Limpe os trilhos regularmente para o sistema deslizar sem esforço',
      'Lubrifique as rodas/roldanas dos painéis periodicamente',
      'Verifique a pingadeira (escoamento de água) antes do período de chuvas',
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
      {
        question: 'O envidraçamento deixa a sacada abafada no calor?',
        answer:
          'Como o sistema abre totalmente, é possível ventilar a sacada normalmente quando o clima permite.',
      },
      {
        question: 'Qual a diferença entre cortina de vidro e janela comum na sacada?',
        answer:
          'A cortina de vidro retrátil abre quase 100% do vão, enquanto uma janela convencional sempre deixa parte da estrutura fixa.',
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
      'Também fazemos <a href="/box-de-banheiro/" class="font-semibold text-brand-600 hover:underline">box de banheiro</a> e <a href="/espelhos/" class="font-semibold text-brand-600 hover:underline">espelhos sob medida</a> com o mesmo vidro temperado, caso você precise de mais de uma peça para o projeto.',
    ],
    typesAndThickness: [
      'Espessuras de 4mm a 12mm, conforme a peça e o uso',
      'Incolor, fumê, verde, bronze ou extraclaro (mais transparente)',
      'Bordas retas, lapidadas ou polidas, com ou sem furos para fixação',
    ],
    priceFactors: [
      'Área da peça (m²) e formato (retangular x recortado)',
      'Espessura escolhida (4mm a 12mm)',
      'Tipo de borda e se precisa de furos para fixação',
      'Cor do vidro (incolor é mais em conta; extraclaro e bronze custam mais)',
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
    careTips: [
      'Limpe com pano macio; evite esponja de aço, que risca o vidro',
      'Use apoios/protetores de feltro embaixo de objetos pesados sobre tampos',
      'Evite choque térmico (não jogue água fervente direto sobre o vidro frio)',
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
      {
        question: 'O vidro temperado pode ser cortado depois de pronto?',
        answer:
          'Não. Qualquer corte ou furo precisa ser feito antes da temperagem, por isso as medidas são conferidas com cuidado antes da fabricação.',
      },
      {
        question: 'Vidro temperado risca com facilidade?',
        answer:
          'É mais resistente a riscos do que o vidro comum, mas recomendamos evitar contato direto com materiais abrasivos.',
      },
      {
        question: 'Qual a diferença entre vidro temperado e vidro laminado?',
        answer:
          'O temperado é mais resistente a impacto; o laminado tem uma película que mantém os cacos unidos caso quebre, sendo mais indicado para alturas e áreas de risco.',
      },
    ],
  },
  {
    slug: 'cobertura-de-vidro',
    title: 'Cobertura de Vidro em Botucatu',
    shortTitle: 'Cobertura de Vidro',
    metaTitle: 'Cobertura de Vidro em Botucatu SP | Vidraçaria Botucatu',
    metaDescription:
      'Cobertura de vidro temperado em Botucatu para áreas gourmet, varandas e claraboias. Estrutura em alumínio ou aço, com garantia e orçamento sem compromisso.',
    heroImage: coberturaVidro,
    heroImageAlt:
      'Cobertura de vidro temperado instalada sobre área externa residencial, vista de cima',
    summary:
      'Cobertura de vidro temperado para áreas gourmet, varandas e claraboias, com estrutura em alumínio ou aço.',
    intro: [
      'A cobertura de vidro deixa a área externa iluminada naturalmente sem perder a proteção contra chuva, sendo uma das soluções mais procuradas para áreas gourmet, varandas, garagens e claraboias.',
      'Trabalhamos com vidro temperado laminado, fixado em estrutura de alumínio ou perfil metálico, dimensionado para suportar o peso da própria cobertura e o impacto de chuva e granizo.',
      'Para fechar lateralmente o espaço, também fazemos <a href="/envidracamento-de-sacada/" class="font-semibold text-brand-600 hover:underline">envidraçamento de sacada</a>, e para proteger escadas e desníveis, <a href="/guarda-corpo-de-vidro/" class="font-semibold text-brand-600 hover:underline">guarda-corpo de vidro</a>.',
    ],
    typesAndThickness: [
      'Vidro laminado 8mm a 10mm (2 lâminas), obrigatório em coberturas por segurança',
      'Estrutura em alumínio (mais leve) ou perfil metálico/aço (vãos maiores)',
      'Incolor, com película de controle solar, ou vidro de baixo fator solar',
    ],
    priceFactors: [
      'Metragem do vão a ser coberto',
      'Tipo de estrutura (alumínio x perfil metálico/aço)',
      'Espessura do vidro laminado (8mm x 10mm)',
      'Se inclui película de controle solar',
      'Dificuldade de acesso para a instalação (altura, telhado)',
    ],
    benefits: [
      'Vidro temperado laminado, resistente a impacto e seguro contra queda de estilhaços',
      'Estrutura em alumínio ou aço, conforme o vão e o projeto',
      'Mantém a luminosidade natural do ambiente',
      'Opção com película de controle solar para reduzir o calor',
      'Indicado para áreas gourmet, varandas, garagens e claraboias',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos o vão e avaliamos a estrutura de apoio para dimensionar a cobertura.' },
      { title: 'Projeto e orçamento', description: 'Definimos espessura do vidro, tipo de estrutura e enviamos o orçamento detalhado.' },
      { title: 'Fabricação', description: 'O vidro laminado é cortado e a estrutura preparada sob medida para o vão.' },
      { title: 'Instalação', description: 'Instalamos a cobertura com vedação e teste de escoamento de água antes da entrega.' },
    ],
    careTips: [
      'Remova folhas e sujeira acumulada para não obstruir o escoamento de água',
      'Revise a vedação de silicone antes do período de chuvas fortes',
      'Limpe com mangueira e produto neutro; evite jatos de alta pressão muito próximos',
    ],
    faqs: [
      {
        question: 'A cobertura de vidro esquenta o ambiente?',
        answer:
          'Pode esquentar mais que uma cobertura opaca, mas isso é reduzido com película de controle solar ou vidro de baixo fator solar, que recomendamos conforme a orientação do sol no local.',
      },
      {
        question: 'O vidro da cobertura é seguro contra quebra?',
        answer:
          'Sim. Usamos vidro laminado, que mesmo se trincado permanece preso à película interna, evitando queda de estilhaços sobre quem está embaixo.',
      },
      {
        question: 'A cobertura de vidro substitui a necessidade de calha?',
        answer:
          'Normalmente não. Recomendamos manter ou instalar calha para direcionar corretamente o escoamento da água da chuva.',
      },
      {
        question: 'Cobertura de vidro pode ser instalada sobre estrutura de madeira já existente?',
        answer:
          'Avaliamos a estrutura na visita técnica. Em muitos casos é possível adaptar, mas pode ser necessário reforço.',
      },
      {
        question: 'Qual a inclinação ideal para a cobertura de vidro?',
        answer:
          'Recomendamos uma inclinação mínima para o escoamento correto da água; definimos o valor ideal conforme o projeto do local.',
      },
    ],
  },
  {
    slug: 'janelas-de-vidro',
    title: 'Janelas de Vidro em Botucatu',
    shortTitle: 'Janelas de Vidro',
    metaTitle: 'Janelas de Vidro em Botucatu SP | Basculante, Correr e Fixa',
    metaDescription:
      'Janelas de vidro temperado em Botucatu: basculante, de correr e fixa, com ou sem caixilho de alumínio. Projeto, fabricação e instalação. Orçamento pelo WhatsApp.',
    heroImage: portaVidro,
    heroImageAlt:
      'Porta e janela de vidro temperado com estrutura em alumínio branco em entrada residencial',
    summary:
      'Janelas de vidro temperado sob medida, nos modelos basculante, de correr ou fixa, com ou sem caixilho de alumínio.',
    intro: [
      'Trocar as janelas por vidro temperado melhora a entrada de luz natural e a segurança da casa ou do comércio. Fabricamos janelas de vidro temperado em Botucatu para residências, consultórios e comércios.',
      'Trabalhamos com os modelos basculante, de correr e fixa, com estrutura em alumínio ou em sistema minimalista sem caixilho aparente, conforme o projeto e o vão disponível.',
      'Se o projeto envolve a esquadria como um todo, veja nosso serviço de <a href="/esquadrias-de-aluminio/" class="font-semibold text-brand-600 hover:underline">esquadrias de alumínio</a>, ou, para fechar varandas e sacadas, conheça o <a href="/envidracamento-de-sacada/" class="font-semibold text-brand-600 hover:underline">envidraçamento de sacada</a>.',
    ],
    typesAndThickness: [
      'Vidro temperado de 4mm a 6mm (janela comum) ou 8mm (vãos maiores)',
      'Modelos basculante, de correr, maxim-ar ou fixa',
      'Com caixilho de alumínio ou vidro temperado sem caixilho (veneziana de vidro)',
      'Incolor, fumê ou jateado',
    ],
    priceFactors: [
      'Número e tamanho das janelas',
      'Tipo de abertura (basculante, correr ou fixa)',
      'Espessura do vidro',
      'Com ou sem caixilho de alumínio',
    ],
    benefits: [
      'Vidro temperado, mais resistente a impacto que o vidro comum',
      'Modelos basculante, de correr ou fixa',
      'Com caixilho de alumínio ou sistema sem caixilho aparente',
      'Opções incolor, fumê ou jateado',
      'Projeto sob medida para cada vão',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos o vão da janela e avaliamos o tipo de abertura mais adequado.' },
      { title: 'Orçamento e projeto', description: 'Você escolhe o modelo, a espessura do vidro e o acabamento do caixilho.' },
      { title: 'Fabricação', description: 'O vidro é temperado e cortado sob medida para o vão da janela.' },
      { title: 'Instalação', description: 'Instalamos a janela e testamos a vedação e o funcionamento antes da entrega.' },
    ],
    careTips: [
      'Lubrifique roldanas e trilhos das janelas de correr',
      'Limpe os trilhos para não acumular areia e sujeira',
      'Verifique a borracha de vedação contra vento e chuva',
    ],
    faqs: [
      {
        question: 'Janela de vidro temperado é mais segura que janela comum?',
        answer:
          'Sim. O vidro temperado é mais resistente a impacto e, se quebrar, se fragmenta em pedaços menores e menos cortantes que o vidro comum.',
      },
      {
        question: 'É possível trocar só o vidro da janela, mantendo a esquadria atual?',
        answer:
          'Em muitos casos sim, desde que a esquadria esteja em bom estado. Avaliamos isso na visita técnica.',
      },
      {
        question: 'Janela basculante de vidro deixa passar vento e chuva?',
        answer:
          'Quando bem vedada e com a borracha em bom estado, a janela basculante veda bem. Isso é verificado na instalação.',
      },
      {
        question: 'Dá pra colocar película de controle solar no vidro da janela?',
        answer:
          'Sim, aplicamos película de controle solar em janelas de vidro temperado, sob encomenda.',
      },
      {
        question: 'Qual o prazo para fabricar uma janela de vidro sob medida?',
        answer:
          'Depende do modelo e da quantidade, mas o prazo é combinado na aprovação do orçamento, após a medição.',
      },
    ],
  },
  {
    slug: 'esquadrias-de-aluminio',
    title: 'Esquadrias de Alumínio em Botucatu',
    shortTitle: 'Esquadrias de Alumínio',
    metaTitle: 'Esquadrias de Alumínio em Botucatu SP | Janelas e Portas',
    metaDescription:
      'Esquadrias de alumínio em Botucatu para janelas e portas de correr, com vidro temperado ou liso. Projeto, fabricação e instalação. Fale pelo WhatsApp.',
    heroImage: fachadaComercial,
    heroImageAlt:
      'Fachada comercial com vitrine de vidro e estrutura de alumínio em loja de rua',
    summary:
      'Esquadrias de alumínio para janelas e portas de correr, com vidro temperado ou liso, em diferentes linhas e acabamentos.',
    intro: [
      'A esquadria de alumínio é a estrutura que sustenta e movimenta janelas e portas de correr. Trabalhamos com diferentes linhas de perfil, da mais simples à reforçada para vãos maiores, sempre com vidro cortado e instalado sob medida.',
      'Fazemos o conjunto completo — esquadria e vidro — ou só a troca da esquadria mantendo o vidro existente, quando possível.',
      'Veja também nosso serviço de <a href="/janelas-de-vidro/" class="font-semibold text-brand-600 hover:underline">janelas de vidro</a> e de <a href="/portas-de-vidro/" class="font-semibold text-brand-600 hover:underline">portas de vidro</a>, que costumam ser contratados junto com a esquadria.',
    ],
    typesAndThickness: [
      'Linha simples (residencial), linha reforçada (vãos maiores) ou linha com ruptura térmica',
      'Cores padrão: branco, preto, bronze ou anodizado natural',
      'Compatível com vidro liso, temperado ou laminado, conforme o uso',
    ],
    priceFactors: [
      'Metragem linear de esquadria',
      'Linha do perfil (simples, reforçada ou com ruptura térmica)',
      'Cor/acabamento do alumínio',
      'Tipo de vidro usado no conjunto',
    ],
    benefits: [
      'Diferentes linhas de perfil, da mais simples à reforçada',
      'Cores branco, preto, bronze ou anodizado natural',
      'Roldanas reforçadas para portas e janelas de correr',
      'Compatível com vidro temperado, laminado ou liso',
      'Projeto sob medida para cada vão',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos o vão e avaliamos a linha de esquadria mais adequada ao uso.' },
      { title: 'Orçamento e projeto', description: 'Você escolhe a linha do perfil, a cor e o tipo de vidro.' },
      { title: 'Fabricação', description: 'A esquadria é montada e o vidro cortado sob medida para o conjunto.' },
      { title: 'Instalação', description: 'Instalamos o conjunto e regulamos roldanas e fechos antes da entrega.' },
    ],
    careTips: [
      'Limpe o perfil com pano úmido; evite produtos abrasivos que opacam o acabamento',
      'Lubrifique roldanas e dobradiças periodicamente',
      'Verifique parafusos e fixações uma vez por ano',
    ],
    faqs: [
      {
        question: 'Qual a diferença entre as linhas de esquadria de alumínio?',
        answer:
          'As linhas variam na espessura e no reforço do perfil — da mais simples, para vãos pequenos, até linhas reforçadas para portas e janelas maiores.',
      },
      {
        question: 'Dá pra pintar ou trocar a cor da esquadria de alumínio?',
        answer:
          'O alumínio pode receber pintura eletrostática em cores sob encomenda, mas o mais comum é escolher entre as cores padrão de fábrica.',
      },
      {
        question: 'A esquadria de alumínio enferruja?',
        answer:
          'Não enferruja como o ferro, mas pode oxidar superficialmente com o tempo. Uma limpeza regular evita esse desgaste.',
      },
      {
        question: 'Posso reaproveitar o vidro na troca da esquadria?',
        answer:
          'Em muitos casos sim, desde que o vidro esteja em bom estado e nas medidas compatíveis com a nova esquadria.',
      },
      {
        question: 'Esquadria de correr precisa de manutenção na roldana?',
        answer:
          'Sim, a lubrificação periódica da roldana evita que a janela ou porta fique pesada para abrir.',
      },
    ],
  },
  {
    slug: 'parede-de-vidro',
    title: 'Parede de Vidro em Botucatu',
    shortTitle: 'Parede de Vidro',
    metaTitle: 'Parede de Vidro em Botucatu SP | Divisórias de Vidro Temperado',
    metaDescription:
      'Parede e divisória de vidro temperado em Botucatu para escritórios, consultórios e residências. Com ou sem porta embutida. Orçamento pelo WhatsApp.',
    heroImage: paredeVidro,
    heroImageAlt:
      'Parede de vidro temperado sendo instalada, com estrutura de alvenaria e perfil em alumínio escuro',
    summary:
      'Divisórias e paredes de vidro temperado para escritórios, consultórios e residências, com ou sem porta embutida.',
    intro: [
      'A parede de vidro divide ambientes sem bloquear a luz natural, sendo muito usada em escritórios, consultórios, salas comerciais e também em projetos residenciais para separar cozinha, home office ou lavabo.',
      'Trabalhamos com sistemas fixos, com porta de giro ou de correr embutida, em vidro incolor, jateado (parcial ou total) ou com película decorativa para mais privacidade.',
      'Para fechar varandas ou sacadas em vez de ambientes internos, veja o <a href="/envidracamento-de-sacada/" class="font-semibold text-brand-600 hover:underline">envidraçamento de sacada</a>, e para portas avulsas, conheça as <a href="/portas-de-vidro/" class="font-semibold text-brand-600 hover:underline">portas de vidro</a>.',
    ],
    typesAndThickness: [
      'Vidro temperado de 8mm ou 10mm, fixo ou com porta de giro/correr embutida',
      'Sistema com perfil de alumínio (U no piso e no teto) ou minimalista (spider/pontual)',
      'Incolor, jateado (parcial ou total) para privacidade, ou com película decorativa',
    ],
    priceFactors: [
      'Metragem da divisória',
      'Se tem porta embutida (giro ou correr)',
      'Sistema de fixação (perfil x spider)',
      'Se o vidro é jateado total, parcial ou incolor',
    ],
    benefits: [
      'Vidro temperado de 8mm ou 10mm',
      'Com ou sem porta embutida (giro ou correr)',
      'Incolor, jateado parcial/total ou com película decorativa',
      'Sistema com perfil de alumínio ou minimalista (spider)',
      'Projeto sob medida para o ambiente',
    ],
    process: [
      { title: 'Visita técnica', description: 'Medimos o ambiente e entendemos o uso da divisória (privacidade, estética, isolamento parcial).' },
      { title: 'Orçamento e projeto', description: 'Definimos o sistema de fixação, o vidro e se haverá porta embutida.' },
      { title: 'Fabricação', description: 'O vidro é temperado, jateado (se for o caso) e cortado sob medida.' },
      { title: 'Instalação', description: 'Instalamos a parede de vidro com nivelamento e testamos a porta, se houver.' },
    ],
    careTips: [
      'Limpe com produto neutro, sem amônia, para não danificar o jateado',
      'Se tiver porta embutida, lubrifique o sistema de giro ou correr',
      'Evite adesivos ou fitas diretamente no vidro jateado',
    ],
    faqs: [
      {
        question: 'A parede de vidro isola bem o som entre os ambientes?',
        answer:
          'O isolamento acústico é parcial — o vidro reduz o ruído, mas não isola totalmente como uma parede de alvenaria. Para mais isolamento, avaliamos opções de vidro laminado.',
      },
      {
        question: 'Dá para colocar uma porta na parede de vidro?',
        answer:
          'Sim, fazemos o sistema com porta de giro ou de correr embutida na própria divisória.',
      },
      {
        question: 'O vidro jateado garante privacidade total?',
        answer:
          'O jateado total bloqueia a visão direta mantendo a passagem de luz. Para mais privacidade ainda, é possível combinar com película.',
      },
      {
        question: 'Parede de vidro é indicada para escritório pequeno?',
        answer:
          'Sim, é uma boa opção para dividir sem reduzir a sensação de espaço, muito usada em salas comerciais pequenas.',
      },
      {
        question: 'É possível aplicar adesivo com a logo da empresa no vidro?',
        answer:
          'Sim, o vidro aceita aplicação de adesivo decorativo ou jateado personalizado com a marca da empresa.',
      },
    ],
  },
  {
    slug: 'manutencao-de-box',
    title: 'Manutenção de Box de Banheiro em Botucatu',
    shortTitle: 'Manutenção de Box',
    metaTitle: 'Manutenção de Box de Banheiro em Botucatu | Roldana e Borracha',
    metaDescription:
      'Troca de roldana, borracha e kit completo para box de banheiro em Botucatu. Conserto rápido sem precisar trocar o vidro inteiro. Orçamento pelo WhatsApp.',
    heroImage: boxBanheiro,
    heroImageAlt:
      'Box de banheiro de vidro temperado com perfil preto instalado em banheiro com revestimento em mármore',
    summary:
      'Troca de roldana, borracha de vedação e kit completo para box de banheiro, sem precisar trocar o vidro.',
    intro: [
      'Nem sempre um box com problema precisa ser trocado inteiro. Na maioria dos casos o vidro continua bom e o problema está na roldana, na borracha de vedação ou no trilho — peças que têm conserto rápido.',
      'Fazemos a troca de roldana, borracha, trilho e kits completos, além de avaliar se o vidro realmente precisa ser substituído ou se pode ser reaproveitado.',
      'Se depois da avaliação o vidro precisar ser trocado, fazemos o <a href="/box-de-banheiro/" class="font-semibold text-brand-600 hover:underline">box de banheiro</a> novo sob medida.',
    ],
    typesAndThickness: [
      'Troca de roldana (modelos de correr com rolamento simples ou duplo)',
      'Troca de borracha de vedação (escova ou perfil em U)',
      'Kit completo: roldanas, trilho e borrachas, quando o desgaste é geral',
      'Avaliação se o vidro aguenta reaproveitamento ou precisa de substituição',
    ],
    priceFactors: [
      'O que precisa ser trocado (só roldana, só borracha, ou kit completo)',
      'Modelo e marca do box (algumas roldanas são mais específicas)',
      'Se o vidro também precisa ser reavaliado',
      'Deslocamento até o local',
    ],
    benefits: [
      'Troca de roldana sem precisar trocar o vidro',
      'Troca de borracha de vedação (escova ou perfil em U)',
      'Kit completo quando o desgaste é geral',
      'Avaliação honesta: só trocamos o que realmente precisa',
      'Atendimento mais rápido que a fabricação de um box novo',
    ],
    process: [
      { title: 'Avaliação', description: 'Avaliamos o box no local para identificar a causa do problema.' },
      { title: 'Orçamento', description: 'Você recebe o orçamento só da peça necessária (roldana, borracha ou kit).' },
      { title: 'Peça sob medida', description: 'Buscamos a roldana ou borracha compatível com o modelo do seu box.' },
      { title: 'Troca', description: 'Fazemos a troca no local, testando o deslizamento e a vedação antes de sair.' },
    ],
    careTips: [
      'Fique atento a sinais de que é hora de revisar: box arrastando, saindo do trilho ou vazando água',
      'Lubrifique a roldana a cada poucos meses para prevenir o desgaste',
      'Troque a borracha ao primeiro sinal de ressecamento ou folga',
    ],
    faqs: [
      {
        question: 'Toda roldana de box serve para qualquer modelo?',
        answer:
          'Não. Existem diferentes modelos de roldana conforme o fabricante e o sistema do box. Levamos isso em conta na avaliação.',
      },
      {
        question: 'Vale mais a pena consertar ou trocar o box inteiro?',
        answer:
          'Depende do estado do vidro. Se o vidro está bom, consertar a roldana ou a borracha costuma ser bem mais em conta do que um box novo.',
      },
      {
        question: 'Quanto tempo demora a troca de roldana ou borracha?',
        answer:
          'Normalmente é um serviço rápido, feito no mesmo dia da visita, já que não envolve fabricação de vidro novo.',
      },
      {
        question: 'Box balançando ou arrastando sempre é problema na roldana?',
        answer:
          'É a causa mais comum, mas também avaliamos o trilho e o nivelamento da instalação original.',
      },
      {
        question: 'Fazem manutenção em box de qualquer vidraçaria, não só dos que vocês instalaram?',
        answer:
          'Sim, atendemos box de banheiro de qualquer instalação anterior, não só os que fabricamos.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicePath(service: Service): string {
  return `/${service.slug}/`;
}
