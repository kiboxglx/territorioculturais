import React from 'react';
import dataRoom from '../data/data-room.json';

const InvestorDataRoom = () => {
    return (
        <div id="investor-data-room" className="mt-16 bg-[#0F1C1C] rounded-2xl p-8 border border-white/10 scroll-mt-24">

            {/* Governance Text Section */}
            <div className="mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                    </span>
                    <div>
                        <h3 className="font-playfair text-2xl text-white">Governança e Segurança Institucional</h3>
                        <p className="text-white/40 text-xs uppercase tracking-widest">Compliance & Transparência</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-white/70 font-light text-sm leading-relaxed">
                            A <strong className="text-white font-bold">Territórios Culturais</strong> opera sob um rigoroso modelo de compliance para assegurar a integridade do investimento e a previsibilidade fiscal.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                                <span className="material-symbols-outlined text-accent-gold text-lg shrink-0">check_circle</span>
                                <span><strong className="text-white">Registro ANCINE Ativo:</strong> Empresa devidamente habilitada para produção e gestão de recursos audiovisuais incentivados.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                                <span className="material-symbols-outlined text-accent-gold text-lg shrink-0">check_circle</span>
                                <span><strong className="text-white">Conformidade Regulatória:</strong> Gestão em total alinhamento com a Lei Rouanet (Artigo 18/26) e LEIC/MG.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                                <span className="material-symbols-outlined text-accent-gold text-lg shrink-0">check_circle</span>
                                <span><strong className="text-white">Auditoria de Prestação de Contas:</strong> Histórico comprovado de excelência na execução de projetos via LPG e PNAB, garantindo segurança na destinação tributária.</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                                <span className="material-symbols-outlined text-accent-gold text-lg shrink-0">check_circle</span>
                                <span><strong className="text-white">Planejamento Financeiro Estruturado:</strong> Utilização de contas captadoras vinculadas e rastreabilidade total de aportes.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Projects Table */}
            <div className="mb-12">
                <h4 className="font-playfair text-xl text-white mb-6">Janela de Oportunidade: Projetos Aprovados</h4>
                <div className="overflow-x-auto border border-white/5 rounded-xl">
                    <table className="w-full text-left font-manrope text-xs">
                        <thead>
                            <tr className="bg-white/5 text-white/40 border-b border-white/5 uppercase tracking-widest">
                                <th className="px-6 py-4 font-bold">Projeto</th>
                                <th className="px-6 py-4 font-bold">PRONAC / Registro</th>
                                <th className="px-6 py-4 font-bold">Valor Aprovado</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {dataRoom.approvedProjects.map((proj) => (
                                <tr key={proj.id} className="hover:bg-white/2 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-white">{proj.name}</td>
                                    <td className="px-6 py-4 font-mono text-accent-gold">{proj.pronac}</td>
                                    <td className="px-6 py-4 text-white/80">{proj.approvedValue}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-tighter ${
                                            proj.status.includes('Aberto') ? 'bg-primary/20 text-primary' : 
                                            proj.status.includes('Aprovação') ? 'bg-gold/20 text-gold' : 'bg-white/10 text-white/60'
                                        }`}>
                                            {proj.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Documents Grid */}
            <div>
                <h4 className="font-playfair text-xl text-white mb-6">Dossiê de Governança</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dataRoom.governanceDocs.map((doc, index) => (
                        <div
                            key={index}
                            onClick={() => doc.link !== '#' ? window.open(doc.link, '_blank') : null}
                            className={`bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg flex flex-col justify-between group border border-transparent hover:border-primary/20 cursor-pointer ${doc.link !== '#' ? '' : 'opacity-70 cursor-not-allowed'}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="material-symbols-outlined text-red-100/40 text-3xl group-hover:scale-110 transition-transform">picture_as_pdf</span>
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded bg-primary/5 mb-1 text-center">Auditado</span>
                                    {doc.link !== '#' && <span className="material-symbols-outlined text-primary text-sm">download</span>}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-manrope font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">{doc.title}</h4>
                                <span className="text-white/30 text-[10px] uppercase font-bold flex items-center gap-1">
                                    {doc.date} • {doc.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center border-t border-white/5 pt-8">
                <button className="text-white/50 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto group">
                    <span className="material-symbols-outlined text-sm group-hover:text-accent-gold transition-colors">lock</span>
                    Acessar Área Restrita do Investidor
                </button>
            </div>
        </div>
    );
};

export default InvestorDataRoom;
