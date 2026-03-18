import React from 'react';
import { motion } from 'framer-motion';
import dataRoom from '../data/data-room.json';

const tierStyles = {
    "Master": { color: "var(--gold)", highlight: true },
    "Ouro": { color: "var(--gold-soft)", highlight: false },
    "Prata": { color: "var(--gold-bronze)", highlight: false }
};

const SponsorTier = ({ onContactClick, isModal = false }) => {
    const renderTiers = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataRoom.sponsorTiers.map((tier, idx) => {
                const style = tierStyles[tier.tier] || { color: "white", highlight: false };
                
                return (
                    <motion.div
                        key={tier.tier}
                        initial={isModal ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className={`relative flex flex-col p-8 rounded-card border transition-all duration-500 ${
                            style.highlight 
                            ? 'bg-charcoal border-gold/40 shadow-gold-sm scale-105 z-10' 
                            : 'bg-surface border-border hover:border-gold/20'
                        }`}
                    >
                        {style.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[10px] font-bold px-4 py-1 rounded-pill tracking-widest uppercase">
                                Recomendado
                            </div>
                        )}

                        <div className="mb-8">
                            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2 block">
                                {tier.availability}
                            </span>
                            <h3 className="font-display text-3xl mb-1" style={{ color: style.color }}>
                                {tier.tier}
                            </h3>
                            <div className="text-white font-bold text-xl mb-4 font-mono">
                                {tier.investment}
                            </div>
                            <p className="text-white/60 text-xs leading-relaxed font-body">
                                Foco em posicionamento estratégico e forte associação aos valores de sustentabilidade e cultura.
                            </p>
                        </div>

                        <div className="divider-gold opacity-10 mb-6" />

                        <ul className="space-y-4 mb-12 grow">
                            {tier.benefits.map((benefit, bIdx) => (
                                <li key={bIdx} className="flex gap-3 text-[11px] text-white/70 font-body leading-tight">
                                    <span className="material-symbols-outlined text-gold text-[16px] shrink-0" translate="no">
                                        done
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={onContactClick}
                            className={`w-full py-4 rounded-pill font-bold text-[10px] tracking-[0.15em] uppercase transition-all ${
                                style.highlight 
                                ? 'bg-gold text-charcoal hover:bg-gold-warm shadow-gold-sm' 
                                : 'bg-white/5 text-white border border-white/10 hover:border-gold/40 hover:text-gold'
                            }`}
                        >
                            Solicitar Proposta {tier.tier}
                        </button>
                    </motion.div>
                );
            })}
        </div>
    );

    if (isModal) {
        return (
            <div className="py-8">
                {renderTiers()}
            </div>
        );
    }

    return (
        <section id="investimento" className="py-24 bg-void">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="eyebrow mx-auto">Invista com Propósito</span>
                    <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Cotas de Patrocínio</h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-body text-sm md:text-base">
                        Escolha o nível de impacto que sua marca deseja gerar. Todos os aportes são auditados e acompanhados por indicadores de transparência.
                    </p>
                </div>

                {renderTiers()}
                
                <div className="mt-16 text-center">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
                        * Valores referenciais sujeitos a adequação de escopo territorial. 
                        Todos os incentivos fiscais (Rouanet, ICMS) são aplicáveis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SponsorTier;
