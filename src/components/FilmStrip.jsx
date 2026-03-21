import React from 'react';
import { motion } from 'framer-motion';

const timelineVideos = [
    { year: "2024", src: "/videoshome (1).MP4", description: "Cena de festival de cinema ao ar livre com grande público" },
    { year: "Cine", src: "/videoshome (2).MP4", description: "Projeção de cinema em tela gigante em praça pública" },
    { year: "Impacto", src: "/videoshome (3).MP4", description: "Bastidores de produção audiovisual e equipe técnica em ação" },
    { year: "Cultura", src: "/videoshome (4).MP4", description: "Interação cultural entre artistas e comunidade local" },
    { year: "2025", src: "/videoshome (5).MP4", description: "Panorama de evento cultural integrado à paisagem urbana" },
    { year: "Vida", src: "/videoshome (6).MP4", description: "Close-up de expressões culturais e artísticas diversas" },
];

const FilmStrip = () => {
    // Array longo suficiente para fazer loop invisível
    const track = [...timelineVideos, ...timelineVideos, ...timelineVideos, ...timelineVideos];

    return (
        <section 
            className="relative overflow-hidden bg-charcoal h-[350px] md:h-[450px] flex items-center justify-center z-10"
            aria-label="Carrossel visual de impacto: Película de registros cinematográficos"
        >
            {/* Sombreamento nas bordas para blend */ }
            <div className="absolute top-0 w-full h-12 bg-linear-to-b from-charcoal to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 w-full h-12 bg-linear-to-t from-charcoal to-transparent z-20 pointer-events-none"></div>

            {/* Container Horizontal que representa a película envelhecida */}
            <div className="w-[110%] absolute left-[-5%] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center z-0"
                style={{ background: 'linear-gradient(to bottom, #1a0f00, #2a1a05, #1a0f00)' }}
            >
                
                {/* Perfurações Superiores — cor âmbar envelhecida */}
                <div className="w-full h-3 md:h-4 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#c8962a_20%,#c8962a_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%] opacity-40"></div>
                
                {/* Faixa Deslizante */}
                <div className="flex overflow-hidden relative z-20">
                    <motion.div 
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }} // O conteúdo está repetido, deslisamos 50% para um loop contínuo
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {track.map((item, i) => (
                            <div 
                                key={i} 
                                className="w-[280px] h-[160px] md:w-[500px] md:h-[280px] shrink-0 bg-black relative group border-r border-amber-900/20"
                                role="img"
                                aria-label={`Registro de ${item.year}: ${item.description}`}
                            >
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover filmstrip-video opacity-50 transition-all duration-700 group-hover:opacity-80"
                                    style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.75) saturate(0.6)' }}
                                    aria-hidden="true"
                                />
                                {/* Overlay âmbar envelhecido */}
                                <div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{ background: 'rgba(180, 110, 20, 0.35)' }} />
                                {/* Riscos e grain da película */}
                                <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,200,80,0.03) 2px, rgba(255,200,80,0.03) 4px)' }} />
                                <div className="absolute inset-0 border border-black/40 pointer-events-none"></div>
                                {/* Marcador de Linha do Tempo */}
                                <div className="absolute bottom-2 right-3 z-30 transition-all duration-300">
                                    <span className="text-gold group-hover:text-gold-soft font-display font-bold text-xl md:text-2xl italic tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {item.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Perfurações Inferiores — cor âmbar envelhecida */}
                <div className="w-full h-3 md:h-4 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#c8962a_20%,#c8962a_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%] opacity-40"></div>
            </div>
            
            {/* Vinheta vintage + overlay âmbar geral */}
            <div className="absolute inset-0 pointer-events-none z-20" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(20,10,0,0.85) 100%)' }}></div>
            <div className="absolute inset-0 pointer-events-none z-[21] mix-blend-color" style={{ background: 'rgba(160, 90, 10, 0.15)' }}></div>
        </section>
    );
};

export default FilmStrip;
