import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const circleItems = [
    {
        id: "01",
        title: "Quem Somos",
        shortText: "A Territórios Culturais LTDA é uma empresa de produção cultural e audiovisual registrada na ANCINE, dedicada à estruturação de políticas culturais, projetos e programas permanentes voltados ao desenvolvimento territorial por meio da cultura.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Apresentação",
        shortText: "Atuamos em parceria com municípios, instituições e organizações no planejamento, execução e acompanhamento de ações culturais, integrando cultura, educação, turismo e economia criativa em estratégias de desenvolvimento contínuo.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Finalidade",
        shortText: "Promover a organização da cultura como política pública estruturante, fortalecendo identidades locais, ampliando acesso cultural e estimulando impactos sociais e econômicos sustentáveis.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Sinopse",
        shortText: "Empresa técnica especializada na organização de sistemas culturais municipais, desenvolvimento de programas culturais permanentes e execução de projetos em audiovisual, formação e economia criativa.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Metodologia (MATC)",
        shortText: "A atuação da empresa baseia-se na Metodologia de Ativação Territorial Cultural — MATC, modelo próprio de diagnóstico, planejamento, implementação e acompanhamento de ações culturais estruturantes adaptadas à realidade de cada território.",
        image: "https://images.unsplash.com/photo-1454165833767-1390e501ddff?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "06",
        title: "Governança",
        shortText: "Os projetos são acompanhados por monitoramento contínuo, registro de resultados e atualização de informações institucionais, assegurando transparência e eficiência administrativa.",
        details: ["Continuidade das ações culturais", "Integração entre áreas públicas", "Valorização das identidades locais", "Formação e qualificação de agentes culturais", "Desenvolvimento econômico por meio da cultura"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "07",
        title: "Observatório",
        shortText: "Núcleo de estudos e acompanhamento de dados culturais voltado ao diagnóstico territorial, avaliação de impacto e orientação técnica para políticas públicas culturais.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "08",
        title: "Produtos e Serviços",
        shortText: "Desenvolvimento, planejamento e execução de projetos culturais, consultorias institucionais, formação cultural, programas audiovisuais, planejamento turístico e ações de economia criativa.",
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop"
    }
];

const Hero = ({ onExploreClick }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="inicio" className="snap-section relative bg-charcoal overflow-hidden min-h-screen pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/WhatsApp Video 2026-02-19 at 18.34.49.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Side: Title and Subtitle */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 text-white">
                            Territórios <br />
                            <span className="text-primary italic font-light">Culturais LTDA.</span>
                        </h1>
                        <h2 className="text-lg md:text-xl font-manrope text-primary/80 uppercase tracking-widest font-bold mb-8">
                            Produtora Cinematográfica Brasileira registrada na Agência Nacional do Cinema — ANCINE
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                            Estruturamos cultura em políticas públicas e desenvolvimento territorial.
                            Planejamento e organização das cadeias culturais, turísticas e criativas para municípios e instituições.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={onExploreClick}
                                className="bg-primary text-charcoal font-bold px-8 py-4 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase"
                            >
                                Conhecer Metodologia
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Circular Interactive Menu */}
                <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Circular Layout */}
                        {circleItems.map((item, index) => {
                            const angle = (index * 360) / circleItems.length;
                            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 200;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        left: `calc(50% + ${x}px - 40px)`,
                                        top: `calc(50% + ${y}px - 40px)`,
                                    }}
                                    className="relative group cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                    onMouseEnter={() => setSelectedItem(item)}
                                >
                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${selectedItem?.id === item.id ? 'border-primary ring-4 ring-primary/20 scale-110' : 'border-white/20 hover:border-white/50'}`}>
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    </div>
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/80 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white border border-white/10 z-20">
                                        {item.title}
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Center Display */}
                        <AnimatePresence mode="wait">
                            {selectedItem ? (
                                <motion.div
                                    key={selectedItem.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                >
                                    <div className="bg-charcoal/90 backdrop-blur-xl p-8 rounded-3xl border border-primary/30 w-72 md:w-80 text-center shadow-2xl pointer-events-auto">
                                        <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{selectedItem.title}</span>
                                        <p className="text-white text-sm font-light leading-relaxed mb-4">
                                            {selectedItem.shortText}
                                        </p>
                                        {selectedItem.details && (
                                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                                {selectedItem.details.map((detail, idx) => (
                                                    <span key={idx} className="text-[8px] border border-white/20 px-2 py-1 rounded-full text-white/50 uppercase tracking-tighter">
                                                        {detail}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <button
                                            onClick={() => setSelectedItem(null)}
                                            className="mt-6 text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors"
                                        >
                                            [ Fechar ]
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <div className="text-center">
                                        <img src="/LOGO_VETOR-removebg-preview.png" alt="Logo" className="w-24 h-auto opacity-20 mb-4 mx-auto" />
                                        <span className="text-xs text-white/20 uppercase tracking-[0.5em] animate-pulse">Explorar</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
                />
            </div>
        </section>
    );
};

export default Hero;
