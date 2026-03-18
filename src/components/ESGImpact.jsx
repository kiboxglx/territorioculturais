import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, ShieldCheck, Accessibility, GraduationCap, MapPin, FileCheck, ArrowDownToLine } from 'lucide-react';
import { AnimatedCounter } from './ImpactMetrics';
import dataRoom from '../data/data-room.json';

const IconMap = {
    Leaf: Leaf,
    Users: Users,
    ShieldCheck: ShieldCheck,
    Accessibility: Accessibility,
    GraduationCap: GraduationCap,
    MapPin: MapPin,
    FileCheck: FileCheck
};

const ESGCard = ({ item, colorIndex }) => {
    const Icon = IconMap[item.icon] || Users;
    const colors = ['text-primary', 'text-accent-gold', 'text-accent-red'];
    const color = colors[colorIndex % colors.length];

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all flex flex-col items-center text-center group"
        >
            <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform ${color}`}>
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-white font-bold text-2xl font-playfair mb-1">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
            </h4>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/60 mb-3">{item.label}</span>
            <p className="text-white/60 text-xs font-light leading-relaxed">{item.detail}</p>
        </motion.div>
    );
};

const ESGImpact = ({ isModal = false }) => {
    const { esgImpact } = dataRoom;

    const renderContent = () => (
        <div className={`container mx-auto ${isModal ? 'px-0' : 'px-8'}`}>
            {!isModal && (
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="eyebrow">Relatório de Sustentabilidade</span>
                        <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Impacto ESG <br /><i className="text-gold font-light">Estratégico</i></h2>
                        <p className="text-white/50 font-body text-sm md:text-base leading-relaxed">
                            Nossa atuação é mensurada por indicadores rigorosos que garantem o equilíbrio entre preservação territorial, inclusão social e governança ética.
                        </p>
                    </div>
                </div>
            )}

            {/* Grid Social */}
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-white/10 flex-1" />
                    <h3 className="text-white/30 font-mono text-xs uppercase tracking-[0.3em]">Pilar Social</h3>
                    <div className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {esgImpact.social.map((item, idx) => (
                        <ESGCard key={idx} item={item} colorIndex={0} />
                    ))}
                </div>
            </div>

            {/* Grid Ambiental & Governança */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h3 className="text-white/30 font-mono text-xs uppercase tracking-[0.3em] whitespace-nowrap">Ambiental</h3>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {esgImpact.environmental.map((item, idx) => (
                            <ESGCard key={idx} item={item} colorIndex={1} />
                        ))}
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h3 className="text-white/30 font-mono text-xs uppercase tracking-[0.3em] whitespace-nowrap">Governança</h3>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {esgImpact.governance.map((item, idx) => (
                            <ESGCard key={idx} item={item} colorIndex={2} />
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="flex flex-col items-center pt-12 border-t border-white/5">
                <button className="btn-primary flex items-center gap-3">
                    <ArrowDownToLine size={18} className="group-hover:translate-y-1 transition-transform" />
                    Baixar Relatório de Impacto (PDF)
                </button>
            </div>
        </div>
    );

    if (isModal) {
        return renderContent();
    }

    return (
        <section id="esg-impact" className="py-24 bg-void relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            {renderContent()}
        </section>
    );
};

export default ESGImpact;
