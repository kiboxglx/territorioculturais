import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const ObservatorioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    const nucleos = [
        {
            title: "Políticas Públicas e Governança Cultural.",
            desc: "Análises sobre sistemas municipais, financiamento cultural, legislação, estrutura administrativa e modelos de gestão.",
            icon: "account_balance"
        },
        {
            title: "Indústria Criativa e Audiovisual.",
            desc: "Reflexões sobre cinema, novas mídias, comunicação territorial e posicionamento estratégico.",
            icon: "movie"
        },
        {
            title: "Circulação Cultural e Dinamização Econômica.",
            desc: "Estudos sobre festivais, eventos, formação de público e impacto econômico local.",
            icon: "festival"
        },
        {
            title: "Turismo Cultural e Planejamento Territorial.",
            desc: "Conteúdos sobre identidade, patrimônio, desenvolvimento sustentável e articulação entre cultura e turismo.",
            icon: "map"
        },
        {
            title: "Economia Criativa e Desenvolvimento.",
            desc: "Análises de geração de renda, cadeias produtivas culturais e impacto financeiro territorial.",
            icon: "payments"
        },
        {
            title: "Formação, Capacitação e Autonomia Técnica.",
            desc: "Reflexões sobre qualificação, profissionalização e fortalecimento institucional.",
            icon: "school"
        },
        {
            title: "Indicadores, Monitoramento e Avaliação.",
            desc: "Publicação de dados, relatórios técnicos, diagnósticos e estudos comparativos.",
            icon: "analytics"
        }
    ];

    const artigos = [
        "Cultura como Infraestrutura de Desenvolvimento Territorial.",
        "Sistema Municipal de Cultura: Por Onde Começar?",
        "Financiamento Cultural Público: Modelos Sustentáveis para Municípios.",
        "A Economia Criativa como Vetor de Geração de Renda Local.",
        "O Papel do Audiovisual no Posicionamento Territorial.",
        "Turismo Cultural: Integração Inteligente entre Patrimônio e Desenvolvimento.",
        "Formação Técnica e Autonomia da Gestão Cultural.",
        "Observatórios Culturais e Monitoramento de Políticas Públicas.",
        "Lei Municipal de Incentivo: Estruturação Técnica e Segurança Jurídica.",
        "Cultura, Governança e Planejamento de Longo Prazo."
    ];

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal overflow-x-hidden">
            <Helmet>
                <title>Observatório Territórios Culturais | Inteligência e Estratégia</title>
                <meta name="description" content="Núcleo de análise, monitoramento e produção de conhecimento sobre cultura e desenvolvimento territorial." />
            </Helmet>

            <Navbar />

            {/* HERO */}
            <section className="relative pt-40 pb-24 min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl"
                    >
                        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
                            Página 1 — Conceito e Função Estratégica
                        </span>
                        <h1 className="font-playfair text-5xl md:text-7xl mb-8 leading-tight">
                            Observatório <br />
                            <span className="italic text-primary font-light">Territórios Culturais.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 font-light font-manrope mb-8 leading-relaxed max-w-2xl">
                            Inteligência, análise e pensamento estratégico sobre cultura e desenvolvimento territorial.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONCEITO */}
            <section className="py-24 bg-white/5 relative">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                            <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-white">O que é o Observatório.</h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                                O Observatório Territórios Culturais é a dimensão analítica e intelectual do Sistema. 
                                Ele opera como ponte entre prática e reflexão: a execução alimenta o Observatório e o Observatório qualifica a execução.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Monitorar políticas culturais.",
                                    "Produzir análises técnicas e estratégicas.",
                                    "Sistematizar experiências territoriais.",
                                    "Avaliar impactos culturais e econômicos.",
                                    "Atualizar diretrizes metodológicas.",
                                    "Ampliar o debate público qualificado."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div 
                            initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                            className="bg-primary/10 border border-primary/20 p-10 rounded-3xl"
                        >
                            <h3 className="font-playfair text-2xl text-primary mb-6">Função no Sistema</h3>
                            <p className="text-white/80 font-light mb-8">
                                Dentro do ecossistema integrado, o Observatório atua como eixo transversal de monitoramento e inteligência, garantindo:
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest">
                                <div className="p-4 bg-charcoal/50 rounded-xl border border-white/5">Continuidade institucional</div>
                                <div className="p-4 bg-charcoal/50 rounded-xl border border-white/5">Transparência técnica</div>
                                <div className="p-4 bg-charcoal/50 rounded-xl border border-white/5">Aprimoramento constante</div>
                                <div className="p-4 bg-charcoal/50 rounded-xl border border-white/5">Produção de referência</div>
                            </div>
                            <p className="mt-8 text-white/60 text-sm italic">
                                É o mecanismo que impede a política cultural de se tornar episódica.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NÚCLEOS */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary uppercase tracking-widest text-xs font-bold block mb-4">Página 2</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Núcleos do Observatório.</h2>
                        <p className="text-white/50 max-w-2xl mx-auto">
                            O blog é organizado em núcleos temáticos alinhados ao ecossistema de atuação:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {nucleos.map((n, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-primary/30 transition-colors"
                            >
                                <span className="material-symbols-outlined text-3xl text-primary mb-6 block">{n.icon}</span>
                                <h3 className="font-playfair text-xl text-white mb-3 leading-tight">{n.title}</h3>
                                <p className="text-white/50 text-sm font-light leading-relaxed">{n.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODELO EDITORIAL */}
            <section className="py-24 bg-[#0d0f0f]">
                <div className="container mx-auto px-8 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                            <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-white">Modelo Editorial Participativo.</h2>
                            <p className="text-white/60 font-light leading-relaxed mb-8">
                                O Observatório Territórios Culturais é um espaço aberto à colaboração qualificada. Podem contribuir:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Gestores públicos", "Pesquisadores", "Produtores culturais", "Artistas", "Especialistas"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                            className="bg-charcoal border border-white/10 p-8 rounded-3xl"
                        >
                            <h3 className="font-playfair text-xl text-white mb-6">A curadoria editorial garante:</h3>
                            <ul className="space-y-3">
                                {["Coerência temática.", "Qualidade técnica.", "Relevância estratégica.", "Compromisso institucional."].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-primary font-bold text-xs uppercase tracking-widest">
                                O objetivo não é opinião dispersa. É construção de pensamento estruturado.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MANIFESTO E POLÍTICA */}
            <section className="py-24 relative">
                <div className="container mx-auto px-8 max-w-4xl">
                    <motion.div 
                        initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}
                        className="text-center mb-16 border-b border-white/5 pb-16"
                    >
                        <h2 className="font-playfair text-4xl mb-8">Manifesto de Abertura.</h2>
                        <h3 className="text-primary italic font-playfair text-2xl mb-8 leading-tight">
                            Pensar a cultura como estrutura, não como evento
                        </h3>
                        <div className="space-y-4 text-white/70 font-light leading-relaxed text-lg italic">
                            <p>A cultura não pode ser tratada como ação episódica, dependente de calendário ou circunstância.</p>
                            <p className="font-bold text-white not-italic">Ela é estrutura. É identidade. É desenvolvimento.</p>
                            <p>O Observatório Territórios Culturais nasce da necessidade de sistematizar experiências, analisar políticas públicas, qualificar decisões e fortalecer a cultura como infraestrutura estratégica do território.</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                            <h3 className="font-playfair text-2xl mb-6">Política Editorial.</h3>
                            <div className="space-y-6 text-sm text-white/60 font-light leading-relaxed">
                                <div>
                                    <h4 className="text-white font-bold mb-1 uppercase tracking-tighter text-xs">Propósito</h4>
                                    <p>Dedicada à produção, análise e difusão de conhecimento estratégico sobre cultura, políticas públicas e desenvolvimento territorial.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 uppercase tracking-tighter text-xs">Princípios</h4>
                                    <p>Rigor técnico, clareza conceitual, responsabilidade institucional e pluralidade qualificada.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                            <h3 className="font-playfair text-2xl mb-6">Diretrizes.</h3>
                            <div className="space-y-4 text-sm text-white/60 font-light">
                                <p>✔ Apresentar fundamentação técnica ou experiência prática relevante.</p>
                                <p>✔ Manter linguagem respeitosa e institucional.</p>
                                <p>✔ Evitar proselitismo político-partidário.</p>
                                <p>✔ Citar fontes quando houver dados técnicos.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ARTIGOS INAUGURAIS */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-4xl text-white mb-4">Primeira Linha Editorial.</h2>
                        <p className="text-primary uppercase tracking-widest text-[10px] font-bold">10 Artigos Estratégicos Inaugurais</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {artigos.map((art, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-charcoal p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group flex flex-col justify-between"
                            >
                                <div className="mb-4">
                                    <span className="text-white/20 font-playfair italic text-3xl block mb-2">{String(i + 1).padStart(2, '0')}</span>
                                    <h4 className="font-manrope text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                                        {art}
                                    </h4>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-white transition-colors">Leia mais &rarr;</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-32 bg-charcoal text-center border-t border-white/5 pt-40">
                <div className="container mx-auto px-8 max-w-3xl">
                    <h2 className="font-playfair text-3xl md:text-5xl mb-8 leading-tight">
                        Não apenas executamos políticas culturais.<br />
                        <span className="text-primary italic">Produzimos reflexão e conhecimento.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                        <a href="mailto:territoriosculturaismg@yahoo.com" className="bg-primary text-charcoal px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all">
                            Enviar Colaboração
                        </a>
                        <Link to="/" className="border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-white/5 bg-charcoal/50">
                <div className="container mx-auto px-8 text-center text-white/20 text-[10px] uppercase tracking-[0.5em]">
                    Observatório Territórios Culturais | {new Date().getFullYear()}
                </div>
            </footer>
        </main>
    );
};

export default ObservatorioPage;
