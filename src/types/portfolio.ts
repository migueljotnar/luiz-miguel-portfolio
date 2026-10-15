/**
 * Contratos de domínio do portfólio.
 *
 * Todo conteúdo exibido na interface é descrito aqui e preenchido em
 * `src/data/portfolioData.ts`. Os componentes nunca devem conter textos de
 * conteúdo próprios: eles apenas renderizam o que estes tipos descrevem.
 */

/* -------------------------------------------------------------------------- */
/*  Seções e navegação                                                        */
/* -------------------------------------------------------------------------- */

/** Âncoras das seções da página (usadas como `id` no HTML e no menu). */
export type SectionId = 'inicio' | 'sobre' | 'tecnologias' | 'projetos' | 'contato';

export interface SectionMeta {
  id: SectionId;
  /** Texto exibido no menu e no título da seção, ex.: "SOBRE MIM". */
  label: string;
  /** Comando exibido no prompt da seção, ex.: "type sobre_mim.txt". */
  command: string;
}

/* -------------------------------------------------------------------------- */
/*  Seção INÍCIO                                                              */
/* -------------------------------------------------------------------------- */

/** `primary` = botão preenchido; `secondary` = botão com contorno. */
export type Emphasis = 'primary' | 'secondary';

export interface HeroAction {
  label: string;
  /** Seção para onde o botão rola. */
  targetId: SectionId;
  emphasis: Emphasis;
}

export interface HeroContent {
  actions: HeroAction[];
}

/* -------------------------------------------------------------------------- */
/*  Terminal                                                                  */
/* -------------------------------------------------------------------------- */

/** Configuração da janela e do prompt no estilo CMD. */
export interface TerminalConfig {
  /** Texto da barra de título da janela, ex.: "C:\WINDOWS\system32\cmd.exe". */
  windowTitle: string;
  /** Diretório base do prompt, ex.: "C:\Users\luiz" -> `C:\Users\luiz>`. */
  promptPath: string;
}

/* -------------------------------------------------------------------------- */
/*  Perfil                                                                    */
/* -------------------------------------------------------------------------- */

export interface Education {
  /** Nome completo do curso. */
  degree: string;
  /** Sigla exibida em espaços curtos, ex.: "ADS". */
  shortName: string;
  /** Grau acadêmico, ex.: "Tecnólogo". */
  level: string;
  /** Opcional até ser informado; a interface omite o campo quando ausente. */
  institution?: string;
  /** Ano de conclusão, ex.: 2025. */
  completionYear?: number;
}

export interface ProfilePhoto {
  /**
   * Caminho da imagem dentro de `public/` (ex.: "/profile.webp").
   * Quando ausente, a interface mostra um avatar de terminal com as iniciais.
   */
  src?: string;
  alt: string;
}

export interface Profile {
  fullName: string;
  /** Nome curto usado em títulos e saudações. */
  displayName: string;
  /** Cargo/título profissional exibido abaixo do nome. */
  headline: string;
  education: Education;
  /** Resumo técnico curto, exibido na seção INÍCIO. */
  summary: string;
  photo: ProfilePhoto;
}

/* -------------------------------------------------------------------------- */
/*  Sobre mim                                                                 */
/* -------------------------------------------------------------------------- */

export interface AboutBlock {
  /** Identificador único em kebab-case, ex.: "formacao". */
  id: string;
  /** Título curto do bloco, ex.: "FORMAÇÃO ACADÊMICA". */
  title: string;
  /** Uma linha curta por item. */
  items: string[];
}

export interface AboutContent {
  /** Parágrafo de abertura, exibido como saída do comando da seção. */
  intro: string;
  blocks: AboutBlock[];
}

/* -------------------------------------------------------------------------- */
/*  Tecnologias                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Para adicionar uma tecnologia nova:
 *   1. inclua o id aqui;
 *   2. inclua o objeto correspondente em `portfolioData.technologies`;
 *   3. registre o ícone em `TECH_ICONS` (`src/components/ui/TechIcon.tsx`).
 * O compilador aponta qualquer etapa esquecida.
 */
export type TechnologyId =
  | 'javascript'
  | 'typescript'
  | 'tailwind'
  | 'react'
  | 'react-router'
  | 'nextjs'
  | 'vite'
  | 'sql'
  | 'docker'
  | 'git';

export type TechnologyCategory = 'linguagem' | 'framework' | 'biblioteca' | 'estilização' | 'ferramenta';

export interface Technology {
  id: TechnologyId;
  /** Nome oficial, ex.: "Next.js". */
  name: string;
  /** Nome no estilo pacote, exibido em linhas como `[OK] tailwindcss`. */
  packageName: string;
  category: TechnologyCategory;
  /** Como o Luiz usa a tecnologia na prática (painel de inspeção). */
  description: string;
}

/* -------------------------------------------------------------------------- */
/*  Projetos                                                                  */
/* -------------------------------------------------------------------------- */

export interface ProjectLinks {
  repository?: string;
  deploy?: string;
}

export interface Project {
  /** Identificador único em kebab-case, ex.: "gestor-de-tarefas". */
  id: string;
  title: string;
  /** Foque no problema resolvido e na solução técnica. */
  description: string;
  /** Relação com `Technology.id`; o compilador rejeita ids inexistentes. */
  technologyIds: TechnologyId[];
  links: ProjectLinks;
}

/* -------------------------------------------------------------------------- */
/*  Contatos                                                                  */
/* -------------------------------------------------------------------------- */

export type ContactPlatform = 'linkedin' | 'github' | 'instagram';

export interface Contact {
  platform: ContactPlatform;
  /** Nome exibido, ex.: "LinkedIn". */
  label: string;
  /** Usuário exibido e copiado, ex.: "@luizmiguel". */
  handle: string;
  url: string;
}

/* -------------------------------------------------------------------------- */
/*  Rodapé                                                                    */
/* -------------------------------------------------------------------------- */

export interface FooterContent {
  /** Título exibido abaixo do nome, ex.: "Desenvolvedor". */
  title: string;
}

/* -------------------------------------------------------------------------- */
/*  Raiz                                                                      */
/* -------------------------------------------------------------------------- */

export interface PortfolioData {
  terminal: TerminalConfig;
  sections: SectionMeta[];
  hero: HeroContent;
  profile: Profile;
  about: AboutContent;
  technologies: Technology[];
  projects: Project[];
  contacts: Contact[];
  footer: FooterContent;
}
