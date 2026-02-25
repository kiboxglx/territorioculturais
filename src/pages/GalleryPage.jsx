import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'audiovisual', label: 'Audiovisual' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'formacao', label: 'Formação' },
    { id: 'territorio', label: 'Território' }
];

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        title: "Registro Documental",
        category: "audiovisual",
        caption: "Gravações para série de documentários sobre identidade local."
    },
    {
        url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
        title: "Festival de Arte",
        category: "eventos",
        caption: "Ativação cultural em praça pública durante festival intermunicipal."
    },
    {
        url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1200&auto=format&fit=crop",
        title: "Oficina Técnica",
        category: "formacao",
        caption: "Capacitação de agentes culturais locais em gestão de projetos."
    },
    {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        title: "Diagnóstico Territorial",
        category: "territorio",
        caption: "Escuta comunitária para mapeamento de ativos culturais."
    },
    {
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        title: "Produção de Campo",
        category: "audiovisual",
        caption: "Equipe técnica em filmagem de curta-metragem institucional."
    },
    {
        url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop",
        title: "Noite de Estreia",
        category: "eventos",
        caption: "Mostra itinerante de cinema em comunidade quilombola."
    },
    {
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
        title: "Laboratório de Roteiro",
        category: "formacao",
        caption: "Encontro educativo com roteiristas e estudantes da rede pública."
    },
    {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
        title: "Patrimônio Histórico",
        category: "territorio",
        caption: "Registro fotográfico de monumentos para plano de turismo cultural."
    }
];

const GalleryPage = () => {
    const [filter, setFilter] = useState('todos');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredImages = filter === 'todos'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal">
            <Helmet>
                <title>Galeria | Territórios Culturais</title>
                <meta name="description" content="Confira os registros visuais de nossos projetos, eventos e ações de ativação territorial." />
            </Helmet>

            <Navbar />

            {/* Header */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(17,212,212,0.1),transparent)]"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Registros Visuais</span>
                        <h1 className="font-playfair text-6xl md:text-8xl mb-8 leading-tight">
                            Galeria de <br />
                            <span className="italic text-primary font-light">Impacto</span>
                        </h1>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full border text-xs uppercase tracking-widest transition-all ${filter === cat.id ? 'bg-primary text-charcoal border-primary font-bold' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-8">
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.url}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-white/5"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                        <span className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">{image.category}</span>
                                        <h3 className="font-playfair text-lg text-white font-bold">{image.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 right-0 text-white/50 hover:text-white flex items-center gap-2 group transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <span className="text-[10px] uppercase tracking-widest">Fechar</span>
                                <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">close</span>
                            </button>

                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/5"
                            />

                            <div className="mt-8 text-center max-w-2xl">
                                <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-3 block">{selectedImage.category}</span>
                                <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">{selectedImage.title}</h2>
                                <p className="text-white/60 font-light leading-relaxed">{selectedImage.caption}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <section className="py-24 bg-primary text-charcoal text-center">
                <div className="container mx-auto px-8">
                    <h2 className="font-playfair text-4xl mb-8 italic">A cultura em movimento em cada território.</h2>
                    <Link
                        to="/"
                        className="bg-charcoal text-white font-bold px-12 py-5 rounded-full text-sm tracking-widest uppercase inline-block hover:scale-105 transition-all"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
