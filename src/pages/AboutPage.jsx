import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const areas = [
        "Audiovisual e difusão cultural",
        "Formação e qualificação cultural",
        "Planejamento cultural público",
        "Turismo cultural",
        "Economia criativa"
    ];

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal">
            <Helmet>
                <title>Quem Somos | Territórios Culturais</title>
                <meta name="description" content="Conheça a história e a missão da Territórios Culturais, produtora registrada na ANCINE focada em desenvolvimento territorial." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-10 grayscale"
                        alt="Bureau"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/0 via-charcoal to-charcoal"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto lg:mx-0"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Sobre a Empresa</span>
                        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                            Arquitetura de <br />
                            <span className="italic text-primary font-light">Políticas Públicas</span>
                        </h1>
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                            A Territórios Culturais LTDA é uma empresa brasileira de produção cultural e audiovisual registrada na ANCINE, dedicada à estruturação de políticas culturais.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 7 Point Content Section */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Summary Sidebar for Gestores */}
                        <aside className="lg:col-span-4 lg:order-2">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm sticky top-32">
                                <h3 className="font-playfair text-2xl mb-6 text-primary italic text-center">Por que nossa visão funciona</h3>
                                <ul className="space-y-6">
                                    {[
                                        { label: "Institucional", desc: "Não é artista individual, é empresa técnica." },
                                        { label: "Administrativa", desc: "Entende profundamente a administração pública." },
                                        { label: "Estratégica", desc: "Gera continuidade e legado governamental." },
                                        { label: "Operacional", desc: "Não é apenas produtora, é gestora de sistemas." }
                                    ].map((item, i) => (
                                        <li key={i} className="group">
                                            <span className="block text-[10px] uppercase tracking-widest text-primary font-bold mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                                            <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-all"
                                    >
                                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                                        Voltar ao Início
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Point by Point Content */}
                        <div className="lg:col-span-8 lg:order-1 space-y-24">

                            {/* Point 2: Propósito */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-[1px] bg-primary/30"></span>
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Propósito</span>
                                </div>
                                <h2 className="font-playfair text-3xl md:text-4xl italic text-white/90">A visão além da estética: A utilidade pública.</h2>
                                <p className="text-xl font-light leading-relaxed text-white/70">
                                    Atuamos na organização da cultura como <span className="text-white border-b border-primary/20">ferramenta de planejamento público</span>, integrando identidade cultural, educação, turismo e economia criativa em estratégias de impacto social e econômico contínuo.
                                </p>
                            </motion.div>

                            {/* Point 3: Diferencial */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-[1px] bg-primary/30"></span>
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Diferencial</span>
                                </div>
                                <h2 className="font-playfair text-3xl md:text-4xl italic text-white/90">Metodologia Própria e Adaptável.</h2>
                                <p className="text-lg font-light leading-relaxed text-white/60">
                                    Nossa lógica de trabalho baseia-se em uma metodologia rigorosa de diagnóstico territorial, planejamento e implementação de ações culturais estruturantes, adaptadas à realidade singular de cada município ou instituição.
                                </p>
                            </motion.div>

                            {/* Point 4: Áreas e Experiência */}
                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-10 rounded-3xl border border-white/5"
                                >
                                    <h3 className="font-playfair text-2xl mb-8 border-b border-primary/20 pb-4">Áreas Integradas</h3>
                                    <ul className="space-y-4">
                                        {areas.map((area, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-white/50 uppercase tracking-widest font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                {area}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-primary text-charcoal p-10 rounded-3xl"
                                >
                                    <h3 className="font-playfair text-2xl mb-6">Experiência Prática</h3>
                                    <p className="text-sm leading-relaxed font-bold opacity-80 uppercase tracking-tight">
                                        Desenvolvemos projetos em parceria com municípios e organizações, estruturando programas permanentes, mostras e circuitos culturais que garantem a continuidade das políticas locais.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Point 6: Impacto Público */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="py-16 border-y border-white/5"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-[1px] bg-primary/30"></span>
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Impacto Público</span>
                                </div>
                                <blockquote className="font-playfair text-3xl md:text-5xl lg:text-6xl text-center italic text-white/90 leading-tight py-8">
                                    "Priorizamos a descentralização do acesso, a valorização das identidades locais e o fortalecimento das cadeias produtivas."
                                </blockquote>
                            </motion.div>

                            {/* Point 7: Encerramento */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center pt-20"
                            >
                                <img src="/LOGO_VETOR-removebg-preview.png" alt="Logo" className="w-24 h-auto mx-auto opacity-20 mb-8" />
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 italic">Sistema de Desenvolvimento Contínuo</h2>
                                <p className="text-xl font-light text-white/40 max-w-2xl mx-auto">
                                    Mais do que executar eventos, a Territórios Culturais atua na organização da cultura como um sistema de desenvolvimento territorial permanente.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-background-dark border-t border-white/5">
                <div className="container mx-auto px-8 text-center">
                    <Link
                        to="/"
                        className="bg-primary text-charcoal font-bold px-12 py-5 rounded-full transition-all text-sm tracking-widest uppercase inline-block hover:scale-105"
                    >
                        Voltar para Início
                    </Link>
                </div>
            </section>

            <footer className="py-10 bg-black/40 text-center">
                <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                    Territórios Culturais LTDA — Operadora Técnica ANCINE
                </div>
            </footer>
        </main>
    );
};

export default AboutPage;
