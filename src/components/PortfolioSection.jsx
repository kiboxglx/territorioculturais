import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const portfolioItems = [
    { id: "01", title: "Audiovisual", slug: "audiovisual", desc: "Produção e difusão de conteúdos com finalidade cultural." },
    { id: "02", title: "Mostras e Festivais", slug: "mostras-e-festivais", desc: "Curadoria e execução de eventos culturais estruturados." },
    { id: "03", title: "Formação Cultural", slug: "formacao-cultural", desc: "Capacitação e qualificação de agentes culturais." },
    { id: "04", title: "Fóruns e Encontros", slug: "foruns-e-encontros", desc: "Debates técnicos para construção de políticas culturais." },
    { id: "05", title: "Consultoria Cultural", slug: "consultoria-cultural", desc: "Orientação técnica para organização administrativa municipal." },
    { id: "06", title: "Projetos Culturais", slug: "projetos-culturais", desc: "Desenvolvimento técnico para captação de recursos públicos." },
    { id: "07", title: "Turismo Cultural", slug: "turismo-cultural", desc: "Estruturação de destinos baseada na identidade territorial." },
    { id: "08", title: "Economia Criativa", slug: "economia-criativa", desc: "Fortalecimento das cadeias produtivas e geração de renda." }
];

const PortfolioSection = () => {
    return (
        <section id="portfolio-prev" className="snap-section bg-charcoal overflow-hidden relative py-20">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Experiência e Realização</span>
                        <h2 className="font-playfair text-5xl md:text-6xl text-white">Portfólio de Atuação</h2>
                    </div>

                    <Link
                        to="/portfolio"
                        className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold px-8 py-3 rounded-full transition-all text-xs tracking-widest uppercase inline-block"
                    >
                        Ver Documentação Completa
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioItems.map((item, index) => (
                        <Link
                            key={index}
                            to={`/portfolio#${item.slug}`}
                            onClick={(e) => {
                                // Manual scroll if already on page or to handle hash
                                if (window.location.hash === `#${item.slug}`) {
                                    document.getElementById(item.slug)?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/5 p-8 flex flex-col justify-between hover:border-primary/40 transition-all hover:bg-white/[0.07]"
                            >
                                <div className="text-6xl font-playfair text-primary/10 group-hover:text-primary transition-colors duration-500">
                                    {item.id}
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="font-playfair text-xl md:text-2xl text-white group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-white/40 font-light font-manrope leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="h-[2px] w-12 bg-primary/20 group-hover:w-full bg-primary transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
