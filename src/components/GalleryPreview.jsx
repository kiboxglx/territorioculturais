import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const previewImages = [
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop", title: "Registros de Produção", category: "Produção" },
    { url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=600&auto=format&fit=crop", title: "Documentação de Eventos", category: "Eventos" },
    { url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop", title: "Ações de Formação", category: "Formação" },
    { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop", title: "Engajamento Territorial", category: "Território" }
];

const GalleryPreview = () => {
    return (
        <section 
            id="projetos" 
            className="snap-section bg-void py-24"
            aria-label="Registros de Impacto: Galeria de Fotos"
        >
            <div className="container mx-auto px-8 h-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <span className="eyebrow mb-2">Registros de Impacto</span>
                        <h2 className="font-display text-5xl md:text-6xl text-white">Galeria</h2>
                    </div>
                    <Link
                        to="/galeria"
                        className="btn-secondary transition-all focus:ring-2 focus:ring-gold focus:ring-offset-4 focus:ring-offset-void focus:outline-none"
                        aria-label="Ver galeria completa de fotos e registros dos projetos"
                    >
                        Ver Galeria Completa
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {previewImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="aspect-square rounded-card overflow-hidden group relative card-premium focus-within:ring-2 focus-within:ring-gold"
                            tabIndex="0"
                            role="img"
                            aria-label={`Galeria: ${img.title}`}
                        >
                            <img
                                src={img.url}
                                alt={`Registro visual de ${img.category}: ${img.title}`}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            {/* Overlay de Categoria — Ajuste de Contraste (de white/20 p/ white/60 ou gold) */}
                            <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <span className="text-gold font-display italic text-xl drop-shadow-lg">
                                    {img.category}
                                </span>
                            </div>
                            
                            {/* Borda de foco visível */}
                            <div className="absolute inset-0 border border-gold/0 group-focus:border-gold/50 transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
