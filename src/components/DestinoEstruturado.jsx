import React from 'react';
import { motion } from 'framer-motion';

const DestinoEstruturado = () => {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center snap-section min-h-[500px]">
            {/* Imagem de fundo — Cordilheira do Espinhaço */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Cordilheira_do_Espinhaço-4_Foto_Geisy_Faria.jpg"
                    alt="Cordilheira do Espinhaço — Foto: Geisy Faria"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay escuro leve para legibilidade */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl">

                {/* Título principal */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white"
                >
                    Programa <br /><span className="italic font-light text-red-400">Destino Estruturado</span>
                </motion.h2>

                {/* Subtítulo */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bold tracking-[0.5em] uppercase text-sm mb-10 block text-red-500 font-manrope"
                >
                    Transformação Estratégica
                </motion.span>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl font-manrope font-light mb-12 text-white/80 max-w-2xl mx-auto"
                >
                    Desenvolvemos ecossistemas locais integrando cultura, turismo e economia criativa em um programa contínuo de desenvolvimento territorial.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-red-600 text-white font-bold px-10 py-4 rounded-full hover:bg-red-700 transition-colors text-sm tracking-widest uppercase shadow-2xl"
                >
                    Conheça o Programa
                </motion.button>
            </div>
        </section>
    );
};

export default DestinoEstruturado;
