import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MidiaKitCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação de envio
        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
            setFormData({ name: '', email: '', company: '', role: '' });
        }, 3000);
    };

    return (
        <>
            {/* Botão Flutuante Midia Kit */}
            <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-32 right-8 z-45 bg-gold text-charcoal font-bold p-4 rounded-pill shadow-gold flex items-center gap-3 transition-all hover:bg-gold-warm group border-2 border-charcoal"
            >
                <div className="bg-charcoal/10 rounded-full p-2 group-hover:bg-charcoal/20 transition-all">
                    <span className="material-symbols-outlined text-[18px]" translate="no">download</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest leading-none mr-2">Mídia Kit 2026</span>
            </motion.button>

            {/* Modal de Captura de Lead */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-60 flex items-center justify-center p-6 bg-void/90 backdrop-blur-xl"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-charcoal w-full max-w-lg p-10 rounded-card border border-gold/30 shadow-gold group relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Efeito Visual - Scan Line (reutilizando do design) */}
                            <div className="scan-line pointer-events-none opacity-20" />
                            
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-white/40 hover:text-gold transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="relative z-10">
                                {!isSubmitted ? (
                                    <>
                                        <div className="mb-8">
                                            <span className="eyebrow">Acesso Exclusivo</span>
                                            <h2 className="font-display text-3xl text-white mb-2 italic">Apresentação Estratégica</h2>
                                            <p className="text-white/50 text-xs font-body leading-relaxed">
                                                Receba o dossiê completo com métricas de impacto e cotas de patrocínio 2026.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-[9px] uppercase tracking-[0.2em] text-gold/60 mb-2 font-bold font-mono">Nome Completo</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all text-xs font-body"
                                                    placeholder="Seu nome"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[9px] uppercase tracking-[0.2em] text-gold/60 mb-2 font-bold font-mono">Email Corporativo</label>
                                                    <input 
                                                        type="email" 
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all text-xs font-body"
                                                        placeholder="voce@empresa.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[9px] uppercase tracking-[0.2em] text-gold/60 mb-2 font-bold font-mono">Empresa</label>
                                                    <input 
                                                        type="text" 
                                                        name="company"
                                                        required
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all text-xs font-body"
                                                        placeholder="Sua empresa"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[9px] uppercase tracking-[0.2em] text-gold/60 mb-2 font-bold font-mono">Cargo</label>
                                                <input 
                                                    type="text" 
                                                    name="role"
                                                    required
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:bg-white/10 transition-all text-xs font-body"
                                                    placeholder="Ex: Diretor de Marketing"
                                                />
                                            </div>

                                            <button 
                                                type="submit"
                                                className="w-full btn-primary py-4 mt-4 shadow-gold-sm"
                                            >
                                                Liberar Download
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mb-6 animate-bounce">
                                            <span className="material-symbols-outlined text-gold text-3xl">check</span>
                                        </div>
                                        <h3 className="font-display text-2xl text-white mb-2">Acesso Liberado!</h3>
                                        <p className="text-white/50 text-xs font-body mb-8">
                                            O Mídia Kit foi enviado para o seu e-mail corporativo.
                                        </p>
                                        <div className="bg-void/40 p-4 border border-gold/10 rounded mb-4">
                                            <span className="text-[10px] text-gold/40 uppercase tracking-widest block mb-2">Seu arquivo:</span>
                                            <div className="flex items-center gap-3 text-gold text-sm font-mono">
                                                <span className="material-symbols-outlined">picture_as_pdf</span>
                                                TERRITORIOS_MIDIA_KIT_2026.pdf
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MidiaKitCTA;
