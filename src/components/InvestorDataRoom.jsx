import React from 'react';

const InvestorDataRoom = ({ documents }) => {
    return (
        <div className="mt-16 bg-[#0F1C1C] rounded-2xl p-8 border border-white/10">

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

            {/* Documents Grid */}
            <div>
                <h4 className="font-playfair text-xl text-white mb-6">Documentação Disponível</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {documents && documents.map((doc, index) => (
                        <div
                            key={index}
                            onClick={() => doc.file ? window.open(doc.file, '_blank') : null}
                            className={`bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg flex flex-col justify-between group border border-transparent hover:border-primary/20 cursor-pointer ${doc.file ? '' : 'opacity-70 cursor-not-allowed'}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="material-symbols-outlined text-red-400 text-3xl group-hover:scale-110 transition-transform">picture_as_pdf</span>
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded bg-primary/5 mb-1">Verificado</span>
                                    {doc.file && <span className="material-symbols-outlined text-primary text-sm">download</span>}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-manrope font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">{doc.title}</h4>
                                <span className="text-white/30 text-xs font-light flex items-center gap-1">
                                    {doc.category} • {doc.date}
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
