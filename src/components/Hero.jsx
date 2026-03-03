import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const circleItems = [
    {
        id: "01",
        title: "Produção e Comunicação Cultural",
        subtitle: "Cinema, Audiovisual e Novas Mídias",
        shortText: "Aqui nasce a narrativa, a imagem e a comunicação estratégica do território. É o eixo criativo e simbólico da empresa.",
        function: "Criar, comunicar e posicionar o território.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Circulação e Experiência Cultural",
        subtitle: "Mostras, Festivais e Eventos Culturais",
        shortText: "Aqui a cultura ganha espaço público, ativa público e movimenta economia local.",
        function: "Conectar público, artistas e território.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Formação e Capacitação Cultural",
        subtitle: "Oficinas, Congressos, Fóruns",
        shortText: "Aqui se constrói autonomia técnica e qualificação profissional.",
        function: "Criar capacidade instalada no território.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Consultoria e Elaboração de Projetos",
        subtitle: "Assessoria técnica e estruturação",
        shortText: "Aqui se organiza o acesso a recursos, editais e mecanismos públicos de financiamento.",
        function: "Transformar intenção cultural em projeto estruturado.",
        image: "https://images.unsplash.com/photo-1454165833767-1390e501ddff?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Gestão e Planejamento Cultural",
        subtitle: "MATC, Sistemas Municipais, Governança",
        shortText: "Aqui a cultura deixa de ser evento e se torna política pública permanente.",
        function: "Implantar estrutura institucional duradoura.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "06",
        title: "Turismo Cultural e Sec. Territorial",
        subtitle: "Planejamento Territorial",
        shortText: "Aqui identidade, patrimônio e cultura dialogam com estratégias de desenvolvimento econômico.",
        function: "Transformar identidade em ativo territorial.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "07",
        title: "Economia Criativa",
        subtitle: "Desenvolvimento Econômico",
        shortText: "Aqui a cultura gera renda, emprego e circulação financeira estruturada.",
        function: "Converter cultura em vetor econômico.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "08",
        title: "Observatório e Monitoramento",
        subtitle: "Análise contínua",
        shortText: "Aqui a política cultural é analisada, acompanhada e permanentemente aperfeiçoada.",
        function: "Garantir continuidade, inteligência e evolução institucional.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
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
                            Produtora Cinematográfica Brasileira com Registro 63126 na Agência Nacional do Cinema<br/>
                            <span className="text-sm font-light text-white/50 block mt-2 tracking-normal">— integrando indústria criativa, gestão cultural e desenvolvimento territorial.</span>
                        </h2>
                        <div className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl space-y-4">
                            <p>
                                A Territórios Culturais atua por meio de um <strong className="text-white">Sistema estruturado</strong> que conecta metodologia própria (MATC), produção cultural, planejamento institucional, financiamento público, economia criativa e monitoramento estratégico.
                            </p>
                            <p>
                                Nosso portfólio é organizado em eixos complementares que articulam criação artística, execução de políticas públicas, formação técnica, governança cultural e desenvolvimento econômico. Cada dimensão dialoga com as demais, formando um ecossistema cultural integrado e permanente.
                            </p>
                            <p className="border-l-2 border-primary/50 pl-4 py-1 italic font-manrope">
                                Não operamos projetos isolados. <br/>
                                <strong className="text-white">Implantamos arquitetura de desenvolvimento territorial.</strong>
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={onExploreClick}
                                className="bg-primary text-charcoal font-bold px-8 py-4 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(17,212,212,0.15)]"
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
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                >
                                    <div className="bg-charcoal/95 backdrop-blur-2xl p-8 rounded-3xl border border-primary/50 w-[300px] md:w-[350px] text-center shadow-[0_0_50px_rgba(26,43,43,0.8)] pointer-events-auto">
                                        <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{selectedItem.title}</span>
                                        <h3 className="text-white text-base md:text-lg font-playfair mb-3">{selectedItem.subtitle}</h3>
                                        
                                        <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed mb-4 border-b border-white/10 pb-4">
                                            {selectedItem.shortText}
                                        </p>
                                        
                                        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                                            <span className="text-primary/70 text-[9px] uppercase tracking-widest block mb-1">Função no Sistema:</span>
                                            <p className="text-primary text-xs font-medium">{selectedItem.function}</p>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
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
                                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none max-w-[250px] mx-auto text-center"
                                >
                                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
                                    <img src="/LOGO_VETOR-removebg-preview.png" alt="Logo" className="w-16 h-auto opacity-30 mb-6 drop-shadow-[0_0_10px_rgba(17,212,212,0.5)]" />
                                    
                                    <h3 className="text-white font-playfair text-xl md:text-2xl mb-2 relative z-10">
                                        Ecossistema de<br/>
                                        <span className="text-primary italic">Atuação Integrada.</span>
                                    </h3>
                                    
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 leading-loose relative z-10 mt-2 flex flex-wrap justify-center gap-x-2">
                                        <span>Criar</span> •
                                        <span>Comunicar</span> •
                                        <span>Circular</span> •
                                        <span>Formar</span> •
                                        <span>Estruturar</span> •
                                        <span>Financiar</span> •
                                        <span>Desenvolver</span> •
                                        <span>Monitorar</span>
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Final Impact Phrase before Scroll */}
            <div className="absolute bottom-16 w-full text-center px-8 z-20 pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col items-center justify-center"
                >
                    <p className="text-primary text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-2 drop-shadow-md">
                        Sistema. Método. Execução. Monitoramento.
                    </p>
                    <p className="text-white/60 text-xs md:text-sm font-light font-manrope">
                        Cultura como infraestrutura de desenvolvimento territorial.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-20">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white mb-1">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-8 bg-linear-to-b from-primary to-transparent"
                />
            </div>
        </section>
    );
};

export default Hero;
