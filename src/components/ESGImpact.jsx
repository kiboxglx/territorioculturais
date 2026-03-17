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
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">{item.label}</span>
            <p className="text-white/60 text-xs font-light leading-relaxed">{item.detail}</p>
        </motion.div>
    );
};

const ESGImpact = () => {
    const { esgImpact } = dataRoom;

    return (
        <section id="governance" className="py-24 bg-void relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="eyebrow">Relatório de Sustentabilidade</span>
                        <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Impacto ESG <br /><i className="text-gold font-light">Estratégico</i></h2>
                        <p className="text-white/50 font-body text-sm md:text-base leading-relaxed">
                            Nossa atuação é mensurada por indicadores rigorosos que garantem o equilíbrio entre preservação territorial, inclusão social e governança ética.
                        </p>
                    </div>
                    
                    {/* Mini SVG Radar/Chart Placeholder */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hidden lg:block">
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24">
                                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                                    <circle 
                                        cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" 
                                        strokeWidth="10" strokeDasharray="282" strokeDashoffset="50" 
                                        className="transition-all duration-1000"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gold">92%</div>
                            </div>
                            <div>
                                <h5 className="text-white font-mono text-[10px] uppercase tracking-widest mb-2">Health Score Geral</h5>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> <span className="text-[9px] text-white/40 uppercase">Social</span></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-gold" /> <span className="text-[9px] text-white/40 uppercase">Ambiental</span></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-red" /> <span className="text-[9px] text-white/40 uppercase">Governança</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Social */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-1" />
                        <h3 className="text-white/30 font-mono text-xs uppercase tracking-[0.3em]">Pilar Social</h3>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <button className="group relative flex items-center gap-4 bg-gold px-12 py-5 rounded-full text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-gold-warm transition-all shadow-gold-sm">
                        <ArrowDownToLine size={18} className="group-hover:translate-y-1 transition-transform" />
                        Baixar Relatório de Impacto Completo (PDF)
                        <div className="absolute inset-0 rounded-full bg-white/20 scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p className="mt-6 text-[10px] text-white/30 uppercase tracking-[0.2em]">Última atualização: Março 2025 · Auditado por Terceiros</p>
                </div>
            </div>
        </section>
    );
};

export default ESGImpact;
