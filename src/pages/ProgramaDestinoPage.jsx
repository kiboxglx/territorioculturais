import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const ProgramaDestinoPage = () => {
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
                <title>Programa Destino Estruturado | Territórios Culturais</title>
                <meta name="description" content="Estruturação técnica integrada para transformar patrimônio, cultura e turismo em desenvolvimento territorial permanente." />
            </Helmet>

            <Navbar />

            {/* PÁGINA 2: HERO & EIXOS DO PROGRAMA */}
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
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block lg:mt-0 mt-20">Página 2 — Eixos do Programa</span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                            Programa <span className="italic text-primary font-light">Destino Estruturado.</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold font-manrope uppercase tracking-widest text-[#f5f5f5] mb-8">
                            Destino não é apenas promoção.<br/>É organização, estrutura e continuidade.
                        </h2>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                O Programa Destino Estruturado atua de forma sistêmica, integrando cultura, patrimônio, turismo, economia criativa e governança pública.
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 5 Eixos */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12 relative z-20">
                        {/* Eixo 1 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">explore</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Eixo 1 — Diagnóstico e Organização Territorial</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4">
                                    Mapeamento técnico do patrimônio cultural, ativos turísticos, marcos indenitários e capacidade institucional do município.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Eixo 2 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">account_balance</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Eixo 2 — Estruturação Normativa e Governança</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4">
                                    Implantação ou fortalecimento de conselhos, fundos, planos municipais e instrumentos legais que sustentam a política pública.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Eixo 3 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">local_activity</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Eixo 3 — Ativação Cultural e Programação Estratégica</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4">
                                    Organização de mostras, festivais, eventos, circuitos culturais e ações formativas como ferramentas de dinamização territorial.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Eixo 4 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">monitoring</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Eixo 4 — Pontuação Técnica e Ampliação de Repasses</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4">
                                    Estruturação documental e estratégica para fortalecimento do ICMS Patrimônio Cultural e ICMS Turismo.
                                </h4>
                            </div>
                        </motion.div>

                        {/* Eixo 5 */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between lg:col-span-2 lg:mx-auto lg:w-1/2 xl:w-full lg:col-start-2">
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary/70 mb-2 mx-auto">campaign</span>
                                    <h3 className="font-playfair text-xl text-white mb-2 leading-tight">Eixo 5 — Comunicação, Posicionamento e Projeção do Destino</h3>
                                </div>
                                <h4 className="text-white/60 text-sm font-light mb-4 text-center">
                                    Produção audiovisual, narrativa territorial e consolidação da identidade do município como destino estruturado.
                                </h4>
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
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">A Jornada do Destino Estruturado</h2>
                    </div>

                    {/* FASE 1: COMEÇO */}
                    <div className="mb-24 relative">
                        <div className="absolute top-0 left-8 md:origin-center md:left-1/2 w-0.5 h-full bg-white/10 -ml-px"></div>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">flag</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">Começo: Diagnosticar, Organizar e Planejar.</h3>
                            <p className="text-white/80 font-light mb-6 text-lg">
                                O Programa Destino Estruturado nasce da constatação de que muitos municípios possuem patrimônio, cultura e potencial turístico, mas carecem de organização técnica, planejamento integrado e estrutura administrativa para transformar esses ativos em desenvolvimento sustentável.
                            </p>
                            <h4 className="text-white font-bold mb-4">O primeiro movimento do programa é técnico e estratégico:</h4>
                            <ul className="space-y-2 text-white/70 font-light mb-6 grid md:grid-cols-2 gap-x-4">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Diagnóstico institucional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Levantamento de ativos culturais e turísticos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Mapeamento de conselhos, fundos e normativas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Análise da pontuação em ICMS Patrimônio e Turismo.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Identificação de gargalos administrativos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span> Avaliação de capacidade operacional da gestão.</li>
                            </ul>
                            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                                <p className="text-primary italic font-playfair text-lg">A partir desse diagnóstico, é estruturado um Plano Integrado de Organização Territorial, que define prioridades, metas e frentes de atuação.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* FASE 2: MEIO */}
                    <div className="mb-24 relative">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">account_tree</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">Meio: Estruturar, Implantar e Ativar.</h3>
                            <p className="text-white/80 font-light mb-8 text-lg">
                                Com base no planejamento, o programa entra na fase de estruturação prática.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-white font-bold mb-3 border-b border-white/10 pb-2">Organização Institucional:</h4>
                                    <ul className="space-y-2 text-white/70 font-light mb-6 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Implantação ou fortalecimento de Conselhos Municipais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Estruturação de Fundos Municipais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Elaboração ou atualização de Planos Municipais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Regulamentação normativa necessária.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Organização documental permanente.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-3 border-b border-white/10 pb-2">Estruturação Técnica para Pontuação:</h4>
                                    <ul className="space-y-2 text-white/70 font-light mb-6 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Organização de inventários patrimoniais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Produção de dossiês técnicos.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Implantação de políticas de preservação.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Estruturação do Plano Municipal de Turismo.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Integração com instâncias regionais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Monitoramento anual de indicadores.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-3 border-b border-white/10 pb-2">Ativação Cultural e Econômica:</h4>
                                    <ul className="space-y-2 text-white/70 font-light mb-6 text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Criação de calendário cultural estruturado.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Realização de mostras e festivais estratégicos.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Ações formativas para agentes locais.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Dinamização da economia criativa.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Integração entre cultura, patrimônio e turismo.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-3 border-b border-white/10 pb-2">Comunicação e Posicionamento:</h4>
                                    <ul className="space-y-2 text-white/70 font-light text-sm">
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Produção audiovisual institucional.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Consolidação da narrativa territorial.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Organização da identidade visual do destino.</li>
                                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span> Posicionamento estratégico em ambientes digitais.</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-8 bg-white/5 p-4 rounded-xl text-center border border-white/10">
                                <p className="text-primary italic font-playfair text-xl">Nesta fase, o município deixa de operar ações isoladas e passa a atuar com sistema organizado.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* FASE 3: FIM */}
                    <div className="relative">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-[#151717] border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 ml-12 md:ml-0">
                            <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 bg-primary rounded-full border-4 border-charcoal flex items-center justify-center text-charcoal font-bold tracking-widest">
                                <span className="material-symbols-outlined">emoji_events</span>
                            </div>
                            <h3 className="font-playfair text-3xl text-primary italic mb-4 mt-4 text-center md:text-left">Fim: Consolidação, Autonomia e Continuidade.</h3>
                            <p className="text-white/80 font-light mb-6 text-lg">
                                O objetivo final do Programa Destino Estruturado não é executar ações pontuais. É consolidar um modelo de gestão cultural e turística permanente.
                            </p>
                            
                            <h4 className="text-white font-bold mb-4">Ao final da estruturação, o município passa a contar com:</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Sistema normativo organizado.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Conselhos ativos e participativos.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Fundos estruturados.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Pontuação ampliada em ICMS.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Repasses financeiros fortalecidos.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Calendário cultural consolidado.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Identidade territorial definida.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Capacidade técnica instalada.</span></div>
                                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3"><span className="material-symbols-outlined text-primary text-xl">check_circle</span> <span className="text-sm font-light">Planejamento de longo prazo.</span></div>
                            </div>

                            <div className="bg-primary/20 p-6 rounded-xl border border-primary/40 text-center">
                                <p className="text-primary italic font-playfair text-2xl">
                                    "O destino deixa de depender exclusivamente de iniciativas episódicas e passa a operar com governança estruturada."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA / OBJETIVOS / METAS */}
            <section className="py-24 bg-background-dark border-t border-white/5 relative">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        
                        {/* Como o Programa Funciona */}
                        <div className="bg-charcoal p-8 rounded-3xl border border-white/10 flex flex-col h-full">
                            <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">COMO O PROGRAMA FUNCIONA</h3>
                            <p className="text-white/80 font-light mb-6 text-sm">O Programa opera em três movimentos integrados:</p>
                            <ol className="list-decimal list-inside space-y-3 font-bold text-white mb-8 border-b border-white/10 pb-6">
                                <li>Diagnosticar e Planejar.</li>
                                <li>Estruturar e Implantar.</li>
                                <li>Consolidar e Tornar Permanente.</li>
                            </ol>
                            <p className="text-white/80 font-light mb-4 text-sm mt-auto">Cada etapa é acompanhada por:</p>
                            <ul className="space-y-2 text-white/60 font-light text-sm">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Organização administrativa.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Capacitação técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Monitoramento de indicadores.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Relatórios de acompanhamento.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Transferência de conhecimento.</li>
                            </ul>
                            <div className="mt-8 italic text-primary font-playfair">
                                "Não se trata apenas de executar atividades. Trata-se de estruturar sistemas que permanecem."
                            </div>
                        </div>

                        {/* Objetivos do Programa */}
                        <div className="bg-charcoal p-8 rounded-3xl border border-white/10 flex flex-col h-full">
                            <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">OBJETIVOS DO PROGRAMA</h3>
                            <ul className="space-y-5 text-white/80 font-light text-sm flex-grow">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Organizar tecnicamente a política cultural e turística municipal.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Ampliar pontuação e repasses financeiros.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Estruturar governança e instrumentos legais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Fortalecer a identidade territorial.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Dinamizar a economia criativa local.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">radio_button_checked</span> Gerar autonomia administrativa progressiva.</li>
                            </ul>
                        </div>

                        {/* Metas e Direcionamentos */}
                        <div className="bg-charcoal p-8 rounded-3xl border border-white/10 flex flex-col h-full">
                            <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">METAS E DIRECIONAMENTOS</h3>
                            <ul className="space-y-5 text-white/80 font-light text-sm flex-grow">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Implantação ou regularização de conselhos e fundos.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Atualização normativa municipal.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Organização documental permanente.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Ampliação de pontuação técnica anual.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Consolidação de calendário cultural estruturado.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Capacitação contínua de equipes locais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">track_changes</span> Fortalecimento do posicionamento institucional do destino.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* FECHAMENTO GERAL INSTITUCIONAL */}
            <section className="py-32 bg-primary text-charcoal text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
                <div className="container mx-auto px-8 max-w-5xl relative z-10">
                    <span className="material-symbols-outlined text-6xl opacity-30 mb-8 block">flag</span>
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold italic max-w-4xl mx-auto leading-tight mb-8">
                        Destino estruturado não é apenas aquele que promove. É aquele que organiza, planeja, executa e sustenta.
                    </h2>
                    <div className="bg-charcoal/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto border border-charcoal/20 shadow-lg mt-12">
                        <p className="font-playfair text-2xl md:text-3xl text-charcoal italic leading-snug font-bold">
                            "O Programa Destino Estruturado transforma patrimônio, cultura e turismo em sistemas permanentes de desenvolvimento."
                        </p>
                    </div>
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

export default ProgramaDestinoPage;
