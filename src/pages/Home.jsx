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
import SiteFooter from '../components/SiteFooter'; // 11 (Footer Institucional)

const Home = ({ onOpenModal }) => {
    const location = useLocation();

    React.useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

            {/* 10. Nossa Equipe */}
            <Team />

            {/* 11. CTA Final */}
            <section id="futuro" className="snap-section relative overflow-hidden py-32 flex flex-col justify-center">
                <div className="absolute inset-0 z-0">
                    <ProgressiveImage
                        src="/images/hero/cine1.webp"
                        alt="Background cinematográfico de impacto cultural"
                        loading="lazy"
                        className="w-full h-full"
                        imgClassName="opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-charcoal/60" />
                </div>
                <div className="container mx-auto px-8 text-center relative z-10">
                    <h2 className="font-playfair fluid-h1 mb-8 text-white">
                        Escreva este Futuro <br /> <i className="font-light">Conosco</i>
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-manrope">
                        Estamos prontos para desenhar a estratégia cultural que elevará o patamar da sua instituição. O território aguarda sua marca.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button onClick={onOpenModal} className="btn-primary text-lg px-12 py-5 rounded-full shadow-[0_0_20px_rgba(200,150,42,0.25)]">
                            Solicitar Apresentação Executiva
                        </button>
                        <button onClick={onOpenModal} className="btn-secondary text-lg px-12 py-5 rounded-full">
                            Agendar Consultoria
                        </button>
                    </div>
                </div>
            </section>

            {/* 12. Footer Institucional LGPD */}
            <SiteFooter onOpenModal={onOpenModal} />
        </motion.div>
    );
};

export default Home;
