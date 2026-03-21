import React from 'react';
import { motion } from 'framer-motion';

const labels = [
    "Criar", "Comunicar", "Circular", "Formar",
    "Estruturar", "Financiar", "Desenvolver", "Monitorar",
    "Cine", "Território", "Vemvê", "2024",
    "Cultura", "Impacto", "Arte", "Identidade",
    "Memória", "Raiz",
];

// Vídeos em ordem numérica derivados dos labels — sem risco de mismatch
const timelineVideos = labels.map((year, i) => ({
    year,
    webm: `/videos fita/webm/${i + 1}.webm`,
    mp4:  `/videos fita/mp4/${i + 1}.mp4`,
    description: `Registro cultural ${i + 1} — Territórios Culturais`,
}));

const FilmStrip = () => {
    const track = [...timelineVideos, ...timelineVideos];

    return (
        <section
            className="relative overflow-hidden bg-charcoal h-[350px] md:h-[450px] flex items-center justify-center z-10"
            aria-label="Carrossel visual de impacto: Película de registros cinematográficos"
        >
            {/* Sombreamento nas bordas */}
            <div className="absolute top-0 w-full h-12 bg-linear-to-b from-charcoal to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 w-full h-12 bg-linear-to-t from-charcoal to-transparent z-20 pointer-events-none" />

            {/* Película */}
            <div
                className="w-[110%] absolute left-[-5%] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center z-0"
                style={{ background: 'linear-gradient(to bottom, #1a0f00, #2a1a05, #1a0f00)' }}
            >
                {/* Perfurações superiores */}
                <div className="w-full h-3 md:h-4 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#c8962a_20%,#c8962a_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%] opacity-40" />

                {/* Faixa deslizante */}
                <div className="flex overflow-hidden relative z-20">
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {track.map((item, i) => (
                            <div
                                key={i}
                                className="w-[280px] h-[160px] md:w-[500px] md:h-[280px] shrink-0 bg-black relative group border-r border-amber-900/20"
                                role="img"
                                aria-label={`Registro ${item.year}: ${item.description}`}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                    className="w-full h-full object-cover filmstrip-video opacity-50 transition-[opacity] duration-700 group-hover:opacity-80"
                                    style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.75) saturate(0.6)' }}
                                    aria-hidden="true"
                                >
                                    <source src={item.webm} type="video/webm" />
                                    <source src={item.mp4}  type="video/mp4"  />
                                </video>

                                {/* Overlay âmbar envelhecido */}
                                <div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{ background: 'rgba(180,110,20,0.35)' }} />
                                {/* Linhas de película */}
                                <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,200,80,0.03) 2px,rgba(255,200,80,0.03) 4px)' }} />
                                <div className="absolute inset-0 border border-black/40 pointer-events-none" />

                                {/* Label */}
                                <div className="absolute bottom-2 right-3 z-30">
                                    <span className="text-gold group-hover:text-gold-soft font-display font-bold text-xl md:text-2xl italic tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {item.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Perfurações inferiores */}
                <div className="w-full h-3 md:h-4 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#c8962a_20%,#c8962a_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%] opacity-40" />
            </div>

            {/* Vinheta + overlay âmbar */}
            <div className="absolute inset-0 pointer-events-none z-20" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20,10,0,0.85) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none z-[21] mix-blend-color" style={{ background: 'rgba(160,90,10,0.15)' }} />
        </section>
    );
};

export default FilmStrip;
