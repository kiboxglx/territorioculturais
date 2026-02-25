import React from 'react';

const Team = () => {
    const team = [
        {
            name: "Liderança Executiva",
            role: "Coordenação Geral",
            description: "Especialistas em gestão cultural e leis de incentivo."
        },
        {
            name: "Núcleo Criativo",
            role: "Direção e Roteiro",
            description: "Cineastas e artistas dedicados à tradução da alma do território."
        },
        {
            name: "Produção de Campo",
            role: "Logística e Comunidade",
            description: "Ponte direta entre o projeto e os moradores locais."
        },
        {
            name: "Técnico e Edição",
            role: "Pós-Produção",
            description: "Finalização de excelência para conteúdos audiovisuais."
        }
    ];

    return (
        <section id="equipe" className="snap-section bg-background-dark text-white">
            <div className="container mx-auto px-8 py-20 h-full flex flex-col justify-center text-center">
                <div className="mb-16">
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Mentes Brilhantes</span>
                    <h2 className="font-playfair text-5xl md:text-6xl mx-auto">Nossa Equipe</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-white/10 mb-6 border border-white/20 flex items-center justify-center overflow-hidden">
                                <span className="material-symbols-outlined text-4xl text-white/30">person</span>
                            </div>
                            <h3 className="font-playfair text-xl mb-1">{member.name}</h3>
                            <span className="text-primary text-[10px] uppercase tracking-widest mb-4 font-bold">{member.role}</span>
                            <p className="text-white/50 font-light font-manrope text-sm">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
