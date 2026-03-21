# PRD: Refatoração Territórios Culturais (Ralph Loop)
**Status:** In Progress

**System Rules (BMAD Developer Persona):**
- NUNCA adicione comentários no código gerado. O código deve ser totalmente limpo.
- Mantenha o CSS estritamente separado do HTML/JS.
- Execute rigorosamente UMA story por iteração. 
- Faça o git commit após cada story finalizada.
- Ao finalizar, atualize este arquivo mudando o status de [ ] para [x].

## Stories (Tasks)
### Epic 1: Limpeza da Home e UI
- [x] STORY 1: Substituir as tags antigas ('Cinema', 'Moda', etc.) pelo fluxo do Ecossistema: 'CRIAR -> COMUNICAR', 'CIRCULAR -> FORMAR', 'ESTRUTURAR -> FINANCIAR', 'DESENVOLVER -> MONITORAR'.
- [x] STORY 2: Remover o botão 'Mídia Kit 2026' da Home.
- [x] STORY 3: Configurar o botão 'VER IMPACTO' para ancorar com scroll suave em `#destinos-estruturados`.
- [x] STORY 4: Remover a seção 'Parceiros & Realizadores' (Logos institucionais) da página principal.
- [x] STORY 5: Ajustar o CSS do vídeo da fita de cinema (FilmStrip) usando `object-position: top` (ou `50% 20%`) para descer o enquadramento e não cortar o rosto das pessoas.

### Epic 2: Próximos Eventos (Atualização de Dados e Nomenclaturas)
- [x] STORY 6: Remover a exibição de todas as datas dos próximos eventos.
- [x] STORY 7: Atualizar o evento da Mostra. Remover o termo "1º". Nome exato deve ser "Mostra de Cinema Itinerante da Cordilheira do Espinhaço". Manter as cidades: "Ouro Branco, Serro, Porteirinha".
- [x] STORY 8: Atualizar o evento do Vinho. Remover o termo "1º". Nome exato deve ser "Encontro Cultural da Uva e do Vinho 🍷". Alterar o local para "Norte de Minas - MG".
- [x] STORY 9: Atualizar o evento de Enoturismo. Remover o termo "1º". Nome exato deve ser "Fórum Internacional de Enoturismo e Vitivinicultura do Mercosul". Alterar o local para "Norte de Minas - MG".
- [x] STORY 10: Atualizar o evento de Cinema de Grão Mogol. Remover o termo "1º". Nome exato deve ser "Festival de Cinema de Grão Mogol". Manter o local como "Grão Mogol - MG".

### Epic 3: Eventos Realizados (Compliance e Releases)
- [x] STORY 11: Remover a palavra 'sucesso' de todos os cards de eventos realizados.
- [x] STORY 12: Descer o layout do card de eventos realizados na página principal para garantir que os logos das leis/patrocinadores fiquem 100% visíveis na home.
- [x] STORY 13: Atualizar leis e locais dos três eventos para Patos de Minas. Configurar 'Cine Território' (LPG), 'Luz - Imagem - Educação' (LPG) e 'Cineclube Vemvê' (PNAB).
- [x] STORY 14: Conferir contexto do projeto que esta na pagina e dos realeses (do arquivo PDF fornecido) nas páginas de detalhe ou expansão dos eventos 'Cine Território' e 'Cineclube Vemvê' C:\Users\CLIENTE\Desktop\PROJETOS\Territorio Culturais\public\events\Realese Cineclubê Vemvê.pdf
C:\Users\CLIENTE\Desktop\PROJETOS\Territorio Culturais\public\events\RELEASE - Cine Território divulga programação.pdf.

### Epic 4: Card Completo - Eventos Realizados (Dados e Estrutura)
- [x] STORY 13: Configurar Card "Cine Território". Local: "Patos de Minas - MG". Lei: "LPG (Lei Paulo Gustavo)". Conteúdo: Inserir resumo do release (Mostra com 24 produções, 10 cidades e Troféu Cine Território).
- [x] STORY 14: Configurar Card "Cineclube Vemvê". Local: "Patos de Minas - MG (Campus UNIPAM)". Lei: "PNAB (Política Nacional Aldir Blanc)". Conteúdo: Inserir resumo das 12 mostras cinematográficas e 6 ciclos temáticos (Cinema Negro, Mineiro, etc.).
- [x] STORY 15: Configurar Card "Luz - Imagem - Educação". Local: "Patos de Minas - MG". Lei: "LPG (Lei Paulo Gustavo)". Conteúdo: Inserir resumo de atividades educativas e formação de público.

### Epic 5: Reestruturação Visual - Card Longo (Sponsor Proof)
- [ ] STORY 16: Refatoração de UI/UX. No componente de 'Eventos Realizados', crie uma variante de 'Card Longo' (LongCard). 
- [ ] STORY 17: Layout do LongCard. O card deve ser verticalmente expandido, exibindo na seguinte ordem: 
    1. Imagem/Thumbnail do evento.
    2. Título, Local (Ícone + Texto), Badge de Lei (LPG/PNAB).
    3. Resumo do Release (mínimo de 3 linhas de texto visíveis).
    4. **NOVO: Grid de Patrocinadores (SponsorGrid).**
- [ ] STORY 18: Implementação do SponsorGrid. Localize o grid que contém as logos institucionais (LPG, Aldir Blanc, Prefeitura Patos de Minas) e insira-o **dentro do próprio LongCard**, logo abaixo do resumo do release. Ajuste o CSS para que os logos fiquem visíveis diretamente na Home, sem necessidade de hover ou clique