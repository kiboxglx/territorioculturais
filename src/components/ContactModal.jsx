import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Segment selection, 2: Form
    const [persona, setPersona] = useState(null); // 'public' | 'private'

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        city: '', // exclusive for public
        budget: '' // exclusive for private
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePersonaSelect = (type) => {
        setPersona(type);
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted for', persona, ':', formData);
        alert('Obrigado! Nossa equipe entrará em contato em breve.');
        handleClose();
    };

    const handleClose = () => {
        setStep(1);
        setPersona(null);
        setFormData({ name: '', company: '', email: '', phone: '', interest: '', city: '', budget: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-void/90 backdrop-blur-md"
                onClick={handleClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-charcoal w-full max-w-2xl rounded-card border border-gold/20 shadow-gold overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={handleClose} className="absolute top-6 right-6 text-white/30 hover:text-gold transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="grid md:grid-cols-5 min-h-[500px]">
                        {/* Sidebar */}
                        <div className="md:col-span-2 bg-void/40 p-10 flex flex-col justify-between border-r border-white/5 relative">
                            <div className="scan-line pointer-events-none opacity-10" />
                            <div>
                                <span className="eyebrow">Conexão Digital</span>
                                <h2 className="font-display text-4xl text-white mb-6 italic leading-tight">
                                    Vamos co-criar o futuro?
                                </h2>
                                <p className="text-white/40 text-xs font-body leading-relaxed mb-8">
                                    Escolha o canal que melhor se adapta à sua necessidade institucional.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gold/60 text-[10px] font-mono tracking-widest">
                                    <span className="material-symbols-outlined text-[16px]">verified</span>
                                    ANCINE Nº 63126
                                </div>
                                <div className="flex items-center gap-3 text-gold/60 text-[10px] font-mono tracking-widest">
                                    <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                                    PATOS DE MINAS · MG
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3 p-10 flex flex-col justify-center">
                            {step === 1 ? (
                                <div className="space-y-6">
                                    <h3 className="font-display text-xl text-white mb-2">Para começar:</h3>
                                    <p className="text-white/50 text-xs mb-8">Como podemos te ajudar hoje?</p>
                                    
                                    <button 
                                        onClick={() => handlePersonaSelect('public')}
                                        className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-card hover:border-gold/40 hover:bg-white/10 transition-all group text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-gold group-hover:scale-110 transition-transform">location_city</span>
                                            <div>
                                                <span className="block text-white font-bold text-xs uppercase tracking-widest">Sou Gestão Pública</span>
                                                <span className="block text-white/40 text-[10px] font-body mt-1">Secretarias de Cultura e Prefeituras</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gold/40 group-hover:text-gold transition-colors">arrow_forward</span>
                                    </button>

                                    <button 
                                        onClick={() => handlePersonaSelect('private')}
                                        className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-card hover:border-gold/40 hover:bg-white/10 transition-all group text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-gold group-hover:scale-110 transition-transform">business_center</span>
                                            <div>
                                                <span className="block text-white font-bold text-xs uppercase tracking-widest">Sou Empresa Parceira</span>
                                                <span className="block text-white/40 text-[10px] font-body mt-1">Patrocínio, ESG e Investimento Fiscal</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gold/40 group-hover:text-gold transition-colors">arrow_forward</span>
                                    </button>
                                </div>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <button onClick={() => setStep(1)} className="flex items-center gap-2 text-[10px] text-white/40 hover:text-gold transition-colors uppercase tracking-widest mb-6 font-mono">
                                        <span className="material-symbols-outlined text-xs">arrow_back</span>
                                        Voltar
                                    </button>

                                    <h3 className="font-display text-xl text-white mb-8">
                                        Solicitar {persona === 'public' ? 'Diagnóstico Territorial' : 'Apresentação Executiva'}
                                    </h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input 
                                                required
                                                type="text" 
                                                name="name" 
                                                placeholder="Nome Completo"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold/50 focus:outline-none transition-all text-sm font-body"
                                            />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <input 
                                                required
                                                type="email" 
                                                name="email" 
                                                placeholder="Email Corporativo"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold/50 focus:outline-none transition-all text-sm font-body"
                                            />
                                            <input 
                                                required
                                                type="tel" 
                                                name="phone" 
                                                placeholder="Telefone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold/50 focus:outline-none transition-all text-sm font-body"
                                            />
                                        </div>

                                        {persona === 'public' ? (
                                            <div className="grid grid-cols-2 gap-4">
                                                <input 
                                                    required
                                                    type="text" 
                                                    name="city" 
                                                    placeholder="Município / UF"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold/50 focus:outline-none transition-all text-sm font-body"
                                                />
                                                <select 
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white/70 focus:border-gold/50 focus:outline-none transition-all text-sm font-body appearance-none"
                                                >
                                                    <option value="">Interesse Principal</option>
                                                    <option value="diagnostico">Diagnóstico Cultural</option>
                                                    <option value="licenciamento">Licenciamento de Projetos</option>
                                                    <option value="sistema">Sistema de Governança</option>
                                                </select>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-4">
                                                <input 
                                                    required
                                                    type="text" 
                                                    name="company" 
                                                    placeholder="Empresa"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-gold/50 focus:outline-none transition-all text-sm font-body"
                                                />
                                                <select 
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white/70 focus:border-gold/50 focus:outline-none transition-all text-sm font-body appearance-none"
                                                >
                                                    <option value="">Tipo de Aporte</option>
                                                    <option value="rouanet">Lei Rouanet</option>
                                                    <option value="direto">Investimento Direto</option>
                                                    <option value="esg">Cotas ESG</option>
                                                </select>
                                            </div>
                                        )}

                                        <button 
                                            type="submit"
                                            className="w-full btn-primary py-4 mt-8 shadow-gold-sm"
                                        >
                                            Confirmar Solicitação
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactModal;
