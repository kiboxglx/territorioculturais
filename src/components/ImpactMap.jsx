import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImpactMap = ({ onCitySelect, selectedCity }) => {
    const [hoveredCity, setHoveredCity] = useState(null);

    const cities = [
        { id: 'patos-de-minas', name: 'Patos de Minas', x: 35, y: 55, labelAlign: 'right' },
        { id: 'grao-mogol', name: 'Grão Mogol', x: 60, y: 25, labelAlign: 'left' },
        { id: 'montes-claros', name: 'Montes Claros', x: 50, y: 35, labelAlign: 'left' },
        { id: 'porteirinha', name: 'Porteirinha', x: 62, y: 20, labelAlign: 'left' },
        { id: 'serro', name: 'Serro', x: 65, y: 65, labelAlign: 'right' },
        { id: 'ouro-branco', name: 'Ouro Branco', x: 55, y: 80, labelAlign: 'left' },
    ];

    return (
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#283618]/50 rounded-2xl border border-white/5 p-4 flex items-center justify-center overflow-hidden group/map">

            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h4 className="font-playfair text-white text-xl">Mapa de Impacto</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Territórios Ativos</p>
            </div>

            <div className="relative w-full max-w-sm aspect-[3/4]">
                {/* Simplified SVG Representation of MG State Shape */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    {/* Abstract MG Shape */}
                    <path
                        d="M 20,40 L 30,20 L 50,10 L 70,20 L 80,40 L 90,60 L 70,90 L 40,90 L 20,70 Z"
                        fill="#152222"
                        stroke="#334b4b"
                        strokeWidth="0.5"
                        className="transition-colors duration-500 hover:fill-[#283618]"
                    />

                    {/* Cities Points */}
                    {cities.map((city) => (
                        <g
                            key={city.id}
                            onClick={() => onCitySelect(city.id === selectedCity ? null : city.id)}
                            onMouseEnter={() => setHoveredCity(city.id)}
                            onMouseLeave={() => setHoveredCity(null)}
                            className="cursor-pointer transition-all duration-300"
                        >
                            {/* Ripple Effect for selected or hovered */}
                            {(selectedCity === city.id || hoveredCity === city.id) && (
                                <circle cx={city.x} cy={city.y} r="6" fill="rgba(17, 212, 212, 0.2)">
                                    <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            )}

                            {/* The Dot */}
                            <circle
                                cx={city.x}
                                cy={city.y}
                                r={selectedCity === city.id ? "2" : "1.5"}
                                fill={selectedCity === city.id ? "#FFD700" : "#11D4D4"}
                                className="transition-all duration-300"
                            />

                            {/* Tooltip / Label */}
                            <AnimatePresence>
                                {(hoveredCity === city.id || selectedCity === city.id) && (
                                    <foreignObject x={city.labelAlign === 'right' ? city.x + 4 : city.x - 44} y={city.y - 10} width="100" height="40">
                                        <motion.div
                                            initial={{ opacity: 0, x: city.labelAlign === 'right' ? -5 : 5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className={`bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-center ${city.labelAlign === 'right' ? 'text-left' : 'text-right'}`}
                                        >
                                            <span className="text-white text-[10px] uppercase font-bold whitespace-nowrap block">{city.name}</span>
                                            {selectedCity === city.id && <span className="text-[8px] text-primary block">Filtrado</span>}
                                        </motion.div>
                                    </foreignObject>
                                )}
                            </AnimatePresence>
                        </g>
                    ))}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <button
                        onClick={() => onCitySelect(null)}
                        className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border transition-colors ${selectedCity === null ? 'bg-primary text-charcoal border-primary font-bold' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'}`}
                    >
                        Ver Todos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImpactMap;
