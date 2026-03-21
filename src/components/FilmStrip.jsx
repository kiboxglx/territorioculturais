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
    webm: `/videos-fita/webm/${i + 1}.webm`,
    mp4:  `/videos-fita/mp4/${i + 1}.mp4`,
}));

// Componente de vídeo individual com lazy play via IntersectionObserver
const FilmCell = ({ webm, mp4, label }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                    obs.disconnect();
                }
            },
            { threshold: 0.01, rootMargin: '200px' }
        );
        obs.observe(video);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="filmstrip-cell shrink-0 relative group border-r border-amber-900/20 bg-black overflow-hidden">
            <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-50 transition-opacity duration-700 group-hover:opacity-80"
                style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.75) saturate(0.6)' }}
                aria-hidden="true"
            >
                <source src={webm} type="video/webm" />
                <source src={mp4}  type="video/mp4"  />
            </video>
            {/* Overlay âmbar */}
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply"
                 style={{ background: 'rgba(180,110,20,0.35)' }} />
            {/* Label */}
            <span className="absolute bottom-2 right-3 z-10 text-gold font-display font-bold text-xl md:text-2xl italic tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {label}
            </span>
        </div>
    );
};

const FilmStrip = () => {
    // Duplica para loop infinito seamless
    const track = [...timelineVideos, ...timelineVideos];

    return (
        <section
            className="filmstrip-section relative bg-charcoal flex items-center z-10"
            aria-label="Película de registros cinematográficos — Territórios Culturais"
        >
            {/* Sombras laterais */}
            <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-charcoal to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-charcoal to-transparent z-20 pointer-events-none" />

            {/* Película */}
            <div
                className="w-full flex flex-col"
                style={{ background: 'linear-gradient(to bottom, #1a0f00, #2a1a05, #1a0f00)' }}
            >
                {/* Perfurações topo */}
                <div className="filmstrip-holes" />

                {/* Faixa animada — overflow-hidden APENAS aqui */}
                <div className="filmstrip-viewport">
                    <div className="filmstrip-track">
                        {track.map((item, i) => (
                            <FilmCell
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

            {/* Vinheta central */}
            <div className="absolute inset-0 pointer-events-none z-10"
                 style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20,10,0,0.75) 100%)' }} />
        </section>
    );
};

export default FilmStrip;
