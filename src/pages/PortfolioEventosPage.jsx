import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const PortfolioEventosPage = () => {
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
                <title>Mostras, Festivais e Eventos Culturais | Portfólio de Atuação</title>
                <meta name="description" content="A Territórios Culturais atua na concepção, curadoria, planejamento e execução de eventos como ferramentas estruturantes de política pública." />
            </Helmet>

            <Navbar />

            {/* PÁGINA 2: HERO & OVERVIEW */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark min-h-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
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
                            A Territórios Culturais LTDA atua na concepção, curadoria, planejamento e <span className="italic text-primary font-light">execução de eventos culturais</span>
                        </h1>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                Como ferramentas estruturantes de política pública, formação de público e desenvolvimento territorial.
                            </p>
                            <p className="border-t border-primary/10 pt-6 mt-6 italic text-white/90">
                                "Nossos projetos integram arte, organização técnica, responsabilidade institucional e impacto econômico, promovendo circulação artística, valorização de talentos locais e dinamização da economia criativa."
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 3 Eixos na Página 2 */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 relative z-20">
                        {/* Mostras */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">theaters</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">MOSTRAS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Curadoria temática e democratização qualificada do acesso cultural.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    As mostras culturais ampliam o acesso à arte, promovem formação de plateia e criam espaços de diálogo, reflexão e circulação de obras, podendo integrar politicas publicas permanentes ou programações estratégicas.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('mostras-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Mostras
                            </button>
                        </motion.div>

                        {/* Festivais */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">festival</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">FESTIVAIS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Programações estruturadas que fortalecem identidade, calendário cultural e economia criativa.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    Os festivais organizam cadeias produtivas, estimulam intercâmbio artístico e consolidam a cultura como vetor de desenvolvimento econômico e projeção territorial.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('festivais-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Festivais
                            </button>
                        </motion.div>

                        {/* Eventos Culturais */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">event_star</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">EVENTOS CULTURAIS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Encontros estratégicos, celebrações e ações estruturantes de governança cultural.
                                </h4>
                                <p className="text-white/70 text-sm font-light leading-relaxed mb-10">
                                    Eventos culturais fortalecem redes institucionais, consolidam políticas públicas e promovem integração comunitária, articulando planejamento técnico, organização administrativa e impacto social.
                                </p>
                            </div>
                            <button onClick={() => scrollToSection('eventos-portfolio')} className="mt-auto w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio em Eventos
                            </button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Explorar Portfólios</span>
                        <span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: MOSTRAS (Portfólio) */}
            <section id="mostras-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Mostras</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">A arte em circulação. O público em formação.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            As mostras culturais são instrumentos estratégicos de democratização do acesso, formação de plateia e valorização de artistas e obras. Podem ser temáticas, itinerantes, educativas ou estruturadas como programas permanentes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Mostras de Cinema (ficção, documentário, animação, regional, autoral).</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Mostras Itinerantes (praças, escolas, comunidades rurais).</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Cineclubes permanentes.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Sessões comentadas com debatedores.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Mostras patrimoniais e memoriais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Mostras temáticas (meio ambiente, diversidade, patrimônio imaterial).</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Programações educativas integradas.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento técnico e artístico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Curadoria e definição de programação.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação orçamentária e plano de execução.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Captação e articulação institucional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Produção executiva completa.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Contratação e mediação de artistas e convidados.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Logística, equipamentos e operação técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Comunicação e marketing do evento.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Registro audiovisual e documental.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios técnicos e prestação de contas.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Estruturamos mostras culturais como instrumentos permanentes de política pública, formação de público e ativação territorial."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: FESTIVAIS (Portfólio) */}
            <section id="festivais-portfolio" className="py-24 md:py-32 relative bg-[#151717] border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Festivais</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Celebrar, circular e estruturar cadeias produtivas.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Os festivais organizam o calendário cultural, promovem intercâmbio artístico e estimulam a economia criativa local, tornando-se instrumentos de projeção territorial e desenvolvimento sustentável.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival de Cinema.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival de Música.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival de Teatro.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival Multicultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival do Patrimônio Cultural Imaterial.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival Gastronômico Cultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Festival Temático (juventude, tradição, cultura popular).</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Premiações e reconhecimento artístico.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficinas e debates e ações formativas integradas.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Concepção e desenho estratégico do festival.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento artístico e curatorial.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação financeira e orçamentária.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Gestão de equipe técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Produção geral e executiva.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Contratação de artistas e fornecedores.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Articulação institucional e regional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Mediação institucional e articulação regional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Comunicação, marketing e identidade visual.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Coordenação técnica e operação de palco.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Monitoramento de impacto econômico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios técnicos e prestação de contas.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Transformamos festivais em instrumentos estruturantes de política cultural, dinamização econômica e fortalecimento da identidade territorial."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: EVENTOS CULTURAIS (Portfólio) */}
            <section id="eventos-portfolio" className="py-24 md:py-32 relative bg-charcoal border-y border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Eventos Culturais</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Estrutura, encontro e fortalecimento institucional.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Eventos culturais consolidam redes, fortalecem governança e promovem integração comunitária, podendo ter caráter artístico, técnico ou institucional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Congressos culturais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Fóruns de políticas públicas.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Conferências municipais de cultura.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Encontros setoriais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Seminários de capacitação.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Lançamentos institucionais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Eventos comemorativos municipais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Rodadas de negócios da economia criativa.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento estratégico do evento.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação metodológica e programação técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Produção executiva completa.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização administrativa e documental.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Gestão de inscrições e participantes.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Contratação e mediação de palestrantes e artistas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Comunicação institucional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Cobertura audiovisual e registro técnico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Sistematização de resultados.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios finais e prestação de contas.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Entregamos eventos culturais com organização técnica, responsabilidade administrativa e impacto institucional mensurável."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FECHAMENTO GERAL (Página 3) */}
            <section className="py-24 bg-primary text-charcoal text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container mx-auto px-8 max-w-5xl relative z-10">
                    <span className="material-symbols-outlined text-6xl opacity-30 mb-8 block">star_rate</span>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold italic max-w-4xl mx-auto leading-tight mb-8">
                        Não apenas idealizamos eventos culturais.
                    </h2>
                    <p className="text-xl md:text-2xl font-manrope font-medium max-w-3xl mx-auto opacity-80 leading-relaxed uppercase tracking-widest">
                        Planejamos, estruturamos, executamos e entregamos resultados com responsabilidade técnica, administrativa e impacto territorial comprovado.
                    </p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-background-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src="/logosterritorios (5).jpeg" alt="Territórios Culturais" className="h-20 w-auto mb-8 mix-blend-lighten opacity-90 hover:opacity-100 transition-all duration-500" />
                        
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

export default PortfolioEventosPage;
