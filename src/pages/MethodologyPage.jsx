    import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const MethodologyPage = () => {
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
                <title>Metodologia MATC | Territórios Culturais</title>
                <meta name="description" content="Arquitetura estratégica integrada para estruturar governança cultural, fortalecer identidade territorial e consolidar desenvolvimento sustentável." />
            </Helmet>

            <Navbar />

            {/* PÁGINA 2: HERO & ESTRUTURA DA METODOLOGIA */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-background-dark min-h-screen flex items-center">
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
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block lg:mt-0 mt-20">Página 2 — Estrutura da Metodologia</span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            Metodologia de <br/><span className="italic text-primary font-light">Autonomia Territorial Cultural – MATC.</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold font-manrope uppercase tracking-widest text-[#f5f5f5] mb-8">
                            A MATC é o modelo estratégico que integra todo o Sistema Territórios Culturais.
                        </h2>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                Ela organiza programas, eixos de atuação, mecanismos de financiamento e instrumentos de monitoramento dentro de uma lógica sistêmica e permanente.
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 4 Pilares */}
                    <div className="mt-8 mb-16 text-center">
                        <h3 className="text-2xl font-playfair text-white">A metodologia é sustentada por quatro pilares estruturantes:</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-20">
                        {/* Pilar 1 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">account_tree</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Pilar 1 — Sistema Territórios Culturais</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4 text-center">
                                    Estrutura operacional integrada que conecta governança, formação, programação cultural, financiamento e desenvolvimento territorial.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Pilar 2 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">explore</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Pilar 2 — Programa Destino Estruturado</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4 text-center">
                                    Modelo aplicado de organização territorial que transforma patrimônio, cultura e turismo em política pública estruturada e permanente.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Pilar 3 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">troubleshoot</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Pilar 3 — Observatório Territórios Culturais</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4 text-center">
                                    Núcleo de monitoramento, análise de indicadores, organização documental e avaliação de impacto cultural e econômico.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Pilar 4 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">widgets</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Pilar 4 — Portfólio de Atuação em 4 Eixos</h3>
                                </div>
                                <ul className="text-white/60 text-xs font-light space-y-2 mt-4">
                                    <li>1- Cinema, Audiovisual e Novas Mídias.</li>
                                    <li>2- Mostras, Festivais e Eventos Culturais.</li>
                                    <li>3- Formação, Capacitação e Qualificação Cultural.</li>
                                    <li>4- Governança, Financiamento e Estruturação Institucional.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-16 relative z-20">
                        <button onClick={() => scrollToSection('contextualizacao')} className="bg-primary text-charcoal px-8 py-4 font-bold rounded-full tracking-widest uppercase text-xs hover:bg-white transition-colors">
                            Ler Contextualização Completa
                        </button>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: CONTEXTUALIZAÇÃO COMPLETA */}
            <section id="contextualizacao" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-5xl">
                    <div className="text-center mb-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Contextualização</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Origem e Propósito</h2>
                    </div>

                    <div className="mb-24 text-center md:text-left text-white/80 font-light text-lg space-y-6">
                        <p>A MATC nasce da necessidade de superar ações culturais isoladas e substituí-las por sistemas organizados, normatizados e sustentáveis.</p>
                        <p>A metodologia entende que desenvolvimento cultural não acontece por evento pontual, mas por estrutura permanente.</p>
                        <h4 className="text-white font-bold mb-4 mt-8">Seu propósito é gerar autonomia territorial progressiva por meio de:</h4>
                        <ul className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto md:ml-0">
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Organização normativa.</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Estruturação administrativa.</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Planejamento estratégico.</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Ativação cultural qualificada.</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Monitoramento contínuo.</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Consolidação econômica.</li>
                        </ul>
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-4xl text-white mb-4">COMO A MATC FUNCIONA:</h2>
                        <p className="text-primary tracking-widest uppercase text-sm font-bold">A metodologia opera de forma integrada em três grandes movimentos estruturais:</p>
                    </div>

                    {/* FASE 1 */}
                    <div className="mb-24 relative">
                        <div className="absolute top-0 left-8 md:origin-center md:left-1/2 w-0.5 h-full bg-white/10 -ml-px"></div>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">flag</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">1. Diagnóstico Sistêmico e Organização Institucional.</h3>
                            <p className="text-white/80 font-light mb-6 text-lg">
                                A base de toda autonomia é o diagnóstico técnico.
                            </p>
                            <h4 className="text-white font-bold mb-4">Nesta etapa são realizados:</h4>
                            <ul className="space-y-2 text-white/70 font-light mb-6 grid md:grid-cols-2 gap-x-4">
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Levantamento de ativos culturais e turísticos.</li>
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Análise de governança municipal.</li>
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Avaliação de conselhos, fundos e planos.</li>
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Diagnóstico de pontuação em ICMS.</li>
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Mapeamento da capacidade técnica instalada.</li>
                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2"></span> Identificação de gargalos administrativos.</li>
                            </ul>
                            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center gap-4">
                                <span className="bg-primary text-charcoal px-3 py-1 font-bold rounded text-xs uppercase tracking-widest shrink-0">Resultado</span>
                                <p className="text-primary italic font-playfair text-xl">Plano Estratégico Integrado de Estruturação Territorial.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* FASE 2 */}
                    <div className="mb-24 relative">
                        <div className="absolute top-0 left-8 md:origin-center md:left-1/2 w-0.5 h-full bg-white/10 -ml-px"></div>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">add_task</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">2. Estruturação Técnica e Implantação Operacional.</h3>
                            <p className="text-white/80 font-light mb-8 text-lg">
                                Nesta fase a metodologia ativa o <strong>Sistema Territórios Culturais</strong>.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Integram-se:</h4>
                                    <ul className="space-y-3 text-white/70 font-light text-sm">
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Governança e normativas.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Estruturação de mecanismos de financiamento.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Operacionalização de Transferegov.br.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Implantação ou revisão de Lei de Incentivo (ISSQN Cultural).</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Estruturação de ICMS Patrimônio Cultural.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Estruturação de ICMS Turismo.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Organização documental permanente.</li>
                                        <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span> Capacitação de equipes técnicas.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Simultaneamente, entram os Eixos Executivos:</h4>
                                    <ul className="space-y-3 text-white/70 font-light text-sm">
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="material-symbols-outlined text-white/40">movie</span> Audiovisual e Novas Mídias.</li>
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="material-symbols-outlined text-white/40">local_activity</span> Mostras, Festivais e Eventos.</li>
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="material-symbols-outlined text-white/40">school</span> Formação e Capacitação.</li>
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"><span className="material-symbols-outlined text-white/40">account_balance</span> Governança e Financiamento.</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-8 bg-white/5 p-6 rounded-xl text-center border border-white/10">
                                <p className="text-primary italic font-playfair text-xl">O território deixa de operar por ações fragmentadas e passa a atuar com sistema coordenado.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* FASE 3 */}
                    <div className="relative">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">monitoring</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">3. Consolidação, Monitoramento e Autonomia Progressiva.</h3>
                            <p className="text-white/80 font-light mb-6 text-lg">
                                Nenhum sistema se sustenta sem monitoramento.
                            </p>
                            
                            <h4 className="text-white font-bold mb-4">O Observatório Territórios Culturais atua como núcleo permanente de:</h4>
                            
                            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Monitoramento de indicadores.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Avaliação de impacto cultural.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Análise de impacto econômico.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Acompanhamento de pontuação técnica.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Organização de relatórios anuais.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Sistematização de resultados.</span></li>
                                <li className="bg-white/5 p-4 rounded-lg flex items-center gap-3 lg:col-span-3 lg:mx-auto lg:w-1/3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> <span className="text-sm font-light">Transferência de conhecimento.</span></li>
                            </ul>

                            <div className="border-t border-white/10 pt-8 text-center max-w-2xl mx-auto">
                                <h4 className="text-white font-playfair text-2xl mb-6">O objetivo final é:</h4>
                                <ul className="flex flex-wrap justify-center gap-4 text-sm">
                                    <li className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"><span className="material-symbols-outlined text-sm">verified</span> Autonomia administrativa</li>
                                    <li className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"><span className="material-symbols-outlined text-sm">verified</span> Capacidade técnica instalada</li>
                                    <li className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"><span className="material-symbols-outlined text-sm">verified</span> Aumento contínuo de repasses</li>
                                    <li className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"><span className="material-symbols-outlined text-sm">verified</span> Consolidação de identidade territorial</li>
                                    <li className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"><span className="material-symbols-outlined text-sm">verified</span> Sustentabilidade cultural e econômica</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* O QUE A MATC ENTREGA & DIFERENCIAL */}
            <section className="py-24 bg-background-dark border-t border-white/5 relative">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        
                        {/* O Que a Matc Entrega */}
                        <div className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                            
                            <h3 className="font-playfair text-3xl text-white mb-6 relative z-10">O QUE A MATC ENTREGA:</h3>
                            <p className="text-white/80 font-light mb-6 text-lg relative z-10">A metodologia não entrega apenas projetos. <br/>Entrega sistemas estruturados.</p>
                            <p className="text-white/60 font-light mb-8 text-sm relative z-10 border-b border-white/10 pb-6">Ao final do processo, o território passa a contar com:</p>
                            
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-white/80 font-light text-sm relative z-10 mb-8">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Governança organizada.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Instrumentos legais consolidados.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Fundos ativos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Conselhos operantes.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Pontuação ampliada.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Repasses financeiros fortalecidos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Calendário cultural estruturado.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Economia criativa ativada.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Identidade territorial definida.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Capacidade técnica instalada.</li>
                            </ul>
                        </div>

                        {/* Diferencial Estrategico */}
                        <div className="bg-primary text-charcoal p-8 md:p-12 rounded-3xl border border-primary/20 flex flex-col justify-center h-full shadow-[0_0_50px_rgba(17,212,212,0.1)]">
                            <h3 className="font-bold text-xl uppercase tracking-widest mb-6 font-manrope">DIFERENCIAL ESTRATÉGICO</h3>
                            
                            <div className="bg-charcoal/10 rounded-xl p-6 mb-8">
                                <p className="font-playfair text-2xl font-bold flex flex-wrap items-center gap-x-3 gap-y-2">
                                    Sistema 
                                    <span className="material-symbols-outlined text-[1rem]">add</span> 
                                    Programa
                                    <span className="material-symbols-outlined text-[1rem]">add</span> 
                                    Execução 
                                    <span className="material-symbols-outlined text-[1rem]">add</span> 
                                    Monitoramento.
                                </p>
                            </div>
                            
                            <p className="font-manrope font-medium text-lg leading-relaxed mb-4">
                                Não se trata apenas de produzir cultura.
                            </p>
                            <h4 className="font-playfair text-3xl font-bold italic">
                                Trata-se de estruturar política pública cultural permanente.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* FECHAMENTO GERAL INSTITUCIONAL */}
            <section className="py-32 bg-charcoal text-white text-center relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,212,212,0.05)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
                <div className="container mx-auto px-8 max-w-4xl relative z-10">
                    <span className="material-symbols-outlined text-6xl text-primary/30 mb-8 block">account_balance</span>
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-8">
                        Autonomia territorial não nasce do improviso. <br/> Nasce da organização.
                    </h2>
                    <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-lg mt-12">
                        <p className="font-playfair text-xl md:text-2xl text-primary italic leading-snug font-bold">
                            "A Metodologia de Autonomia Territorial Cultural (MATC) é a arquitetura estratégica que transforma cultura em estrutura, estrutura em governança e governança em desenvolvimento sustentável."
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 bg-background-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                
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

export default MethodologyPage;
