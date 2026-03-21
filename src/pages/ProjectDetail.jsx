import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';
import ImpactMetrics from '../components/ImpactMetrics';
import InvestorDataRoom from '../components/InvestorDataRoom';
import ProgressiveImage from '../components/ProgressiveImage';
import assetsManifest from '../data/assets-manifest.json';

const ProjectDetail = ({ onOpenModal }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="h-screen w-full flex flex-col justify-center items-center bg-charcoal text-white">
                <h2 className="text-4xl font-playfair mb-4">Projeto não encontrado</h2>
                <button onClick={() => navigate('/')} className="text-primary underline">Voltar para Início</button>
            </div>
        );
    }

    // Busca dados no manifesto de assets com fallback
    const assetData = assetsManifest.projects[project.id] || {};
    const mainImg = assetData.main || project.heroImage;
    const fallbackImg = assetData.fallback || project.fallbackImage;
    const seoAlt = assetData.alt || `${project.title} — ${project.subtitle} — Territórios Culturais.`;

    return (
        <>
            <Helmet>
                <title>{project.title} | Territórios Culturais</title>
                <meta name="description" content={`${project.description} — ${project.status}. Impacto regional em ${project.city}.`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={`${project.title} - Investimento Cultural Estratégico`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={mainImg} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location.href} />
                <meta property="twitter:title" content={project.title} />
                <meta property="twitter:description" content={project.description} />
                <meta property="twitter:image" content={mainImg} />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-charcoal text-white font-manrope selection:bg-primary selection:text-charcoal w-full h-full overflow-y-auto custom-scrollbar"
            >
                {/* Hero Section */}
                <section className="relative h-[90vh] w-full overflow-hidden bg-charcoal">
                    <ProgressiveImage
                        src={mainImg}
                        fallbackUrl={fallbackImg}
                        alt={seoAlt}
                        fetchPriority="high"
                        loading="eager"
                        className="absolute inset-0 w-full h-full"
                        imgClassName="animate-pan-slow object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/30 to-black/50"></div>

                    <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 container mx-auto z-10">
                        <Link to="/" className="mb-12 flex items-center gap-2 text-white/60 hover:text-primary transition-colors w-fit group">
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span className="uppercase tracking-widest text-xs font-bold">Voltar para Territórios</span>
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
                            <span className="inline-block px-4 py-1 rounded-full border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest bg-charcoal/50 backdrop-blur-md w-fit">
                                {project.incentiveLaw}
                            </span>
                            <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                                Status: <span className="text-white">{project.status}</span>
                            </span>
                        </div>

                        <h1 className="font-playfair fluid-h1 leading-none mb-8 text-white max-w-6xl shadow-black drop-shadow-lg">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
                            {project.subtitle}
                        </p>
                    </div>
                </section>

                {/* Technical Data Grid & Governance */}
                <section className="py-24 bg-charcoal relative">
                    <div className="container mx-auto px-8">
                        <div className="grid lg:grid-cols-12 gap-16">

                            {/* Technical Pillars */}
                            <div className="lg:col-span-8">
                                <h3 className="font-playfair text-3xl text-white mb-12 border-l-4 border-primary pl-6">Dados Estratégicos</h3>

                                <div className="grid md:grid-cols-2 gap-8 mb-16">
                                    <div className="bg-white/5 p-8 rounded-xl border border-white/5">
                                        <span className="block text-accent-gold text-xs font-bold uppercase tracking-widest mb-3">Articulação Institucional</span>
                                        <p className="text-white/80 font-light leading-relaxed">{project.institutionalRelations}</p>
                                    </div>
                                    <div className="bg-white/5 p-8 rounded-xl border border-white/5">
                                        <span className="block text-accent-gold text-xs font-bold uppercase tracking-widest mb-3">Governança & Compliance</span>
                                        <p className="text-white/80 font-light leading-relaxed">{project.governance}</p>
                                    </div>
                                </div>

                                {/* Impact Metrics Component */}
                                <ImpactMetrics metrics={project.impactMetrics} />


                                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
                                    <div>
                                        <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Público Estimado</span>
                                        <span className="font-playfair text-3xl text-white block">{project.estimatedAudience}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Impacto Regional</span>
                                        <span className="font-playfair text-2xl text-white font-light leading-tight">{project.regionalImpact}</span>
                                    </div>
                                </div>

                                {/* Investor Data Room Component */}
                                <InvestorDataRoom documents={project.documents} />

                            </div>

                            {/* Sidebar Action Card */}
                            <div className="lg:col-span-4">
                                <div className="bg-[#152222] p-8 rounded-2xl border border-white/10 sticky top-8 shadow-2xl">
                                    <span className="block text-primary text-xs font-bold uppercase tracking-widest mb-4">Oportunidade de Aporte</span>
                                    <h4 className="font-playfair text-2xl text-white mb-2">{project.quotaAvailable}</h4>
                                    <p className="text-white/50 text-sm mb-8 font-light">Garanta a visibilidade da sua marca neste território cultural exclusivo.</p>

                                    <div className="space-y-4">
                                        <div className="relative pt-1">
                                            <div className="flex mb-2 items-center justify-between">
                                                <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/20">Progresso</span></div>
                                                <div className="text-right"><span className="text-xs font-semibold inline-block text-primary">{project.progress}%</span></div>
                                            </div>
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/10">
                                                <div style={{ width: `${project.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={onOpenModal}
                                            className="w-full bg-primary text-charcoal font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-colors"
                                        >
                                            Solicitar Apresentação
                                        </button>
                                        <button className="w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white/5 transition-colors">
                                            Baixar Mídia Kit
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Content Details */}
                <section className="py-24 bg-[#101a1a]">
                    <div className="container mx-auto px-8">
                        <h3 className="font-playfair text-3xl text-white mb-12 border-l-4 border-accent-gold pl-6">Experiência & Legado</h3>

                        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-16 max-w-4xl">
                            {project.description}
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.details && project.details.map((detail, index) => (
                                <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-accent-gold/30 transition-colors group">
                                    <div className="mb-6 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-accent-gold">
                                        <span className="material-symbols-outlined">star</span>
                                    </div>
                                    <h4 className="font-playfair text-2xl text-white mb-4 group-hover:text-accent-gold transition-colors">{detail.title}</h4>
                                    <p className="text-white/60 font-light leading-relaxed text-sm">{detail.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Supporters / Apoiadores */}
                {project.supportersImage && (
                    <section className="py-20 border-t border-white/5" style={{ background: 'linear-gradient(180deg, #0e1515 0%, #111c1c 100%)' }}>
                        <div className="container mx-auto px-8 max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-center"
                            >
                                <span className="block text-xs font-bold uppercase tracking-[0.4em] text-primary/40 mb-3">Realização & Apoio</span>
                                <h3 className="font-playfair text-2xl text-white/80 mb-10">Apoiadores do Projeto</h3>
                                <div className="flex justify-center items-center px-4 py-4">
                                    <img
                                        src={project.supportersImage}
                                        alt={`Apoiadores do projeto ${project.title}`}
                                        className="max-w-full w-auto object-contain transition-all duration-500 hover:opacity-100"
                                        style={{
                                            maxHeight: '180px',
                                            opacity: 0.85,
                                            filter: 'brightness(2) contrast(0.9) drop-shadow(0 2px 12px rgba(255,220,60,0.08))',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Footer Simple */}
                <footer className="bg-black py-12 px-8 border-t border-white/10 text-center text-white/30 text-xs uppercase tracking-widest font-manrope">
                    Territórios Culturais © 2024 - Todos os direitos reservados.
                </footer>
            </motion.div>
        </>
    );
};

export default ProjectDetail;
