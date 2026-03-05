import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';

const SlideIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </motion.div>
);

const PortfolioGovernancaPage = ({ onOpenModal }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal"
        >
            <Helmet>
                <title>Governança e Estruturação Institucional | Territórios Culturais</title>
                <meta name="description" content="Estruturamos sistemas permanentes, com organização documental, regulamentação normativa e capacitação de equipes." />
            </Helmet>

            <Navbar onContactClick={onOpenModal} />

            {/* HERO SECTION - PÁGINA 2 */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-5xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block"
                        >
                            Portfólio de Atuação
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-playfair text-5xl md:text-7xl lg:text-7xl leading-tight mb-8"
                        >
                            Governança, Financiamento e <span className="italic text-white/50 block mt-2">Estruturação Institucional.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-primary font-light leading-relaxed max-w-3xl mb-8 border-l-2 border-primary/30 pl-6"
                        >
                            A base estrutural que sustenta as políticas públicas.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 text-base md:text-lg text-white/70 max-w-3xl font-light"
                        >
                            <p>
                                Dentro do Sistema Territórios Culturais, este eixo consolida a base técnica, administrativa e normativa que sustenta e viabiliza a execução das políticas públicas.
                            </p>
                            <p>
                                Atuamos especialmente em municípios que não possuem corpo técnico permanente ou estrutura administrativa suficiente para operar mecanismos complexos de financiamento público.
                            </p>
                            <p>
                                Mais do que executar procedimentos isolados, estruturamos sistemas permanentes, com organização documental, regulamentação normativa, capacitação de equipes e acompanhamento contínuo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* QUICK LINKS MARCAS */}
            <section className="py-20 bg-black/30 border-y border-white/5 relative z-10">
                <div className="container mx-auto px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Marca 1 */}
                        <SlideIn delay={0}>
                            <div className="flex flex-col items-start group h-full">
                                <span className="material-symbols-outlined text-5xl text-white/20 mb-6 group-hover:text-primary transition-colors">account_balance</span>
                                <h3 className="font-playfair text-2xl mb-4 group-hover:text-primary transition-colors leading-snug">Gestão e Operacionalização de Recursos</h3>
                                <p className="text-primary tracking-widest uppercase text-[9px] font-bold mb-4">Transferegov.br e execução técnica</p>
                                <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                                    Transferegov.br, execução financeira e conformidade administrativa.
                                </p>
                                <button onClick={() => scrollToSection('transferegov')} className="text-[10px] uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Portfólio em Gestão <span className="material-symbols-outlined text-[10px]">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>

                        {/* Marca 2 */}
                        <SlideIn delay={0.2}>
                            <div className="flex flex-col items-start group h-full">
                                <span className="material-symbols-outlined text-5xl text-white/20 mb-6 group-hover:text-primary transition-colors">receipt_long</span>
                                <h3 className="font-playfair text-2xl mb-4 group-hover:text-primary transition-colors leading-snug">Estruturação de Incentivos Fiscais</h3>
                                <p className="text-primary tracking-widest uppercase text-[9px] font-bold mb-4">Mecanismos Fiscais</p>
                                <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                                    Lei Municipal de Incentivo à Cultura, ISSQN Cultural e regulamentação técnica.
                                </p>
                                <button onClick={() => scrollToSection('incentivos')} className="text-[10px] uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Portfólio em Incentivos <span className="material-symbols-outlined text-[10px]">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>

                        {/* Marca 3 */}
                        <SlideIn delay={0.4}>
                            <div className="flex flex-col items-start group h-full">
                                <span className="material-symbols-outlined text-5xl text-white/20 mb-6 group-hover:text-primary transition-colors">trending_up</span>
                                <h3 className="font-playfair text-2xl mb-4 group-hover:text-primary transition-colors leading-snug">Estratégias de Pontuação e Repasses</h3>
                                <p className="text-primary tracking-widest uppercase text-[9px] font-bold mb-4">ICMS e Desenvolvimento</p>
                                <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                                    ICMS Patrimônio Cultural e ICMS Turismo como instrumentos de desenvolvimento territorial.
                                </p>
                                <button onClick={() => scrollToSection('pontuacao')} className="text-[10px] uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Portfólio em Pontuação <span className="material-symbols-outlined text-[10px]">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>

                        {/* Marca 4 */}
                        <SlideIn delay={0.6}>
                            <div className="flex flex-col items-start group h-full">
                                <span className="material-symbols-outlined text-5xl text-white/20 mb-6 group-hover:text-primary transition-colors">groups</span>
                                <h3 className="font-playfair text-2xl mb-4 group-hover:text-primary transition-colors leading-snug">Captação Continuada e Governança</h3>
                                <p className="text-primary tracking-widest uppercase text-[9px] font-bold mb-4">Gestão e Projetos</p>
                                <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
                                    Nenhum Mecanismo se Sustenta sem Equipe Capacitada.
                                </p>
                                <button onClick={() => scrollToSection('capacitacao')} className="text-[10px] uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Portfólio em Captação <span className="material-symbols-outlined text-[10px]">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* DETAILS - PÁGINA 3 */}
            <div className="divide-y divide-white/5">
                
                {/* 1. GESTÃO E OPERACIONALIZAÇÃO (TRANSFEREGOV) */}
                <section id="transferegov" className="py-24 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">01</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white leading-tight">Gestão e Operacionalização de Recursos</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    Transferegov.br e Execução Qualificada.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    O acesso a recursos federais exige regularidade fiscal, organização documental, domínio técnico da plataforma e acompanhamento rigoroso da execução. A Territórios Culturais estrutura o ciclo completo de operação.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Atuação Técnica</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Diagnóstico de capacidade administrativa e documental</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Regularização cadastral e habilitação no Transferegov.br</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Elaboração técnica de propostas e planos de trabalho</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Estruturação de cronogramas e processos técnicos</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Execução financeira com controle de metas e prazos</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Prestação de contas parcial e final transparente</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Capacitação da equipe municipal para continuidade</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Diferenciais</h4>
                                <ul className="space-y-4 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Redução de riscos de inadimplência</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Prevenção de glosas e devoluções</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Regularidade junto a órgãos federais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Organização administrativa permanente</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Transferência de conhecimento técnico</li>
                                </ul>
                            </SlideIn>
                            <div className="sm:col-span-2 mt-4 bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                                <p className="text-sm text-primary font-manrope font-light text-center italic">
                                    "Transformamos recursos aprovados em execução eficiente, regularizada, transparente e auditável."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. INCENTIVOS (ISSQN CULTURAL) */}
                <section id="incentivos" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">02</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white leading-tight">Estruturação de Incentivos e Mecanismos</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    Lei Municipal de Incentivo à Cultura – ISSQN Cultural.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    Muitos municípios possuem potencial de renúncia fiscal, mas carecem de regulamentação técnica e fluxo administrativo estruturado. Atuamos na organização integral do mecanismo.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Estruturação Jurídica</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Diagnóstico legislativo e jurídico</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Elaboração ou revisão da Lei Municipal</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Regulamentação por decreto</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Estruturação de comissões técnicas</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Organização de fluxos e elaboração de editais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Manualização de procedimentos técnicos</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Estrutura Operacional</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Implantação do sistema de análise</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Sistema de acompanhamento financeiro</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Orientação a proponentes e empresas</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Monitoramento e prestação de contas</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> <b>Potencial:</b> Ativação econômica, emprego e renda e descentralização cultural.</li>
                                </ul>
                            </SlideIn>
                            <div className="sm:col-span-2 mt-4 bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                                <p className="text-sm text-primary font-manrope font-light text-center italic">
                                    "Transformamos potencial fiscal em política pública funcional, segura e economicamente ativa."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PONTUAÇÃO (ICMS) */}
                <section id="pontuacao" className="py-24 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">03</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white leading-tight">Estratégias de Pontuação e Repasses</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    ICMS Patrimônio Cultural e ICMS Turismo.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    Patrimônio e turismo são instrumentos estratégicos de arrecadação quando estruturados tecnicamente. Atuamos na organização técnica anual para aumento de pontuação.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">ICMS Patrimônio Cultural</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Inventários e dossiês técnicos anuais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Atualização de tombamentos e registros</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Fortalecimento do Conselho e Fundo Municipal</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Organização documental conforme o IEPHA</li>
                                    <li className="flex items-start gap-2 mt-4"><span className="text-primary mt-1">✔</span> <b>Potencial:</b> Aumento progressivo de repasses e valorização da memória local.</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">ICMS Turismo</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Diagnóstico turístico e Planejamento</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Implantação ou atualização do COMTUR e Fundo</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Integração com IGRs e relatórios de indicadores</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Monitoramento e capacitação técnica</li>
                                    <li className="flex items-start gap-2 mt-4"><span className="text-primary mt-1">✔</span> <b>Potencial:</b> Ampliação financeira, integração regional e identidade de destino.</li>
                                </ul>
                            </SlideIn>
                        </div>
                    </div>
                </section>

                {/* 4. CAPACITAÇÃO E DIFERENCIAL */}
                <section id="capacitacao" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">04</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white leading-tight">Captação Continuada e Governança</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    Nenhum mecanismo se sustenta sem equipe capacitada.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    Formação e governança para a autonomia municipal plena. O Diferencial Estratégico do nosso Eixo 4 é que não atuamos apenas na captação de recursos momentânea, mas visando a continuidade administrativa.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Nossa Atuação Integrada</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Formação técnica para gestores públicos</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Capacitação para conselhos municipais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Treinamento em plataformas federais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Planejamento estratégico de longo prazo</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Organização normativa e sustentabilidade institucional</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Resultados Permanentes</h4>
                                <ul className="space-y-4 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Autonomia municipal progressiva</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Redução de dependência externa</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Consolidação institucional e estruturação de bases</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Continuidade administrativa segura</li>
                                    <li className="flex items-start gap-2 text-primary font-bold mt-2">Criamos sistemas permanentes.</li>
                                </ul>
                            </SlideIn>
                        </div>
                    </div>
                </section>
            </div>

            {/* CLOSING STATMENT */}
            <section className="py-24 md:py-32 bg-[radial-gradient(ellipse_at_center,var(--color-charcoal)_0%,#000_100%)] text-center relative border-y border-white/5">
                <div className="container mx-auto px-8 relative z-10 max-w-4xl">
                     <SlideIn>
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">account_balance</span>
                        <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                            Recursos existem.<br/> Normativas existem.
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-6">
                            O que muitas vezes falta é estrutura técnica para operar com segurança, estratégia e continuidade.
                        </p>
                        <p className="text-lg md:text-xl text-primary font-light leading-relaxed mb-12">
                            A Territórios Culturais organiza, regulamenta, executa, capacita e consolida sistemas permanentes de governança cultural e desenvolvimento territorial.
                        </p>
                        <button 
                            onClick={onOpenModal}
                            className="bg-primary text-charcoal font-bold px-10 py-4 rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(17,212,212,0.15)] inline-block"
                        >
                            Falar com Nossos Especialistas
                        </button>
                    </SlideIn>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black/90 py-12 px-8">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <img src="/logosterritorios (4).jpeg" alt="Territórios Culturais" className="h-16 w-auto opacity-90 mb-6 mix-blend-lighten" />
                    <div className="text-white/40 text-xs tracking-widest uppercase font-bold flex flex-wrap justify-center gap-x-6 gap-y-3 mb-4">
                        <span>Territórios Culturais LTDA</span>
                        <span>+55 38 99806-8804</span>
                        <span>+55 21 99852-8804</span>
                        <span>territoriosculturaismg@yahoo.com</span>
                    </div>
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
                        Patos de Minas – MG
                    </p>
                </div>
            </footer>
        </motion.div>
    );
};

export default PortfolioGovernancaPage;
