import React, { useState } from 'react';
import { Calculator, DollarSign, PieChart } from 'lucide-react';

const IncentiveCalculator = () => {
    const [lucroReal, setLucroReal] = useState(1000000);
    const rouanetPercentage = 0.04;
    const deducao = lucroReal * rouanetPercentage;

    return (
        <section className="snap-start w-full min-h-screen flex justify-center items-center bg-[#152a2a]">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                <div className="md:w-1/2">
                    <span className="text-accent-teal text-sm font-bold tracking-widest uppercase mb-2 block">Simule seu Impacto</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
                        Transforme Imposto em <span className="text-accent-gold">Legado Cultural</span>
                    </h2>
                    <p className="font-manrope text-gray-300 text-lg mb-8 leading-relaxed">
                        Empresas tributadas pelo Lucro Real podem direcionar até 4% do IRPJ para projetos culturais aprovados, com 100% de abatimento fiscal. Você escolhe onde seu imposto é aplicado.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Calculator size={20} className="text-accent-teal" />
                            <span>Sem Custo Extra</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <DollarSign size={20} className="text-accent-teal" />
                            <span>Retorno de Marca</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-manrope mb-2">Lucro Real Estimado (Anual)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-gold font-bold">R$</span>
                            <input
                                type="number"
                                value={lucroReal}
                                onChange={(e) => setLucroReal(Number(e.target.value))}
                                className="w-full bg-[#102222] border border-white/20 rounded-lg py-4 pl-12 pr-4 text-white text-xl font-manrope focus:outline-none focus:border-accent-teal transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-[#102222]/50 rounded-lg">
                            <span className="text-gray-400 text-sm">Limite de Incentivo (4%)</span>
                            <span className="text-white text-lg font-bold">R$ {(lucroReal * 0.04).toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-accent-gold/10 border border-accent-gold/20 rounded-lg">
                            <span className="text-accent-gold text-sm font-bold">Investimento Líquido</span>
                            <span className="text-accent-gold text-lg font-bold">R$ 0,00</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent-teal/20 rounded-full">
                                <PieChart className="text-accent-teal" size={24} />
                            </div>
                            <div>
                                <p className="text-white text-sm">Seu imposto financia:</p>
                                <p className="text-gray-400 text-xs">Cinema, Educação e Turismo Local</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default IncentiveCalculator;
