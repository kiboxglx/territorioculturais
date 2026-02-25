import React from 'react';
import { Link } from 'react-router-dom';

const Methodology = () => {
    return (
        <section id="metodologia" className="snap-section bg-background-dark relative">
            <div className="container mx-auto px-8 py-20 relative z-10 h-full flex flex-col justify-center">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Nossa Estratégia</span>
                        <h2 className="font-playfair text-5xl md:text-6xl text-white">Metodologia MATC</h2>
                    </div>

                    <Link
                        to="/metodologia"
                        className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-charcoal font-bold px-8 py-3 rounded-full transition-all text-xs tracking-widest uppercase inline-block"
                    >
                        Ver Detalhes da Metodologia
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-charcoal/50 border border-white/5 p-8 flex flex-col justify-end">
                        <div className="absolute top-8 left-8 text-6xl font-playfair text-primary/20 group-hover:text-primary/40 transition-colors">01</div>
                        <h4 className="font-playfair text-2xmb-4 text-white">Mapeamento Territorial</h4>
                        <p className="text-sm text-white/70 font-light font-manrope">Identificação de talentos, espaços e histórias latentes em cada região de atuação.</p>
                        <div className="mt-6 h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-charcoal/50 border border-white/5 p-8 flex flex-col justify-end">
                        <div className="absolute top-8 left-8 text-6xl font-playfair text-primary/20 group-hover:text-primary/40 transition-colors">02</div>
                        <h4 className="font-playfair text-2xl mb-4 text-white">Capacitação Criativa</h4>
                        <p className="text-sm text-white/70 font-light font-manrope">Formação técnica e artística para comunidades locais, gerando autonomia e renda.</p>
                        <div className="mt-6 h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-charcoal/50 border border-white/5 p-8 flex flex-col justify-end">
                        <div className="absolute top-8 left-8 text-6xl font-playfair text-primary/20 group-hover:text-primary/40 transition-colors">03</div>
                        <h4 className="font-playfair text-2xl mb-4 text-white">Produção Ética</h4>
                        <h4 className="font-playfair text-2xl mb-4 text-white hidden">Impacto Sistêmico</h4>
                        <p className="text-sm text-white/70 font-light font-manrope">Execução de projetos culturais com rigor técnico e foco no desenvolvimento territorial.</p>
                        <div className="mt-6 h-1 w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
