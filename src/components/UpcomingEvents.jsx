import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
    return (
        <section className="py-24 bg-white/5 border-t border-white/5 snap-section">
            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Agenda</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-white">Próximos Eventos</h2>
                </div>
                
                <div className="max-w-4xl mx-auto bg-charcoal border border-white/10 rounded-2xl p-12 text-center">
                    <span className="material-symbols-outlined text-white/20 text-6xl mb-6">calendar_month</span>
                    <h3 className="font-playfair text-2xl text-white mb-4">Calendário em Atualização</h3>
                    <p className="text-white/60 font-manrope font-light text-sm max-w-md mx-auto">
                        Acompanhe nossos canais para novidades sobre os próximos fóruns, capacitações e eventos estruturantes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
