import React, { useEffect, useRef } from 'react';

const labels = [
    "Criar", "Comunicar", "Circular", "Formar",
    "Estruturar", "Financiar", "Desenvolver", "Monitorar",
    "Cine", "Território", "Vemvê", "2024",
    "Cultura", "Impacto", "Arte", "Identidade",
    "Memória", "Raiz",
];

const timelineVideos = labels.map((label, i) => ({
    label,
    webm: `/videos fita/webm/${i + 1}.webm`,
    mp4:  `/videos fita/mp4/${i + 1}.mp4`,
}));

// Duplica para loop contínuo
const track = [...timelineVideos, ...timelineVideos];

// Componente de vídeo individual com lazy play
const FilmVideo = ({ webm, mp4, label }) => {
    const videoRef = useRef(null);
    const wrapRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const wrap  = wrapRef.current;
        if (!video || !wrap) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(wrap);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={wrapRef}
            className="filmstrip-cell shrink-0 bg-black relative group border-r border-amber-900/20"
            role="img"
            aria-label={label}
        >
            <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover opacity-50 transition-[opacity] duration-700 group-hover:opacity-80"
                style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.75) saturate(0.6)' }}
                aria-hidden="true"
            >
                <source src={webm} type="video/webm" />
                <source src={mp4}  type="video/mp4"  />
            </video>
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply"
                 style={{ background: 'rgba(180,110,20,0.35)' }} />
            <div className="absolute inset-0 border border-black/40 pointer-events-none" />
            <div className="absolute bottom-2 right-3 z-30">
                <span className="text-gold font-display font-bold text-xl md:text-2xl italic tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {label}
                </span>
            </div>
        </div>
    );
};

const FilmStrip = () => {
    // Respeita prefers-reduced-motion via CSS (ver index.css)
    return (
        <section
            className="filmstrip-section relative overflow-hidden bg-charcoal flex items-center justify-center z-10"
            aria-label="Película de registros cinematográficos — Territórios Culturais"
        >
            {/* Sombras de borda */}
            <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-charcoal to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-charcoal to-transparent z-20 pointer-events-none" />

            {/* Película */}
            <div
                className="w-[110%] absolute left-[-5%] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center z-0"
                style={{ background: 'linear-gradient(to bottom, #1a0f00, #2a1a05, #1a0f00)' }}
            >
                {/* Perfurações topo */}
                <div className="filmstrip-holes" />

                {/* Faixa — animação CSS pura */}
                <div className="overflow-hidden relative z-20">
                    <div className="filmstrip-track flex">
                        {track.map((item, i) => (
                            <FilmVideo
                                key={i}
                                webm={item.webm}
                                mp4={item.mp4}
                                label={item.label}
                            />
                        ))}
                    </div>
                </div>

                {/* Perfurações base */}
                <div className="filmstrip-holes" />
            </div>

            {/* Vinheta */}
            <div className="absolute inset-0 pointer-events-none z-20"
                 style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20,10,0,0.85) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none z-[21] mix-blend-color"
                 style={{ background: 'rgba(160,90,10,0.15)' }} />
        </section>
    );
};

export default FilmStrip;
