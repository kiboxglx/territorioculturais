import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Projetos Culturais",
            description: "Desenvolvimento, planejamento e execução de projetos culturais de alto impacto.",
            icon: "architecture"
        },
        {
            title: "Consultoria Institucional",
            description: "Orientação técnica para prefeituras e governos na organização de sistemas culturais.",
            icon: "account_balance"
        },
        {
            title: "Formação Cultural",
            description: "Programas de capacitação para agentes, gestores e fazedores de cultura.",
            icon: "school"
        },
        {
            title: "Programas Audiovisuais",
            description: "Produção cinematográfica e registro da memória e identidade territorial.",
            icon: "movie"
        },
        {
            title: "Planejamento Turístico",
            description: "Roteirização e ativação de destinos por meio do patrimônio cultural.",
            icon: "map"
        },
        {
            title: "Economia Criativa",
            description: "Ações voltadas à geração de renda e sustentabilidade das cadeias produtivas.",
            icon: "payments"
        }
    ];

    return (
        <section id="servicos" className="snap-section bg-charcoal text-white">
            <div className="container mx-auto px-8 py-20 h-full flex flex-col justify-center">
                <div className="mb-12">
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Soluções Estratégicas</span>
                    <h2 className="font-playfair text-5xl md:text-6xl text-white">Produtos e Serviços</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group backdrop-blur-sm">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">
                                {service.icon}
                            </span>
                            <h3 className="font-playfair text-2xl mb-4 text-white">{service.title}</h3>
                            <p className="text-white/60 font-light font-manrope text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
