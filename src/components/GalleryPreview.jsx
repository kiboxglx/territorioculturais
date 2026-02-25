import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const previewImages = [
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop", title: "Produção" },
    { url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=600&auto=format&fit=crop", title: "Eventos" },
    { url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop", title: "Formação" },
    { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop", title: "Território" }
];

const GalleryPreview = () => {
    return (
        <section id="galeria-preview" className="snap-section bg-background-dark py-24">
            <div className="container mx-auto px-8 h-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Registros de Impacto</span>
                        <h2 className="font-playfair text-5xl md:text-6xl text-white">Galeria</h2>
                    </div>
                    <Link
                        to="/galeria"
                        className="bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary font-bold px-8 py-3 rounded-full transition-all text-xs tracking-widest uppercase inline-block"
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
                            className="aspect-square rounded-2xl overflow-hidden group relative"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-playfair italic text-xl">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
