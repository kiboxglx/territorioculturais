import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Award, ShieldCheck, PieChart, Landmark, Info } from 'lucide-react';
import SponsorTier from './SponsorTier';
import ESGImpact from './ESGImpact';
import InvestorDataRoom from './InvestorDataRoom';

const DetailedEventModal = ({ isOpen, onClose, event }) => {
    const [activeTab, setActiveTab] = useState('geral');

    if (!event) return null;

    const tabs = [
        { id: 'geral', label: 'Geral', icon: <Info size={16} /> },
        { id: 'patrocinio', label: 'Patrocínio', icon: <Award size={16} /> },
        { id: 'esg', label: 'Impacto ESG', icon: <PieChart size={16} /> },
        { id: 'transparencia', label: 'Transparência', icon: <ShieldCheck size={16} /> },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-6xl h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/2">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Landmark className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h2 className="font-playfair text-xl md:text-2xl text-white line-clamp-1">{event.title}</h2>
                                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Detalhamento Executivo</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="flex border-b border-white/5 bg-black/20 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all border-b-2 whitespace-nowrap ${
                                        activeTab === tab.id
                                            ? 'text-primary border-primary bg-primary/5'
                                            : 'text-white/50 border-transparent hover:text-white/80 hover:bg-white/5'
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar bg-void/30">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === 'geral' && (
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-8">
                                            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                                                <img 
                                                    src={event.image} 
                                                    alt={event.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/0 to-transparent opacity-60" />
                                            </div>
                                            
                                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2 text-accent-gold mb-2">
                                                    <MapPin size={14} />
                                                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Local</span>
                                                </div>
                                                <p className="text-white text-sm font-medium">{event.location}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <span className="eyebrow mx-0! mb-4">Sobre o Evento</span>
                                                <h3 className="font-playfair text-3xl text-white mb-6">Visão Geral & <br /><i className="italic font-light">Objetivos</i></h3>
                                                <p className="text-white/60 font-manrope font-light leading-relaxed text-lg">
                                                    {event.bio}
                                                </p>
                                            </div>

                                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="p-2 bg-primary/20 rounded-lg">
                                                        <Landmark size={20} className="text-primary" />
                                                    </div>
                                                    <span className="text-white font-bold text-sm tracking-tight">Enquadramento Legal</span>
                                                </div>
                                                <p className="text-white/70 text-sm mb-4">
                                                    Este projeto está habilitado para captação via mecanismos de fomento:
                                                </p>
                                                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[11px] font-bold uppercase tracking-widest">
                                                    {event.lawInfo}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'patrocinio' && (
                                    <div className="modal-inner-section">
                                        <div className="text-center mb-12">
                                            <span className="eyebrow mx-auto">Oportunidade de Marca</span>
                                            <h3 className="font-playfair text-3xl md:text-4xl text-white">Ecossistema de Patrocínio</h3>
                                        </div>
                                        <SponsorTier isModal={true} />
                                        <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono text-center">
                                                * Valores referenciais sujeitos a adequação de escopo. Incentivos fiscais via Lei Rouanet (Art. 18/26) e ICMS Cultural/MG aplicáveis.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'esg' && (
                                    <div className="modal-inner-section">
                                        <div className="text-center mb-12">
                                            <span className="eyebrow mx-auto">Compromisso Territorial</span>
                                            <h3 className="font-playfair text-3xl md:text-4xl text-white">KPIs de Impacto ESG</h3>
                                        </div>
                                        <ESGImpact isModal={true} />
                                    </div>
                                )}

                                {activeTab === 'transparencia' && (
                                    <div className="modal-inner-section">
                                        <div className="text-center mb-12">
                                            <span className="eyebrow mx-auto">Investimento Seguro</span>
                                            <h3 className="font-playfair text-3xl md:text-4xl text-white">Investor Data Room</h3>
                                        </div>
                                        <InvestorDataRoom isModal={true} />
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10 bg-charcoal flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
                                Documento para fins informativos • Territórios Culturais 2025
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={onClose}
                                    className="btn-secondary px-8 py-3 rounded-full text-[10px]"
                                >
                                    Fechar
                                </button>
                                <button className="btn-primary px-8 py-3 rounded-full text-[10px]">
                                    Solicitar Media Kit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DetailedEventModal;
