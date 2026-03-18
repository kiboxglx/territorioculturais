import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressiveImage from './ProgressiveImage';

/* ─────────────────────────────────────────────
   DADOS: 8 Eixos do Ecossistema
   (mantidos exatamente como estavam)
───────────────────────────────────────────── */
const circleItems = [
    {
        id: "01",
        title: "Produção e Comunicação Cultural",
        subtitle: "Cinema, Audiovisual e Novas Mídias",
        shortText: "Aqui nasce a narrativa, a imagem e a comunicação estratégica do território. É o eixo criativo e simbólico da empresa.",
        function: "Criar, comunicar e posicionar o território.",
        image: "/images/projects/cine-territorio.jpg"
    },
    {
        id: "02",
        title: "Circulação e Experiência Cultural",
        subtitle: "Mostras, Festivais e Eventos Culturais",
        shortText: "Aqui a cultura ganha espaço público, ativa público e movimenta economia local.",
        function: "Conectar público, artistas e território.",
        image: "/images/hero/mostras.png"
    },
    {
        id: "03",
        title: "Formação e Capacitação Cultural",
        subtitle: "Oficinas, Congressos, Fóruns",
        shortText: "Aqui se constrói autonomia técnica e qualificação profissional.",
        function: "Criar capacidade instalada no território.",
        image: "/images/hero/formacao.png"
    },
    {
        id: "04",
        title: "Consultoria e Elaboração de Projetos",
        subtitle: "Assessoria técnica e estruturação",
        shortText: "Aqui se organiza o acesso a recursos, editais e mecanismos públicos de financiamento.",
        function: "Transformar intenção cultural em projeto estruturado.",
        image: "/images/projects/Gemini_Generated_Image_1dkyy91dkyy91dky.png"
    },
    {
        id: "05",
        title: "Gestão e Planejamento Cultural",
        subtitle: "MATC, Sistemas Municipais, Governança",
        shortText: "Aqui a cultura deixa de ser evento e se torna política pública permanente.",
        function: "Implantar estrutura institucional duradoura.",
        image: "/images/hero/governanca.png"
    },
    {
        id: "06",
        title: "Turismo Cultural e Sec. Territorial",
        subtitle: "Planejamento Territorial",
        shortText: "Aqui identidade, patrimônio e cultura dialogam com estratégias de desenvolvimento econômico.",
        function: "Transformar identidade em ativo territorial.",
        image: "/images/projects/Gemini_Generated_Image_ewmt2eewmt2eewmt.png"
    },
    {
        id: "07",
        title: "Economia Criativa",
        subtitle: "Desenvolvimento Econômico",
        shortText: "Aqui a cultura gera renda, emprego e circulação financeira estruturada.",
        function: "Converter cultura em vetor econômico.",
        image: "/images/projects/Gemini_Generated_Image_jandojandojandoj.png"
    },
    {
        id: "08",
        title: "Observatório e Monitoramento",
        subtitle: "Análise contínua",
        shortText: "Aqui a política cultural é analisada, acompanhada e permanentemente aperfeiçoada.",
        function: "Garantir continuidade, inteligência e evolução institucional.",
        image: "/images/hero/cine1.png"
    }
];

/* ─────────────────────────────────────────────
   DADOS: Parceiros Institucionais
───────────────────────────────────────────── */
const partners = [
    { name: "SEBRAE", role: "Parceiro Estratégico" },
    { name: "ANCINE", role: "Registro Nº 63126" },
    { name: "Lei Rouanet", role: "Incentivo Fiscal" },
    { name: "Lei Paulo Gustavo", role: "Fomento Cultural" },
    { name: "FUMAC", role: "Fundo Municipal" },
    { name: "Prefeituras MG", role: "Poder Público" },
];

/* ─────────────────────────────────────────────
   DADOS: Tags de Eixos de Atuação
───────────────────────────────────────────── */
const axisTags = [
    "Cinema", "Enoturismo", "Moda", "Acessibilidade",
    "Governança", "Formação", "Economia Criativa"
];

/* ─────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────── */
const Hero = ({ onContactClick }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    // Garante play do vídeo após interação do usuário (mobile policy)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    return (
        <section
            id="home"
            className="snap-section relative bg-charcoal overflow-hidden min-h-screen pt-20"
            aria-label="Seção principal — Territórios Culturais"
        >

            {/* ── CAMADA 1: Vídeo em background ─────────────────── */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    fetchpriority="high"
                    onLoadedData={() => setVideoLoaded(true)}
                    aria-label="Cenas dos projetos culturais da Territórios Culturais — CineTerritório e festivais"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        filter: 'grayscale(0.85) contrast(1.15) brightness(0.55)',
                    }}
                >
                    <source src="/videoshome (1).MP4" type="video/mp4" />
                </video>

                {/* Overlay multicamada — profundidade progressiva */}
                <div className="absolute inset-0 bg-linear-to-r from-charcoal/95 via-charcoal/70 to-charcoal/40" />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/98 via-transparent to-charcoal/60" />

                {/* Glow dourado ambiental — canto superior direito */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)' }}
                />
                {/* Glow dourado ambiental — canto inferior esquerdo */}
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(200,16,46,0.06) 0%, transparent 70%)' }}
                />
            </div>

            {/* ── CAMADA 2: Scan Line — efeito película ─────────── */}
            <div className="scan-line z-[5]" aria-hidden="true" />


            {/* ── CAMADA 4: Conteúdo Principal ────────────────────── */}
            <div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-screen py-24">

                {/* ── COLUNA ESQUERDA: Texto e CTAs ─────────────────── */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* ── Badge ANCINE — Integrado ao conteúdo ────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="badge-institutional" title="Produtora registrada na Agência Nacional do Cinema">
                            <span
                                className="material-symbols-outlined text-gold"
                                style={{ fontSize: '0.875rem' }}
                                aria-hidden="true"
                                translate="no"
                            >
                                verified
                            </span>
                            <span>ANCINE Nº 63126</span>
                        </div>
                    </motion.div>

                    {/* Título Principal — Playfair Display 900 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1
                            className="font-display text-white leading-none mb-3"
                            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em' }}
                        >
                            Territórios{' '}
                            <br />
                            <em
                                className="not-italic text-shimmer-gold"
                                style={{ fontStyle: 'italic', fontWeight: 900 }}
                            >
                                Culturais
                            </em>
                        </h1>

                        {/* Rótulo institucional abaixo do título */}
                        <p
                            className="font-mono text-white/40 uppercase tracking-[0.2em] text-[0.65rem] mb-5"
                            style={{ fontFamily: 'var(--font-mono)' }}
                        >
                            Operadora de Desenvolvimento Territorial · Patos de Minas, MG
                        </p>

                        {/* Subtítulo de posicionamento */}
                        <p
                            className="font-body mb-4"
                            style={{
                                fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,215,0,0.75)',
                            }}
                        >
                            Integrando indústria criativa, gestão cultural{' '}
                            <br className="hidden md:block" />e desenvolvimento territorial.
                        </p>
                    </motion.div>

                    {/* Descrição */}
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="text-white/60 text-base font-light leading-relaxed mb-6 max-w-xl"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Nossos eixos complementares articulam criação artística, execução de
                        políticas públicas, formação técnica, governança cultural e desenvolvimento
                        econômico — formando um ecossistema cultural integrado e permanente.
                    </motion.p>

                    {/* Tags de Eixos */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="flex flex-wrap gap-2 mb-8"
                        aria-label="Eixos de atuação"
                    >
                        {axisTags.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-[0.6rem] font-bold uppercase tracking-widest border px-3 py-1"
                                style={{
                                    color: 'rgba(255,215,0,0.55)',
                                    borderColor: 'rgba(255,215,0,0.18)',
                                    background: 'rgba(255,215,0,0.04)',
                                    borderRadius: '2px',
                                    fontFamily: 'var(--font-mono)',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* ── CTAs Principais ─────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75 }}
                        className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto"
                    >
                        {/* CTA 1 — Patrocinador: Ver Impacto Social */}
                        <a
                            href="#projetos"
                            id="cta-ver-impacto"
                            className="btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            aria-label="Ver métricas de impacto social — para patrocinadores"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: '1rem' }}
                                aria-hidden="true"
                                translate="no"
                            >
                                bar_chart
                            </span>
                            Ver Impacto
                        </a>

                        {/* CTA 2 — Gestor Público: Soluções para Cidades */}
                        <button
                            id="cta-solucoes-cidades"
                            className="btn-secondary"
                            onClick={() => document.getElementById('territorios')?.scrollIntoView({ behavior: 'smooth' })}
                            aria-label="Conheça as soluções para gestores públicos e prefeituras"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: '1rem' }}
                                aria-hidden="true"
                                translate="no"
                            >
                                location_city
                            </span>
                            Soluções para Cidades
                        </button>

                        {/* CTA 3 — Quem Somos */}
                        <Link
                            to="/quem-somos"
                            className="btn-secondary"
                            aria-label="Conheça a equipe e história da Territórios Culturais"
                        >
                            Quem Somos
                        </Link>
                    </motion.div>

                    {/* ── Faixa de Parceiros ───────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        className="w-full max-w-xl"
                        aria-label="Parceiros e credenciais institucionais"
                    >
                        {/* Separador */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px flex-1" style={{ background: 'rgba(255,215,0,0.12)' }} />
                            <span
                                className="font-mono text-[0.55rem] uppercase tracking-[0.2em]"
                                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}
                            >
                                Parceiros &amp; Realizadores
                            </span>
                            <div className="h-px flex-1" style={{ background: 'rgba(255,215,0,0.12)' }} />
                        </div>

                        {/* Grid de parceiros */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="group relative px-3 py-2 cursor-default transition-all duration-300"
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '2px',
                                        background: 'rgba(255,255,255,0.03)',
                                    }}
                                    title={partner.role}
                                >
                                    {/* Hover: glow + borda dourada */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: 'rgba(255,215,0,0.05)',
                                            border: '1px solid rgba(255,215,0,0.30)',
                                            borderRadius: '2px',
                                            boxShadow: '0 0 14px rgba(255,215,0,0.10)',
                                        }}
                                    />
                                    <span
                                        className="relative z-10 font-mono font-bold text-[0.625rem] uppercase tracking-widest transition-colors duration-300 group-hover:text-gold"
                                        style={{
                                            color: 'rgba(255,255,255,0.45)',
                                            fontFamily: 'var(--font-mono)',
                                        }}
                                    >
                                        {partner.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── COLUNA DIREITA: Menu Orbital (mantido intacto) ── */}
                <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Anel orbital animado */}
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            style={{ willChange: 'transform' }}
                            className="absolute inset-0 z-10"
                            aria-hidden="true"
                        >
                            {circleItems.map((item, index) => {
                                const angle = (index * 360) / circleItems.length;
                                const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 200;
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1, rotate: [0, -360] }}
                                        transition={{
                                            opacity: { delay: 0.1 * index, duration: 0.5 },
                                            scale: { delay: 0.1 * index, duration: 0.5 },
                                            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                                        }}
                                        style={{ willChange: 'transform' }}
                                        style={{
                                            position: 'absolute',
                                            left: `calc(50% + ${x}px - 40px)`,
                                            top: `calc(50% + ${y}px - 40px)`,
                                        }}
                                        className="relative group cursor-pointer"
                                        onClick={() => setSelectedItem(item)}
                                        onMouseEnter={() => setSelectedItem(item)}
                                        onMouseLeave={() => setSelectedItem(null)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Eixo ${item.id}: ${item.title}`}
                                        onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
                                    >
                                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${selectedItem?.id === item.id
                                            ? 'border-gold ring-4 ring-gold/20 scale-110'
                                            : 'border-white/20 hover:border-gold/50'
                                        }`}>
                                            <ProgressiveImage
                                                src={item.image}
                                                alt={item.title}
                                                loading="eager"
                                                className="w-full h-full"
                                                imgClassName="grayscale group-hover:grayscale-0 transition-all"
                                            />
                                        </div>
                                        {/* Tooltip de hover */}
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/90 px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-gold/20 z-20"
                                            style={{ borderRadius: '2px' }}>
                                            {item.title}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Centro do Orbital — Card de Detalhe */}
                        <AnimatePresence mode="wait">
                            {selectedItem ? (
                                <motion.div
                                    key={selectedItem.id}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.85 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                >
                                    <div
                                        className="pointer-events-auto p-7 w-[300px] md:w-[340px] text-center"
                                        style={{
                                            background: 'rgba(17,17,17,0.97)',
                                            backdropFilter: 'blur(24px)',
                                            border: '1px solid rgba(255,215,0,0.25)',
                                            borderRadius: '2px',
                                            boxShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.08)',
                                        }}
                                        role="dialog"
                                        aria-label={`Detalhes: ${selectedItem.title}`}
                                    >
                                        <span
                                            className="font-mono block mb-2"
                                            style={{
                                                color: 'var(--gold)',
                                                fontSize: '0.6rem',
                                                letterSpacing: '0.25em',
                                                textTransform: 'uppercase',
                                                fontFamily: 'var(--font-mono)',
                                            }}
                                        >
                                            Eixo {selectedItem.id} · {selectedItem.title}
                                        </span>

                                        <h3
                                            className="font-display text-white mb-3"
                                            style={{ fontSize: '1rem', fontWeight: 700 }}
                                        >
                                            {selectedItem.subtitle}
                                        </h3>

                                        <p className="text-white/70 text-xs font-light leading-relaxed mb-4 pb-4"
                                            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                            {selectedItem.shortText}
                                        </p>

                                        <div style={{
                                            background: 'rgba(255,215,0,0.04)',
                                            border: '1px solid rgba(255,215,0,0.15)',
                                            borderRadius: '2px',
                                            padding: '0.625rem',
                                        }}>
                                            <span
                                                className="font-mono block mb-1"
                                                style={{
                                                    color: 'rgba(255,215,0,0.50)',
                                                    fontSize: '0.55rem',
                                                    letterSpacing: '0.15em',
                                                    textTransform: 'uppercase',
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                Função no Sistema:
                                            </span>
                                            <p className="text-gold text-xs font-medium" style={{ color: 'var(--gold)' }}>
                                                {selectedItem.function}
                                            </p>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                                            className="mt-5 text-[10px] uppercase tracking-widest transition-colors duration-200"
                                            style={{ color: 'rgba(255,255,255,0.30)', fontFamily: 'var(--font-mono)' }}
                                            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.80)'}
                                            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.30)'}
                                        >
                                            [ Fechar ]
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center"
                                >
                                    {/* Glow central */}
                                    <div
                                        className="absolute inset-0 rounded-full blur-2xl animate-pulse"
                                        style={{ background: 'rgba(255,215,0,0.04)' }}
                                        aria-hidden="true"
                                    />
                                    <h3
                                        className="font-display relative z-10 leading-tight text-center text-white"
                                        style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 700 }}
                                    >
                                        Ecossistema de<br />
                                        <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                                            Atuação Integrada
                                        </em>
                                    </h3>
                                    <p
                                        className="font-mono mt-2 relative z-10"
                                        style={{
                                            color: 'rgba(255,255,255,0.30)',
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            fontFamily: 'var(--font-mono)',
                                        }}
                                    >
                                        Passe sobre um eixo
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* ── Indicador de Scroll ───────────────────────────── */}
            <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
                style={{ opacity: 0.35 }}
                aria-hidden="true"
            >
                <span
                    className="font-mono mb-1"
                    style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'white', fontFamily: 'var(--font-mono)' }}
                >
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="w-px h-8"
                    style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
                />
            </div>

        </section>
    );
};

export default Hero;
