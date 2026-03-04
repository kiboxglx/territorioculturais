import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Cinema audiovisual e novas mídias",
            description: "Consultoria técnica para governos na organização do Sistema Municipal de Cultura e Políticas Públicas.",
            icon: "movie"
        },
        {
            id: "02",
            title: "Mostras, festivais e eventos culturais",
            description: "Desenvolvimento e execução de projetos culturais e audiovisuais de alto impacto territorial.",
            icon: "festival"
        },
        {
            id: "03",
            title: "Formação, capacitação e qualificação cultural",
            description: "Programas de capacitação para agentes e gestores, gerando autonomia técnica e retenção de talentos.",
            icon: "school"
        },
        {
            id: "04",
            title: "Governança, financiamento e estruturação institucional",
            description: "Operação integrada entre cultura e vocações turísticas para o desenvolvimento econômico da região.",
            icon: "account_balance"
        }
    ];

    return (
        <section id="servicos" className="snap-section bg-charcoal text-white py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/4"></div>

            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope"
                    >
                        Soluções Estratégicas
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-playfair text-5xl md:text-6xl text-white leading-tight"
                    >
                        Portfólio de <i className="font-light text-white/70">Atuação</i>
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* Linha Divisória Customizada Central (opcional para dar efeito de quadrante) */}
                    <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2"></div>
                    <div className="hidden sm:block absolute left-0 right-0 top-1/2 h-px bg-white/5 -translate-y-1/2"></div>
                    
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 lg:p-12 group hover:bg-white/5 transition-colors rounded-3xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform origin-left">
                                    {service.icon}
                                </span>
                                <span className="font-playfair text-4xl text-white/10 group-hover:text-primary/40 transition-colors">
                                    {service.id}
                                </span>
                            </div>
                            <h3 className="font-playfair text-3xl mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-white/60 font-light font-manrope text-base leading-relaxed max-w-sm">
                                {service.description}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-2 text-[10px] text-primary uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 cursor-pointer">
                                Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
