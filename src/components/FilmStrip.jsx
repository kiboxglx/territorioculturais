import React from 'react';
import { motion } from 'framer-motion';

const timelineVideos = [
    { year: "Cine Clube", src: "/WhatsApp Video 2026-02-19 at 18.34.49.mp4" },
    { year: "2016", src: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" },
    { year: "2019", src: "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4" },
    { year: "2021", src: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4" },
    { year: "2024", src: "https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4" },
];

const FilmStrip = () => {
    // Array longo suficiente para fazer loop invisível
    const track = [...timelineVideos, ...timelineVideos, ...timelineVideos, ...timelineVideos];

    return (
        <section className="relative overflow-hidden bg-charcoal h-[350px] md:h-[450px] flex items-center justify-center z-10">
            {/* Sombreamento nas bordas para blend */ }
            <div className="absolute top-0 w-full h-12 bg-linear-to-b from-charcoal to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 w-full h-12 bg-linear-to-t from-charcoal to-transparent z-20 pointer-events-none"></div>

            {/* Container Horizontal que representa a película */ }
            <div className="w-[110%] absolute left-[-5%] bg-linear-to-b from-black via-[#0d0d0d] to-black shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col justify-center z-0">
                
                {/* Perfurações Superiores */}
                <div className="w-full h-3 md:h-4 opacity-30 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#fff_20%,#fff_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%]"></div>
                
                {/* Faixa Deslizante */}
                <div className="flex overflow-hidden relative z-20">
                    <motion.div 
                        className="flex"
                        animate={{ x: ["0%", "-50%"] }} // O conteúdo está repetido, deslisamos 50% para um loop contínuo
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        style={{ width: "fit-content" }}
                    >
                        {track.map((item, i) => (
                            <div key={i} className="w-[280px] h-[160px] md:w-[500px] md:h-[280px] shrink-0 bg-black relative group border-r border-white/5">
                                <video 
                                    src={item.src} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 object-center"
                                />
                                <div className="absolute inset-0 border border-black/40 pointer-events-none"></div>
                                {/* Marcador de Linha do Tempo */}
                                <div className="absolute bottom-2 right-3 z-30 transition-all duration-300">
                                    <span className="text-white/60 group-hover:text-primary font-playfair font-bold text-xl md:text-2xl italic tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {item.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Perfurações Inferiores */}
                <div className="w-full h-3 md:h-4 opacity-30 bg-[linear-gradient(90deg,transparent_0%,transparent_20%,#fff_20%,#fff_80%,transparent_80%,transparent_100%)] bg-size-[16px_100%] md:bg-size-[24px_100%]"></div>
            </div>
            
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(26,43,43,0.8)_100%)] z-20"></div>
        </section>
    );
};

export default FilmStrip;
