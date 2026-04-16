import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EventCard from './EventCard';
import DetailedEventModal from './DetailedEventModal';
import dataRoom from '../data/data-room.json';

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollerRef = useRef(null);
    const { upcomingEvents } = dataRoom;

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const updateScrollState = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < maxScroll - 4);
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);
        return () => {
            el.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState]);

    const scrollByCard = (direction) => {
        const el = scrollerRef.current;
        if (!el) return;
        const firstCard = el.querySelector('[data-carousel-item]');
        const step = firstCard
            ? firstCard.getBoundingClientRect().width + 24
            : el.clientWidth * 0.8;
        el.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    return (
        <section id="agenda" className="py-24 bg-void border-t border-white/5 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="eyebrow mx-auto mb-4">Agenda Cultural 2025</span>
                    <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6">Próximos <i className="text-primary font-light underline decoration-primary/20">Eventos</i></h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-body text-sm md:text-base leading-relaxed">
                        Acompanhe nossos programas estruturantes que transformam territórios através da arte e do desenvolvimento integrado.
                    </p>
                </div>
                
                <div className="relative">
                    <div
                        ref={scrollerRef}
                        className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 -mx-8 px-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        role="region"
                        aria-label="Carrossel de próximos eventos"
                    >
                        {upcomingEvents && upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                data-carousel-item
                                className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-[45%] lg:w-[32%] xl:w-[28%]"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <EventCard event={event} onOpenModal={handleOpenModal} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating arrow buttons (desktop) */}
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canScrollLeft}
                        aria-label="Evento anterior"
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center h-14 w-14 rounded-full bg-charcoal/90 backdrop-blur-sm border border-gold/30 text-gold shadow-lg shadow-black/50 transition-all duration-300 hover:bg-gold hover:text-black hover:scale-110 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
                    >
                        <ChevronLeft className="h-6 w-6" strokeWidth={2} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={!canScrollRight}
                        aria-label="Próximo evento"
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center h-14 w-14 rounded-full bg-charcoal/90 backdrop-blur-sm border border-gold/30 text-gold shadow-lg shadow-black/50 transition-all duration-300 hover:bg-gold hover:text-black hover:scale-110 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void active:scale-95 disabled:opacity-0 disabled:pointer-events-none"
                    >
                        <ChevronRight className="h-6 w-6" strokeWidth={2} />
                    </button>
                </div>

                {/* Mobile controls + scroll hint */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canScrollLeft}
                        aria-label="Evento anterior"
                        className="md:hidden flex items-center justify-center h-11 w-11 rounded-full border border-gold/40 text-gold transition-all duration-200 hover:bg-gold hover:text-black active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                    </button>

                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono">
                        <span className="h-px w-6 bg-white/20" />
                        <span aria-hidden="true">arraste ou navegue</span>
                        <span className="h-px w-6 bg-white/20" />
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={!canScrollRight}
                        aria-label="Próximo evento"
                        className="md:hidden flex items-center justify-center h-11 w-11 rounded-full border border-gold/40 text-gold transition-all duration-200 hover:bg-gold hover:text-black active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-30 disabled:pointer-events-none"
                    >
                        <ChevronRight className="h-5 w-5" strokeWidth={2} />
                    </button>
                </div>

                {/* Optional Footer CTA */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono mb-6">
                        * Novos eventos são adicionados trimestralmente conforme captação e aprovação.
                    </p>
                </div>
            </div>

            {/* Modal for detail view */}
            <DetailedEventModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                event={selectedEvent} 
            />
        </section>
    );
};

export default UpcomingEvents;
