import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const portfolioItems = [
    { id: "01", title: "Audiovisual", slug: "audiovisual", desc: "Produção e difusão de conteúdos com finalidade cultural." },
    { id: "02", title: "Mostras e Festivais", slug: "mostras-e-festivais", desc: "Curadoria e execução de eventos culturais estruturados." },
    { 
        id: "03", 
        title: "Formação e Qualificação", 
        slug: "formacao",
        link: "/formacao",
        desc: "Programas formativos voltados à profissionalização, autonomia técnica e fortalecimento estruturado do setor cultural.",
        hoverText: "Realizamos oficinas, cursos, congressos e programas de capacitação voltados à gestão cultural, produção artística e estruturação de políticas públicas, promovendo qualificação técnica e geração de capacidade instalada no território."
    },
    { id: "04", title: "Fóruns e Encontros", slug: "foruns-e-encontros", desc: "Debates técnicos para construção de políticas culturais." },
    { id: "05", title: "Consultoria Cultural", slug: "consultoria-cultural", desc: "Orientação técnica para organização administrativa municipal." },
    { id: "06", title: "Projetos Culturais", slug: "projetos-culturais", desc: "Desenvolvimento técnico para captação de recursos públicos." },
    { id: "07", title: "Turismo Cultural", slug: "turismo-cultural", desc: "Estruturação de destinos baseada na identidade territorial." },
    { id: "08", title: "Economia Criativa", slug: "economia-criativa", desc: "Fortalecimento das cadeias produtivas e geração de renda." }
];

const PortfolioSection = () => {
    const navigate = useNavigate();

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
                        to="/formacao"
                        className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold px-8 py-3 rounded-full transition-all text-xs tracking-widest uppercase inline-block"
                    >
                        Eixo 03 — Formação e Qualificação
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioItems.map((item, index) => {
                        const destination = item.link || null;

                        return (
                            <div
                                key={index}
                                className="cursor-pointer"
                                onClick={() => {
                                    if (destination) {
                                        navigate(destination);
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
                                    <div className={`text-6xl font-playfair transition-colors duration-500 ${item.hoverText ? 'text-primary' : 'text-primary/10 group-hover:text-primary'}`}>
                                        {item.id}
                                    </div>

                                    <div className="space-y-4 relative z-10 w-full">
                                        <div className="space-y-2">
                                            <h4 className="font-playfair text-lg md:text-xl text-white group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className={`text-[10px] md:text-xs text-white/50 font-light font-manrope leading-relaxed transition-all duration-500 ${item.hoverText ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0'}`}>
                                                {item.desc}
                                            </p>
                                        </div>

                                        {item.hoverText && (
                                            <div className="absolute left-0 bottom-full mb-4 w-[115%] -ml-6 bg-charcoal/95 backdrop-blur-xl p-6 rounded-2xl border border-primary/20 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-50">
                                                <span className="text-primary text-[10px] uppercase font-bold tracking-widest block mb-2">{item.title}</span>
                                                <p className="text-[10px] md:text-xs text-white/80 font-light leading-relaxed mb-4">
                                                    {item.hoverText}
                                                </p>
                                                <span className="bg-primary text-charcoal text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full inline-block">
                                                    Saiba Mais →
                                                </span>
                                            </div>
                                        )}

                                        <div className="h-[2px] w-12 bg-primary/20 group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
