import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Cinema, Audiovisual e Novas Mídias.",
            subtitle: "Produção cinematográfica, comunicação institucional e conteúdo estratégico para o setor público e privado.",
            description: "Atuamos na indústria cinematográfica brasileira, na produção audiovisual institucional e na criação de conteúdos digitais estratégicos, integrando narrativa, informação e identidade territorial com qualidade técnica e registro na ANCINE.",
            icon: "movie",
            link: "/portfolio/cinema-audiovisual"
        },
        {
            id: "02",
            title: "Mostras, Festivais e Eventos Culturais",
            subtitle: "Curadoria, produção e execução de eventos culturais estruturados com impacto artístico, social e territorial.",
            description: "Planejamos e realizamos Mostras, Festivais e Eventos Culturais como instrumentos estratégicos de democratização do acesso, fortalecimento da economia criativa e valorização da identidade territorial, com organização técnica e responsabilidade administrativa.",
            icon: "festival",
            link: "/portfolio-eventos"
        },
        {
            id: "03",
            title: "Formação e qualificação cultural",
            subtitle: "Programas de capacitação para agentes e gestores culturais.",
            description: "Programas de capacitação para agentes e gestores, gerando autonomia técnica e retenção de talentos.",
            icon: "school",
            link: "/portfolio"
        },
        {
            id: "04",
            title: "Plano institucional e governança",
            subtitle: "Operação integrada entre cultura e vocações turísticas.",
            description: "Operação integrada entre cultura e vocações turísticas para o desenvolvimento econômico da região.",
            icon: "account_balance",
            link: "/portfolio"
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
                        <Link 
                            to={service.link}
                            key={index} 
                            className="block"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 lg:p-12 group hover:bg-white/5 transition-all rounded-3xl h-full flex flex-col justify-between border border-transparent hover:border-white/5"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform origin-left">
                                            {service.icon}
                                        </span>
                                        <span className="font-playfair text-4xl text-white/10 group-hover:text-primary/40 transition-colors">
                                            {service.id}
                                        </span>
                                    </div>
                                    <h3 className="font-playfair text-3xl mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                    
                                    {/* Default View: Subtitle */}
                                    <p className="text-white/60 font-light font-manrope text-sm leading-relaxed max-w-sm group-hover:opacity-0 group-hover:h-0 transition-all duration-300">
                                        {service.subtitle}
                                    </p>

                                    {/* Hover View: Description Box */}
                                    <p className="text-white font-light font-manrope text-sm leading-relaxed max-w-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                                        {service.description}
                                    </p>
                                </div>
                                
                                <div className="mt-8 flex items-center gap-2 text-[10px] text-primary uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 cursor-pointer">
                                    Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
