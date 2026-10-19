# Portfólio · Luiz Miguel

Portfólio pessoal de **Luiz Miguel Raydan Mota Dantas**, desenvolvedor web front-end e tecnólogo em Análise e Desenvolvimento de Sistemas.

O site imita uma janela do **CMD do Windows**: cada seção é a saída de um comando (`type sobre_mim.txt`, `dir tecnologias`, `ping contato`…), em uma paleta preta e branca com fonte monoespaçada.

## Seções

| Seção | Comando | Conteúdo |
| --- | --- | --- |
| INÍCIO | `apresentacao.bat` | Comando digitado letra a letra, foto, nome, resumo e botões de ação |
| SOBRE MIM | `type sobre_mim.txt` | Apresentação, formação acadêmica, foco técnico e filosofia de código |
| TECNOLOGIAS | `dir tecnologias` | Grade de tecnologias com painel de inspeção para cada uma |
| PROJETOS | `dir projetos` | Projetos com filtro por tecnologia, repositório e deploy |
| CONTATO | `ping contato` | LinkedIn, GitHub e Instagram, com botões de abrir e copiar |

Detalhes da interface:

- **Projetos ligados às tecnologias:** o painel de uma tecnologia tem o atalho "ver em PROJETOS →", que abre a seção Projetos já filtrada por ela.
- **Menu com scroll-spy:** o item da seção visível fica destacado, e links com âncora (ex.: `/#projetos`) abrem direto na seção.
- **Acessibilidade:** com "reduzir movimento" ativado no sistema, o efeito de digitação é desligado.
- **Responsivo:** o layout se adapta do celular ao desktop.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) para desenvolvimento e build
- [Tailwind CSS 4](https://tailwindcss.com), com os tokens do tema definidos em `src/index.css`
- [Simple Icons](https://simpleicons.org) para os ícones das tecnologias e contatos
- [Cascadia Mono](https://github.com/microsoft/cascadia-code), a fonte do Windows Terminal
- [sharp](https://sharp.pixelplumbing.com) para otimizar a foto de perfil

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20.19 ou 22.12 em diante (exigência do Vite 8).

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarregamento instantâneo |
| `npm run build` | Checa os tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run typecheck` | Apenas checa os tipos, sem gerar arquivos |
| `npm run optimize:photo` | Gera `public/profile.webp` a partir de `media/profile-original.jpg` |

## Deploy

O site é publicado no GitHub Pages em <https://migueljotnar.github.io/luiz-miguel-portfolio/>.

A cada push na `main`, o workflow `.github/workflows/deploy.yml` gera o build e publica a pasta `dist/`. Para isso, em **Settings → Pages** do repositório, a opção **Source** precisa estar em **GitHub Actions**.

O site fica no subcaminho `/luiz-miguel-portfolio/`. O workflow obtém esse caminho do próprio GitHub Pages e o repassa ao Vite com `--base`, então o deploy se ajusta sozinho se o repositório for renomeado ou ganhar um domínio próprio. Localmente, o site continua na raiz.

## Como atualizar o conteúdo

Todo texto, tecnologia, projeto e link do site vem de um único arquivo: **`src/data/portfolioData.ts`**. Os componentes não guardam conteúdo próprio, então para atualizar o site basta editar esse arquivo. Os formatos aceitos estão documentados em `src/types/portfolio.ts`, e o TypeScript aponta qualquer campo faltando ou errado.

### Adicionar um projeto

Inclua um objeto em `projects`:

```ts
{
  id: 'nome-do-projeto',
  title: 'Nome do Projeto',
  description: 'Problema resolvido e como foi resolvido.',
  technologyIds: ['react', 'typescript', 'tailwind'],
  links: { repository: 'https://github.com/...', deploy: 'https://...' },
},
```

Os ids em `technologyIds` precisam existir em `technologies`; o compilador rejeita ids inexistentes. Os links são opcionais.

### Adicionar uma tecnologia

1. Inclua o id no tipo `TechnologyId` (`src/types/portfolio.ts`).
2. Inclua o objeto correspondente em `technologies` (`src/data/portfolioData.ts`).
3. Registre o ícone em `TECH_ICONS` (`src/components/ui/TechIcon.tsx`).

Se alguma etapa for esquecida, o build falha indicando onde.

### Trocar a foto de perfil

Substitua `media/profile-original.jpg` e rode `npm run optimize:photo`. O script gera uma imagem WebP quadrada de 320×320 px, com o recorte centrado na região de maior destaque da foto.

## Estrutura

```
src/
├── data/portfolioData.ts   # conteúdo do site (fonte única)
├── types/portfolio.ts      # contratos de dados
├── components/
│   ├── sections/           # uma seção da página por arquivo
│   ├── layout/             # menu, rodapé e estrutura das seções
│   ├── terminal/           # janela, prompt e cursor no estilo CMD
│   ├── technologies/       # card e painel de inspeção
│   ├── projects/           # card e filtro de projetos
│   ├── contact/            # card de contato
│   └── ui/                 # botões, ícones e peças reutilizáveis
├── hooks/                  # scroll-spy, digitação, cópia e visibilidade
├── lib/                    # funções auxiliares
├── App.tsx
├── main.tsx
└── index.css               # tema (cores e fonte) do Tailwind
public/                     # favicon e foto otimizada
media/                      # foto original
scripts/optimize-photo.mjs  # otimização da foto
```

## Contato

- LinkedIn: [lmr-motadantas](https://www.linkedin.com/in/lmr-motadantas/)
- GitHub: [migueljotnar](https://github.com/migueljotnar)
- Instagram: [@migueljotnar](https://www.instagram.com/migueljotnar/)
