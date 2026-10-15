import type { Education, PortfolioData } from '../types/portfolio';

/**
 * FONTE ÚNICA DA VERDADE DO PORTFÓLIO
 *
 * Todo texto, tecnologia, projeto e link exibido no site vem deste arquivo.
 * Para atualizar o site, edite apenas aqui; os componentes se ajustam sozinhos.
 * Os formatos aceitos estão documentados em `src/types/portfolio.ts`.
 */

/** Formação: usada no perfil (INÍCIO) e no bloco de formação (SOBRE MIM). */
const education: Education = {
  degree: 'Análise e Desenvolvimento de Sistemas',
  shortName: 'ADS',
  level: 'Tecnólogo',
  // institution: 'Nome da instituição',
  // completionYear: 2025,
};

export const portfolioData: PortfolioData = {
  /* ---------------------------------------------------------------------- */
  /*  Janela e prompt no estilo CMD: C:\Users\luiz>                        */
  /* ---------------------------------------------------------------------- */
  terminal: {
    windowTitle: 'C:\\WINDOWS\\system32\\cmd.exe',
    promptPath: 'C:\\Users\\luiz',
  },

  /* ---------------------------------------------------------------------- */
  /*  Seções: alimentam o menu superior e o comando exibido em cada seção. */
  /*  A ordem aqui é a ordem no menu.                                       */
  /* ---------------------------------------------------------------------- */
  sections: [
    { id: 'inicio', label: 'INÍCIO', command: 'apresentacao.bat' },
    { id: 'sobre', label: 'SOBRE MIM', command: 'type sobre_mim.txt' },
    { id: 'tecnologias', label: 'TECNOLOGIAS', command: 'dir tecnologias' },
    { id: 'projetos', label: 'PROJETOS', command: 'dir projetos' },
    { id: 'contato', label: 'CONTATO', command: 'ping contato' },
  ],

  /* ---------------------------------------------------------------------- */
  /*  Seção INÍCIO: botões de ação rápida abaixo da apresentação            */
  /* ---------------------------------------------------------------------- */
  hero: {
    actions: [
      { label: 'VER PROJETOS', targetId: 'projetos', emphasis: 'primary' },
      { label: 'FALE COMIGO', targetId: 'contato', emphasis: 'secondary' },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Perfil                                                                */
  /* ---------------------------------------------------------------------- */
  profile: {
    fullName: 'Luiz Miguel Raydan Mota Dantas',
    displayName: 'Luiz Miguel',
    headline: 'Desenvolvedor Web · Front-end',
    education,
    summary:
      'Desenvolvedor web formado em Análise e Desenvolvimento de Sistemas, focado em interfaces modernas com React, Next.js e TypeScript. Construo aplicações com tipagem estática, componentes reutilizáveis e código organizado para ser fácil de manter.',
    photo: {
      // Gerada por `npm run optimize:photo` a partir de `media/profile-original.jpg`.
      src: '/profile.webp',
      alt: 'Foto de perfil de Luiz Miguel Raydan Mota Dantas',
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  Seção SOBRE MIM                                                       */
  /*  Cada bloco vira uma coluna; adicione ou remova blocos à vontade.      */
  /* ---------------------------------------------------------------------- */
  about: {
    intro:
      'Sou tecnólogo em Análise e Desenvolvimento de Sistemas e desenvolvedor web com foco em front-end. A graduação me deu base para enxergar o software como um todo, do levantamento de requisitos à entrega, e hoje aplico essa visão construindo interfaces com React, Next.js e TypeScript.',
    blocks: [
      {
        id: 'formacao',
        title: 'FORMAÇÃO ACADÊMICA',
        items: [
          `${education.level} em ${education.degree} (${education.shortName})`,
          'Análise de requisitos e modelagem de sistemas',
          'Programação orientada a objetos',
          'Banco de dados relacional e SQL',
          'Engenharia de software',
        ],
      },
      {
        id: 'foco',
        title: 'FOCO TÉCNICO',
        items: [
          'Desenvolvimento front-end',
          'Ecossistema React e Next.js',
          'Interfaces responsivas e acessíveis',
          'Consumo de APIs REST',
        ],
      },
      {
        id: 'filosofia',
        title: 'FILOSOFIA DE CÓDIGO',
        items: [
          'Tipagem estática para pegar erros cedo',
          'Componentes pequenos e reutilizáveis',
          'Dados separados da interface',
          'Semântica e performance desde o início',
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Tecnologias (nova tecnologia? veja o passo a passo em TechnologyId)  */
  /* ---------------------------------------------------------------------- */
  technologies: [
    {
      id: 'javascript',
      name: 'JavaScript',
      packageName: 'javascript',
      category: 'linguagem',
      description:
        'Base de toda a lógica no navegador: manipulação de dados, eventos, assincronismo com Promises e async/await e recursos modernos do ECMAScript.',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      packageName: 'typescript',
      category: 'linguagem',
      description:
        'Tipagem estrita de props, interfaces de domínio e modelos de dados, prevenindo erros em tempo de compilação e deixando o código autodocumentado.',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      packageName: 'tailwindcss',
      category: 'estilização',
      description:
        'Estilização utilitária com design tokens centralizados no tema, layouts responsivos e consistência visual sem CSS duplicado.',
    },
    {
      id: 'react',
      name: 'React',
      packageName: 'react',
      category: 'biblioteca',
      description:
        'Interfaces componentizadas e reutilizáveis, gerenciamento de estado com hooks e renderização orientada a dados.',
    },
    {
      id: 'react-router',
      name: 'React Router',
      packageName: 'react-router-dom',
      category: 'biblioteca',
      description:
        'Navegação entre páginas em aplicações React sem recarregar o site, com rotas dinâmicas por parâmetro, redirecionamentos e rolagem até âncoras.',
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      packageName: 'next',
      category: 'framework',
      description:
        'Aplicações React full-stack com roteamento baseado em arquivos, renderização no servidor (SSR/SSG) e otimizações de performance e SEO.',
    },
    {
      id: 'vite',
      name: 'Vite',
      packageName: 'vite',
      category: 'ferramenta',
      description:
        'Ambiente de desenvolvimento com recarregamento instantâneo e build de produção otimizado, com divisão de código e assets minificados para deploy.',
    },
    {
      id: 'sql',
      name: 'SQL',
      packageName: 'sql',
      category: 'linguagem',
      description:
        'Modelagem de bancos de dados relacionais, normalização e consultas com JOINs, agregações e filtros para extrair exatamente os dados de que a aplicação precisa.',
    },
    {
      id: 'docker',
      name: 'Docker',
      packageName: 'docker',
      category: 'ferramenta',
      description:
        'Ambientes de desenvolvimento reproduzíveis com containers, Dockerfile e Docker Compose para subir aplicação e banco de dados com um único comando.',
    },
    {
      id: 'git',
      name: 'Git',
      packageName: 'git',
      category: 'ferramenta',
      description: 'Versionamento de código com commits atômicos, branches por funcionalidade e histórico legível.',
    },
  ],

  /* ---------------------------------------------------------------------- */
  /*  Projetos                                                              */
  /* ---------------------------------------------------------------------- */
  // Modelo para adicionar um projeto (copie, descomente e preencha):
  // {
  //   id: 'nome-do-projeto',
  //   title: 'Nome do Projeto',
  //   description: 'Problema resolvido e como foi resolvido.',
  //   technologyIds: ['react', 'typescript', 'tailwind'],
  //   links: { repository: 'https://github.com/...', deploy: 'https://...' },
  // },
  projects: [
    {
      id: 'jmkt',
      title: 'Jessyane Soares · Portfólio de Marketing',
      description:
        'Site-catálogo para uma profissional de marketing apresentar seus serviços e a qualidade das entregas. O cliente navega pelos pacotes, seleciona os de interesse e recebe um pedido de orçamento já estruturado para enviar pelo WhatsApp.',
      technologyIds: ['react', 'typescript', 'tailwind', 'react-router', 'vite'],
      links: { repository: 'https://github.com/migueljotnar/jmkt', deploy: 'https://jmkt-ten.vercel.app/' },
    },
  ],

  /* ---------------------------------------------------------------------- */
  /*  Contatos                                                              */
  /* ---------------------------------------------------------------------- */
  contacts: [
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      handle: 'lmr-motadantas',
      url: 'https://www.linkedin.com/in/lmr-motadantas/',
    },
    {
      platform: 'github',
      label: 'GitHub',
      handle: 'migueljotnar',
      url: 'https://github.com/migueljotnar',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      handle: '@migueljotnar',
      url: 'https://www.instagram.com/migueljotnar/',
    },
  ],

  /* ---------------------------------------------------------------------- */
  /*  Rodapé: nome completo (vem do perfil) e o título abaixo dele          */
  /* ---------------------------------------------------------------------- */
  footer: {
    title: 'Desenvolvedor',
  },
};
