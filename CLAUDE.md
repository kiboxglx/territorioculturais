# CLAUDE.md — Territorio Culturais

## O que e
Plataforma do ecossistema cultural "Territorios Culturais". Site rico em multimedia com 18 videos cinematograficos, galerias, animacoes, e 13+ paginas. Portfolio de cinema, eventos, governanca, formacao e observatorio.

## Stack
React 19 + Vite 6 | Framer Motion v12 | Tailwind v4 | React Router 7 | React Helmet Async | Vercel Analytics | Vercel

## Comandos
```bash
npm run dev          # Dev server
npm run build        # Build
```

## Paginas principais
`/`, `/sobre`, `/metodologia`, `/portfolio-cinema`, `/portfolio-eventos`, `/portfolio-governanca`, `/formacao-cultural`, `/programa-destino`, `/sistema`, `/observatorio`, `/galeria`, `/projeto/:id`

## Feature destaque: FilmStrip
Fita cinematografica infinita com 18 videos. CSS keyframes (180s loop), IntersectionObserver para lazy play, filtro sepia+contrast. WebM+MP4 dual source.

## Convencoes
- CSS keyframes para animacoes longas (nao Framer Motion)
- Framer Motion para modals e transicoes de rota
- IntersectionObserver com threshold 0.01 + 200px margin
- Videos em public/videos-fita/ (webm + mp4)

## Vault
vault_path: C:\Users\CLIENTE\vault\01-Projects\territorio-culturais\README.md
Decisoes e patterns documentados la. Atualizar apos mudancas significativas.
