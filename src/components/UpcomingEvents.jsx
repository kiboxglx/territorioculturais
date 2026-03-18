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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents && upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <EventCard event={event} onOpenModal={handleOpenModal} />
                        </motion.div>
                    ))}
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
