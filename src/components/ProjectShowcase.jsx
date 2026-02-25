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
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg backdrop-blur ${project.category === 'realized' ? 'bg-emerald-500/90 text-white' : 'bg-amber-500/90 text-white'}`}>
                {project.category === 'realized' ? 'Realizado' : 'Em Captação'}
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

        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-playfair text-lg mb-2 text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
            <p className="text-[10px] text-white/50 mb-4 font-light font-manrope line-clamp-2 leading-relaxed">{project.description}</p>
            <div className="mt-auto pt-4 border-t border-white/5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{project.incentiveLaw}</span>
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
        <div id={id} className="mb-20 last:mb-0">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="font-playfair text-4xl text-white">{title}</h2>
                    <div className="h-1 w-20 bg-primary mt-4"></div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="bg-white/5 border border-white/10 p-2 rounded-full hover:bg-white/10 text-white">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button onClick={() => scroll('right')} className="bg-white/5 border border-white/10 p-2 rounded-full hover:bg-white/10 text-white">
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
    const upcomingProjects = projects.filter(p => p.category === 'upcoming');

    return (
        <section id="eventos" className="snap-section bg-charcoal py-24">
            <div className="container mx-auto px-8">
                <ProjectSection
                    id="eventos-realizados"
                    title="Eventos Realizados"
                    projects={realizedProjects}
                />

                <div className="h-[1px] w-full bg-white/5 my-20" />

                <ProjectSection
                    id="proximos-eventos"
                    title="Próximos Eventos"
                    projects={upcomingProjects}
                />
            </div>
        </section>
    );
};

export default ProjectShowcase;
