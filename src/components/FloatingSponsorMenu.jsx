import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingSponsorMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: "bar_chart", label: "Métricas de Impacto", target: "#impact-metrics" },
        { icon: "public", label: "Dados ESG", target: "#governance" },
        { icon: "verified_user", label: "Investor Data Room", target: "#investimento" },
        { icon: "download", label: "Download Mídia Kit", target: "#midia-kit" }
    ];

    return (
        <div className="fixed bottom-10 right-8 z-45 flex items-end justify-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.8 }}
                        className="bg-charcoal/95 backdrop-blur-xl p-3 rounded-card border border-gold/30 shadow-gold mb-6 mr-1 pointer-events-auto"
                        style={{ borderBottomRightRadius: '2px' }}
                    >
                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-[9px] text-gold/40 uppercase tracking-[0.2em] px-4 py-2 border-b border-white/5 mb-1">
                                Painel Investidor
                            </span>
                            {menuItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => {
                                        const element = document.querySelector(item.target);
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-4 px-4 py-3 text-white/70 hover:text-gold hover:bg-white/5 transition-all text-[10px] uppercase tracking-widest group rounded-card"
                                >
                                    <span className="material-symbols-outlined text-[18px]" translate="no">
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-void text-gold border border-gold/40 p-5 rounded-card shadow-gold transition-all hover:bg-gold hover:text-charcoal group pointer-events-auto"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <span className="material-symbols-outlined text-2xl" translate="no">
                        {isOpen ? 'close' : 'person_pin_circle'}
                    </span>
                </motion.div>
                
                {/* Tooltip Lateral */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-void p-3 border border-gold/10 text-gold text-[8px] uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                        Sou Patrocinador
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingSponsorMenu;
