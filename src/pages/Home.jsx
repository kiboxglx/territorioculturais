import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from '../components/ProgressiveImage';

// Componentes em Ordem do Croqui
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; // 01
import FilmStrip from '../components/FilmStrip'; // 02
import Services from '../components/Services'; // 03
import DestinoEstruturado from '../components/DestinoEstruturado'; // 04
import Methodology from '../components/Methodology'; // 05 (MATC)
import ProjectShowcase from '../components/ProjectShowcase'; // 06 (Eventos Realizados)
import UpcomingEvents from '../components/UpcomingEvents'; // 07 (Próximos Eventos)
import GalleryPreview from '../components/GalleryPreview'; // 08 (Galeria de Fotos)
import ObservatorioDestaque from '../components/ObservatorioDestaque'; // 09 (Observatório)
import Team from '../components/Team'; // 10 (Nossa Equipe)

// Componentes retirados temporariamente para alinhar ao croqui exato: PortfolioSection, Proponent

const Home = ({ onOpenModal }) => {
    const location = useLocation();

    React.useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-charcoal text-white scroll-smooth"
        >
            <Navbar onContactClick={onOpenModal} />

            {/* 01. Territórios Culturais / Ecossistema */}
            <Hero onContactClick={onOpenModal} />

            {/* 02. Película / Impacto Visual */}
            <FilmStrip />

            {/* 03. Portfólio de Atuação */}
            <Services />

            {/* 04. Programa Destino Estruturado */}
            <DestinoEstruturado />

            {/* 05. MATC / Sistema Territórios Culturais */}
            <Methodology />

            {/* 06. Eventos Realizados */}
            <ProjectShowcase />

            {/* 07. Próximos Eventos */}
            <UpcomingEvents />

            {/* 08. Galeria de Fotos */}
            <GalleryPreview />

            {/* 09. Observatório Territórios Culturais */}
            <ObservatorioDestaque />

            {/* As seções de Patrocínio, ESG e Data Room foram movidas para o modal de Próximos Eventos */}

            {/* 10. Nossa Equipe */}
            <Team />

            {/* 11. Escreva este Futuro Conosco (CTA Final e Footer) */}
            <section id="futuro" className="snap-section flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq_jeYR2mj2qo6HjjsQ7eM6hTUyxUbqvvgGIgVRLd25thHQFiWzr02-89qol_RdHUEday_xOK0LGFP_kqOIRDaXZjbW2P8AQ2rFkkYaGdHlsdBfUUni3zn14EHCaweF6KhKaOLWdjWZBEm4CwxaL_VSUcZX23xarSrOwR29H3n_x4k5qPMPIkcRjtgW8BL0eT6tER4cbspQ_uLpQT1wEgkd03vcGaqkSwWmIZGmpzI8HEa3NxZnqdCTF5_XBQcdfdAPZcN62pFiFs"
                        alt="Background cinematográfico de impacto cultural — Territórios Culturais"
                        loading="lazy"
                        className="w-full h-full"
                        imgClassName="opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-charcoal/40"></div>
                </div>

                <div className="container mx-auto px-8 py-32 text-center relative z-10 grow flex flex-col justify-center items-center">
                    <h2 className="font-playfair text-6xl md:text-8xl mb-8 text-white">
                        Escreva este Futuro <br /> <i className="font-light">Conosco</i>
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-manrope">
                        Estamos prontos para desenhar a estratégia cultural que elevará o patamar da sua instituição. O território aguarda sua marca.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={onOpenModal}
                            className="btn-primary text-lg px-12 py-5 rounded-full shadow-[0_0_20px_var(--color-accent-gold-glow,rgba(200,150,42,0.25))]"
                        >
                            Solicitar Apresentação Executiva
                        </button>
                        <button
                            onClick={onOpenModal}
                            className="btn-secondary text-lg px-12 py-5 rounded-full"
                        >
                            Agendar Consultoria
                        </button>
                    </div>
                </div>

                <footer className="bg-black/90 backdrop-blur-xl py-12 px-8 border-t border-white/10 relative z-20 w-full mt-auto">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/IMG_4327-removebg-preview.png"
                                    alt="Logo Territórios Culturais — Especialistas em Desenvolvimento Territorial"
                                    loading="lazy"
                                    className="h-10 w-auto opacity-80"
                                />
                                <div className="text-left">
                                    <span className="block text-white font-bold text-sm tracking-widest uppercase">Territórios Culturais LTDA</span>
                                    <span className="block text-white/40 text-[10px] uppercase tracking-tighter">Patos de Minas – MG</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-primary uppercase tracking-widest font-bold">Contatos</span>
                                    <span className="text-sm text-white/70 font-manrope">+55 38 99806-8804</span>
                                    <span className="text-sm text-white/70 font-manrope">+55 21 99852-8804</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-primary uppercase tracking-widest font-bold">E-mail</span>
                                    <span className="text-sm text-white/70 font-manrope">territoriosculturaismg@yahoo.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-[10px] text-white/20 uppercase tracking-widest font-manrope">
                                © 2024 - Todos os direitos reservados
                            </div>
                            <div className="text-[10px] text-white/20 uppercase tracking-widest font-manrope">
                                Uma Operadora de Desenvolvimento Territorial
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

        </motion.div>
    );
};

export default Home;
