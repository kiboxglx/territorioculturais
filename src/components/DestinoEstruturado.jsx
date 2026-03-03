import React from 'react';
import { motion } from 'framer-motion';

const DestinoEstruturado = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden flex items-center justify-center snap-section">
            <div className="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(circle_at_center,var(--color-charcoal)_1px,transparent_1px)] bg-size-[20px_20px]"></div>
            
            <div className="container mx-auto px-8 relative z-10 text-center text-charcoal max-w-4xl">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                >
                    Programa Destino Estruturado
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                    Transformação <br/> <span className="italic font-light">Estratégica</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl font-manrope font-medium mb-12"
                >
                    Desenvolvemos ecossistemas locais integrando cultura, turismo e economia criativa em um programa contínuo de desenvolvimento territorial.
                </motion.p>
                <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-charcoal text-white font-bold px-10 py-4 rounded-full hover:bg-black transition-colors text-sm tracking-widest uppercase shadow-2xl"
                >
                    Conheça o Programa
                </motion.button>
            </div>
        </section>
    );
};

export default DestinoEstruturado;
