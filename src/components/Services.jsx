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
            image: "/images/hero/cine1.png",
            link: "/portfolio/cinema",
            buttonText: "Saiba Mais"
        },
        {
            id: "02",
            title: "Mostras, Festivais e Eventos Culturais.",
            subtitle: "Curadoria, produção e execução de eventos culturais estruturados com impacto artístico, social e territorial.",
            description: "Planejamos e realizamos Mostras, Festivais e Eventos Culturais como instrumentos estratégicos de democratização do acesso, fortalecimento da economia criativa e valorização da identidade territorial, com organização técnica e responsabilidade administrativa.",
            icon: "festival",
            image: "/images/hero/mostras.png",
            link: "/portfolio-eventos",
            buttonText: "Saiba Mais"
        },
        {
            id: "03",
            title: "Formação, Capacitação e Qualificação Cultural.",
            subtitle: "Programas formativos voltados à profissionalização, autonomia técnica e fortalecimento estruturado do setor cultural.",
            description: "Realizamos oficinas, cursos, congressos e programas de capacitação voltados à gestão cultural, produção artística e estruturação de políticas públicas, promovendo qualificação técnica e geração de capacidade instalada no território.",
            icon: "school",
            image: "/images/hero/formacao.png",
            link: "/formacao",
            buttonText: "Saiba Mais"
        },
        {
            id: "04",
            title: "Governança, Financiamento e Estruturação Institucional.",
            subtitle: "Arquitetura técnica para organização administrativa, captação estratégica de recursos e consolidação permanente de políticas públicas culturais e turísticas.",
            description: "Estruturamos, regulamentamos e operacionalizamos sistemas como Transferegov.br, ISSQN Cultural, ICMS Patrimônio Cultural e ICMS Turismo, garantindo segurança jurídica, eficiência administrativa, aumento de pontuação técnica e ampliação de repasses financeiros.",
            icon: "account_balance",
            image: "/images/hero/governanca.png",
            link: "/portfolio-governanca",
            buttonText: "Saiba Mais"
        },
    ];

    return (
        <section id="territorios" className="snap-section bg-charcoal text-white py-32 relative overflow-hidden">
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

                <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 relative border-t border-white/5 pt-12">
                    {/* Alterado grid para manter a flexibilidade com 5 itens e removidas linhas de divisão estilo 4 quadrantes */}

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
                                className="group relative rounded-3xl h-full flex flex-col justify-between border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Imagem de fundo do card */}
                                {service.image && (
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={service.image}
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            className="w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-700 scale-105 group-hover:scale-110 transition-transform"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-br from-charcoal/95 via-charcoal/80 to-charcoal/60" />
                                    </div>
                                )}

                                <div className="p-8 lg:p-12 relative z-10 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex justify-between items-start mb-8">
                                            <span className="text-primary text-4xl font-bold font-mono">{service.id}</span>
                                            <span className="text-white/10 group-hover:text-primary/30 transition-colors text-xs uppercase tracking-widest font-bold pt-2">Eixo</span>
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
                                        {service.buttonText || "Saiba Mais"} →
                                    </div>
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
