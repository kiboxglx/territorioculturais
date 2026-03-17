import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ObservatorioDestaque = () => {
    return (
        <section id="blog" className="py-24 snap-section relative overflow-hidden">
            <div className="absolute inset-0 bg-charcoal"></div>
            <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
            
            <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-16 justify-between max-w-6xl">
                <div className="flex-1">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary uppercase tracking-widest text-[10px] font-bold block mb-4">Núcleo de Inteligência e Análise</span>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Observatório <br/> <span className="italic text-white/50 text-3xl md:text-4xl lg:text-5xl">Territórios Culturais</span>
                        </h2>
                        <h3 className="text-white/80 font-playfair text-xl md:text-2xl mb-4 italic">
                            Inteligência, análise e pensamento estratégico sobre cultura e desenvolvimento territorial
                        </h3>
                        <p className="text-white/60 font-manrope font-light text-base mb-8 max-w-lg leading-relaxed">
                            O Observatório Territórios Culturais é o núcleo de análise, monitoramento e produção de conhecimento do Sistema Territórios Culturais. Estruturado como plataforma editorial permanente, integra dados, experiências, pesquisas e reflexões.
                        </p>
                        
                        <div className="flex gap-4 items-center">
                            <span className="material-symbols-outlined text-primary/40 text-3xl">insights</span>
                            <span className="material-symbols-outlined text-primary/40 text-3xl">hub</span>
                            <span className="material-symbols-outlined text-primary/40 text-3xl">query_stats</span>
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
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative hover:border-primary/30 transition-all group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-primary group-hover:text-charcoal transition-colors">menu_book</span>
                        </div>
                        <h3 className="font-playfair text-2xl text-white mb-4">Plataforma Editorial</h3>
                        <p className="text-white/50 font-manrope text-sm font-light mb-8">
                            Mais do que um blog, é um espaço de formulação estratégica e construção coletiva de pensamento acadêmico e técnico.
                        </p>
                        
                        <Link 
                            to="/observatorio"
                            className="inline-flex items-center gap-2 bg-primary text-charcoal px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(17,212,212,0.1)]"
                        >
                            Acessar o Observatório
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ObservatorioDestaque;
