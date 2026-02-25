import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const methodologySteps = [
    {
        number: "01",
        title: "Diagnóstico Territorial",
        description: "Levantamento cultural, institucional e econômico do município. Mapeamento de agentes, equipamentos e potencialidades locais.",
        details: ["Mapeamento Cultural", "Inventário Patrimonial", "Escuta Comunitária", "Diagnóstico Institucional"]
    },
    {
        number: "02",
        title: "Estruturação Institucional",
        description: "Implementação ou reestruturação dos mecanismos formais de política cultural para garantir segurança jurídica e administrativa.",
        details: ["Sistema Municipal de Cultura", "Conselho Municipal", "Fundo de Cultura", "Marco Regulatório"]
    },
    {
        number: "03",
        title: "Planejamento e Captação",
        description: "Elaboração estratégica de planos e projetos para acesso a recursos públicos e programas governamentais de fomento.",
        details: ["Plano Municipal de Cultura", "Editais de Fomento", "Captação de Recursos", "Gestão de Convênios"]
    },
    {
        number: "04",
        title: "Formação Técnica",
        description: "Capacitação de gestores, conselheiros e agentes culturais locais para operar a política de forma qualificada.",
        details: ["Cursos de Gestão", "Formação Audiovisual", "Oficinas Práticas", "Qualificação de Gestores"]
    },
    {
        number: "05",
        title: "Ativação Territorial",
        description: "Execução de ações estruturantes que consolidam o sistema: audiovisual de memória, formação e turismo cultural.",
        details: ["Ações Audiovisuais", "Fóruns de Cultura", "Rotas Turísticas", "Economia Criativa"]
    },
    {
        number: "06",
        title: "Autonomia Municipal",
        description: "Transferência metodológica para que o município possa operar independentemente da consultoria externa.",
        details: ["Sistema Operacional", "Continuidade Governamental", "Sustentabilidade", "Monitoramento"]
    }
];

const MethodologyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal">
            <Helmet>
                <title>Metodologia MATC | Territórios Culturais</title>
                <meta name="description" content="Conheça a Metodologia de Ativação Territorial Cultural (MATC), modelo técnico para estruturação de políticas públicas culturais." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block"
                        >
                            Estratégia de Impacto
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="font-playfair text-6xl md:text-8xl mb-8 leading-tight"
                        >
                            Metodologia <br />
                            <span className="italic text-primary font-light text-5xl md:text-7xl">MATC — Ativação Territorial</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-white/70 font-light leading-relaxed max-w-2xl"
                        >
                            Um modelo técnico de organização e desenvolvimento que integra memória, gestão e economia criativa em um fluxo contínuo de políticas públicas.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Principle */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center uppercase tracking-widest text-sm text-white/40">
                        <div className="space-y-6">
                            <h2 className="text-white font-playfair text-3xl md:text-4xl normal-case tracking-normal mb-8">O Princípio Central</h2>
                            <p className="normal-case tracking-normal text-lg leading-relaxed">
                                A MATC não trata cultura como programação artística eventual, mas como <span className="text-primary font-bold">infraestrutura social e econômica</span>.
                            </p>
                            <p className="normal-case tracking-normal text-lg leading-relaxed">
                                Nosso objetivo é permitir que municípios passem da realização de ações pontuais para a operação de <span className="text-white border-b border-primary/30">sistemas permanentes</span> de desenvolvimento cultural.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-charcoal rounded-2xl border border-white/5 text-center">
                                <span className="block text-primary text-2xl font-playfair mb-2">Social</span>
                                <span className="text-[10px]">Pertencimento</span>
                            </div>
                            <div className="p-6 bg-charcoal rounded-2xl border border-white/5 text-center">
                                <span className="block text-primary text-2xl font-playfair mb-2">Institucional</span>
                                <span className="text-[10px]">Governança</span>
                            </div>
                            <div className="p-6 bg-charcoal rounded-2xl border border-white/5 text-center">
                                <span className="block text-primary text-2xl font-playfair mb-2">Econômico</span>
                                <span className="text-[10px]">Renda</span>
                            </div>
                            <div className="p-6 bg-charcoal rounded-2xl border border-white/5 text-center">
                                <span className="block text-primary text-2xl font-playfair mb-2">Técnico</span>
                                <span className="text-[10px]">Autonomia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 6 Steps */}
            <section className="py-32">
                <div className="container mx-auto px-8">
                    <div className="mb-20 text-center">
                        <h2 className="font-playfair text-4xl md:text-5xl mb-4">Etapas da Metodologia</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {methodologySteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-primary/50 transition-all hover:-translate-y-2"
                            >
                                <span className="text-5xl font-playfair text-primary/20 group-hover:text-primary transition-colors mb-6 block">{step.number}</span>
                                <h3 className="font-playfair text-2xl mb-4 text-white">{step.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed mb-8">{step.description}</p>

                                <div className="space-y-2 border-t border-white/10 pt-6">
                                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Ferramentas</span>
                                    <ul className="flex flex-wrap gap-2 mt-3">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40 border border-white/5">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-24 bg-primary text-charcoal">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="font-playfair text-4xl mb-8">Resultados da Administração Pública</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <span className="block text-4xl font-bold mb-2">Regularidade</span>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Acesso a Recursos</p>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold mb-2">Autonomia</span>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Gestão Local</p>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold mb-2">Impacto</span>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Econômico Local</p>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold mb-2">Legado</span>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Continuidade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer with Back Link */}
            <footer className="py-32 bg-charcoal flex flex-col items-center gap-12">
                <div className="text-center space-y-4">
                    <h4 className="font-playfair text-3xl italic">Pronto para ativar seu território?</h4>
                    <p className="text-white/40 max-w-md mx-auto">Nossa metodologia é adaptável a municípios de todos os portes e consórcios intermunicipais.</p>
                </div>

                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="bg-primary text-charcoal font-bold px-10 py-4 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase"
                    >
                        Voltar para Home
                    </Link>
                    <button className="border border-white/20 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all text-sm tracking-widest uppercase">
                        Solicitar Consultoria
                    </button>
                </div>
            </footer>
        </main>
    );
};

export default MethodologyPage;
