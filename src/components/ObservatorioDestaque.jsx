import React from 'react';
import { motion } from 'framer-motion';

const ObservatorioDestaque = () => {
    return (
        <section className="py-24 snap-section relative overflow-hidden">
            <div className="absolute inset-0 bg-charcoal"></div>
            <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
            
            <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-16 justify-between max-w-6xl">
                <div className="flex-1">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary uppercase tracking-widest text-[10px] font-bold block mb-4">Inteligência de Dados</span>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Observatório <br/> <span className="italic text-white/50">Territórios Culturais</span>
                        </h2>
                        <p className="text-white/70 font-manrope font-light text-lg mb-8 max-w-lg leading-relaxed">
                            Mapeamento contínuo, indicadores de impacto e transparência ativa. Uma plataforma tecnológica para monitoramento das políticas culturais do seu município.
                        </p>
                        
                        <div className="flex gap-4 items-center">
                            <span className="material-symbols-outlined text-primary text-3xl">insights</span>
                            <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                            <span className="material-symbols-outlined text-primary text-3xl">query_stats</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="absolute top-4 right-4 bg-primary/20 text-primary text-[10px] uppercase font-bold px-3 py-1 rounded-full">Em Breve</div>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-primary group-hover:text-charcoal transition-colors">rocket_launch</span>
                        </div>
                        <h3 className="font-playfair text-2xl text-white mb-2">Acesso a Dados</h3>
                        <p className="text-white/50 font-manrope text-sm font-light">Plataforma restrita para gestores mapearem e avaliarem os índices do seu território em tempo real.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ObservatorioDestaque;
