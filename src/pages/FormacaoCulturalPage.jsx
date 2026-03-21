import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import ProgressiveImage from '../components/ProgressiveImage';

const FormacaoCulturalPage = () => {
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
                <title>Formação, Capacitação e Qualificação Cultural | Portfólio de Atuação</title>
                <meta name="description" content="A Territórios Culturais LTDA desenvolve programas formativos voltados à qualificação técnica de agentes culturais." />
            </Helmet>

            <Navbar />

            {/* PÁGINA 2: HERO & OVERVIEW */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-charcoal min-h-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage 
                        src="/images/hero/formacao.webp"
                        alt="Masterclass de capacitação técnica em ambiente contemporâneo — Eixo Formação e Qualificação"
                        className="w-full h-full"
                        imgClassName="object-cover"
                        fetchPriority="high"
                    />
                    {/* Overlay Dramático */}
                    <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/80 to-charcoal z-10" />
                    <div className="absolute inset-0 bg-linear-to-r from-charcoal via-transparent to-charcoal/40 z-10 opacity-60" />
                </div>

                <div className="container mx-auto px-8 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block lg:mt-0 mt-20">Página 2</span>
                        <h1 className="font-playfair fluid-h2 mb-8 leading-tight">
                            Formação, Capacitação e <span className="italic text-primary font-light">Qualificação Cultural.</span>
                        </h1>
                        
                        <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto mb-16 border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            <p>
                                A Territórios Culturais LTDA desenvolve programas formativos voltados à qualificação técnica de agentes culturais, gestores públicos, produtores, artistas e equipes administrativas.
                            </p>
                            <p className="border-t border-primary/10 pt-6 mt-6 italic text-white/90">
                                "Acreditamos que o desenvolvimento cultural sustentável depende da formação continuada, organização metodológica e fortalecimento da capacidade técnica local."
                            </p>
                        </div>
                    </motion.div>

                    {/* Os 3 Eixos na Página 2 */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 relative z-20">
                        {/* Oficinas e Cursos */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">school</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">OFICINAS E CURSOS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Formação prática e técnica voltada à produção cultural, audiovisual e economia criativa.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('oficinas-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>

                        {/* Congressos, Fóruns e Seminários */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">forum</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">CONGRESSOS, FÓRUNS E SEMINÁRIOS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Encontros técnicos e estratégicos voltados à governança cultural e consolidação de políticas públicas.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('congressos-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>

                        {/* Capacitação em Gestão e Projetos */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-center mb-6">
                                    <span className="material-symbols-outlined text-6xl text-primary/70 mb-4 mx-auto">business_center</span>
                                    <h3 className="font-playfair text-3xl text-white mb-2">CAPACITAÇÃO EM GESTÃO E PROJETOS</h3>
                                </div>
                                <h4 className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4 font-manrope">
                                    Treinamentos voltados à elaboração de projetos, captação de recursos e organização administrativa.
                                </h4>
                            </div>
                            <button onClick={() => scrollToSection('capacitacao-portfolio')} className="mt-8 w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold py-3 rounded-full transition-all text-[11px] tracking-widest uppercase">
                                Conheça nosso Portfólio
                            </button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white">Explorar Estrutura</span>
                        <span className="material-symbols-outlined text-sm text-primary">arrow_downward</span>
                    </div>
                </div>
            </section>

            {/* PÁGINA 3: OFICINAS E CURSOS (Portfólio) */}
            <section id="oficinas-portfolio" className="py-24 md:py-32 relative bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Oficinas e Cursos</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Formação prática para profissionalizar o setor cultural.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            As oficinas e cursos são estruturados para atender jovens, artistas, produtores e agentes culturais interessados em qualificação técnica e inserção profissional e geração de renda na economia criativa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Roteiro.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Produção Cultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Audiovisual Básico.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Elaboração de Projetos.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Economia Criativa.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Oficina de Patrimônio Cultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Formação em Produção de Eventos.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Formação em Comunicação Digital.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento pedagógico.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Estruturação metodológica.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Produção executiva.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Contratação de formadores.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Gestão de inscrições e participantes.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Material didático.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Certificação.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios e prestação de contas.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Formamos profissionais, fortalecemos talentos locais e estruturamos o ecossistema cultural local."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: CONGRESSOS E SEMINÁRIOS (Portfólio) */}
            <section id="congressos-portfolio" className="py-24 md:py-32 relative bg-[#151717] border-t border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Congressos, Fóruns e Seminários</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Espaços de diálogo, articulação e fortalecimento institucional.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Esses encontros estruturam governança cultural, promovem debates técnicos qualificados e consolidam redes regionais e municipais.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Congresso Municipal de Cultura.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Fórum Regional de Economia Criativa.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Seminário de Políticas Públicas.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Conferência Municipal de Cultura.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Encontro Setorial de Agentes Culturais.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Planejamento estratégico do evento.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Curadoria temática.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Produção executiva.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Mediação institucional.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Comunicação e cobertura audiovisual.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Sistematização de propostas.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios técnicos e prestação de contas.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Fortalecemos redes, organizamos debates qualificados e consolidamos políticas públicas culturais com base técnica."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PÁGINA 3: CAPACITAÇÃO EM GESTÃO E PROJETOS (Portfólio) */}
            <section id="capacitacao-portfolio" className="py-24 md:py-32 relative bg-charcoal border-y border-white/5">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-4">Página 3 — Portfólio</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Capacitação em Gestão e Projetos</h2>
                        <h3 className="font-bold text-xl uppercase tracking-widest text-primary mb-6 font-manrope">Da ideia ao projeto estruturado.</h3>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-4xl mx-auto">
                            Programas voltados à elaboração de projetos, captação de recursos, organização administrativa e fortalecimento institucional do setor cultural.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                            <h4 className="text-primary font-playfair text-2xl md:text-3xl mb-6 italic">Atividades exercidas:</h4>
                            <ul className="space-y-4 text-sm md:text-base text-white/70 font-light">
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Capacitação em elaboração de projetos.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Orientação para editais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Treinamento em prestação de contas.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Planejamento estratégico cultural.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Formação para conselhos municipais.</li>
                                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span> Capacitação para operação de recursos públicos.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-charcoal border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                            <h4 className="text-white font-playfair text-2xl md:text-3xl mb-6 relative z-10">O que a <span className="text-primary italic">Territórios Culturais</span> realiza:</h4>
                            <ul className="space-y-3 text-sm md:text-base text-white/80 font-light relative z-10">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Diagnóstico formativo.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Desenvolvimento de metodologia própria.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Treinamento técnico presencial ou híbrido.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Acompanhamento pós-capacitação.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Organização documental.</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Relatórios de impacto.</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{once: true}} className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl text-primary italic leading-tight">
                            "Transformamos intenção cultural em capacidade técnica estruturada e sustentável."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FECHAMENTO GERAL (Eixo 3) */}
            <section className="py-24 bg-primary text-charcoal text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container mx-auto px-8 max-w-5xl relative z-10">
                    <span className="material-symbols-outlined text-6xl opacity-30 mb-8 block">published_with_changes</span>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold italic max-w-4xl mx-auto leading-tight mb-8">
                        Formação gera autonomia.<br/>Autonomia gera estrutura.
                    </h2>
                    <p className="text-2xl md:text-3xl font-manrope font-bold max-w-3xl mx-auto opacity-90 leading-relaxed uppercase tracking-widest text-[#151717]">
                        Estrutura gera desenvolvimento territorial permanente.
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

export default FormacaoCulturalPage;
