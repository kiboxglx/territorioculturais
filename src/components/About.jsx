import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="nossa-essencia" className="snap-section relative bg-charcoal overflow-hidden py-32">
            {/* Background Aesthetic Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-black/40 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 z-0"></div>

            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                
                {/* Header Editorial Section */}
                <div className="max-w-4xl mb-24">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-6 block font-manrope"
                    >
                        Nossa Essência
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-playfair text-5xl md:text-7xl text-white mb-6 leading-tight"
                    >
                        Quem Somos & <br className="hidden md:block" />
                        <span className="italic text-primary font-light">Finalidade</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl text-white/50 font-light font-playfair tracking-wide mb-12"
                    >
                        Arquitetura estratégica de desenvolvimento cultural e territorial.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6 text-lg text-white/80 font-light leading-relaxed font-manrope border-l-2 border-primary/30 pl-6 md:pl-10 relative"
                    >
                        <p>
                            A <span className="text-white font-bold">Territórios Culturais LTDA</span> atua para transformar cultura em infraestrutura estratégica de desenvolvimento territorial.
                        </p>
                        <p>
                            Nossa finalidade é estruturar políticas culturais permanentes, organizar mecanismos de financiamento público, implantar governança cultural municipal, integrar cultura, turismo e economia criativa, criando autonomia técnica instalada e garantindo monitoramento institucional contínuo.
                        </p>
                        
                        <div className="absolute -left-px top-6 bottom-6 w-[2px] bg-linear-to-b from-primary via-primary/50 to-transparent"></div>
                    </motion.div>
                </div>

                {/* Cards Comparativos: Público x Privado */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20 relative">
                    
                    {/* Card Poder Público */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 hover:border-primary/40 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        
                        <h3 className="font-playfair text-3xl text-white mb-8 border-b border-white/10 pb-6">
                            Para o <span className="italic text-primary">Poder Público</span>
                        </h3>
                        
                        <p className="text-sm font-manrope text-white/60 uppercase tracking-widest mb-6 block">Oferecemos estrutura técnica para:</p>
                        
                        <ul className="space-y-4 text-white/80 font-light font-manrope">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Implantação de Sistemas Municipais de Cultura.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Estruturação de Lei de Incentivo via ISSQN.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Operacionalização de recursos federais.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Organização administrativa cultural.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Planejamento territorial integrado.</span>
                            </li>
                        </ul>
                        
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-sm text-primary/80 italic font-playfair">
                                Nosso objetivo é gerar autonomia, segurança jurídica e eficiência administrativa.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card Iniciativa Privada */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 hover:border-primary/40 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                        
                        <h3 className="font-playfair text-3xl text-white mb-8 border-b border-white/10 pb-6">
                            Para a <span className="italic text-primary">Iniciativa Privada</span>
                        </h3>
                        
                        <p className="text-sm font-manrope text-white/60 uppercase tracking-widest mb-6 block">Atuamos na:</p>
                        
                        <ul className="space-y-4 text-white/80 font-light font-manrope">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Estruturação de projetos culturais.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Conexão com mecanismos de incentivo fiscal.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Posicionamento institucional por meio da cultura.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 material-symbols-outlined text-sm">done</span>
                                <span>Integração com políticas públicas territoriais.</span>
                            </li>
                        </ul>
                        
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-sm text-primary/80 italic font-playfair">
                                A cultura deixa de ser patrocínio pontual e passa a ser investimento estratégico.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Footer Quote & CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black/40 p-8 md:p-12 rounded-3xl border border-white/5"
                >
                    <div className="lg:w-2/3">
                        <p className="font-playfair text-2xl md:text-3xl text-white leading-relaxed italic">
                            "Não oferecemos apenas serviços culturais. <br className="hidden md:block"/>
                            <span className="text-primary font-bold">Implantamos sistemas permanentes de desenvolvimento territorial por meio da cultura.</span>"
                        </p>
                    </div>
                    
                    <div className="lg:w-1/3 flex justify-end w-full">
                        <button
                            onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full lg:w-auto text-center bg-transparent border border-primary text-primary hover:bg-primary hover:text-charcoal font-bold px-8 py-5 rounded-full transition-all text-[10px] md:text-xs tracking-[0.2em] uppercase"
                        >
                            Conheça nossa Estrutura
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
