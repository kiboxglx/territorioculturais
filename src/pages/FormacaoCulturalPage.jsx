import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const FormacaoCulturalPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const topics = [
        {
            title: "Oficinas e Cursos",
            subtitle: "Formação prática e técnica voltada à produção cultural, audiovisual e economia criativa.",
            icon: "school",
            content: "Formação prática para profissionalizar o setor cultural. As oficinas e cursos são estruturados para atender jovens, artistas, produtores e agentes culturais interessados em qualificação técnica e inserção profissional e geração de renda na economia criativa.",
            activities: [
                "Oficina de Roteiro.",
                "Oficina de Produção Cultural.",
                "Oficina de Audiovisual Básico.",
                "Oficina de Elaboração de Projetos.",
                "Oficina de Economia Criativa.",
                "Oficina de Patrimônio Cultural.",
                "Formação em Produção de Eventos.",
                "Formação em Comunicação Digital."
            ],
            whatWeDo: [
                "Planejamento pedagógico.",
                "Estruturação metodológica.",
                "Produção executiva.",
                "Contratação de formadores.",
                "Gestão de inscrições e participantes.",
                "Material didático.",
                "Certificação.",
                "Relatórios e prestação de contas."
            ],
            conclusion: "Formamos profissionais, fortalecemos talentos locais e estruturamos o ecossistema cultural local."
        },
        {
            title: "Congressos, Fóruns e Seminários",
            subtitle: "Encontros técnicos e estratégicos voltados à governança cultural e consolidação de políticas públicas.",
            icon: "forum",
            content: "Espaços de diálogo, articulação e fortalecimento institucional. Esses encontros estruturam governança cultural, promovem debates técnicos qualificados e consolidam redes regionais e municipais.",
            activities: [
                "Congresso Municipal de Cultura.",
                "Fórum Regional de Economia Criativa.",
                "Seminário de Políticas Públicas.",
                "Conferência Municipal de Cultura.",
                "Encontro Setorial de Agentes Culturais."
            ],
            whatWeDo: [
                "Planejamento estratégico do evento.",
                "Curadoria temática.",
                "Produção executiva.",
                "Mediação institucional.",
                "Comunicação e cobertura audiovisual.",
                "Sistematização de propostas.",
                "Relatórios técnicos e prestação de contas."
            ],
            conclusion: "Fortalecemos redes, organizamos debates qualificados e consolidamos políticas públicas culturais com base técnica."
        },
        {
            title: "Capacitação em Gestão e Projetos",
            subtitle: "Treinamentos voltados à elaboração de projetos, captação de recursos e organização administrativa.",
            icon: "business_center",
            content: "Da ideia ao projeto estruturado. Programas voltados à elaboração de projetos, captação de recursos, organização administrativa e fortalecimento institucional do setor cultural.",
            activities: [
                "Capacitação em elaboração de projetos.",
                "Orientação para editais.",
                "Treinamento em prestação de contas.",
                "Planejamento estratégico cultural.",
                "Formação para conselhos municipais.",
                "Capacitação para operação de recursos públicos."
            ],
            whatWeDo: [
                "Diagnóstico formativo.",
                "Desenvolvimento de metodologia própria.",
                "Treinamento técnico presencial ou híbrido.",
                "Acompanhamento pós-capacitação.",
                "Organização documental.",
                "Relatórios de impacto."
            ],
            conclusion: "Transformamos intenção cultural em capacidade técnica estruturada e sustentável."
        }
    ];

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal relative">
            <Helmet>
                <title>Formação e Capacitação | Territórios Culturais</title>
                <meta name="description" content="Programas formativos voltados à profissionalização e fortalecimento estruturado do setor cultural." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop"
                        className="w-full h-full object-cover grayscale"
                        alt="Formação Cultural"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/0 via-charcoal to-charcoal"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto lg:mx-0"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Portfólio de Atuação</span>
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Formação, Capacitação e <br />
                            <span className="italic text-primary font-light">Qualificação Cultural.</span>
                        </h1>
                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-3xl mb-8">
                            A Territórios Culturais LTDA desenvolve programas formativos voltados à qualificação técnica de agentes culturais, gestores públicos, produtores, artistas e equipes administrativas.
                        </p>
                        <p className="text-lg text-white/80 font-bold leading-relaxed max-w-3xl border-l-2 border-primary pl-4 py-2">
                            Acreditamos que o desenvolvimento cultural sustentável depende da formação continuada, organização metodológica e fortalecimento da capacidade técnica local.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Três Logomarcas / Introdução das áreas */}
            <section className="py-20 bg-white/5 border-y border-white/10 relative z-10">
                <div className="container mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {topics.map((topic, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-charcoal border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(17,212,212,0.1)] group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-4xl text-primary">{topic.icon}</span>
                                </div>
                                <h3 className="font-playfair text-2xl mb-4 text-white group-hover:text-primary transition-colors">{topic.title}</h3>
                                <p className="text-sm font-light text-white/60 mb-6">{topic.subtitle}</p>
                                <a 
                                    href={`#topico-${index}`}
                                    className="text-xs uppercase tracking-widest text-primary font-bold hover:text-white transition-colors border-b border-primary/30 pb-1"
                                >
                                    Conheça nosso Portfólio
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalhamento das 3 Páginas/Tópicos */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-8 space-y-32">
                    {topics.map((topic, index) => (
                        <motion.div 
                            key={index}
                            id={`topico-${index}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="scroll-mt-32"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-[1px] bg-primary/50"></span>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Eixo Detalhado</span>
                            </div>
                            
                            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-white">{topic.title}</h2>
                            <p className="text-2xl font-light text-white/80 italic mb-12 max-w-4xl border-l-4 border-white/20 pl-6 py-2">
                                {topic.content}
                            </p>

                            <div className="grid md:grid-cols-2 gap-16">
                                {/* Atividades Exercidas */}
                                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                                    <h4 className="font-playfair text-2xl mb-8 border-b border-primary/20 pb-4 text-primary">Atividades exercidas</h4>
                                    <ul className="space-y-4">
                                        {topic.activities.map((act, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary/50 text-sm mt-1">check_circle</span>
                                                <span className="text-white/70 font-light">{act}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* O que a Territórios Culturais realiza */}
                                <div className="bg-primary/5 border border-primary/20 p-10 rounded-3xl">
                                    <h4 className="font-playfair text-2xl mb-8 border-b border-primary/20 pb-4 text-white">O que a Territórios Culturais realiza</h4>
                                    <ul className="space-y-4">
                                        {topic.whatWeDo.map((doItem, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary/80 text-sm mt-1">arrow_forward_ios</span>
                                                <span className="text-white/90 font-light">{doItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Conclusão */}
                            <div className="mt-12 text-center max-w-3xl mx-auto">
                                <p className="text-xl font-bold text-primary uppercase tracking-widest leading-relaxed">
                                    {topic.conclusion}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Frase de Encerramento */}
            <section className="py-32 bg-primary text-charcoal text-center relative z-10">
                <div className="container mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-12 italic">
                            <span className="block mb-4">Formação gera autonomia.</span>
                            <span className="block mb-4 font-bold">Autonomia gera estrutura.</span>
                            <span className="block text-white">Estrutura gera desenvolvimento territorial permanente.</span>
                        </h2>
                        
                        <Link 
                            to="/" 
                            className="bg-charcoal text-white font-bold px-12 py-5 rounded-full text-sm tracking-widest uppercase inline-block hover:bg-white hover:text-charcoal transition-all mt-8"
                        >
                            Voltar ao Início
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer Específico */}
            <footer className="py-12 bg-black/90 text-center relative z-10">
                <div className="container mx-auto px-8">
                    <img src="/LOGO_VETOR-removebg-preview.png" alt="Logo" className="w-24 h-auto mx-auto opacity-40 mb-6" />
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 flex-wrap">
                        <span className="text-white">TERRITÓRIOS CULTURAIS LTDA</span>
                        <span className="hidden md:inline">|</span>
                        <span>+55 38 99806-8804</span>
                        <span className="hidden md:inline">|</span>
                        <span>+55 21 99852-8804</span>
                        <span className="hidden md:inline">|</span>
                        <span>territoriosculturaismg@yahoo.com</span>
                        <span className="hidden md:inline">|</span>
                        <span>Patos de Minas – MG</span>
                    </div>
                </div>
            </footer>

        </main>
    );
};

export default FormacaoCulturalPage;
