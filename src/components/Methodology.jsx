import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Methodology = () => {

    return (
        <section id="metodologia" className="snap-section bg-charcoal relative py-32 overflow-hidden">
            {/* Visual Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

                    {/* LEFT SIDE: Sistema Territórios Culturais */}
                    <div className="flex flex-col justify-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block font-manrope"
                        >
                            Visão Sistêmica
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
                        >
                            Sistema <br />
                            <span className="italic text-primary font-light text-3xl md:text-4xl lg:text-5xl">Territórios Culturais.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-base text-white/60 font-light font-manrope leading-relaxed border-l-2 border-primary/50 pl-4 py-1 italic">
                                Arquitetura estratégica integrada de desenvolvimento cultural, institucional e territorial.
                            </p>

                            <p className="text-sm text-white/70 font-manrope font-light leading-relaxed">
                                O Sistema Territórios Culturais é a matriz conceitual que organiza toda a atuação da Territórios Culturais LTDA. Ele integra metodologia própria (MATC), programa estruturante (Destino Estruturado), observatório de monitoramento e quatro eixos executivos em um modelo sistêmico de governança, financiamento, produção cultural e desenvolvimento territorial.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
                                <p className="text-sm font-bold text-white font-manrope">Não se trata de serviços isolados.</p>
                                <p className="text-sm text-primary font-bold uppercase tracking-widest font-manrope">É um ecossistema institucional permanente.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-10"
                        >
                            <Link
                                to="/metodologia"
                                className="group flex items-center gap-4 bg-primary text-charcoal font-bold px-8 py-4 rounded-full transition-all text-xs tracking-widest uppercase w-fit hover:scale-105 shadow-[0_0_20px_rgba(17,212,212,0.15)]"
                            >
                                Conheça o Sistema
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Metodologia MATC */}
                    <div className="flex flex-col justify-center mt-12 lg:mt-0">
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block font-manrope"
                        >
                            Nossa Metodologia
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
                        >
                            Metodologia <br />
                            <span className="italic text-primary font-light text-3xl md:text-4xl lg:text-5xl">MATC.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-base text-white/60 font-light font-manrope leading-relaxed border-l-2 border-primary/50 pl-4 py-1 italic">
                                Sistema estruturante de implantação, organização e permanência da política cultural municipal.
                            </p>

                            <p className="text-sm text-white/70 font-manrope font-light leading-relaxed">
                                A MATC é uma metodologia aplicada de estruturação da política pública de cultura, desenvolvida para organizar administrativamente o setor cultural dentro do município, criar capacidade permanente de gestão e integrar cultura ao desenvolvimento territorial.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
                                <p className="text-sm font-bold text-white font-manrope">Ela transforma ações isoladas em sistema contínuo.</p>
                                <p className="text-sm text-primary font-bold uppercase tracking-widest font-manrope">Garantindo previsibilidade, eficiência e permanência.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Methodology;
