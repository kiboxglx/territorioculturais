import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fundamentos = [
        {
            title: "Sistema Territórios Culturais",
            desc: "Matriz estratégica que integra método, financiamento, execução, formação e monitoramento em modelo contínuo de desenvolvimento territorial."
        },
        {
            title: "MATC — Metodologia de Autonomia Territorial Cultural",
            desc: "Estrutura técnica de organização jurídica e administrativa da política cultural municipal, implantando governança e planejamento permanente."
        },
        {
            title: "Programa Destino Estruturado",
            desc: "Modelo aplicado de planejamento territorial que articula cultura, identidade, turismo e economia criativa em estratégia de posicionamento e desenvolvimento sustentável."
        }
    ];

    const dimensoes = [
        {
            id: "1",
            title: "Produção e Comunicação Cultural",
            sub: "(Cinema, Audiovisual e Novas Mídias)",
            funcao: "Criar, comunicar e posicionar o território.",
            desc: "Eixo responsável pela narrativa estratégica, imagem institucional e fortalecimento simbólico."
        },
        {
            id: "2",
            title: "Circulação e Experiência Cultural",
            sub: "(Mostras, Festivais e Eventos)",
            funcao: "Conectar público, artistas e território.",
            desc: "Ativa economia local e forma público."
        },
        {
            id: "3",
            title: "Formação e Capacitação Cultural",
            sub: "(Oficinas, Congressos e Fóruns)",
            funcao: "Criar capacidade instalada no território.",
            desc: "Garante autonomia técnica e profissionalização."
        },
        {
            id: "4",
            title: "Consultoria e Elaboração de Projetos",
            sub: "(Assessoria técnica e estruturação)",
            funcao: "Transformar intenção cultural em projeto estruturado.",
            desc: "Organiza acesso a recursos públicos e privados."
        },
        {
            id: "5",
            title: "Gestão e Planejamento Cultural",
            sub: "(MATC, Sistemas Municipais, Governança)",
            funcao: "Implantar estrutura permanente.",
            desc: "Transforma cultura em política pública organizada."
        },
        {
            id: "6",
            title: "Turismo Cultural e Planejamento Territorial",
            sub: "",
            funcao: "Transformar identidade em ativo territorial.",
            desc: "Integra cultura ao desenvolvimento econômico."
        },
        {
            id: "7",
            title: "Economia Criativa e Desenvolvimento Econômico",
            sub: "",
            funcao: "Converter cultura em vetor econômico.",
            desc: "Gera renda, emprego e circulação financeira."
        },
        {
            id: "8",
            title: "Observatório e Monitoramento",
            sub: "",
            funcao: "Garantir continuidade e aperfeiçoamento.",
            desc: "Avaliação de impacto, indicadores culturais e acompanhamento estratégico."
        }
    ];

    const finalidades = [
        "Estruturar políticas culturais permanentes.",
        "Organizar mecanismos de financiamento público.",
        "Implantar governança cultural municipal.",
        "Integrar cultura, turismo e economia criativa.",
        "Criar autonomia técnica instalada.",
        "Garantir monitoramento e continuidade institucional."
    ];

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal pb-20">
            <Helmet>
                <title>Quem Somos | Territórios Culturais</title>
                <meta name="description" content="Conheça a finalidade, sistema e ecossistema da Territórios Culturais LTDA. Arquitetura estratégica de desenvolvimento cultural." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-background-dark border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
                        alt="Bureau"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/95 to-charcoal"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Quem Somos & Finalidade</span>
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Arquitetura estratégica de <br />
                            <span className="italic text-primary font-light">desenvolvimento cultural e territorial.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl mx-auto mt-12 space-y-6 text-center"
                    >
                        <p className="text-2xl font-playfair font-bold text-white mb-6">Territórios Culturais LTDA.</p>
                        <p className="text-lg text-white/70 font-light leading-relaxed">
                            Produtora Cinematográfica Brasileira com Registro 63126 na Agência Nacional do Cinema — integrando indústria criativa, gestão cultural e desenvolvimento territorial.
                        </p>
                        <p className="text-lg text-white/70 font-light leading-relaxed">
                            Atuamos por meio do Sistema Territórios Culturais, estrutura institucional que conecta metodologia própria (MATC), financiamento público, produção cultural, formação técnica, planejamento territorial e monitoramento contínuo.
                        </p>
                        <p className="text-lg text-white/70 font-light leading-relaxed">
                            Nosso portfólio é organizado em eixos complementares que dialogam entre si, formando um ecossistema estruturado de atuação integrada.
                        </p>
                        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl mt-8">
                            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Não executamos ações isoladas.</p>
                            <p className="text-white font-playfair italic text-xl">Implantamos arquitetura permanente de desenvolvimento cultural.</p>
                        </div>

                        <div className="pt-10">
                            <button
                                onClick={() => scrollToSection('identidade')}
                                className="bg-primary text-charcoal font-bold px-10 py-4 rounded-full transition-all text-xs tracking-widest uppercase hover:scale-105 shadow-[0_0_20px_rgba(17,212,212,0.15)]"
                            >
                                Conheça nossa Estrutura Institucional
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 1 — IDENTIDADE, SISTEMA E ECOSSISTEMA */}
            <section id="identidade" className="py-24 relative">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-4">Página 1</span>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl italic text-white/90">Identidade, Sistema e Ecossistema</h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="mb-16">
                            <h3 className="text-2xl font-playfair font-bold text-primary mb-6 border-l-4 border-primary pl-4">A Estrutura que Sustenta Nossa Atuação:</h3>
                            <p className="text-white/70 mb-10 text-lg">A Territórios Culturais organiza sua atuação a partir de três fundamentos centrais:</p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {fundamentos.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-colors"
                                    >
                                        <span className="text-primary/40 font-playfair text-4xl font-bold italic mb-4 block">0{index + 1}</span>
                                        <h4 className="text-xl font-playfair font-bold text-white mb-4">{item.title}</h4>
                                        <p className="text-sm font-light text-white/60 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Ecossistema */}
                        <div className="mt-32">
                            <h3 className="text-3xl font-playfair font-bold text-white mb-8 text-center">Ecossistema de Atuação Integrada:</h3>
                            
                            {/* Fluxo */}
                            <div className="flex flex-wrap justify-center gap-2 items-center mb-16 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/60">
                                {['Criar', 'Comunicar', 'Circular', 'Formar', 'Estruturar', 'Financiar', 'Desenvolver', 'Monitorar'].map((step, i) => (
                                    <React.Fragment key={i}>
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{step}</span>
                                        {i < 7 && <span className="material-symbols-outlined text-sm text-white/20">arrow_right_alt</span>}
                                    </React.Fragment>
                                ))}
                            </div>

                            <p className="text-center text-white/70 mb-12 text-lg">Nosso ecossistema é composto por oito dimensões interligadas:</p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {dimensoes.map((dim, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-black/40 border border-white/5 p-6 rounded-2xl relative group overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="text-primary font-bold text-lg mb-2 block">{dim.id}.</span>
                                        <h4 className="font-playfair text-lg font-bold text-white leading-tight mb-2">{dim.title}</h4>
                                        {dim.sub && <span className="text-xs text-primary/70 block mb-4 italic">{dim.sub}</span>}
                                        
                                        <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                                            <div>
                                                <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1">Função:</span>
                                                <p className="text-sm text-white/90 font-medium">{dim.funcao}</p>
                                            </div>
                                            <p className="text-xs font-light text-white/60 leading-relaxed">{dim.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PÁGINA 2 — FINALIDADE E POSICIONAMENTO INSTITUCIONAL */}
            <section className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-4">Página 2</span>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl italic text-white/90">Finalidade e Posicionamento Institucional</h2>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-24">
                        
                        {/* Nossa Finalidade */}
                        <div className="bg-white/5 border border-primary/20 p-10 md:p-16 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                            <h3 className="font-playfair text-3xl mb-6 text-white relative z-10">Nossa Finalidade:</h3>
                            <p className="text-xl text-white/80 font-light mb-8 max-w-3xl relative z-10">
                                A Territórios Culturais LTDA atua para <span className="text-primary font-medium">transformar cultura em infraestrutura estratégica de desenvolvimento territorial.</span> Nossa finalidade é:
                            </p>
                            
                            <ul className="grid md:grid-cols-2 gap-4 relative z-10 mt-8">
                                {finalidades.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                                        <span className="text-white/70 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Publico x Privado */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Poder Público */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-charcoal border border-white/10 p-10 rounded-3xl"
                            >
                                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                                    <span className="material-symbols-outlined text-3xl text-primary">account_balance</span>
                                    <h3 className="font-playfair text-2xl text-white">Para o Poder Público:</h3>
                                </div>
                                <p className="text-white/60 mb-6">Oferecemos estrutura técnica para:</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Implantação de Sistemas Municipais de Cultura.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação de Lei de Incentivo via ISSQN.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Operacionalização de recursos federais.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização administrativa cultural.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento territorial integrado.</li>
                                </ul>
                                <div className="bg-white/5 p-4 rounded-xl border-l-2 border-primary">
                                    <p className="text-sm text-primary font-medium italic">Nosso objetivo é gerar autonomia, segurança jurídica e eficiência administrativa.</p>
                                </div>
                            </motion.div>

                            {/* Iniciativa Privada */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-charcoal border border-white/10 p-10 rounded-3xl"
                            >
                                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                                    <span className="material-symbols-outlined text-3xl text-primary">domain</span>
                                    <h3 className="font-playfair text-2xl text-white">Para a Iniciativa Privada:</h3>
                                </div>
                                <p className="text-white/60 mb-6">Atuamos na:</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação de projetos culturais.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Conexão com mecanismos de incentivo fiscal.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Posicionamento institucional por meio da cultura.</li>
                                    <li className="flex items-center gap-3 text-sm text-white/80"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Integração com políticas públicas territoriais.</li>
                                </ul>
                                <div className="bg-white/5 p-4 rounded-xl border-l-2 border-primary mt-auto">
                                    <p className="text-sm text-primary font-medium italic">A cultura deixa de ser patrocínio pontual e passa a ser investimento estratégico.</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Posicionamento Definitivo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center bg-primary text-charcoal p-12 rounded-3xl"
                        >
                            <img src="/logosterritorios (4).jpeg" alt="Logo" className="w-32 mx-auto mb-8 mix-blend-multiply opacity-80" />
                            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 opacity-50">Posicionamento Institucional Definitivo</h3>
                            
                            <h2 className="font-playfair text-3xl md:text-4xl italic font-bold mb-8 leading-relaxed max-w-4xl mx-auto">
                                A Territórios Culturais LTDA opera por meio de um Sistema estruturado, sustentado por metodologia própria e organizado em ecossistema integrado de atuação.
                            </h2>
                            
                            <div className="space-y-2">
                                <p className="text-lg font-bold uppercase tracking-widest">Não oferecemos apenas serviços culturais.</p>
                                <p className="text-xl font-playfair italic">Implantamos sistemas permanentes de desenvolvimento territorial por meio da cultura.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default AboutPage;
