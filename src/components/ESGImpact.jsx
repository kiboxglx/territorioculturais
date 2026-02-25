import React from 'react';
import { Coins, Users, Rocket } from 'lucide-react';

const ImpactStep = ({ icon: Icon, title, description, delay }) => (
    <div className={`flex flex-col items-center text-center opacity-0 animate-fade-in-up`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-teal to-blue-900 flex justify-center items-center shadow-lg mb-6 shadow-accent-teal/20">
            <Icon className="text-white w-10 h-10" />
        </div>
        <h3 className="text-2xl font-playfair text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-manrope text-sm max-w-xs">{description}</p>
    </div>
);

const ESGImpact = () => {
    return (
        <section className="snap-start w-full min-h-screen flex flex-col justify-center items-center bg-[#102222] relative overflow-hidden px-4">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold blur-[150px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal blur-[150px] rounded-full"></div>
            </div>

            <div className="z-10 text-center mb-20">
                <h2 className="font-playfair text-5xl text-white mb-4">Impacto <span className="text-accent-gold">ESG</span></h2>
                <p className="text-gray-400 font-manrope">O ciclo virtuoso do investimento em cultura.</p>
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">

                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-accent-teal via-white/20 to-accent-gold -z-10"></div>

                <ImpactStep
                    icon={Coins}
                    title="Investimento"
                    description="Recursos incentivados injetados diretamente na economia criativa local."
                    delay={200}
                />
                <ImpactStep
                    icon={Users}
                    title="Desenvolvimento"
                    description="Capacitação técnica, geração de emprego e renda para a comunidade."
                    delay={400}
                />
                <ImpactStep
                    icon={Rocket}
                    title="Legado"
                    description="Fortalecimento da identidade territorial e turismo sustentável."
                    delay={600}
                />

            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-center z-10">
                <div>
                    <span className="block text-4xl font-bold text-accent-teal font-playfair">120+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Empregos Gerados</span>
                </div>
                <div>
                    <span className="block text-4xl font-bold text-accent-gold font-playfair">15k</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Público Impactado</span>
                </div>
                <div>
                    <span className="block text-4xl font-bold text-accent-teal font-playfair">8</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Cidades Atendidas</span>
                </div>
                <div>
                    <span className="block text-4xl font-bold text-accent-gold font-playfair">100%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Sustentabilidade</span>
                </div>
            </div>

        </section>
    );
};

export default ESGImpact;
