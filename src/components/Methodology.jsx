import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Methodology = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            id: 1,
            title: "Pilares de Sustentação",
            desc: "Base técnica que organiza juridicamente, administrativamente e operacionalmente a política cultural."
        },
        {
            id: 2,
            title: "Abrangência Institucional e Soluções Estruturais",
            desc: "Onde a metodologia se aplica, quais estruturas organiza e quais fragilidades corrige na gestão pública."
        },
        {
            id: 3,
            title: "Arquitetura Cultural do Município",
            desc: "Desenho completo do funcionamento do sistema cultural municipal após a implantação da metodologia."
        },
        {
            id: 4,
            title: "Implantação e Continuidade Operacional",
            desc: "Como o município implementa, mantém e opera a política cultural de forma permanente."
        }
    ];

    return (
        <section id="metodologia" className="snap-section bg-charcoal relative py-32 overflow-hidden">
            {/* Visual Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Side: Editorial & Context */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block font-manrope"
                        >
                            Nossa Estratégia
                        </motion.span>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
                        >
                            Metodologia <br/> 
                            <span className="italic text-primary font-light text-3xl md:text-4xl lg:text-5xl">Autonomia Territorial Cultural — MATC</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-invert prose-p:font-manrope prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed"
                        >
                            <p className="text-lg text-white font-medium mb-4">Sistema estruturante de implantação, organização e permanência da política cultural municipal.</p>
                            
                            <p className="text-sm mb-6">A MATC é uma metodologia aplicada de estruturação da política pública de cultura, desenvolvida para organizar administrativamente o setor cultural dentro do município, criar capacidade permanente de gestão e integrar cultura ao desenvolvimento territorial.</p>
                            
                            <p className="text-sm border-l-2 border-primary/50 pl-4 py-1 italic mb-8">Ela transforma ações isoladas em sistema contínuo, garantindo previsibilidade, eficiência administrativa e fortalecimento dos agentes culturais locais.</p>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-12">
                                <h4 className="font-playfair text-xl text-white mb-2">Marco Estrutural da Metodologia</h4>
                                <p className="text-xs mb-4">A MATC organiza a cultura como infraestrutura pública. Por meio de diagnóstico territorial, estrutura normativa, planejamento estratégico e capacitação técnica, o município passa a operar cultura como política pública permanente — não como ação eventual.</p>
                                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-bold">
                                    <span>Diagnosticar</span> <span className="text-white/30 truncate">→</span> 
                                    <span>Estruturar</span> <span className="text-white/30 truncate">→</span> 
                                    <span>Financiar</span> <span className="text-white/30 truncate">→</span> 
                                    <span>Executar</span> <span className="text-white/30 truncate">→</span> 
                                    <span>Monitorar</span> <span className="text-white/30 truncate">→</span> 
                                    <span className="text-white border-b border-primary/50 pb-0.5">Tornar Permanente</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                to="/metodologia"
                                className="group flex items-center gap-4 bg-primary text-charcoal font-bold px-8 py-4 rounded-full transition-all text-xs tracking-widest uppercase w-fit hover:scale-105 shadow-[0_0_20px_rgba(17,212,212,0.15)]"
                            >
                                Ver Detalhes da Metodologia
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side: Interactive Cards (Accordion Style) */}
                    <div className="lg:col-span-7 flex flex-col gap-4 mt-12 lg:mt-0">
                        {cards.map((card, index) => (
                            <motion.div 
                                key={card.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${hoveredCard === card.id ? 'bg-white/10 border-primary/50 scale-[1.02]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                            >
                                <div className="p-8 flex items-start gap-6">
                                    <span className={`font-playfair text-4xl leading-none transition-colors duration-500 ${hoveredCard === card.id ? 'text-primary' : 'text-white/20'}`}>
                                        0{card.id}
                                    </span>
                                    
                                    <div className="flex-1">
                                        <h3 className={`font-playfair text-2xl mb-2 transition-colors duration-500 ${hoveredCard === card.id ? 'text-white' : 'text-white/80'}`}>
                                            {card.title}
                                        </h3>
                                        
                                        <AnimatePresence>
                                            {hoveredCard === card.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-sm font-manrope font-light text-white/70 leading-relaxed">
                                                        {card.desc}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    
                                    <div className={`mt-2 transition-transform duration-500 ${hoveredCard === card.id ? 'rotate-90 text-primary' : 'text-white/30'}`}>
                                        <span className="material-symbols-outlined">add</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Methodology;
