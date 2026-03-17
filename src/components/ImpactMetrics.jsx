import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Check if value is a number, if not, parse it or handle gracefully
    const numericValue = typeof value === 'number' ? value : parseInt(value) || 0;

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            const controls = animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, numericValue, count]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

const ImpactMetrics = ({ metrics }) => {
    if (!metrics) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-white/10 my-16 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center group">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform block mx-auto">work</span>
                <span className="block font-playfair text-4xl md:text-5xl text-white font-bold mb-2">
                    <AnimatedCounter value={metrics.jobs} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">Empregos Gerados</span>
            </div>

            <div className="text-center group border-t md:border-t-0 md:border-l md:border-r border-white/10 pt-8 md:pt-0">
                <span className="material-symbols-outlined text-4xl text-accent-gold mb-4 group-hover:scale-110 transition-transform block mx-auto">groups</span>
                <span className="block font-playfair text-4xl md:text-5xl text-white font-bold mb-2">
                    <AnimatedCounter value={metrics.audience} suffix="+" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-accent-gold transition-colors">Público Impactado</span>
            </div>

            <div className="text-center group border-t md:border-t-0 pt-8 md:pt-0">
                <span className="material-symbols-outlined text-4xl text-accent-red mb-4 group-hover:scale-110 transition-transform block mx-auto">monitoring</span>
                <span className="block font-playfair text-4xl md:text-5xl text-white font-bold mb-2">
                    {metrics.socialReturn}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-accent-red transition-colors">Retorno Social (SROI)</span>
            </div>
        </div>
    );
};

export default ImpactMetrics;
