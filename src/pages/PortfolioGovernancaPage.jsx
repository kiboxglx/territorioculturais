import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const PortfolioGovernancaPage = () => {
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
                <title>Governança e Estruturação Institucional | Portfólio de Atuação</title>
                <meta name="description" content="A base estrutural que sustenta as políticas públicas culturais e turísticas." />
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
                            Governança, Financiamento e <span className="italic text-primary font-light">Estruturação Institucional.</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold font-manrope uppercase tracking-widest text-[#f5f5f5] mb-8">
                            A base estrutural que sustenta as políticas públicas.
                        </h2>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                Dentro do Sistema Territórios Culturais, este eixo consolida a base técnica, administrativa e normativa que sustenta e viabiliza a execução das políticas públicas.
                            </p>
                            <p>
                                Atuamos especialmente em municípios que não possuem corpo técnico permanente ou estrutura administrativa suficiente para operar mecanismos complexos de financiamento público.
                            </p>
                            <p className="border-t border-primary/10 pt-6 mt-6 italic text-white/90">
                                "Mais do que executar procedimentos isolados, estruturamos sistemas permanentes, com organização documental, regulamentação normativa, capacitação de equipes e acompanhamento contínuo."
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 4 Eixos na Página 2 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12 relative z-20">
                        {/* 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-primary/70 mb-4 mx-auto">account_balance</span>
                                    <h3 className="font-playfair text-2xl text-white mb-2 leading-tight">GESTÃO DE RECURSOS GOVERNAMENTAIS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Transferegov.br, execução financeira e conformidade administrativa.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('recursos-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>

                        {/* 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-primary/70 mb-4 mx-auto">receipt_long</span>
                                    <h3 className="font-playfair text-2xl text-white mb-2 leading-tight">ESTRUTURAÇÃO DE MECANISMOS FISCAIS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Lei Municipal de Incentivo à Cultura – ISSQN Cultural.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('incentivos-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>

                        {/* 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-primary/70 mb-4 mx-auto">monitoring</span>
                                    <h3 className="font-playfair text-2xl text-white mb-2 leading-tight">PONTUAÇÃO E AMPLIAÇÃO DE REPASSES</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    ICMS Patrimônio Cultural e ICMS Turismo como instrumentos de desenvolvimento territorial.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('icms-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>

                        {/* 4 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-primary/70 mb-4 mx-auto">model_training</span>
                                    <h3 className="font-playfair text-2xl text-white mb-2 leading-tight">CAPACITAÇÃO CONTINUADA</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Treinamentos voltados à operação de recursos. Nenhum mecanismo se sustenta sem equipe capacitada.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('capacitacao-gov-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Explorar Frentes</span>
                        <span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: GESTÃO (Portfólio) */}
            <section id="recursos-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Detalhamento das Frentes</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Gestão e Operacionalização de Recursos Governamentais</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Transferegov.br e Execução Técnica Qualificada</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            O acesso a recursos federais exige regularidade fiscal, organização documental, domínio técnico da plataforma e acompanhamento rigoroso da execução. A Territórios Culturais estrutura o ciclo completo de operação.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">Atuação Técnica:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Diagnóstico de capacidade administrativa e documental do município.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Regularização cadastral e habilitação no Transferegov.br.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Elaboração técnica de propostas e planos de trabalho.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Inserção e acompanhamento de projetos na plataforma.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação de cronogramas físico-financeiros.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização de processos administrativos internos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Execução financeira com controle de metas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Monitoramento de prazos e condicionantes.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização documental preventiva.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Prestação de contas parcial e final.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Elaboração de relatórios técnicos e demonstrativos de execução.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Capacitação da equipe municipal para continuidade do processo.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors flex flex-col justify-center">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Diferenciais:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Redução de riscos de inadimplência</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Prevenção de glosas e devoluções</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Regularidade junto a órgãos federais</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Organização administrativa permanente</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Transferência de conhecimento técnico</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <span className="block text-primary text-[10px] tracking-widest font-bold uppercase mb-2">Resultado Estratégico</span>
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Transformamos recursos aprovados em execução eficiente, regularizada, transparente e auditável."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: INCENTIVOS (Portfólio) */}
            <section id="incentivos-portfolio" className="py-24 md:py-32 relative bg-[#151717] border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Detalhamento</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Estruturação de Incentivos e Mecanismos Fiscais</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Lei Municipal de Incentivo à Cultura – ISSQN Cultural</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Muitos municípios possuem potencial de renúncia fiscal, mas carecem de regulamentação técnica e fluxo administrativo estruturado. Atuamos na organização integral do mecanismo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">Estruturação Jurídica e Normativa:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10 mb-8">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Diagnóstico legislativo e jurídico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Elaboração ou revisão da Lei Municipal de Incentivo.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Regulamentação por decreto.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação de comissões técnicas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Definição de critérios de seleção.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização de fluxos administrativos internos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Elaboração de editais públicos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Manualização de procedimentos.</li>
                            </ul>

                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10 border-t border-white/10 pt-6">Estrutura Operacional:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Implantação do sistema de análise de projetos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização documental.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Criação de sistema de acompanhamento financeiro.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Capacitação da equipe gestora.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Implantação de sistema de transparência pública.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Orientação a proponentes e empresas incentivadoras.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Monitoramento e prestação de contas.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors flex flex-col justify-center">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Potencial Gerado:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Ativação da economia criativa local.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Participação do setor empresarial.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Geração de emprego e renda.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Descentralização cultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Consolidação de política pública permanente.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <span className="block text-primary text-[10px] tracking-widest font-bold uppercase mb-2">Resultado Estratégico</span>
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Transformamos potencial fiscal em política pública funcional, segura e economicamente ativa."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: ICMS (Portfólio) */}
            <section id="icms-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Detalhamento</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Estratégias de Pontuação e Ampliação de Repasses</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">ICMS Patrimônio Cultural e ICMS Turismo</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Patrimônio e turismo são instrumentos estratégicos de arrecadação quando estruturados tecnicamente. Atuamos na organização técnica anual para aumento de pontuação e ampliação de repasses.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Patrimônio */}
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">ICMS Patrimônio Cultural</h4>
                            
                            <h5 className="font-bold text-[10px] uppercase tracking-widest text-white/50 mb-3 block">Atuação Técnica:</h5>
                            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Diagnóstico situacional do patrimônio municipal.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Organização de inventários e dossiês técnicos.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Atualização de tombamentos e registros.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Implantação ou fortalecimento do Conselho.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Estruturação do Fundo Municipal de Patrimônio.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Elaboração de relatórios técnicos anuais.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Organização documental conforme critérios do IEPHA.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Capacitação da equipe técnica.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Monitoramento anual de pontuação.</li>
                            </ul>

                            <h5 className="font-bold text-[10px] uppercase tracking-widest text-primary mb-3 block">Potencial GERADO:</h5>
                            <ul className="space-y-3 text-sm font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Aumento progressivo de pontuação.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Ampliação de repasses financeiros.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Organização patrimonial permanente.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Valorização da memória e identidade local.</li>
                            </ul>
                        </motion.div>

                        {/* Turismo */}
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">ICMS Turismo</h4>
                            
                            <h5 className="font-bold text-[10px] uppercase tracking-widest text-white/50 mb-3 block">Atuação Técnica:</h5>
                            <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Diagnóstico turístico municipal.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Estruturação do Conselho Municipal de Turismo.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Implantação ou atualização do COMTUR.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Elaboração ou revisão do Plano Municipal de Turismo.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Organização do Fundo Municipal de Turismo.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Integração com IGRs.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Organização documental anual.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Monitoramento de indicadores.</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-white/30 rounded-full"></span> Capacitação técnica de gestores.</li>
                            </ul>

                            <h5 className="font-bold text-[10px] uppercase tracking-widest text-primary mb-3 block">Potencial GERADO:</h5>
                            <ul className="space-y-3 text-sm font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Ampliação de repasses financeiros.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Organização da política turística.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Consolidação de calendário e identidade de destino.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Integração regional.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: CAPACITAÇÃO E DIFERENCIAL (Portfólio) */}
            <section id="capacitacao-gov-portfolio" className="py-24 md:py-32 relative bg-[#151717] border-y border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Detalhamento</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Capacitação Continuada em Governança</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Nenhum mecanismo se sustenta sem equipe capacitada.</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">Atuação:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Formação técnica para gestores públicos.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Capacitação para conselhos municipais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Treinamento em operação de sistemas federais.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Formação em prestação de contas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização administrativa cultural.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento estratégico de médio e longo prazo.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Acompanhamento técnico periódico.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors flex flex-col justify-center">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Resultado:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Autonomia municipal progressiva.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Redução de dependência externa.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Consolidação institucional.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Continuidade administrativa.</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Diferencial Estratégico do Eixo 4 */}
                    <div className="max-w-4xl mx-auto mt-24">
                        <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/10 p-12 rounded-3xl">
                            <div className="md:w-1/2">
                                <h3 className="font-playfair text-3xl md:text-4xl text-white mb-6">DIFERENCIAL ESTRATÉGICO</h3>
                                <p className="text-primary tracking-widest uppercase text-sm font-bold mb-4 font-manrope">
                                    Não atuamos apenas na captação.
                                </p>
                                <p className="text-white/70 text-lg font-light leading-relaxed">
                                    Criamos sistemas permanentes para que os projetos se desenvolvam a longo prazo de forma saudável.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <ul className="space-y-4 text-white/90 font-light border-l border-primary/30 pl-8">
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização normativa.</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação administrativa.</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Capacitação técnica.</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Monitoramento contínuo.</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Sustentabilidade institucional.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* FECHAMENTO GERAL (Eixo 4) */}
            <section className="py-24 bg-primary text-charcoal text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container mx-auto px-8 max-w-5xl relative z-10">
                    <span className="material-symbols-outlined text-6xl opacity-30 mb-8 block">hub</span>
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold italic max-w-4xl mx-auto leading-tight mb-8">
                        Recursos existem. Normativas existem.
                    </h2>
                    <p className="text-xl md:text-2xl font-manrope font-medium max-w-3xl mx-auto opacity-80 leading-relaxed uppercase tracking-widest text-[#151717] mb-12">
                        O que muitas vezes falta é estrutura técnica para operar com segurança, estratégia e continuidade.
                    </p>
                    <div className="bg-charcoal/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto border border-charcoal/20 shadow-lg">
                        <p className="font-playfair text-xl md:text-2xl text-charcoal italic leading-tight font-bold">
                            "A Territórios Culturais organiza, regulamenta, executa, capacita e consolida sistemas permanentes de governança cultural e desenvolvimento territorial."
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

export default PortfolioGovernancaPage;
