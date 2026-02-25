import React from 'react';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="nossa-essencia" className="snap-section relative overflow-hidden bg-charcoal">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
                    alt="Cultura e Território"
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-charcoal/80"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Nossa Essência</span>
                        <h2 className="font-playfair text-5xl md:text-7xl mb-8 text-white">
                            Quem Somos & <br /> <span className="italic text-primary font-light">Finalidade</span>
                        </h2>

                        <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed font-manrope mb-10">
                            <p>
                                A <span className="text-primary font-bold">Territórios Culturais LTDA</span> é uma produtora registrada na <span className="font-bold">ANCINE</span>, dedicada à estruturação de políticas culturais e programas permanentes voltados ao desenvolvimento territorial.
                            </p>
                            <p>
                                Atuamos em parceria com municípios e instituições no planejamento e execução de ações que integram <span className="text-white font-normal uppercase tracking-wider text-sm">Cultura, Educação, Turismo e Economia Criativa</span> em estratégias de desenvolvimento contínuo.
                            </p>
                            <p className="border-l-2 border-primary/30 pl-6 py-2 italic text-white/60">
                                Nossa finalidade é promover a cultura como política pública estruturante, fortalecendo identidades locais e estimulando impactos sociais e econômicos sustentáveis.
                            </p>
                        </div>

                        <Link
                            to="/quem-somos"
                            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-charcoal font-bold px-10 py-4 rounded-full transition-all text-sm tracking-widest uppercase inline-block"
                        >
                            Saiba Mais
                        </Link>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="absolute -inset-10 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
                        <div className="bg-gradient-to-br from-primary/20 to-transparent p-1 rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
                                alt="Produção Audiovisual"
                                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
