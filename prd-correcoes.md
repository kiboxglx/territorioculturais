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
- [ ] STORY 1: Substituir as tags antigas ('Cinema', 'Moda', etc.) pelo fluxo do Ecossistema: 'CRIAR -> COMUNICAR', 'CIRCULAR -> FORMAR', 'ESTRUTURAR -> FINANCIAR', 'DESENVOLVER -> MONITORAR'.
- [ ] STORY 2: Remover o botão 'Mídia Kit 2026' da Home.
- [ ] STORY 3: Configurar o botão 'VER IMPACTO' para ancorar com scroll suave em `#destinos-estruturados`.
- [ ] STORY 4: Remover a seção 'Parceiros & Realizadores' (Logos institucionais) da página principal.
- [ ] STORY 5: Ajustar o CSS do vídeo da fita de cinema (FilmStrip) usando `object-position: top` (ou `50% 20%`) para descer o enquadramento e não cortar o rosto das pessoas.

### Epic 2: Próximos Eventos (Atualização de Dados e Nomenclaturas)
- [x] STORY 6: Remover a exibição de todas as datas dos próximos eventos.
- [x] STORY 7: Atualizar o evento da Mostra. Remover o termo "1º". Nome exato deve ser "Mostra de Cinema Itinerante da Cordilheira do Espinhaço". Manter as cidades: "Ouro Branco, Serro, Porteirinha".
- [x] STORY 8: Atualizar o evento do Vinho. Remover o termo "1º". Nome exato deve ser "Encontro Cultural da Uva e do Vinho 🍷". Alterar o local para "Norte de Minas - MG".
- [x] STORY 9: Atualizar o evento de Enoturismo. Remover o termo "1º". Nome exato deve ser "Fórum Internacional de Enoturismo e Vitivinicultura do Mercosul". Alterar o local para "Norte de Minas - MG".
- [x] STORY 10: Atualizar o evento de Cinema de Grão Mogol. Remover o termo "1º". Nome exato deve ser "Festival de Cinema de Grão Mogol". Manter o local como "Grão Mogol - MG".

### Epic 3: Eventos Realizados (Compliance e Releases)
- [ ] STORY 11: Remover a palavra 'sucesso' de todos os cards de eventos realizados.
- [ ] STORY 12: Descer o layout do card de eventos realizados na página principal para garantir que os logos das leis/patrocinadores fiquem 100% visíveis na home.
- [ ] STORY 13: Atualizar leis e locais dos três eventos para Patos de Minas. Configurar 'Cine Território' (LPG), 'Luz - Imagem - Educação' (LPG) e 'Cineclube Vemvê' (PNAB).
- [ ] STORY 14: Conferir contexto do projeto que esta na pagina e dos realeses (do arquivo PDF fornecido) nas páginas de detalhe ou expansão dos eventos 'Cine Território' e 'Cineclube Vemvê' C:\Users\CLIENTE\Desktop\PROJETOS\Territorio Culturais\public\events\Realese Cineclubê Vemvê.pdf
C:\Users\CLIENTE\Desktop\PROJETOS\Territorio Culturais\public\events\RELEASE - Cine Território divulga programação.pdf.