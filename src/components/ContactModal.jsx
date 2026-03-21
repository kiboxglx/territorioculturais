import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose, triggerRef }) => {
    const [step, setStep] = useState(1);
    const [persona, setPersona] = useState(null);
    const [errors, setErrors] = useState({});
    const closeBtnRef = useRef(null);
    const firstInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        city: '',
        budget: ''
    });

    // Foca o botão fechar ao abrir
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => closeBtnRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Foca primeiro input ao avançar para step 2
    useEffect(() => {
        if (step === 2) {
            setTimeout(() => firstInputRef.current?.focus(), 100);
        }
    }, [step]);

    // Fecha com Escape
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
        if (isOpen) document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpa erro ao digitar
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    };

    const handlePersonaSelect = (type) => {
        setPersona(type);
        setStep(2);
    };

    // Validação manual (noValidate ativo)
    const validate = () => {
        const errs = {};
        if (!formData.name.trim())  errs.name  = 'Nome é obrigatório.';
        if (!formData.email.trim()) errs.email = 'E-mail é obrigatório.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'E-mail inválido.';
        if (!formData.phone.trim()) errs.phone = 'Telefone é obrigatório.';
        if (persona === 'public'  && !formData.city.trim())    errs.city    = 'Município é obrigatório.';
        if (persona === 'private' && !formData.company.trim()) errs.company = 'Empresa é obrigatória.';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            // Foca o primeiro campo com erro
            const firstErrName = Object.keys(errs)[0];
            document.getElementById(`modal-${firstErrName}`)?.focus();
            return;
        }
        console.log('Form submitted for', persona, ':', formData);
        alert('Obrigado! Nossa equipe entrará em contato em breve.');
        handleClose();
    };

    const handleClose = () => {
        setStep(1);
        setPersona(null);
        setErrors({});
        setFormData({ name: '', company: '', email: '', phone: '', interest: '', city: '', budget: '' });
        onClose();
        // Retorna foco ao elemento que abriu o modal (WCAG 2.4.3)
        setTimeout(() => triggerRef?.current?.focus(), 50);
    };

    if (!isOpen) return null;

    /* Classe base para inputs — inclui focus ring visível (sem outline-none) */
    const inputCls = "w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm font-body"
        + " focus:border-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-[border-color,box-shadow]";

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-void/90 backdrop-blur-md"
                onClick={handleClose}
                role="presentation"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-charcoal w-full max-w-2xl rounded-card border border-gold/20 shadow-gold overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Formulário de contato — Territórios Culturais"
                >
                    {/* Botão fechar com aria-label */}
                    <button
                        ref={closeBtnRef}
                        onClick={handleClose}
                        aria-label="Fechar modal de contato"
                        className="absolute top-6 right-6 text-white/30 hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">close</span>
                    </button>

                    <div className="grid md:grid-cols-5 min-h-[500px]">
                        {/* Sidebar */}
                        <div className="md:col-span-2 bg-void/40 p-10 flex flex-col justify-between border-r border-white/5 relative">
                            <div className="scan-line pointer-events-none opacity-10" aria-hidden="true" />
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
                                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span>
                                    ANCINE Nº 63126
                                </div>
                                <div className="flex items-center gap-3 text-gold/60 text-[10px] font-mono tracking-widest">
                                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">pin_drop</span>
                                    PATOS DE MINAS · MG
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div
                            className="md:col-span-3 p-10 flex flex-col justify-center overflow-y-auto"
                            style={{ overscrollBehavior: 'contain' }}
                        >
                            {step === 1 ? (
                                <div className="space-y-6">
                                    <h3 className="font-display text-xl text-white mb-2">Para começar:</h3>
                                    <p className="text-white/50 text-xs mb-8">Como podemos te ajudar hoje?</p>

                                    <button
                                        onClick={() => handlePersonaSelect('public')}
                                        className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-card hover:border-gold/40 hover:bg-white/10 transition-[background,border-color] group text-left focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-gold group-hover:scale-110 transition-transform" aria-hidden="true">location_city</span>
                                            <div>
                                                <span className="block text-white font-bold text-xs uppercase tracking-widest">Sou Gestão Pública</span>
                                                <span className="block text-white/40 text-[10px] font-body mt-1">Secretarias de Cultura e Prefeituras</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gold/40 group-hover:text-gold transition-colors" aria-hidden="true">arrow_forward</span>
                                    </button>

                                    <button
                                        onClick={() => handlePersonaSelect('private')}
                                        className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-card hover:border-gold/40 hover:bg-white/10 transition-[background,border-color] group text-left focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-gold group-hover:scale-110 transition-transform" aria-hidden="true">business_center</span>
                                            <div>
                                                <span className="block text-white font-bold text-xs uppercase tracking-widest">Sou Empresa Parceira</span>
                                                <span className="block text-white/40 text-[10px] font-body mt-1">Patrocínio, ESG e Investimento Fiscal</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-gold/40 group-hover:text-gold transition-colors" aria-hidden="true">arrow_forward</span>
                                    </button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-6"
                                >
                                    <button
                                        onClick={() => setStep(1)}
                                        aria-label="Voltar para seleção de perfil"
                                        className="flex items-center gap-2 text-[10px] text-white/40 hover:text-gold transition-colors uppercase tracking-widest mb-6 font-mono focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
                                    >
                                        <span className="material-symbols-outlined text-xs" aria-hidden="true">arrow_back</span>
                                        Voltar
                                    </button>

                                    <h3 className="font-display text-xl text-white mb-8">
                                        Solicitar {persona === 'public' ? 'Diagnóstico Territorial' : 'Apresentação Executiva'}
                                    </h3>

                                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                        {/* Nome */}
                                        <div>
                                            <label htmlFor="modal-name" className="sr-only">Nome Completo</label>
                                            <input
                                                ref={firstInputRef}
                                                id="modal-name"
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Nome Completo…"
                                                autoComplete="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                aria-invalid={!!errors.name}
                                                aria-describedby={errors.name ? 'err-name' : undefined}
                                                className={inputCls + (errors.name ? ' border-red-500/60' : '')}
                                            />
                                            {errors.name && <p id="err-name" role="alert" className="text-red-400 text-[10px] mt-1 pl-1">{errors.name}</p>}
                                        </div>

                                        {/* Email + Tel */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="modal-email" className="sr-only">E-mail corporativo</label>
                                                <input
                                                    id="modal-email"
                                                    required
                                                    type="email"
                                                    name="email"
                                                    placeholder="E-mail corporativo…"
                                                    autoComplete="email"
                                                    spellCheck={false}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.email}
                                                    aria-describedby={errors.email ? 'err-email' : undefined}
                                                    className={inputCls + (errors.email ? ' border-red-500/60' : '')}
                                                />
                                                {errors.email && <p id="err-email" role="alert" className="text-red-400 text-[10px] mt-1 pl-1">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="modal-phone" className="sr-only">Telefone</label>
                                                <input
                                                    id="modal-phone"
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="(00) 00000-0000…"
                                                    autoComplete="tel"
                                                    inputMode="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    aria-invalid={!!errors.phone}
                                                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                                                    className={inputCls + (errors.phone ? ' border-red-500/60' : '')}
                                                />
                                                {errors.phone && <p id="err-phone" role="alert" className="text-red-400 text-[10px] mt-1 pl-1">{errors.phone}</p>}
                                            </div>
                                        </div>

                                        {/* Campos condicionais por persona */}
                                        {persona === 'public' ? (
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="modal-city" className="sr-only">Município / UF</label>
                                                    <input
                                                        id="modal-city"
                                                        required
                                                        type="text"
                                                        name="city"
                                                        placeholder="Município / UF…"
                                                        autoComplete="address-level2"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        aria-invalid={!!errors.city}
                                                        aria-describedby={errors.city ? 'err-city' : undefined}
                                                        className={inputCls + (errors.city ? ' border-red-500/60' : '')}
                                                    />
                                                    {errors.city && <p id="err-city" role="alert" className="text-red-400 text-[10px] mt-1 pl-1">{errors.city}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="modal-interest-pub" className="sr-only">Interesse principal</label>
                                                    <select
                                                        id="modal-interest-pub"
                                                        name="interest"
                                                        value={formData.interest}
                                                        onChange={handleChange}
                                                        className={inputCls + " text-white/70 appearance-none"}
                                                    >
                                                        <option value="">Interesse Principal</option>
                                                        <option value="diagnostico">Diagnóstico Cultural</option>
                                                        <option value="licenciamento">Licenciamento de Projetos</option>
                                                        <option value="sistema">Sistema de Governança</option>
                                                    </select>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="modal-company" className="sr-only">Empresa</label>
                                                    <input
                                                        id="modal-company"
                                                        required
                                                        type="text"
                                                        name="company"
                                                        placeholder="Empresa…"
                                                        autoComplete="organization"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        aria-invalid={!!errors.company}
                                                        aria-describedby={errors.company ? 'err-company' : undefined}
                                                        className={inputCls + (errors.company ? ' border-red-500/60' : '')}
                                                    />
                                                    {errors.company && <p id="err-company" role="alert" className="text-red-400 text-[10px] mt-1 pl-1">{errors.company}</p>}
                                                </div>
                                                <div>
                                                    <label htmlFor="modal-interest-priv" className="sr-only">Tipo de aporte</label>
                                                    <select
                                                        id="modal-interest-priv"
                                                        name="interest"
                                                        value={formData.interest}
                                                        onChange={handleChange}
                                                        className={inputCls + " text-white/70 appearance-none"}
                                                    >
                                                        <option value="">Tipo de Aporte</option>
                                                        <option value="rouanet">Lei Rouanet</option>
                                                        <option value="direto">Investimento Direto</option>
                                                        <option value="esg">Cotas ESG</option>
                                                    </select>
                                                </div>
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
