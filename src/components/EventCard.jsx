import React from 'react';
import { MapPin, ArrowRight, Expand } from 'lucide-react';

const EventCard = ({ event, onOpenModal }) => {
    return (
        <div
            className="group relative bg-[#131F1F] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 shadow-lg shadow-black/40 h-full flex flex-col cursor-pointer"
            role="article"
        >
            {/* Image Section */}
            <div className="relative aspect-4/5 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#131F1F] via-[#131F1F]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#131F1F] to-transparent" />
                
                {/* Event Logo */}
                {event.logo && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                        <img
                            src={event.logo}
                            alt={`Logo ${event.title}`}
                            className="h-20 w-auto object-contain drop-shadow-lg"
                        />
                    </div>
                )}

                {/* Visual Accent */}
                <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand size={16} className="text-primary" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 grow flex flex-col justify-end -mt-32 relative z-10">
                <div className="mb-6">
                    <h3 className="font-playfair text-2xl md:text-3xl text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                        {event.title}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-white/60 mb-6">
                        <MapPin size={16} className="shrink-0 mt-0.5 text-accent-gold" aria-hidden="true" />
                        <span className="text-xs font-manrope font-light">{event.location}</span>
                    </div>
                </div>

                <div className="divider-gold opacity-10 mb-8" />

                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={() => onOpenModal(event)}
                        className="group/btn relative flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 px-6 py-4 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] transition-all"
                    >
                        <span>Saiba Mais</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-primary" />
                        <div className="absolute inset-0 rounded-xl bg-primary/5 scale-105 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                    
                    <div className="hidden group-hover:block transition-all animate-pulse">
                         <div className="p-2 bg-primary/20 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-sm">visibility</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
};

export default EventCard;
