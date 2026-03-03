import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group hover:border-primary/50 transition-all duration-500 flex flex-col overflow-hidden relative"
    >
        <div className="absolute top-4 right-4 z-20">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg backdrop-blur bg-primary/20 text-primary border border-primary/50`}>
                Realizado
            </span>
        </div>

        <div className="aspect-video relative overflow-hidden">
            <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={project.heroImage}
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/80 transition-all duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 transform translate-y-4 group-hover:translate-y-0">
                <Link
                    to={`/projeto/${project.slug}`}
                    className="bg-primary text-charcoal font-bold px-6 py-3 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform w-full text-center"
                >
                    Ver Detalhes
                </Link>
            </div>
        </div>

        <div className="p-6 flex flex-col grow bg-charcoal">
            <h3 className="font-playfair text-2xl mb-1 text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
            {project.subtitle && <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3 block">{project.subtitle}</span>}
            <p className="text-[12px] text-white/70 mb-4 font-light font-manrope line-clamp-3 leading-relaxed">{project.description}</p>
            <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{project.incentiveLaw}</span>
                <span className="text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> Concluído</span>
            </div>
        </div>
    </motion.div>
);

const ProjectSection = ({ title, projects, id }) => {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (projects.length === 0) return null;

    return (
        <div id={id} className="">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Portfólio</span>
                    <h2 className="font-playfair text-5xl md:text-6xl text-white">{title}</h2>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button onClick={() => scroll('right')} className="bg-white/5 border border-white/10 p-4 rounded-full hover:bg-white/10 text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    );
};

const ProjectShowcase = () => {
    const realizedProjects = projects.filter(p => p.category === 'realized');

    return (
        <section id="eventos" className="snap-section bg-charcoal py-32 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="container mx-auto px-8 relative z-10">
                <ProjectSection
                    id="eventos-realizados"
                    title="Eventos Realizados"
                    projects={realizedProjects}
                />
            </div>
        </section>
    );
};

export default ProjectShowcase;
