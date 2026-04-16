import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import DetailedEventModal from './DetailedEventModal';
import dataRoom from '../data/data-room.json';

const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { upcomingEvents } = dataRoom;

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                
                <div
                    className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 -mx-8 px-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    role="region"
                    aria-label="Carrossel de próximos eventos"
                >
                    {upcomingEvents && upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
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

                {/* Scroll hint */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono">
                    <span className="h-px w-8 bg-white/20" />
                    <span aria-hidden="true">← arraste para o lado →</span>
                    <span className="h-px w-8 bg-white/20" />
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
