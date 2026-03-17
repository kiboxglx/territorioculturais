import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import ProgressiveImage from '../components/ProgressiveImage';

const PortfolioCinemaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal overflow-x-hidden">
            <Helmet>
                <title>Cinema, Audiovisual e Novas Mídias | Portfólio de Atuação</title>
                <meta name="description" content="A linguagem do cinema estrutura nossa estética, nossa narrativa e nosso compromisso técnico. Conheça as frentes da Territórios Culturais LTDA." />
            </Helmet>

            <Navbar />

            {/* PÁGINA 2: HERO & OVERVIEW */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-charcoal min-h-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage 
                        src="/images/hero/cine1.png"
                        alt="Set de filmagem cinematográfico em Minas Gerais — Eixo Cinema e Audiovisual"
                        className="w-full h-full"
                        imgClassName="object-cover"
                        fetchPriority="high"
                    />
                    {/* Overlay Dramático */}
                    <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/80 to-charcoal z-10" />
                    <div className="absolute inset-0 bg-linear-to-r from-charcoal via-transparent to-charcoal/40 z-10 opacity-60" />
                </div>

                <div className="container mx-auto px-8 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block lg:mt-0 mt-20">Página 2</span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            O eixo Cinema, Audiovisual e Novas Mídias nasce da cinematografia como <span className="italic text-primary font-light">base criativa da Territórios Culturais.</span>
                        </h1>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                A linguagem do cinema estrutura nossa estética, nossa narrativa e nosso compromisso com a qualidade técnica.
                            </p>
                            <p className="border-t border-primary/10 pt-6 mt-6 italic text-white/90">
                                "Do cinema autoral à comunicação institucional e digital, trabalhamos a imagem como expressão cultural, instrumento estratégico e ferramenta de transformação territorial."
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 3 Eixos na Página 2 */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 relative z-20">
                        {/* Cinema */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">movie</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">CINEMA</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Indústria cinematográfica, criação autoral e estruturação de obras para o mercado nacional.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                                    A Territórios Culturais LTDA atua na cadeia produtiva da indústria cinematográfica brasileira, com registro 63126 na Agencia Nacional do Cinema – ANCINE, e estrutura compatível com o desenvolvimento, produção e finalização de obras de curta, média e longa-metragem, de ficção e documental.
                                </p>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    Operamos o cinema como linguagem artística, setor econômico e instrumento de valorização cultural, estruturando projetos desde a concepção criativa até sua circulação estratégica.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('cinema-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Cinema
                            </button>
                        </motion.div>

                        {/* Audiovisual */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">video_camera_front</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">AUDIOVISUAL</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Comunicação institucional com credibilidade, informação e impacto público.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                                    Desenvolvemos produções audiovisuais com abordagem documental e informativa, voltadas à promoção de políticas públicas, valorização de patrimônios, fortalecimento de destinos turísticos e comunicação estratégica de instituições públicas e privadas.
                                </p>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    Unimos técnica, narrativa e responsabilidade comunicacional para transformar ações institucionais em conteúdos claros, acessíveis e de alto padrão técnico.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('audiovisual-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Audiovisual
                            </button>
                        </motion.div>

                        {/* Novas Mídias */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">devices</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">NOVAS MÍDIAS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Conteúdo estratégico para plataformas digitais e ambientes contemporâneos de comunicação.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                                    Criamos e estruturamos conteúdos audiovisuais adaptados às dinâmicas das plataformas digitais, promovendo posicionamento institucional qualificado e comunicação assertiva.
                                </p>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    Atuamos no planejamento, produção e acompanhamento técnico de conteúdos para redes sociais e ambientes digitais, integrando estratégia narrativa, identidade visual e objetivos institucionais.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('novas-midias-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Novas Mídias
                            </button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Explorar Portfólios</span>
                        <span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: CINEMA (Portfólio) */}
            <section id="cinema-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Cinema</h2>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto">
                            A Territórios Culturais LTDA atua na indústria cinematográfica brasileira com estrutura técnica, jurídica e operacional compatível com a cadeia produtiva do setor.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Desenvolvimento</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Pesquisa temática e argumentação.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Roteirização e consultoria dramatúrgica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Desenvolvimento de projetos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Estruturação para editais e fundos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Planejamento de captação de recursos.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Pré-Produção</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Planejamento técnico e artístico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Orçamento e plano de execução.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Direção de arte.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Definição de equipe técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Casting e preparação de elenco.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Produção</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Direção cinematográfica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Produção executiva.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Coordenação de set.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Captação de imagem e som.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Direção de fotografia.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors lg:col-start-1 lg:col-span-1">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Pós-Produção</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Montagem e edição.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Correção de cor.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Design de som.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Trilha sonora.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Finalização e masterização.</li>
                            </ul>
                        </motion.div>
                        
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors lg:col-span-2">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Distribuição e Circulação</h4>
                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Estratégia de lançamento.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Inscrição em festivais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Mostras e circuitos culturais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Licenciamento e exibição.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Difusão educacional.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Operamos o cinema como linguagem artística, instrumento cultural e setor econômico estruturado dentro da indústria audiovisual Brasileira."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: AUDIOVISUAL (Portfólio) */}
            <section id="audiovisual-portfolio" className="py-24 md:py-32 relative bg-[#151717] border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Audiovisual</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Comunicação pública com credibilidade e impacto social.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Produzimos conteúdos institucionais com abordagem documental e informativa, fortalecendo a imagem pública de municípios, consórcios, IGRs e empresas privadas.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Produções Institucionais</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Vídeos para Prefeituras.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Educação, saúde, assistência social.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Cultura, turismo e meio ambiente.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Infraestrutura e gestão pública.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Promoção de Destinos Turísticos</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Vídeos promocionais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Documentários institucionais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Séries de atrativos turísticos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Material audiovisual para feiras e eventos.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Campanhas Públicas</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Conscientização social.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Saúde pública.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Preservação ambiental.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Valorização cultural.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Valorização Patrimonial</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Patrimônio material.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Patrimônio imaterial.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Patrimônio natural.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Patrimônio artístico.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Transformamos políticas públicas e ações institucionais em narrativas estratégicas, acessíveis e tecnicamente qualificadas."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: NOVAS MÍDIAS (Portfólio) */}
            <section id="novas-midias-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Novas Mídias</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Conteúdo profissional para ambientes digitais contemporâneos.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Atuamos na criação e planejamento de conteúdos audiovisuais adaptados às novas tecnologias digitais, promovendo comunicação assertiva e posicionamento institucional qualificado.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Produção de Conteúdo Digital</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Vídeos para Instagram, Facebook e WhatsApp.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Conteúdos institucionais curtos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Cobertura de eventos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Séries educativas digitais.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Planejamento Estratégico</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Organização editorial audiovisual.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Linguagem adequada por plataforma.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Posicionamento institucional digital.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Construção de autoridade online.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Conteúdo Corporativo</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Vídeos de treinamento.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Comunicação interna.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Apresentações institucionais digitais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Atualização de canais oficiais.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl mb-4 italic">Acompanhamento Técnico</h4>
                            <ul className="space-y-3 text-sm text-white/70 font-light">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Direcionamento estratégico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Padronização visual.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Treinamento de equipe local.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Estruturação de presença digital.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Conectamos técnica audiovisual e estratégia digital para fortalecer a comunicação pública e privada nas novas plataformas."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-background-dark border-t border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src="/logosterritorios (5).jpeg" alt="Cinema, Audiovisual e Novas Mídias" className="h-20 w-auto mb-8 mix-blend-lighten opacity-90 hover:opacity-100 transition-all duration-500" />
                        
                        <h4 className="font-playfair text-2xl text-white mb-6">TERRITÓRIOS CULTURAIS LTDA</h4>
                        
                        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-10 text-white/60 font-light font-manrope text-sm">
                            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><i className="material-symbols-outlined text-[1rem]">phone_iphone</i> +55 38 99806-8804</span>
                            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><i className="material-symbols-outlined text-[1rem]">call</i> +55 21 99852-8804</span>
                            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><i className="material-symbols-outlined text-[1rem]">mail</i> territoriosculturaismg@yahoo.com</span>
                            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><i className="material-symbols-outlined text-[1rem]">location_on</i> Patos de Minas – MG</span>
                        </div>
                        
                        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 pt-8 border-t border-white/5 w-full">
                            Operadora Técnica ANCINE © {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default PortfolioCinemaPage;
