import React from 'react';
import ProgressiveImage from './ProgressiveImage';

/* ─────────────────────────────────────────────────────────────────
   Team.jsx — Refatorado — Plano de Curadoria Visual v1.0
   
   Estrutura preparada para receber fotos reais da diretoria.
   Enquanto as fotos profissionais não são produzidas, o componente
   usa placeholders contextuais (não genéricos) com aspect-ratio 3:4
   conforme especificado no plano.

   Proporção 3:4 (portrait): retratos profissionais de headshot.
   loading="lazy": abaixo da dobra, carregado sob demanda.
───────────────────────────────────────────────────────────────── */

/* Dados reais da diretoria — prontos para receber as fotos reais */
const TEAM_MEMBERS = [
    {
        id: 'rafael-caldas',
        name: 'Rafael Caldas',
        role: 'Diretor Executivo',
        credential: 'Ex-Globo · 20+ anos em audiovisual',
        description: 'Produtor e diretor com trajetória consolidada no audiovisual brasileiro. Responsável pela estrutura técnica e operacional da empresa, registrada na ANCINE sob o nº 63126.',
        /* Substituir pelo path local quando disponível:
           src: '/images/team/rafael-caldas.webp'
           Especificação: 600×800px, WebP, iluminação Rembrandt */
        src: null,
        placeholder: 'RC',
        specialization: 'Cinema · Produção Executiva · Gestão Cultural',
    },
    {
        id: 'patricia-mahet',
        name: 'Patricia Mahet',
        role: 'Diretora de Projetos',
        credential: 'Ex-Globo · Especialista em Políticas Culturais',
        description: 'Especialista em elaboração e captação de projetos culturais via Lei Rouanet, Lei Paulo Gustavo e LEIC/MG. Coordena as frentes de governança e impacto social.',
        /* Substituir pelo path local quando disponível:
           src: '/images/team/patricia-mahet.webp'
           Especificação: 600×800px, WebP, iluminação Rembrandt */
        src: null,
        placeholder: 'PM',
        specialization: 'Leis de Incentivo · ESG · Desenvolvimento Territorial',
    },
    {
        id: 'nucleo-criativo',
        name: 'Núcleo Criativo',
        role: 'Direção e Roteiro',
        credential: 'Cineastas e Artistas Territoriais',
        description: 'Equipe multidisciplinar dedicada à expressão artística e à comunicação estratégica dos territórios. Do roteiro ao audiovisual institucional.',
        src: null,
        placeholder: 'NC',
        specialization: 'Cinema Autoral · Audiovisual · Novas Mídias',
    },
    {
        id: 'producao-campo',
        name: 'Produção de Campo',
        role: 'Logística e Comunidade',
        credential: 'Operadores Territoriais',
        description: 'Ponte direta entre o projeto institucional e as comunidades locais. Responsáveis pela execução logística, articulação comunitária e registro documental dos eventos.',
        src: null,
        placeholder: 'PC',
        specialization: 'Eventos · Logística · Engajamento Comunitário',
    },
];

/* ─────────────────────────────────────────────────────────────────
   Componente de Placeholder Visual (pré-headshot)
   Usado enquanto as fotos profissionais não foram produzidas.
   Mantém a proporção 3:4 e a grade de cor do sistema.
───────────────────────────────────────────────────────────────── */
const AvatarPlaceholder = ({ initials, name }) => (
    <div
        className="w-full h-full flex flex-col items-center justify-center bg-linear-to-b from-white/10 to-white/5 gap-3"
        role="img"
        aria-label={`Foto de ${name} — em breve`}
    >
        <span
            className="font-playfair text-3xl font-bold text-white/30 tracking-wider"
            aria-hidden="true"
        >
            {initials}
        </span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/20 font-manrope">
            Foto em breve
        </span>
    </div>
);

/* ─────────────────────────────────────────────────────────────────
   Card de Membro da Equipe
   Proporção 3:4 (portrait) para headshots — conforme Plano v1.0
───────────────────────────────────────────────────────────────── */
const TeamMemberCard = ({ member }) => {
    const altText = `${member.name} — ${member.role} da Territórios Culturais LTDA. ${member.credential}`;

    return (
        <article
            className="flex flex-col items-center group"
            aria-label={`Perfil: ${member.name}`}
        >
            {/* ── Retrato 3:4 ───────────────────────────────────────
                Proporção portrait para headshots profissionais.
                loading="lazy": componente abaixo da dobra.
                Borda dourada no hover conecta com paleta primary.
            ──────────────────────────────────────────────────────── */}
            <div className="w-40 h-[213px] md:w-48 md:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* aspect-3/4 = 3:4 portrait — especificado no Plano de Curadoria */}
                <div className="relative w-full h-full aspect-3/4">
                    {member.src ? (
                        <ProgressiveImage
                            src={member.src}
                            alt={altText}
                            loading="lazy"
                            fetchPriority="auto"
                            sizes="(max-width: 768px) 160px, 192px"
                            className="w-full h-full"
                            imgClassName="group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <AvatarPlaceholder
                            initials={member.placeholder}
                            name={member.name}
                        />
                    )}
                </div>
            </div>

            {/* Informações textuais */}
            <div className="text-center max-w-[200px]">
                <h3 className="font-playfair text-xl mb-1 text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h3>
                <span className="text-primary text-[10px] uppercase tracking-widest mb-2 font-bold block">
                    {member.role}
                </span>
                <span className="text-white/30 text-[9px] uppercase tracking-wide mb-3 font-manrope block italic">
                    {member.credential}
                </span>
                <p className="text-white/50 font-light font-manrope text-xs leading-relaxed">
                    {member.description}
                </p>

                {/* Tags de especialização */}
                <div className="flex flex-wrap gap-1 justify-center mt-4">
                    {member.specialization.split(' · ').map(tag => (
                        <span
                            key={tag}
                            className="text-[8px] uppercase tracking-widest text-white/20 border border-white/10 px-2 py-1 rounded-sm font-manrope"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

/* ─────────────────────────────────────────────────────────────────
   Componente Principal — Team
───────────────────────────────────────────────────────────────── */
const Team = () => (
    <section
        id="equipe"
        className="snap-section bg-background-dark text-white"
        aria-label="Equipe da Territórios Culturais"
    >
        <div className="container mx-auto px-8 py-20 h-full flex flex-col justify-center text-center">

            {/* Cabeçalho */}
            <div className="mb-16">
                <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">
                    Quem Executa
                </span>
                <h2 className="font-playfair text-5xl md:text-6xl mx-auto">
                    Nossa Equipe
                </h2>
                <p className="text-white/40 font-manrope font-light text-base mt-6 max-w-2xl mx-auto">
                    Profissionais com trajetória no audiovisual brasileiro e na gestão cultural estratégica.
                    Registro ANCINE Nº 63126.
                </p>
            </div>

            {/* Grid de membros */}
            <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
                role="list"
                aria-label="Membros da equipe"
            >
                {TEAM_MEMBERS.map(member => (
                    <div key={member.id} role="listitem">
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>

            {/* Nota de produção fotográfica — visível apenas em dev */}
            {import.meta.env.DEV && (
                <div className="mt-16 p-4 border border-primary/20 rounded-xl text-left max-w-2xl mx-auto">
                    <p className="text-primary/70 text-[10px] font-mono uppercase tracking-widest mb-2">
                        ⚡ DEV NOTE — Plano de Curadoria Visual v1.0
                    </p>
                    <p className="text-white/30 text-xs font-manrope">
                        Para ativar as fotos reais, adicione os arquivos em{' '}
                        <code className="text-primary/50">/public/images/team/</code>
                        {' '}e atualize o campo{' '}
                        <code className="text-primary/50">src</code>
                        {' '}em TEAM_MEMBERS acima.
                        Especificação: 600×800px, WebP, máx. 60KB, iluminação Rembrandt.
                    </p>
                </div>
            )}

        </div>
    </section>
);

export default Team;
