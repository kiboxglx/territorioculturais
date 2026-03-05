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

const PortfolioEventosPage = ({ onOpenModal }) => {
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
                <title>Mostras, Festivais e Eventos | Territórios Culturais</title>
                <meta name="description" content="Planejamos e realizamos Mostras, Festivais e Eventos Culturais como instrumentos estratégicos de democratização do acesso e identidade territorial." />
            </Helmet>

            <Navbar onContactClick={onOpenModal} />

            {/* HERO SECTION - PÁGINA 2 */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1b5e54]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
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
                            className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
                        >
                            Mostras, Festivais e <span className="italic text-white/50 block mt-2">Eventos Culturais.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mb-8 border-l-2 border-primary/30 pl-6"
                        >
                            A Territórios Culturais LTDA atua na concepção, curadoria, planejamento e execução de mostras, festivais e eventos culturais como ferramentas estruturantes de política pública, formação de público e desenvolvimento territorial.
                        </motion.p>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base md:text-lg text-white/50 max-w-2xl font-light"
                        >
                            Nossos projetos integram arte, organização técnica, responsabilidade institucional e impacto econômico, promovendo circulação artística, valorização de talentos locais e dinamização da economia criativa.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* QUICK LINKS MARCAS */}
            <section className="py-20 bg-black/30 border-y border-white/5 relative z-10">
                <div className="container mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
                        {/* Marca 1 */}
                        <SlideIn delay={0}>
                            <div className="flex flex-col items-start group">
                                <span className="material-symbols-outlined text-6xl text-white/20 mb-6 group-hover:text-primary transition-colors">theaters</span>
                                <h3 className="font-playfair text-3xl mb-4 group-hover:text-primary transition-colors">Mostras</h3>
                                <p className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4">Curadoria temática e acesso</p>
                                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                                    As mostras culturais ampliam o acesso à arte, promovem formação de plateia e criam espaços de diálogo, reflexão e circulação de obras.
                                </p>
                                <button onClick={() => scrollToSection('mostras')} className="text-xs uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Conheça nosso Portfólio <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>

                        {/* Marca 2 */}
                        <SlideIn delay={0.2}>
                            <div className="flex flex-col items-start group">
                                <span className="material-symbols-outlined text-6xl text-white/20 mb-6 group-hover:text-primary transition-colors">festival</span>
                                <h3 className="font-playfair text-3xl mb-4 group-hover:text-primary transition-colors">Festivais</h3>
                                <p className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4">Programações estruturadas</p>
                                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                                    Organizam cadeias produtivas, estimulam intercâmbio artístico e consolidam a cultura como vetor de desenvolvimento econômico.
                                </p>
                                <button onClick={() => scrollToSection('festivais')} className="text-xs uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Conheça nosso Portfólio <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>

                        {/* Marca 3 */}
                        <SlideIn delay={0.4}>
                            <div className="flex flex-col items-start group">
                                <span className="material-symbols-outlined text-6xl text-white/20 mb-6 group-hover:text-primary transition-colors">event_star</span>
                                <h3 className="font-playfair text-3xl mb-4 group-hover:text-primary transition-colors">Eventos Culturais</h3>
                                <p className="text-primary tracking-widest uppercase text-[10px] font-bold mb-4">Encontros estratégicos</p>
                                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                                    Fortalecem redes institucionais, consolidam políticas públicas e promovem integração comunitária e social.
                                </p>
                                <button onClick={() => scrollToSection('eventos')} className="text-xs uppercase tracking-widest text-white border-b border-primary/50 pb-1 hover:text-primary transition-colors flex items-center gap-2 mt-auto">
                                    Conheça nosso Portfólio <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                </button>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* DETAILS - PÁGINA 3 */}
            <div className="divide-y divide-white/5">
                
                {/* 1. MOSTRAS */}
                <section id="mostras" className="py-24 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">01</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white">Mostras Culturais</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    A arte em circulação. <br/>O público em formação.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    As mostras culturais são instrumentos estratégicos de democratização do acesso, formação de plateia e valorização de artistas e obras. Podem ser temáticas, itinerantes, educativas ou estruturadas como programas permanentes.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Atividades Exercidas</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Mostras de Cinema (ficção, doc, animação)</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Mostras Itinerantes (praças, escolas, rodoviárias)</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Cineclubes permanentes</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Sessões comentadas com debatedores</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Mostras patrimoniais e memoriais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Mostras temáticas específicas</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Programações educativas integradas</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Nossa Realização</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Planejamento técnico e artístico</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Curadoria e definição de programação</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Estruturação orçamentária</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Produção executiva completa e logística</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Comunicação, markerting e registro</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Relatórios técnicos e prestação de contas</li>
                                </ul>
                            </SlideIn>
                            <div className="sm:col-span-2 mt-4 bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                                <p className="text-sm text-primary font-manrope font-light text-center italic">
                                    "Estruturamos mostras culturais como instrumentos permanentes de política pública, formação de público e ativação territorial."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. FESTIVAIS */}
                <section id="festivais" className="py-24 md:py-32 relative overflow-hidden bg-black/20">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">02</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white">Festivais</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    Celebrar, circular e estruturar <br/>cadeias produtivas.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    Os festivais organizam o calendário cultural, promovem intercâmbio artístico e estimulam a economia criativa local, tornando-se instrumentos de projeção territorial e desenvolvimento sustentável.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Atividades Exercidas</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Festival de Cinema, Música e Teatro</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Festival Multicultural</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Festival do Patrimônio Cultural Imaterial</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Festival Gastronômico Cultural</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Premiações e reconhecimento artístico</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Oficinas e debates e ações formativas</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Nossa Realização</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Desenho estratégico e projeto</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Planejamento curatorial e financeiro</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Produção geral e executiva</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Mediação institucional e regional</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Identidade visual e coordenação de palco</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Monitoramento de impacto econômico</li>
                                </ul>
                            </SlideIn>
                            <div className="sm:col-span-2 mt-4 bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                                <p className="text-sm text-primary font-manrope font-light text-center italic">
                                    "Transformamos festivais em instrumentos estruturantes de política cultural, dinamização econômica e fortalecimento da identidade territorial."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EVENTOS */}
                <section id="eventos" className="py-24 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <SlideIn>
                                <span className="text-primary/50 font-playfair text-8xl absolute -top-10 -left-6 opacity-20 pointer-events-none">03</span>
                                <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-white">Eventos Culturais</h2>
                                <p className="text-xl font-light text-primary mb-8 leading-snug">
                                    Estrutura, encontro e <br/>fortalecimento institucional.
                                </p>
                                <p className="text-white/60 leading-relaxed font-light text-sm mb-6">
                                    Eventos culturais consolidam redes, fortalecem governança e promovem integração comunitária, podendo ter caráter artístico, técnico ou institucional.
                                </p>
                            </SlideIn>
                        </div>
                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <SlideIn delay={0.2}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Atividades Exercidas</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Congressos culturais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Fóruns e Conferências municipais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Encontros setoriais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Seminários de capacitação</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Lançamentos institucionais</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Rodadas de negócios criativos</li>
                                </ul>
                            </SlideIn>
                            <SlideIn delay={0.4}>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-6 border-b border-white/10 pb-4">Nossa Realização</h4>
                                <ul className="space-y-3 text-white/70 font-light text-sm">
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Planejamento estratégico do evento</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Estruturação metodológica</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Gestão de inscrições e participantes</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Contratação e mediação central</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Sistematização de resultados</li>
                                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✔</span> Cobertura, relatórios e prestação</li>
                                </ul>
                            </SlideIn>
                            <div className="sm:col-span-2 mt-4 bg-primary/5 border border-primary/20 p-6 rounded-2xl">
                                <p className="text-sm text-primary font-manrope font-light text-center italic">
                                    "Entregamos eventos culturais com organização técnica, responsabilidade administrativa e impacto institucional mensurável."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* CLOSING STATMENT */}
            <section className="py-24 md:py-32 bg-[radial-gradient(ellipse_at_center,var(--color-charcoal)_0%,#000_100%)] text-center relative border-y border-white/5">
                <div className="container mx-auto px-8 relative z-10 max-w-4xl">
                     <SlideIn>
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">handshake</span>
                        <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                            Não apenas idealizamos eventos culturais.
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12">
                            Planejamos, estruturamos, executamos e entregamos resultados com responsabilidade técnica, administrativa e impacto territorial comprovado.
                        </p>
                        <button 
                            onClick={onOpenModal}
                            className="bg-primary text-charcoal font-bold px-10 py-4 rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(17,212,212,0.15)] inline-block"
                        >
                            Falar com a Equipe
                        </button>
                    </SlideIn>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black/90 py-12 px-8">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <img src="/logosterritorios (1).jpeg" alt="Mostras, Festivais e Eventos Culturais" className="h-16 w-auto mb-6 mix-blend-lighten opacity-90" />
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

export default PortfolioEventosPage;
