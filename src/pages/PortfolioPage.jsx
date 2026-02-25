import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';

const portfolioData = [
    {
        icon: "movie",
        title: "Audiovisual",
        subtitle: "Produção, difusão e circulação de conteúdos audiovisuais com finalidade cultural, educativa e formativa.",
        description: "A Territórios Culturais desenvolve projetos audiovisuais voltados à difusão cultural, formação de público e valorização das identidades locais.",
        activities: [
            { title: "Produção de curtas, médias e longas-metragens", desc: "Desenvolvimento completo de obras audiovisuais, desde concepção, roteiro e planejamento até filmagem e finalização, voltadas à difusão cultural e educativa." },
            { title: "Filmes Promocionais de Destinos Turísticos", desc: "Criação de conteúdos visuais estratégicos para promoção de territórios." },
            { title: "Filmes Institucionais de Ações Governamentais", desc: "Registro técnico e promocional de políticas públicas." },
            { title: "Documentários e registros de memória local", desc: "Criação de conteúdos que documentam histórias, personagens e patrimônios do território, preservando a memória coletiva." },
            { title: "Cineclubes permanentes", desc: "Implantação e acompanhamento de sessões regulares de cinema com mediação cultural." },
            { title: "Mostras itinerantes de cinema", desc: "Circulação de programação audiovisual em diferentes espaços públicos e comunidades." },
            { title: "Exibições comentadas e mediação cultural", desc: "Sessões acompanhadas por educadores ou mediadores para contextualização das obras." },
            { title: "Programas de educação audiovisual em escolas", desc: "Integração do cinema como ferramenta pedagógica no ensino." },
            { title: "Formação técnica básica em linguagem audiovisual", desc: "Capacitação introdutória em roteiro, direção, filmagem e edição." },
            { title: "Digitalização e preservação de acervos", desc: "Conversão e organização de arquivos audiovisuais para conservação histórica." },
            { title: "Circulação de obras audiovisuais", desc: "Exibição de produções em territórios descentralizados com pouco acesso a equipamentos culturais." }
        ]
    },
    {
        icon: "festival",
        title: "Mostras e Festivais",
        subtitle: "Curadoria, organização e execução de eventos culturais estruturados e continuados.",
        description: "Planejamento e execução de eventos culturais estruturados com foco na continuidade e formação de público.",
        activities: [
            { title: "Criação de festivais temáticos", desc: "Concepção de eventos estruturados com identidade própria e objetivos culturais definidos." },
            { title: "Curadoria e seleção de obras", desc: "Processo técnico de escolha das produções que compõem a programação." },
            { title: "Organização de programação cultural", desc: "Planejamento das atividades artísticas, educativas e formativas." },
            { title: "Gestão de inscrições e regulamentos", desc: "Elaboração de editais e acompanhamento administrativo." },
            { title: "Produção executiva do evento", desc: "Coordenação operacional, logística e gestão de equipe." },
            { title: "Programação formativa paralela", desc: "Oficinas, debates e encontros integrados ao evento." },
            { title: "Ações de acessibilidade cultural", desc: "Recursos de inclusão para ampliar o acesso do público." },
            { title: "Mediação cultural com público", desc: "Acompanhamento pedagógico das atividades." },
            { title: "Relatórios de impacto e prestação de contas", desc: "Documentação técnica dos resultados e execução financeira." }
        ]
    },
    {
        icon: "school",
        title: "Formação Cultural",
        subtitle: "Capacitação artística e qualificação de agentes culturais em diferentes linguagens.",
        description: "Programas educativos voltados à qualificação de agentes culturais e ampliação do acesso à cultura.",
        activities: [
            { title: "Oficinas artísticas e técnicas", desc: "Atividades práticas em diversas linguagens culturais." },
            { title: "Capacitação de monitores culturais", desc: "Preparação de agentes locais para atuação contínua." },
            { title: "Formação de público escolar", desc: "Ações educativas voltadas ao acesso cultural de estudantes." },
            { title: "Cursos introdutórios em audiovisual", desc: "Ensino básico da linguagem cinematográfica." },
            { title: "Educação patrimonial", desc: "Reconhecimento e valorização da história local." },
            { title: "Formação para produtores culturais", desc: "Capacitação em gestão e organização cultural." },
            { title: "Programas continuados de aprendizagem", desc: "Ações permanentes de formação ao longo do ano." },
            { title: "Integração com rede pública", desc: "Projetos culturais articulados com escolas." }
        ]
    },
    {
        icon: "groups",
        title: "Fóruns e Encontros",
        subtitle: "Debates técnicos, capacitações e articulações para políticas culturais.",
        description: "Espaços de debate e construção coletiva de políticas culturais.",
        activities: [
            { title: "Conferências municipais de cultura", desc: "Organização de processos participativos para definição de políticas." },
            { title: "Fóruns setoriais", desc: "Reuniões temáticas com segmentos culturais específicos." },
            { title: "Seminários temáticos", desc: "Encontros de aprofundamento técnico." },
            { title: "Escutas públicas culturais", desc: "Coleta de demandas da comunidade." },
            { title: "Mediação comunitária", desc: "Articulação entre poder público e população." },
            { title: "Capacitação de conselhos culturais", desc: "Formação de conselheiros para atuação qualificada." },
            { title: "Planejamento participativo", desc: "Construção coletiva de diretrizes culturais." },
            { title: "Produção de relatórios técnicos", desc: "Sistematização dos resultados das consultas." }
        ]
    },
    {
        icon: "psychology",
        title: "Consultoria Cultural",
        subtitle: "Orientação técnica para organização administrativa e desenvolvimento de ações culturais.",
        description: "Assessoria técnica para estruturação administrativa e organizacional da cultura municipal.",
        activities: [
            { title: "Diagnóstico cultural do território", desc: "Levantamento técnico da realidade cultural local." },
            { title: "Estruturação do SMC", desc: "Implantação do Sistema Municipal de Cultura e mecanismos permanentes." },
            { title: "Implantação de conselhos e fundos", desc: "Criação de instrumentos de gestão cultural." },
            { title: "Regulamentações e normativas", desc: "Elaboração de leis e regulamentos culturais." },
            { title: "Planejamento anual de cultura", desc: "Organização das ações culturais do município." },
            { title: "Organização administrativa", desc: "Padronização de fluxos e procedimentos da secretaria." },
            { title: "Capacitação de equipes técnicas", desc: "Treinamento para gestão cultural pública." },
            { title: "Orientação para prestação de contas", desc: "Acompanhamento técnico da execução financeira." }
        ]
    },
    {
        icon: "description",
        title: "Projetos Culturais",
        subtitle: "Elaboração de propostas para editais, leis de incentivo e programas públicos.",
        description: "Desenvolvimento técnico de propostas para captação de recursos públicos e institucionais.",
        activities: [
            { title: "Escrita de projetos culturais", desc: "Desenvolvimento técnico completo da proposta." },
            { title: "Adequação a editais públicos", desc: "Enquadramento às exigências legais." },
            { title: "Projetos para leis de incentivo", desc: "Elaboração para captação de recursos." },
            { title: "Planejamento orçamentário", desc: "Definição de custos e viabilidade." },
            { title: "Cronogramas de execução", desc: "Organização temporal das atividades." },
            { title: "Contrapartida social", desc: "Planejamento do retorno público do projeto." },
            { title: "Relatórios técnicos", desc: "Documentação de execução." },
            { title: "Enquadramento técnico", desc: "Ajuste para aprovação em seleções públicas." }
        ]
    },
    {
        icon: "map",
        title: "Turismo Cultural",
        subtitle: "Planejamento e estruturação de destinos com base na identidade territorial.",
        description: "Integração entre cultura, memória e economia do território.",
        activities: [
            { title: "Inventário cultural e turístico", desc: "Mapeamento de bens culturais e atrativos." },
            { title: "Criação de roteiros culturais", desc: "Organização de percursos turísticos temáticos." },
            { title: "Sinalização interpretativa", desc: "Conteúdos informativos para visitantes." },
            { title: "Ativação de patrimônios", desc: "Uso cultural de espaços históricos." },
            { title: "Valorização territorial", desc: "Promoção da identidade local." },
            { title: "Capacitação de agentes locais", desc: "Formação de guias e mediadores." },
            { title: "Planejamento turístico municipal", desc: "Estratégia integrada de turismo." },
            { title: "Cultura e Gastronomia", desc: "Valorização de saberes e produtos regionais." }
        ]
    },
    {
        icon: "trending_up",
        title: "Economia Criativa",
        subtitle: "Fortalecimento das cadeias produtivas culturais e desenvolvimento econômico local.",
        description: "Fortalecimento das atividades culturais como vetor econômico local.",
        activities: [
            { title: "Mapeamento de cadeias produtivas", desc: "Identificação de setores econômicos culturais." },
            { title: "Empreendedorismo criativo", desc: "Capacitação para geração de renda." },
            { title: "Programas de geração de renda", desc: "Estruturação de oportunidades econômicas." },
            { title: "Feiras e circuitos criativos", desc: "Promover a comercialização cultural." },
            { title: "Produtos culturais locais", desc: "Criação de bens com identidade territorial." },
            { title: "Cultura e Comércio", desc: "Articulação entre cultura e mercado." },
            { title: "Estratégias territoriais", desc: "Planejamento econômico baseado na cultura." },
            { title: "Monitoramento de impacto", desc: "Avaliação dos resultados financeiros gerados." }
        ]
    }
];

const PortfolioPage = () => {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Wait for animations and content to settle
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main className="bg-charcoal min-h-screen text-white font-manrope selection:bg-primary selection:text-charcoal">
            <Helmet>
                <title>Portfólio de Atuação | Territórios Culturais</title>
                <meta name="description" content="Explore o portfólio completo de atuação da Territórios Culturais em audiovisual, festivais, consultoria e economia criativa." />
            </Helmet>

            <Navbar />

            {/* Header */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Nossos Eixos de Operação</span>
                        <h1 className="font-playfair text-6xl md:text-8xl mb-8 leading-tight">
                            Portfólio de <br />
                            <span className="italic text-primary font-light">Atuação Técnica</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-8">
                    <div className="grid gap-12">
                        {portfolioData.map((category, index) => (
                            <motion.div
                                key={index}
                                id={category.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden scroll-mt-32"
                            >
                                <div className="grid lg:grid-cols-12">
                                    {/* Left: Highlight */}
                                    <div className="lg:col-span-4 p-8 md:p-12 bg-primary/5 border-r border-white/5 flex flex-col justify-between">
                                        <div>
                                            <span className="material-symbols-outlined text-primary text-5xl mb-6">{category.icon}</span>
                                            <h2 className="font-playfair text-4xl mb-4">{category.title}</h2>
                                            <p className="text-white/60 text-sm font-light leading-relaxed mb-6 italic">{category.subtitle}</p>
                                        </div>
                                        <div className="bg-charcoal/40 p-6 rounded-2xl border border-white/5">
                                            <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">Contexto</h4>
                                            <p className="text-xs text-white/50 leading-relaxed">{category.description}</p>
                                        </div>
                                    </div>

                                    {/* Right: Activities */}
                                    <div className="lg:col-span-8 p-8 md:p-12">
                                        <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-8 flex items-center gap-4">
                                            <span className="w-8 h-[1px] bg-white/20"></span>
                                            Atividades Desenvolvidas
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                            {category.activities.map((activity, idx) => (
                                                <div key={idx} className="group transition-all">
                                                    <h4 className="text-white font-bold text-sm mb-2 flex items-start gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-primary mt-2"></span>
                                                        {activity.title}
                                                    </h4>
                                                    <p className="text-xs text-white/40 leading-relaxed font-light pl-3 border-l border-white/5 group-hover:border-primary/30 transition-colors">
                                                        {activity.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-primary text-charcoal text-center">
                <div className="container mx-auto px-8">
                    <h2 className="font-playfair text-4xl md:text-5xl mb-8">Precisa de uma atuação técnica de impacto?</h2>
                    <Link
                        to="/"
                        className="bg-charcoal text-white font-bold px-12 py-5 rounded-full hover:scale-105 transition-all text-sm tracking-widest uppercase inline-block"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PortfolioPage;
