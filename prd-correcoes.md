# PRD: Refatoração de Home e Portfólio de Autoridade
**Status:** Concluído
**Context:** BMAD Persona / GSD-2 Engine

## Stories (Tasks)

### Epic 1: Refatoração da Seção Hero (Ecossistema)
- [x] STORY 1: Substituir as tags de categorias atuais ('Cinema', 'Enoturismo', etc.) pelo fluxo visual do Ecossistema.
- [x] STORY 2: Implementar a sequência: 'CRIAR → COMUNICAR → CIRCULAR → FORMAR → ESTRUTURAR → FINANCIAR → DESENVOLVER'.
- [x] STORY 3: Adicionar a tag 'MONITORAR' no fluxo principal — pills individuais com setas separadas, classe `ecosystem-pill` (CSS separado, sem inline style).

### Epic 2: Reestruturação do Portfólio (Eventos Realizados)
- [x] STORY 4: Componente `RealizedCard.jsx` criado com CSS separado em `RealizedCard.css`. Eventos realizados migrados para layout vertical e alongado.
- [x] STORY 5: Ordem de informação do card: Imagem de Destaque → Título → Local (Patos de Minas) → Badge de Lei (LPG/PNAB) → Resumo do Release.
- [x] STORY 6: **Sponsor Integration:** Grid de badges tipográficos (Lei Paulo Gustavo, Aldir Blanc, Ministério da Cultura, Prefeitura Patos de Minas) na base de cada card. Visíveis diretamente sem hover. Campo `sponsors[]` por projeto em `projects.js`.

### Epic 3: Navegação e Limpeza
- [x] STORY 7: Seção de parceiros da Home removida (`Hero.jsx`).
- [x] STORY 8: Botão 'VER IMPACTO' ancorado em `#destinos-estruturados` com scroll suave.
- [x] STORY 9: Componente `MidiaKitCTA` removido do `App.jsx`.

### Epic 4: Dados dos Projetos Realizados
- [x] STORY 13: Card Cine Território — lei `LPG (Lei Paulo Gustavo)`, local `Patos de Minas - MG`, descrição com resumo do release.
- [x] STORY 14: Card Cineclube Vemvê — lei `PNAB (Política Nacional Aldir Blanc)`, local `Patos de Minas - MG (Campus UNIPAM)`, 6 ciclos temáticos.
- [x] STORY 15: Card Luz-Imagem-Educação — lei `LPG (Lei Paulo Gustavo)`, local `Patos de Minas - MG`, 3 atividades educativas.

### Epic 5: Estrutura Visual LongCard + SponsorGrid
- [x] STORY 16: `RealizedCard.jsx` + `RealizedCard.css` criados. Componente LongCard vertical, CSS 100% separado, sem comentários.
- [x] STORY 17: `ProjectShowcase.jsx` atualizado — `category === 'realized'` renderiza `RealizedCard`; demais renderizam `ProjectCard`.
- [x] STORY 18: Campo `sponsors[]` por projeto em `projects.js`. Badges coloridos por tipo (azul=LPG, vermelho=PNAB, verde=Ministério, dourado=Prefeitura). Visíveis sem hover.

### Refinamentos Pós-PRD
- [x] Cards realizados alinhados visualmente ao `EventCard`: aspect ratio 3/2, gradiente duplo, conteúdo flutuante `-mt-5rem`, largura 340px/460px desktop.
- [x] Fluxo do ecossistema adicionado também na seção `About.jsx` (Quem Somos).
- [x] Hero migrado para `ecosystemSteps[]` individual com `ecosystem-pill` e `ecosystem-arrow` (sem inline style, BMAD compliant).
