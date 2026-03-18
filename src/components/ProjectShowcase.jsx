import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProgressiveImage from './ProgressiveImage';
import assetsManifest from '../data/assets-manifest.json';

/* ─────────────────────────────────────────────────────────────────
   ALT TEXTS ESTRATÉGICOS — Plano de Curadoria Visual v1.0
   Descrições contextuais que reforçam a narrativa de cada projeto
   e contribuem com SEO semântico para "cultura" + localização.
───────────────────────────────────────────────────────────────── */
const PROJECT_ALT_TEXTS = {
    'grao-mogol':       'Festival de Cinema de Grão Mogol — Mostra competitiva de filmes promocionais de destinos turísticos no Norte de Minas Gerais',
    'cine-territorio':  'Cine Território — Sessão de cinema comunitária ao ar livre em Patos de Minas, democratizando o acesso ao audiovisual via Lei Paulo Gustavo',
    'uva-vinho':        'Encontro Cultural da Uva e do Vinho — Enoturismo e economia criativa em Diamantina e Serro, Minas Gerais',
    'mostra-espinhaco': 'Mostra Itinerante da Cordilheira do Espinhaço — Circuito cultural cinematográfico em municípios históricos de Minas Gerais',
    'forum-internacional': 'Fórum Internacional de Enoturismo — Articulação entre Brasil, Argentina, Chile e Uruguai em desenvolvimento territorial sustentável em Ouro Branco',
    'cineclube-vemve':  'Cineclube Vemvê — Democratização do acesso ao cinema e ativação cultural territorial para 2.000 jovens em Montes Claros',
    'luz-imagem-educacao': 'Luz, Imagem, Educação — Cinema e escola: capacitação de professores e alunos na linguagem audiovisual em 10 escolas do Norte de Minas',
};

/* ─────────────────────────────────────────────────────────────────
   Card de Projeto Individual
───────────────────────────────────────────────────────────────── */
const ProjectCard = ({ project }) => {
    // Busca dados no manifesto de assets com fallback para Unsplash (Brutalista-Luxo)
    const assetData = assetsManifest.projects[project.id] || {};
    
    // Alt text refinado para SEO: [Título] — [Contexto/Leis] — [Impacto]
    const seoAlt = assetData.alt 
        || `${project.title} — ${project.subtitle} — ${project.incentiveLaw}. Projeto de Economia Criativa em ${project.locationLabel?.replace('📍 ', '')}.`;

    const mainImg = assetData.main || project.heroImage;
    const fallbackImg = assetData.fallback || project.fallbackImage;

    return (
        <article
            className="w-[300px] md:w-[380px] h-[550px] snap-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group hover:border-primary/50 transition-all duration-500 flex flex-col overflow-hidden relative shadow-2xl cursor-pointer"
            aria-label={`Projeto: ${project.title} — ${project.status}`}
        >
            {/* Badge de status dinâmico */}
            <div className="absolute top-4 right-4 z-20">
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-xl backdrop-blur-md border ${
                    project.status === 'Realizado com Sucesso' 
                    ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                    : 'bg-primary/20 text-primary border-primary/50'
                }`}>
                    {project.status}
                </span>
            </div>

            {/* ── Imagem do Projeto: 16:9 ───────────────────────────────── */}
            <div className="aspect-video relative overflow-hidden bg-charcoal">
                <ProgressiveImage
                    src={mainImg}
                    fallbackUrl={fallbackImg}
                    alt={seoAlt}
                    loading="lazy"
                    fetchPriority="auto"
                    sizes="(max-width: 768px) 300px, 350px"
                    className="w-full h-full"
                    imgClassName="group-hover:scale-110 transition-transform duration-1000 ease-out"
                />

                {/* Overlay Cinema / Brutalista */}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-40 transition-all duration-700 z-10" />
                
                {/* Botão Centralizado no Hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Link
                        to={`/projeto/${project.slug}`}
                        className="bg-primary text-charcoal font-black px-8 py-3 rounded-sm uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
                    >
                        Ver Case Study
                    </Link>
                </div>
            </div>

            {/* Conteúdo textual */}
            <div className="p-7 flex flex-col grow bg-charcoal/40 backdrop-blur-sm">
                <div className="mb-4">
                    <span className="text-primary text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block font-mono">
                        {project.id === 'mostra-espinhaco' ? 'PRONAC 259675' : project.incentiveLaw}
                    </span>
                    <h3 className="font-playfair text-2xl text-white group-hover:text-primary transition-colors leading-tight mb-2">
                        {project.title}
                    </h3>
                    <p className="text-white/40 text-[10px] font-manrope font-bold uppercase tracking-wider">
                        {project.subtitle}
                    </p>
                </div>

                <p className="text-[12px] text-white/70 mb-6 font-light font-manrope line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Footer do Card com Keywords e Local */}
                <div className="mt-auto pt-5 border-t border-white/5 flex flex-wrap gap-2 items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[9px] text-white/30 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-[12px] text-primary/50">location_on</span>
                        {project.locationLabel?.replace('📍 ', '')}
                    </div>
                    
                    {/* Tags Visuais de Contexto */}
                    <div className="flex gap-1.5">
                        {project.seoKeywords?.slice(0, 1).map(kw => (
                            <span key={kw} className="text-[8px] bg-white/5 text-white/40 px-2 py-0.5 rounded-sm border border-white/10 uppercase font-mono">
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

/* ─────────────────────────────────────────────────────────────────
   Seção de Projetos com scroll horizontal
───────────────────────────────────────────────────────────────── */
const ProjectSection = ({ title, projects, id }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (projects.length === 0) return null;

    return (
        <div id={id} className="">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">
                        Portfólio
                    </span>
                    <h2 className="font-playfair text-5xl md:text-6xl text-white">{title}</h2>
                </div>
                <div className="flex gap-2" aria-label="Navegar pelos projetos">
                    <button
                        onClick={() => scroll('left')}
                        className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 text-white transition-colors"
                        aria-label="Projeto anterior"
                    >
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 text-white transition-colors"
                        aria-label="Próximo projeto"
                    >
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
                role="list"
                aria-label={`Lista de projetos: ${title}`}
            >
                {projects.map(project => (
                    <div key={project.id} role="listitem" className="h-full">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────────────────────────── */
const ProjectShowcase = () => {
    const realizedProjects = projects.filter(p => p.category === 'realized');

    return (
        <section
            id="impact-metrics"
            className="snap-section bg-charcoal py-32 relative overflow-hidden"
            aria-label="Projetos realizados pela Territórios Culturais"
        >
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="container mx-auto px-8 relative z-10">
                <ProjectSection
                    id="eventos-realizados"
                    title="Eventos Realizados"
                    projects={realizedProjects}
                />
            </div>
        </section>
    );
};

export default ProjectShowcase;
