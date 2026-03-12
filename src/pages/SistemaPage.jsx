import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const SistemaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    const estruturas = [
        {
            num: '01',
            icon: 'schema',
            title: 'MATC — Metodologia de Autonomia Territorial Cultural.',
            sub: 'A base estruturante do sistema.',
            desc: 'Organiza juridicamente, administrativamente e estrategicamente a política cultural municipal, implantando governança permanente, planejamento integrado e autonomia progressiva.',
        },
        {
            num: '02',
            icon: 'explore',
            title: 'Programa Destino Estruturado.',
            sub: 'O modelo aplicado de organização territorial.',
            desc: 'Transforma patrimônio, cultura e turismo em política pública estruturada, ampliando pontuação técnica, fortalecendo identidade local e consolidando desenvolvimento contínuo.',
        },
        {
            num: '03',
            icon: 'widgets',
            title: 'Portfólio de Atuação em 4 Eixos.',
            sub: 'A engrenagem executiva do sistema.',
            bullets: [
                'Cinema, Audiovisual e Novas Mídias.',
                'Mostras, Festivais e Eventos Culturais.',
                'Formação, Capacitação e Qualificação Cultural.',
                'Governança, Financiamento e Estruturação Institucional.',
            ],
            desc: 'Cada eixo opera como dimensão estratégica do sistema.',
        },
        {
            num: '04',
            icon: 'monitoring',
            title: 'Observatório Territórios Culturais.',
            sub: 'O núcleo de monitoramento e avaliação contínua.',
            desc: 'Responsável por indicadores, organização documental, análise de impacto cultural e econômico e consolidação de dados estratégicos.',
        },
    ];

    const camadas = [
        {
            num: '1',
            title: 'Estruturação Institucional.',
            intro: 'Por meio da MATC, implanta:',
            items: ['Governança cultural organizada.', 'Conselhos ativos.', 'Fundos estruturados.', 'Planos municipais consolidados.', 'Normativas regulamentadas.', 'Organização documental permanente.'],
            resultado: 'Base jurídica e administrativa sólida.',
        },
        {
            num: '2',
            title: 'Sustentação Financeira e Operacional.',
            intro: 'Organiza e operacionaliza:',
            items: ['Transferegov.br.', 'Lei Municipal de Incentivo (ISSQN Cultural).', 'ICMS Patrimônio Cultural.', 'ICMS Turismo.', 'Estruturação de editais e fundos.'],
            resultado: 'Ampliação de repasses, segurança jurídica e estabilidade administrativa.',
        },
        {
            num: '3',
            title: 'Execução Criativa e Ativação Territorial.',
            intro: 'Por meio dos quatro eixos do portfólio, ativa:',
            items: ['Produção audiovisual e narrativa institucional.', 'Mostras, festivais e eventos estratégicos.', 'Formação técnica e capacitação.', 'Organização de sistemas de financiamento.'],
            resultado: 'Dinamização econômica e consolidação de identidade territorial.',
        },
        {
            num: '4',
            title: 'Monitoramento e Consolidação Permanente.',
            intro: 'O Observatório Territórios Culturais garante:',
            items: ['Monitoramento de indicadores.', 'Avaliação de impacto cultural.', 'Análise de impacto econômico.', 'Organização de relatórios técnicos.', 'Acompanhamento de pontuação anual.', 'Transferência de conhecimento.'],
            resultado: 'Continuidade, previsibilidade e autonomia progressiva.',
        },
    ];

    const entregas = [
        'Governança estruturada.',
        'Instrumentos legais consolidados.',
        'Captação e execução financeira organizadas.',
        'Pontuação técnica ampliada.',
        'Repasses fortalecidos.',
        'Produção cultural qualificada.',
        'Economia criativa ativada.',
        'Identidade territorial consolidada.',
        'Capacidade técnica instalada.',
        'Monitoramento permanente.',
    ];

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal overflow-x-hidden">
            <Helmet>
                <title>Sistema Territórios Culturais | Territórios Culturais</title>
                <meta name="description" content="O Sistema Territórios Culturais é a arquitetura estratégica integrada de desenvolvimento cultural, institucional e territorial da Territórios Culturais LTDA." />
            </Helmet>

            <Navbar />

            {/* ======= PÁGINA 2 HERO ======= */}
            <section className="relative pt-40 pb-24 min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/4"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block lg:mt-0 mt-16">
                            Página 2 — Estrutura do Sistema
                        </span>
                        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                            Sistema <br />
                            <span className="italic text-primary font-light">Territórios Culturais.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-light font-manrope mb-4 italic">
                            Arquitetura estratégica integrada de desenvolvimento cultural, institucional e territorial.
                        </p>

                        <div className="mt-8 mb-16 max-w-3xl mx-auto space-y-4 border-l-2 border-primary/30 pl-6 text-left">
                            <p className="text-base text-white/80 font-light leading-relaxed">
                                Uma arquitetura integrada.<br />
                                <strong className="text-white">Método, execução e monitoramento em um único modelo.</strong>
                            </p>
                            <p className="text-sm text-white/60 font-light leading-relaxed">
                                O Sistema Territórios Culturais é composto por quatro estruturas centrais interligadas:
                            </p>
                        </div>
                    </motion.div>

                    {/* 4 ESTRUTURAS */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {estruturas.map((e, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col hover:border-primary/30 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="material-symbols-outlined text-3xl text-primary/70">{e.icon}</span>
                                    <span className="text-primary font-bold text-xs tracking-widest">{e.num}</span>
                                </div>
                                <h3 className="font-playfair text-lg text-white mb-1 leading-snug">{e.title}</h3>
                                <p className="text-primary/80 text-xs italic mb-3">{e.sub}</p>
                                {e.bullets ? (
                                    <ul className="space-y-1 mb-3">
                                        {e.bullets.map((b, i) => (
                                            <li key={i} className="text-white/60 text-xs font-light flex items-start gap-2">
                                                <span className="w-1 h-1 bg-primary rounded-full shrink-0 mt-1.5"></span>{b}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                                <p className="text-white/50 text-xs font-light mt-auto">{e.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => scrollToSection('contextualizacao')}
                            className="bg-primary text-charcoal px-8 py-4 font-bold rounded-full tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(17,212,212,0.2)]"
                        >
                            Ver Contextualização Completa
                        </button>
                    </div>
                </div>
            </section>

            {/* ======= PÁGINA 3 — CONTEXTUALIZAÇÃO ======= */}
            <section id="contextualizacao" className="py-24 md:py-32 bg-[#0d0f0f] border-t border-white/5 relative">
                {/* Grid de pontos sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,212,212,0.04)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>

                <div className="container mx-auto px-8 max-w-5xl relative z-10">

                    {/* Título da seção */}
                    <div className="text-center mb-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Contextualização Completa</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">Sistema Territórios Culturais.</h2>
                        <p className="text-primary/80 italic font-playfair text-xl">A matriz estratégica da Territórios Culturais LTDA.</p>
                    </div>

                    {/* Intro contextualização */}
                    <motion.div
                        initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20"
                    >
                        <div className="space-y-4 text-white/80 font-light text-lg leading-relaxed">
                            <p>O Sistema Territórios Culturais é a consolidação da experiência prática da empresa na estruturação de políticas públicas, produção cultural, organização administrativa e operacionalização de instrumentos financeiros.</p>
                            <p className="font-bold text-white">Ele transforma cultura em infraestrutura de desenvolvimento territorial.</p>
                            <div className="flex flex-col gap-2 mt-4 border-l-2 border-primary/40 pl-6">
                                <p className="text-white/60">Não é um programa isolado.</p>
                                <p className="text-white/60">Não é um projeto pontual.</p>
                                <p className="text-primary font-bold uppercase tracking-widest text-sm">É a arquitetura institucional que sustenta todas as frentes de atuação.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* COMO O SISTEMA FUNCIONA */}
                    <div className="text-center mb-16">
                        <h3 className="font-playfair text-3xl md:text-4xl text-white mb-4">COMO O SISTEMA FUNCIONA:</h3>
                        <p className="text-primary tracking-widest uppercase text-sm font-bold">
                            O sistema opera por integração de quatro camadas estratégicas:
                        </p>
                    </div>

                    <div className="space-y-8 mb-24">
                        {camadas.map((c, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                                className="bg-charcoal border border-white/10 rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-charcoal font-bold text-sm shrink-0">{c.num}</span>
                                    <h4 className="font-playfair text-2xl text-white">{c.title}</h4>
                                </div>
                                <p className="text-white/60 font-light text-sm mb-4">{c.intro}</p>
                                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                                    {c.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-light">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                                    <span className="text-[10px] uppercase tracking-widest text-charcoal bg-primary px-3 py-1 rounded font-bold shrink-0">Resultado</span>
                                    <p className="text-primary italic font-playfair text-base">{c.resultado}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* DIFERENCIAL + O QUE ENTREGA */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">

                        {/* Diferencial */}
                        <motion.div
                            initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                            className="bg-primary text-charcoal rounded-3xl p-8 md:p-10 flex flex-col justify-center"
                        >
                            <h3 className="font-bold text-lg uppercase tracking-widest mb-6 font-manrope">Diferencial Estratégico</h3>
                            <div className="bg-charcoal/10 rounded-xl p-6 mb-6">
                                <p className="font-playfair text-2xl font-bold flex flex-wrap items-center gap-x-3 gap-y-2">
                                    Método
                                    <span className="material-symbols-outlined text-base">add</span>
                                    Programa
                                    <span className="material-symbols-outlined text-base">add</span>
                                    Execução
                                    <span className="material-symbols-outlined text-base">add</span>
                                    Financiamento
                                    <span className="material-symbols-outlined text-base">add</span>
                                    Monitoramento.
                                </p>
                            </div>
                            <p className="font-manrope font-medium text-base mb-2">Ele elimina fragmentação de ações e substitui improviso por estrutura.</p>
                            <p className="font-manrope text-sm">Cada eixo do portfólio não atua isoladamente.<br />
                            <strong>Ele compõe uma engrenagem coordenada.</strong></p>
                        </motion.div>

                        {/* O que entrega */}
                        <motion.div
                            initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
                        >
                            <h3 className="font-playfair text-2xl text-white mb-2">O QUE O SISTEMA ENTREGA:</h3>
                            <p className="text-white/60 text-sm font-light mb-6 border-b border-white/10 pb-4">
                                Ao implantar o Sistema Territórios Culturais, o território passa a contar com:
                            </p>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                                {entregas.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-white/80 font-light">
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Posicionamento Institucional */}
                    <motion.div
                        initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center mb-8"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Posicionamento Institucional</span>
                        <p className="text-white/80 font-light text-lg leading-relaxed max-w-3xl mx-auto">
                            A <strong className="text-white">Territórios Culturais LTDA</strong> atua por meio do Sistema Territórios Culturais — uma estrutura integrada que transforma cultura em política pública organizada, financiamento estruturado e desenvolvimento territorial contínuo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ENCERRAMENTO */}
            <section className="py-40 bg-charcoal border-t border-white/5 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(17,212,212,0.15)_0%,transparent_70%)] scale-150 blur-3xl"></div>

                <div className="container mx-auto px-8 relative z-10 max-w-4xl">
                    <span className="material-symbols-outlined text-6xl text-primary/30 mb-8 block">account_balance</span>
                    <h2 className="font-playfair text-3xl md:text-5xl text-white italic mb-10 leading-tight">
                        Não oferecemos apenas serviços culturais.<br />
                        <span className="text-primary not-italic font-bold">Estruturamos sistemas permanentes de desenvolvimento territorial por meio da cultura.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                        <a
                            href="mailto:territoriosculturaismg@yahoo.com"
                            className="bg-primary text-charcoal font-bold px-12 py-5 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(17,212,212,0.3)]"
                        >
                            Solicitar Consultoria
                        </a>
                        <Link
                            to="/"
                            className="border border-white/20 text-white font-bold px-12 py-5 rounded-full hover:bg-white/10 transition-all text-sm tracking-widest uppercase"
                        >
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 bg-[#0a0c0c] border-t border-white/5">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src="/logosterritorios (5).jpeg" alt="Territórios Culturais" className="h-16 w-auto mb-6 mix-blend-lighten opacity-80 hover:opacity-100 transition-all" />
                        <h4 className="font-playfair text-xl text-white mb-4">TERRITÓRIOS CULTURAIS LTDA</h4>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-white/50 font-light text-sm">
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">phone_iphone</span>+55 38 99806-8804</span>
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span>+55 21 99852-8804</span>
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span>territoriosculturaismg@yahoo.com</span>
                            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span>Patos de Minas – MG</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 border-t border-white/5 pt-6 w-full">
                            Operadora Técnica ANCINE © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default SistemaPage;
