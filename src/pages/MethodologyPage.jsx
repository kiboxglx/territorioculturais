import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const pilares = [
    {
        id: 1,
        title: "Diagnóstico e Mapeamento Territorial",
        desc: "Levantamento técnico das vocações culturais, agentes, equipamentos, cadeias produtivas e marcos normativos existentes. Esse diagnóstico fundamenta decisões estratégicas e evita investimentos desconectados da realidade local.",
        resultado: "Planejamento baseado em dados e reconhecimento da identidade territorial."
    },
    {
        id: 2,
        title: "Estruturação Normativa e Institucional",
        desc: "Organização ou regulamentação do Sistema Municipal de Cultura, conselhos, fundos, legislações, decretos e fluxos administrativos. Define responsabilidades, competências e procedimentos.",
        resultado: "Segurança jurídica e organização administrativa da política cultural."
    },
    {
        id: 3,
        title: "Planejamento Estratégico e Programação Permanente",
        desc: "Elaboração de planos, programas, calendários estruturantes e metas de médio e longo prazo. A cultura deixa de operar por eventos isolados e passa a ter lógica sistêmica.",
        resultado: "Continuidade e previsibilidade das ações culturais."
    },
    {
        id: 4,
        title: "Estruturação de Financiamento e Fomento",
        desc: "Implantação e organização de mecanismos de financiamento: editais municipais, leis de incentivo, ISSQN cultural, transferências governamentais e captação estruturada.",
        resultado: "Sustentabilidade financeira e autonomia progressiva do município."
    },
    {
        id: 5,
        title: "Formação Técnica e Capacitação",
        desc: "Treinamento de gestores públicos, conselheiros e agentes culturais para operar recursos, elaborar projetos e prestar contas com segurança.",
        resultado: "Capacidade local permanente de execução."
    },
    {
        id: 6,
        title: "Integração Intersetorial",
        desc: "Conexão da cultura com turismo, educação, patrimônio, economia criativa e desenvolvimento regional.",
        resultado: "Cultura como vetor econômico e social do território."
    },
    {
        id: 7,
        title: "Monitoramento, Avaliação e Atualização",
        desc: "Acompanhamento contínuo dos programas implantados, atualização normativa e ajustes estratégicos por meio do Observatório Territórios Culturais.",
        resultado: "Política pública viva, adaptável e mensurável."
    }
];

const abrangencia = [
    { title: "Prefeituras Municipais", desc: "Municípios que desejam implantar ou fortalecer seu Sistema Municipal de Cultura, organizar gestão e estruturar mecanismos de fomento." },
    { title: "Secretarias e Departamentos", desc: "Gestões que precisam organizar fluxos administrativos, regulamentações, execução de recursos e planejamento estratégico." },
    { title: "Governos Estaduais", desc: "Programas de regionalização, fortalecimento das cadeias produtivas e integração entre cultura e desenvolvimento econômico." },
    { title: "Consórcios Intermunicipais", desc: "Estruturação cultural compartilhada entre municípios, criação de circuitos e otimização de recursos públicos." },
    { title: "Instituições Educacionais", desc: "Projetos de extensão cultural, programas formativos e integração entre cultura e território." }
];

const solucoes = [
    "Cultura limitada a eventos isolados e sem continuidade",
    "Ausência de regulamentação e organização administrativa",
    "Dependência exclusiva de editais externos",
    "Dificuldades na execução e prestação de contas",
    "Descontinuidade a cada mudança de gestão",
    "Falta de integração entre cultura e desenvolvimento econômico",
    "Ausência de diagnóstico territorial estruturado"
];

const etapasImplantacao = [
    { num: 1, title: "Diagnóstico e Planejamento Inicial", desc: "Levantamento técnico, análise normativa, escuta institucional e definição do plano de implantação. Compreender a realidade administrativa e estruturar um plano adequado." },
    { num: 2, title: "Organização Normativa e Administrativa", desc: "Regulamentação de instrumentos legais, organização de fluxos internos, padronização documental e definição de responsabilidades. Garantir segurança jurídica." },
    { num: 3, title: "Estruturação dos Programas", desc: "Implantação de editais, regulamentação de incentivos, transferências governamentais e organização do fundo municipal. Sustentabilidade financeira estruturada." },
    { num: 4, title: "Capacitação e Transferência", desc: "Treinamento da equipe local para que o município opere o sistema com autonomia técnica. Não gerar dependência externa, mas capacidade instalada." },
    { num: 5, title: "Monitoramento e Atualização", desc: "Acompanhamento técnico, ajustes normativos e avaliação de impacto pelo Observatório. Manter o sistema ativo, atualizado e eficiente." }
];

const MethodologyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal overflow-hidden">
            <Helmet>
                <title>A Metodologia MATC | Territórios Culturais</title>
                <meta name="description" content="Conheça a Metodologia de Autonomia Territorial Cultural — MATC. Sistema estruturante de implantação, organização e permanência da política cultural." />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-5xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6 block"
                        >
                            Inteligência Territorial
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-12 leading-tight"
                        >
                            Metodologia de Autonomia <br />
                            <span className="italic text-primary font-light">Territorial Cultural</span> <span className="text-4xl md:text-6xl">— MATC</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Intro MATC — texto removido da Home */}
            <section className="py-16 border-b border-white/5">
                <div className="container mx-auto px-8">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-xl text-white font-medium font-manrope leading-relaxed">
                            Sistema estruturante de implantação, organização e permanência da política cultural municipal.
                        </p>
                        <p className="text-base text-white/70 font-light font-manrope leading-relaxed">
                            A MATC é uma metodologia aplicada de estruturação da política pública de cultura, desenvolvida para organizar administrativamente o setor cultural dentro do município, criar capacidade permanente de gestão e integrar cultura ao desenvolvimento territorial.
                        </p>
                        <p className="text-base text-white/80 font-light font-manrope leading-relaxed border-l-2 border-primary/50 pl-4 italic">
                            Ela transforma ações isoladas em sistema contínuo, garantindo previsibilidade, eficiência administrativa e fortalecimento dos agentes culturais locais.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Pilares de Sustentação */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="container mx-auto px-8">
                    <div className="max-w-3xl mb-16">
                        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">01 / Pilares de Sustentação</span>
                        <h2 className="font-playfair text-4xl md:text-5xl mb-6">A base técnica que organiza a política cultural.</h2>
                        <p className="text-white/70 font-light text-lg leading-relaxed">Os Pilares de Sustentação constituem a base técnica que organiza, implementa e consolida a política cultural como sistema permanente dentro do município. Eles garantem que a cultura opere com segurança administrativa, planejamento estruturado e continuidade institucional.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pilares.map((pilar, idx) => (
                            <motion.div 
                                key={pilar.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-charcoal border border-white/5 p-8 rounded-3xl hover:border-primary/50 transition-colors flex flex-col h-full group"
                            >
                                <span className="text-6xl font-playfair text-primary/10 group-hover:text-primary transition-colors mb-6 block leading-none">0{pilar.id}</span>
                                <h3 className="font-playfair text-2xl mb-4 text-white line-clamp-2">{pilar.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed mb-8 grow">{pilar.desc}</p>
                                
                                <div className="border-t border-white/10 pt-6 mt-auto">
                                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">Resultado</span>
                                    <p className="text-xs font-medium text-white/90">{pilar.resultado}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 md:p-12 bg-primary/10 rounded-3xl border border-primary/20 max-w-4xl mx-auto text-center">
                        <h3 className="font-playfair text-2xl mb-4">Conclusão dos Pilares</h3>
                        <p className="text-white/80 font-light leading-relaxed">Os Pilares garantem que a política cultural municipal não dependa exclusivamente de vontade política momentânea, mas esteja organizada como estrutura administrativa permanente. <strong className="text-primary font-bold block mt-4">A cultura passa a funcionar como infraestrutura pública de desenvolvimento territorial.</strong></p>
                    </div>
                </div>
            </section>

            {/* Section 2: Abrangência e Soluções */}
            <section className="py-32">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Abrangencia */}
                        <div>
                            <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">02 / Abrangência Institucional</span>
                            <h2 className="font-playfair text-4xl mb-6">Onde a metodologia se aplica?</h2>
                            <p className="text-white/70 font-light mb-12">A MATC atua tanto na implantação inicial quanto na reorganização administrativa de estruturas já existentes.</p>
                            
                            <div className="space-y-6">
                                {abrangencia.map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="pl-6 border-l border-white/10 hover:border-primary transition-colors"
                                    >
                                        <h4 className="font-playfair text-xl text-white mb-2">{item.title}</h4>
                                        <p className="text-sm font-light text-white/60">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Solucoes */}
                        <div>
                            <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Soluções Estruturais</span>
                            <h2 className="font-playfair text-4xl mb-6">Fragilidades Resolvidas</h2>
                            <p className="text-white/70 font-light mb-8">A MATC atua diretamente na resolução de fragilidades recorrentes da gestão pública cultural:</p>
                            
                            <ul className="space-y-4 mb-12">
                                {solucoes.map((sol, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-center gap-4 text-sm font-light text-white/80 bg-white/5 p-4 rounded-xl border border-white/5"
                                    >
                                        <span className="material-symbols-outlined text-accent-red text-lg">close</span>
                                        {sol}
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-primary text-charcoal p-8 rounded-3xl"
                            >
                                <h4 className="font-playfair text-xl mb-4 text-charcoal font-bold">Transformação Estrutural</h4>
                                <ul className="space-y-3">
                                    {['Normativa consolidada', 'Planejamento permanente', 'Capacidade técnica instalada', 'Financiamento estruturado', 'Continuidade administrativa'].map((item, id) => (
                                        <li key={id} className="flex items-center gap-3 text-sm font-bold">
                                            <span className="material-symbols-outlined text-charcoal">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Arquitetura Cultural */}
            <section className="py-32 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">03 / Arquitetura Cultural</span>
                        <h2 className="font-playfair text-4xl md:text-5xl mb-6">O Desenho Sistêmico</h2>
                        <p className="text-white/70 font-light">Não se trata apenas de organizar ações, mas de implantar um sistema funcional, integrado e permanente dentro da administração pública.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent-red/10 border border-accent-red/20 p-10 rounded-3xl"
                        >
                            <span className="text-accent-red uppercase tracking-widest text-[10px] font-bold block mb-4">Antes da MATC</span>
                            <ul className="space-y-6">
                                <li className="text-white/80 font-light flex gap-4"><span className="material-symbols-outlined text-accent-red mt-1">horizontal_rule</span> Ações fragmentadas e pontuais.</li>
                                <li className="text-white/80 font-light flex gap-4"><span className="material-symbols-outlined text-accent-red mt-1">horizontal_rule</span> Dependência de recursos externos ou eventuais.</li>
                                <li className="text-white/80 font-light flex gap-4"><span className="material-symbols-outlined text-accent-red mt-1">horizontal_rule</span> Descontinuidade administrativa a cada gestão.</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary/10 border border-primary/30 p-10 rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
                            <span className="text-primary uppercase tracking-widest text-[10px] font-bold block mb-4 relative z-10">Após a MATC</span>
                            <ul className="space-y-6 relative z-10">
                                <li className="text-white flex gap-4 font-medium"><span className="material-symbols-outlined text-primary mt-1">done_all</span> Sistema Municipal Organizado (Conselho, Fundo, Leis).</li>
                                <li className="text-white flex gap-4 font-medium"><span className="material-symbols-outlined text-primary mt-1">done_all</span> Planejamento e Mecanismos de Fomento Estruturados.</li>
                                <li className="text-white flex gap-4 font-medium"><span className="material-symbols-outlined text-primary mt-1">done_all</span> Previsibilidade de execução e autonomia progressiva.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Implantação */}
            <section className="py-32">
                <div className="container mx-auto px-8">
                    <div className="max-w-3xl mb-20">
                        <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">04 / Implantação e Continuidade</span>
                        <h2 className="font-playfair text-4xl md:text-5xl mb-6">Ciclo Permanente de Operação</h2>
                        <p className="text-white/70 font-light text-lg">A MATC não é apenas um modelo conceitual. Ela possui etapas claras de implantação técnica e mecanismos de continuidade.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-white/10"></div>

                        <div className="space-y-12">
                            {etapasImplantacao.map((etapa, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 lg:ml-8"
                                >
                                    {/* Timeline Node */}
                                    <div className="hidden lg:flex absolute -left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-charcoal border-2 border-primary items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/5 p-8 rounded-2xl w-full hover:border-primary/30 transition-colors">
                                        <div className="flex flex-col md:flex-row gap-4 md:items-center mb-4">
                                            <span className="text-primary font-playfair text-2xl">Etapa {etapa.num}</span>
                                            <h3 className="font-playfair text-2xl text-white">{etapa.title}</h3>
                                        </div>
                                        <p className="text-white/60 font-light leading-relaxed">{etapa.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
                        <div className="p-8 border border-white/10 rounded-3xl">
                            <h4 className="font-playfair text-2xl mb-4 text-white">Garantia de Continuidade</h4>
                            <p className="text-white/60 font-light mb-6">Assegurada por três fundamentos que permitem que a política cultural permaneça ativa além das mudanças de gestão:</p>
                            <ul className="space-y-2 text-sm text-primary font-bold tracking-wide uppercase">
                                <li>1. Estrutura normativa consolidada</li>
                                <li>2. Capacitação técnica interna</li>
                                <li>3. Monitoramento contínuo</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-charcoal">
                            <h4 className="font-playfair text-2xl mb-4 text-white">Conclusão Estratégica</h4>
                            <p className="text-white/70 font-light italic border-l-2 border-primary pl-4 py-2">"A MATC estabelece um ciclo permanente. O município deixa de depender de iniciativas pontuais e passa a operar cultura como política pública estruturada e integrada ao desenvolvimento territorial."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Encerramento Institucional */}
            <section className="py-40 bg-zinc-900 border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)] scale-150 blur-3xl"></div>
                
                <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl">
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white italic mb-12 leading-tight">
                        Cultura estruturada não é gasto. <br/> É <span className="text-primary normal-case">investimento permanente</span> no desenvolvimento do território.
                    </h2>
                    
                    <div className="space-y-6 text-lg md:text-xl text-white/70 font-light font-manrope mb-16 px-4">
                        <p>A cultura não pode depender exclusivamente de agendas eventuais ou ciclos políticos.</p>
                        <p>Mais do que acessar recursos, a MATC <strong>organiza o financiamento permanente.</strong></p>
                        <p>A MATC consolida a cultura como infraestrutura pública estratégica — capaz de atravessar gestões, integrar setores e gerar impacto contínuo.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a 
                            href="mailto:contato@territoriosculturais.com.br"
                            className="bg-primary text-charcoal font-bold px-12 py-5 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(17,212,212,0.3)]"
                        >
                            Solicitar Consultoria
                        </a>
                        <Link 
                            to="/"
                            className="border border-white/20 text-white font-bold px-12 py-5 rounded-full hover:bg-white/10 transition-all text-sm tracking-widest uppercase"
                        >
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MethodologyPage;
