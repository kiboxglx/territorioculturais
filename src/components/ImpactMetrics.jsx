import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

export const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-12 border-t border-b border-white/10 my-16 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">

            {/* Empregos */}
            <div className="text-center group px-8 py-6 hover:bg-white/5 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                    <Briefcase
                        size={36}
                        strokeWidth={1.5}
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                    />
                </div>
                <span className="stat-number block mb-2">
                    <AnimatedCounter value={metrics.jobs} />
                </span>
                <span className="stat-label group-hover:text-primary transition-colors duration-300">
                    Empregos Gerados
                </span>
            </div>

            {/* Público */}
            <div className="text-center group px-8 py-6 hover:bg-white/5 transition-colors duration-300 border-t md:border-t-0 md:border-l md:border-r border-white/10">
                <div className="flex justify-center mb-4">
                    <Users
                        size={36}
                        strokeWidth={1.5}
                        className="text-accent-gold group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                    />
                </div>
                <span className="stat-number block mb-2">
                    <AnimatedCounter value={metrics.audience} suffix="+" />
                </span>
                <span className="stat-label group-hover:text-accent-gold transition-colors duration-300">
                    Público Impactado
                </span>
            </div>

            {/* Retorno Social */}
            <div className="text-center group px-8 py-6 hover:bg-white/5 transition-colors duration-300 border-t md:border-t-0 border-white/10">
                <div className="flex justify-center mb-4">
                    <TrendingUp
                        size={36}
                        strokeWidth={1.5}
                        className="text-accent-red group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                    />
                </div>
                <span className="stat-number block mb-2">
                    {metrics.socialReturn}
                </span>
                <span className="stat-label group-hover:text-accent-red transition-colors duration-300">
                    Retorno Social (SROI)
                </span>
            </div>
        </div>
    );
};

export default ImpactMetrics;
