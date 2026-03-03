import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        investmentVolume: '',
        investmentType: 'Rouanet' // Default
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send data to backend
        onClose();
        alert('Obrigado! Entraremos em contato em breve com a apresentação executiva. :)');
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-[#283618] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="grid md:grid-cols-2">
                        {/* Left Side: Brand & Context */}
                        <div className="bg-primary/10 p-8 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-gold to-accent-red"></div>
                            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                                Co-crie o Futuro
                            </h2>
                            <p className="text-white/70 font-light font-manrope text-sm leading-relaxed mb-8">
                                Invista em projetos auditados, com alto potencial de retorno de marca e impacto social mensurável.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/60 text-xs">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    <span>Governança & Compliance</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/60 text-xs">
                                    <span className="material-symbols-outlined text-accent-gold">trending_up</span>
                                    <span>Retorno de Imagem</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/60 text-xs">
                                    <span className="material-symbols-outlined text-accent-red">public</span>
                                    <span>Impacto Regional</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Nome Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Empresa / Organização</label>
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope"
                                        placeholder="Nome da sua empresa"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Email Corporativo</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope"
                                            placeholder="voce@empresa.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Telefone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope"
                                            placeholder="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Volume de Aporte (R$)</label>
                                        <input
                                            type="text"
                                            name="investmentVolume"
                                            value={formData.investmentVolume}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope"
                                            placeholder="Aprox. 500k, 1M..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Interesse</label>
                                        <select
                                            name="investmentType"
                                            value={formData.investmentType}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-colors text-sm font-manrope appearance-none"
                                        >
                                            <option value="Rouanet">Lei Rouanet</option>
                                            <option value="LEIC">LEIC (Estadual)</option>
                                            <option value="Direto">Investimento Direto</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-charcoal font-bold py-3 mt-4 rounded uppercase tracking-widest text-xs hover:bg-white transition-colors font-manrope shadow-[0_0_15px_rgba(17,212,212,0.2)]"
                                >
                                    Solicitar Apresentação Executiva
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
